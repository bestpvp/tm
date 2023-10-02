/*
 * @Author: bestpvp bestpvp@sina.com
 * @Date: 2023-08-24 15:14:26
 * @LastEditors: bestpvp bestpvp@sina.com
 * @LastEditTime: 2023-10-02 19:48:14
 * @FilePath: /CatVodOpen/open/testVideo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { __jsEvalReturn } from './wogg_customer.js';


var spider = __jsEvalReturn();

async function test() {
    let siteKey = 'wogg';
    let siteType = 0;
    var spVid = null;
    const refresh_token = "dbe2d9cf5411417aac0b54120af7f129"

    // 测试分类
    await spider.init({ skey: siteKey, stype: siteType, ext: refresh_token });
    var classes = JSON.parse(await spider.home(true));
    console.debug(JSON.stringify(classes));
    console.debug(classes);

    // 测试首页列表
    var homeVod = JSON.parse(await spider.homeVod())
    // console.debug(homeVod);
    console.debug(JSON.stringify(homeVod));

    // 测试分类列表
    var page = JSON.parse(await spider.category(1, 1, undefined, {}));
    console.debug(JSON.stringify(page));

    // 测试详情
    if (page.list && page.list.length > 0) {
        for (const k in page.list) {
            // console.debug(k)
            if (k >= 1) break;
            const spVid = page.list[k].vod_id
            console.debug("===", spVid)
            var detail = JSON.parse(await spider.detail(spVid || page.list[k].vod_id));
            // // var detail = JSON.parse(await spider.detail("/index.php/voddetail/81254.html"));
            console.debug(JSON.stringify(detail));

            // 测试播放
            var playUrl = await spider.play("原画", "https://www.aliyundrive.com/s/gNiCwiyzsiC", []);
            console.debug('playURL: ' + playUrl);

            if (detail.list && detail.list.length > 0) {
                var pFlag = detail.list[0].vod_play_from.split('$$$');
                var pUrls = detail.list[0].vod_play_url.split('$$$');
                if (pFlag.length > 0 && pUrls.length > 0) {
                    for (const i in pFlag) {
                        // console.debug(i)
                        var flag = pFlag[i];
                        var urls = pUrls[i].split('#');
                        // console.debug(flag, urls)
                        for (const j in urls) {
                            var name = urls[j].split('$')[0];
                            var url = urls[j].split('$')[1];
                            console.debug(flag + " | " + name + " | " + url);
                            var playUrl = await spider.play(flag, url, []);
                            console.debug('playURL: ' + playUrl);
                        }
                    }
                }
            }


        }
    }
}

export { test };
