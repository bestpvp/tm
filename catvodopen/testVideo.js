/*
 * @Author: bestpvp bestpvp@sina.com
 * @Date: 2023-08-24 15:14:26
 * @LastEditors: bestpvp bestpvp@sina.com
 * @LastEditTime: 2023-08-24 16:24:28
 * @FilePath: /CatVodOpen/open/testVideo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { __jsEvalReturn } from './kkys_open.js';

var spider = __jsEvalReturn();

async function test() {
    var spType = null;
    var spVid = null;
    spType = '2';
    // spVid = '95873';

    await spider.init({ skey: 'siteKey', ext: '' });
    var classes = JSON.parse(await spider.home(true));
    // console.log(JSON.stringify(classes));
    console.log(classes);

    var homeVod = JSON.parse(await spider.homeVod());
    console.log(homeVod);
    if (classes.class && classes.class.length > 0) {
        var page = JSON.parse(await spider.category(spType || classes.class[0].type_id, 0, undefined, {}));
        // console.log('====PAGE=====' + page);
        if (page.list && page.list.length > 0) {
            for (const k in page.list) {
                if (k >= 5) break;
                var detail = JSON.parse(await spider.detail(spVid || page.list[k].vod_id));
                // console.log(detail);
                if (detail.list && detail.list.length > 0) {
                    var pFlag = detail.list[0].vod_play_from.split('$$$');
                    var pUrls = detail.list[0].vod_play_url.split('$$$');
                    if (pFlag.length > 0 && pUrls.length > 0) {
                        for (const i in pFlag) {
                            var flag = pFlag[i];
                            var urls = pUrls[i].split('#');
                            if (urls.length > 0) {
                                var url = urls[0].split('$')[1];
                                console.log(flag, url);
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
    // var search = JSON.parse(await spider.search('奥特曼'));
    // console.log(search);

    // search = JSON.parse(await spider.search('喜欢'));
    // console.log(search);
}

export { test };
