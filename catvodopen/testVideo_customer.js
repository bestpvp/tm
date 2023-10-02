/*
 * @Author: bestpvp bestpvp@sina.com
 * @Date: 2023-08-24 15:14:26
 * @LastEditors: bestpvp bestpvp@sina.com
 * @LastEditTime: 2023-09-28 22:02:56
 * @FilePath: /CatVodOpen/open/testVideo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { __jsEvalReturn } from './kkys_open_customer.js';


var spider = __jsEvalReturn();

async function test() {
    var spType = null;
    var spVid = null;
    spType = '2';
    // spVid = '95873';

    // 测试搜索
    var search = JSON.parse(await spider.search('奥特曼'));
    console.log(search);

    // 测试分类
    await spider.init({ skey: 'siteKey', ext: '' });
    var classes = JSON.parse(await spider.home(true));
    console.log(JSON.stringify(classes));
    console.log(classes);

    // 测试首页列表
    var homeVod = JSON.parse(await spider.homeVod());
    console.log(homeVod);
    console.log(JSON.stringify(homeVod));

    // 测试分类列表
    if (classes.class && classes.class.length > 0) {
        var page = JSON.parse(await spider.category(spType || classes.class[1].type_id, 0, undefined, {}));
        console.log(JSON.stringify(page));

        // 测试详情
        if (page.list && page.list.length > 0) {
            for (const k in page.list) {
                if (k >= 2) break;
                var detail = JSON.parse(await spider.detail(spVid || page.list[k].vod_id));
                console.log(JSON.stringify(detail));

                // 测试播放
                if (detail.list && detail.list.length > 0) {
                    var pFlag = detail.list[0].vod_play_from.split('$$$');
                    var pUrls = detail.list[0].vod_play_url.split('$$$');
                    if (pFlag.length > 0 && pUrls.length > 0) {
                        for (const i in pFlag) {
                            var flag = pFlag[i];
                            var urls = pUrls[i].split('#');
                            if (urls.length > 0) {
                                var url = urls[0].split('$')[1];
                                console.log(flag + " | " + url);
                                var playUrl = await spider.play(flag, url, []);
                                console.log('playURL: ' + playUrl);
                            }
                        }
                    }
                }
                if (spVid) break;
            }
        }
    }

}

export { test };
