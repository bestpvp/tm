#coding=utf-8
#!/usr/bin/python
import sys
sys.path.append('..') 
from base.spider import Spider
import json
import time
import base64
import re
from urllib import request, parse
import urllib
import urllib.request
import time

class Spider(Spider):  # 元类 默认的元类 type
	def getName(self):
		return "中央电视台"#可搜索
	def init(self,extend=""):
		print("============{0}============".format(extend))
		pass
	def isVideoFormat(self,url):
		pass
	def manualVideoCheck(self):
		pass
	def homeContent(self,filter):
		result = {}
		cateManual = {
			"电视剧": "电视剧",
			"动画片": "动画片",
			"纪录片": "纪录片",
			"特别节目": "特别节目",
            "栏目大全": "栏目大全"
		}
		classes = []
		for k in cateManual:
			classes.append({
				'type_name':k,
				'type_id':cateManual[k]
			})
		result['class'] = classes
		if(filter):
			result['filters'] = self.config['filter']
		return result
	def homeVideoContent(self):
		result = {
			'list':[]
		}
		return result
	def categoryContent(self,tid,pg,filter,extend):
		result = {}
		month = ""#月
		year = ""#年
		area=''#地区
		channel=''#频道
		datafl=''#类型
		letter=''#字母
		pagecount=24
		if tid=='动画片':
			id=urllib.parse.quote(tid)
			if 'datadq-area' in extend.keys():
				area=urllib.parse.quote(extend['datadq-area'])
			if 'dataszm-letter' in extend.keys():
				letter=extend['dataszm-letter']
			if 'datafl-sc' in extend.keys():
				datafl=urllib.parse.quote(extend['datafl-sc'])
			url='https://api.cntv.cn/list/getVideoAlbumList?channelid=CHAL1460955899450127&area={0}&sc={4}&fc={1}&letter={2}&p={3}&n=24&serviceId=tvcctv&topv=1&t=json'.format(area,id,letter,pg,datafl)
		elif tid=='纪录片':
			id=urllib.parse.quote(tid)
			if 'datapd-channel' in extend.keys():
				channel=urllib.parse.quote(extend['datapd-channel'])
			if 'datafl-sc' in extend.keys():
				datafl=urllib.parse.quote(extend['datafl-sc'])
			if 'datanf-year' in extend.keys():
				year=extend['datanf-year']
			if 'dataszm-letter' in extend.keys():
				letter=extend['dataszm-letter']
			url='https://api.cntv.cn/list/getVideoAlbumList?channelid=CHAL1460955924871139&fc={0}&channel={1}&sc={2}&year={3}&letter={4}&p={5}&n=24&serviceId=tvcctv&topv=1&t=json'.format(id,channel,datafl,year,letter,pg)
		elif tid=='电视剧':
			id=urllib.parse.quote(tid)
			if 'datafl-sc' in extend.keys():
				datafl=urllib.parse.quote(extend['datafl-sc'])
			if 'datanf-year' in extend.keys():
				year=extend['datanf-year']
			if 'dataszm-letter' in extend.keys():
				letter=extend['dataszm-letter']
			url='https://api.cntv.cn/list/getVideoAlbumList?channelid=CHAL1460955853485115&area={0}&sc={1}&fc={2}&year={3}&letter={4}&p={5}&n=24&serviceId=tvcctv&topv=1&t=json'.format(area,datafl,id,year,letter,pg)
		elif tid=='特别节目':
			id=urllib.parse.quote(tid)
			if 'datapd-channel' in extend.keys():
				channel=urllib.parse.quote(extend['datapd-channel'])
			if 'datafl-sc' in extend.keys():
				datafl=urllib.parse.quote(extend['datafl-sc'])
			if 'dataszm-letter' in extend.keys():
				letter=extend['dataszm-letter']
			url='https://api.cntv.cn/list/getVideoAlbumList?channelid=CHAL1460955953877151&channel={0}&sc={1}&fc={2}&bigday=&letter={3}&p={4}&n=24&serviceId=tvcctv&topv=1&t=json'.format(channel,datafl,id,letter,pg)
		elif tid=='栏目大全':
			cid=''#频道
			if 'cid' in extend.keys():
				cid=extend['cid']
			fc=''#分类
			if 'fc' in extend.keys():
				fc=extend['fc']
			fl=''#字母
			if 'fl' in extend.keys():
				fl=extend['fl']
			url = 'https://api.cntv.cn/lanmu/columnSearch?&fl={0}&fc={1}&cid={2}&p={3}&n=20&serviceId=tvcctv&t=json&cb=ko'.format(fl,fc,cid,pg)
			pagecount=20
		else:
			url = 'https://tv.cctv.com/epg/index.shtml'

		videos=[]
		htmlText =self.webReadFile(urlStr=url,header=self.header)
		if tid=='栏目大全':
			index=htmlText.rfind(');')
			if index>-1:
				htmlText=htmlText[3:index]
				videos =self.get_list1(html=htmlText,tid=tid)
		else:
			videos =self.get_list(html=htmlText,tid=tid)
		#print(videos)
		
		result['list'] = videos
		result['page'] = pg
		result['pagecount'] = 9999 if len(videos)>=pagecount else pg
		result['limit'] = 90
		result['total'] = 999999
		return result
	def detailContent(self,array):
		result={}
		aid = array[0].split('###')
		tid = aid[0]
		logo = aid[3]
		lastVideo = aid[2]
		title = aid[1]
		id= aid[4]
		
		vod_year= aid[5]
		actors= aid[6]
		brief= aid[7]
		fromId='CCTV'
		if tid=="栏目大全":
			lastUrl = 'https://api.cntv.cn/video/videoinfoByGuid?guid={0}&serviceId=tvcctv'.format(id)
			htmlTxt = self.webReadFile(urlStr=lastUrl,header=self.header)
			topicId=json.loads(htmlTxt)['ctid']
			Url = "https://api.cntv.cn/NewVideo/getVideoListByColumn?id={0}&d=&p=1&n=100&sort=desc&mode=0&serviceId=tvcctv&t=json".format(topicId)
			htmlTxt = self.webReadFile(urlStr=Url,header=self.header)
		else:
			Url='https://api.cntv.cn/NewVideo/getVideoListByAlbumIdNew?id={0}&serviceId=tvcctv&p=1&n=100&mode=0&pub=1'.format(id)
		jRoot = ''
		videoList = []
		try:
			if tid=="搜索":
				fromId='中央台'
				videoList=[title+"$"+lastVideo]
			else:
				htmlTxt=self.webReadFile(urlStr=Url,header=self.header)
				jRoot = json.loads(htmlTxt)
				data=jRoot['data']
				jsonList=data['list']
				videoList=self.get_EpisodesList(jsonList=jsonList)
				if len(videoList)<1:
					htmlTxt=self.webReadFile(urlStr=lastVideo,header=self.header)
					if tid=="电视剧" or tid=="纪录片":
						patternTxt=r"'title':\s*'(?P<title