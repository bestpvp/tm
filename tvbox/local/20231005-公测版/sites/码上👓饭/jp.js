/*
 * @Author: bestpvp bestpvp@sina.com
 * @Date: 2023-10-05 16:37:17
 * @LastEditors: bestpvp bestpvp@sina.com
 * @LastEditTime: 2023-10-05 17:17:40
 * @FilePath: /lintech/docs/static/tvbox/local/20231005-公测版/sites/码上👓饭/jp.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var rule = {
    title: '荐片',
    host: 'http://api2.rinhome.com',
    // homeUrl:'https://yjpapipxblwdohpakljwg.hxhzs.com/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',//网站的首页链接,用于分类获取和推荐获取
    homeUrl: '/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',//网站的首页链接,用于分类获取和推荐获取
    // url:'/api/crumb/list?area=0&category_id=fyclass&page=fypage&type=0&limit=24&fyfilter',
    url: '/api/crumb/list?area=0&page=fypage&type=0&limit=24&fyfilter',
    class_name: '码上放生公众号免费提供&电影&电视剧&动漫&综艺',     // 筛选 /api/term/ad_fenlei?limit=10&page=1
    class_url: '0&1&2&3&4',
    detailUrl: '/api/node/detail?channel=wandoujia&token=&id=fyid',//二级详情拼接链接(json格式用)
    searchUrl: '/api/video/search?key=**&page=fypage',
    searchable: 2,
    quickSearch: 0,
    filterable: 1,
    filter: {
        "0": [{ "key": "year", "name": "年代", "value": [{ "n": "全部", "v": "0" }, { "n": "2023", "v": "153" }, { "n": "2022", "v": "101" }, { "n": "2021", "v": "118" }, { "n": "2020", "v": "16" }, { "n": "2019", "v": "7" }, { "n": "2018", "v": "2" }, { "n": "2017", "v": "3" }, { "n": "2016", "v": "22" }] }, { "key": "sort", "name": "排序", "value": [{ "n": "热门", "v": "hot" }, { "n": "评分", "v": "rating" }, { "n": "更新", "v": "update" }] }],
        "1": [{ "key": "cateId", "name": "分类", "value": [{ "n": "全部", "v": "1" }, { "n": "首推", "v": "5" }, { "n": "动作", "v": "6" }, { "n": "喜剧", "v": "7" }, { "n": "战争", "v": "8" }, { "n": "恐怖", "v": "9" }, { "n": "剧情", "v": "10" }, { "n": "爱情", "v": "11" }, { "n": "科幻", "v": "12" }, { "n": "动画", "v": "13" }] }, { "key": "year", "name": "年代", "value": [{ "n": "全部", "v": "0" }, { "n": "2023", "v": "153" }, { "n": "2022", "v": "101" }, { "n": "2021", "v": "118" }, { "n": "2020", "v": "16" }, { "n": "2019", "v": "7" }, { "n": "2018", "v": "2" }, { "n": "2017", "v": "3" }, { "n": "2016", "v": "22" }] }, { "key": "sort", "name": "排序", "value": [{ "n": "热门", "v": "hot" }, { "n": "评分", "v": "rating" }, { "n": "更新", "v": "update" }] }],
        "2": [{ "key": "cateId", "name": "分类", "value": [{ "n": "全部", "v": "2" }, { "n": "首推", "v": "14" }, { "n": "国产", "v": "15" }, { "n": "港台", "v": "16" }, { "n": "日韩", "v": "17" }, { "n": "海外", "v": "18" }] }, { "key": "year", "name": "年代", "value": [{ "n": "全部", "v": "0" }, { "n": "2023", "v": "153" }, { "n": "2022", "v": "101" }, { "n": "2021", "v": "118" }, { "n": "2020", "v": "16" }, { "n": "2019", "v": "7" }, { "n": "2018", "v": "2" }, { "n": "2017", "v": "3" }, { "n": "2016", "v": "22" }] }, { "key": "sort", "name": "排序", "value": [{ "n": "热门", "v": "hot" }, { "n": "评分", "v": "rating" }, { "n": "更新", "v": "update" }] }],
        "3": [{ "key": "cateId", "name": "分类", "value": [{ "n": "全部", "v": "3" }, { "n": "首推", "v": "19" }, { "n": "海外", "v": "20" }, { "n": "日本", "v": "21" }, { "n": "国产", "v": "22" }] }, { "key": "year", "name": "年代", "value": [{ "n": "全部", "v": "0" }, { "n": "2023", "v": "153" }, { "n": "2022", "v": "101" }, { "n": "2021", "v": "118" }, { "n": "2020", "v": "16" }, { "n": "2019", "v": "7" }, { "n": "2018", "v": "2" }, { "n": "2017", "v": "3" }, { "n": "2016", "v": "22" }] }, { "key": "sort", "name": "排序", "value": [{ "n": "热门", "v": "hot" }, { "n": "评分", "v": "rating" }, { "n": "更新", "v": "update" }] }],
        "4": [{ "key": "cateId", "name": "分类", "value": [{ "n": "全部", "v": "4" }, { "n": "首推", "v": "23" }, { "n": "国产", "v": "24" }, { "n": "海外", "v": "25" }, { "n": "港台", "v": "26" }] }, { "key": "year", "name": "年代", "value": [{ "n": "全部", "v": "0" }, { "n": "2023", "v": "153" }, { "n": "2022", "v": "101" }, { "n": "2021", "v": "118" }, { "n": "2020", "v": "16" }, { "n": "2019", "v": "7" }, { "n": "2018", "v": "2" }, { "n": "2017", "v": "3" }, { "n": "2016", "v": "22" }] }, { "key": "sort", "name": "排序", "value": [{ "n": "热门", "v": "hot" }, { "n": "评分", "v": "rating" }, { "n": "更新", "v": "update" }] }]
    },
    // filter_url:'sort={{fl.sort or "hot"}}&year={{fl.year or "0"}}',
    filter_url: 'sort={{fl.sort or "update"}}&year={{fl.year or "0"}}&category_id={{fl.cateId}}',
    filter_def: {
        0: { cateId: '0' },
        1: { cateId: '1' },
        2: { cateId: '2' },
        3: { cateId: '3' },
        4: { cateId: '4' }
    },
    headers: {
        'User-Agent': 'jianpian-android/350',
        'JPAUTH': 'y261ow7kF2dtzlxh1GS9EB8nbTxNmaK/QQIAjctlKiEv'
    },
    timeout: 5000,
    limit: 8,
    play_parse: true,
    play_json: [{
        re: '*',
        json: {
            parse: 0,
            jx: 0
        }
    }],
    lazy: '',
    // double:true,
    图片来源: '@Referer=www.jianpianapp.com@User-Agent=jianpian-version353',
    // 推荐:'json:data;room;*;cover;*;*',
    推荐: 'json:.video;*;*;*;*',
    一级: 'json:data;title;path;playlist.title;id',
    二级: {
        // title:'data.title',
        title: 'data.title;data.types[0].name',
        // desc:';data.description;data.id',
        desc: 'data.score;data.year.title;data.area.title;data.actors[0].name;data.directors[0].name',
        img: 'data.thumbnail',
        // content:'data.thumbnail',
        content: 'data.description',
        is_json: 1,
        tabs: `js:
            TABS = [];
            if (html.data.have_ftp_ur == 1) {
                TABS.push("关注【码上放生】公众号: 边下边播超清版")
            }
            if (html.data.have_m3u8_ur == 1) {
                TABS.push("关注【码上放生】公众号: 在线点播普清版")
            }
        `,
        lists: `js:
            log(TABS);
            LISTS = [];
            TABS.forEach(function(tab) {
                if (/边下边播/.test(tab)) {
                    let ftp = html.data.new_ftp_list;
                    let d = ftp.map(function(it) {
                        return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
                    });
                    LISTS.push(d)
                } else if (/在线点播/.test(tab)) {
                    let m3u = html.data.new_m3u8_list;
                    let d = m3u.map(function(it) {
                        return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
                    });
                    LISTS.push(d)
                }
            });
        `,
    },
    搜索: 'json:data;*;thumbnail;mask;*',
}