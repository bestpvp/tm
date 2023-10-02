/*
 * @Author: bestpvp bestpvp@sina.com
 * @Date: 2023-07-23 15:34:04
 * @LastEditors: bestpvp bestpvp@sina.com
 * @LastEditTime: 2023-09-30 01:39:08
 * @FilePath: /CatVodOpen/open/lib/ali.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
(function (c, d) {
    const n = b,
        e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x148)) / 0x1 + -parseInt(n(0x140)) / 0x2 * (parseInt(n(0x145)) / 0x3) + parseInt(n(0x150)) / 0x4 * (parseInt(n(0x14c)) / 0x5) + -parseInt(n(0x147)) / 0x6 + -parseInt(n(0x13d)) / 0x7 + parseInt(n(0x13c)) / 0x8 + parseInt(n(0x13b)) / 0x9 * (parseInt(n(0x142)) / 0xa);
            if (f === d) break;
            else e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xaf4a3));
import {
    _
} from './cat.js';
import {
    log
} from './utils.js';
import {
    initSome,
    setToken,
    setShareId,
    getVod,
    playerContent,
    playerContentByFlag
} from './ali_api.js';

function a() {
    const r = ['126jHersJ', '8018976SyNpYU', '7198947GYbEkJ', 'wGsFx', 'isEmpty', '50HOYYaa', 'PIvCN', '1745270xSfZmS', 'match', 'split', '68196ySTEaL', 'trim', '3359892YLzwvG', '845051dhMcfo', 'ali\x20init:', 'MlDBF', 'xvRmD', '4405TqvVPk', 'stringify', 'HyWVX', 'ali\x20init\x20ext:', '1244NAvJeB', 'ewEMb'];
    a = function () {
        return r;
    };
    return a();
}

function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0x13a;
        let h = e[f];
        return h;
    }, b(c, d);
}
async function initAli(c) {
    const o = b,
        d = {
            'HyWVX': function (f, g) {
                return f(g);
            },
            'PIvCN': o(0x149),
            'ewEMb': function (f, g) {
                return f + g;
            },
            'xvRmD': o(0x14f)
        };
    let e = c['ext'];
    await d[o(0x14e)](log, d[o(0x141)] + typeof c), await initSome(), await d[o(0x14e)](setToken, e), await d[o(0x14e)](log, d[o(0x13a)](d[o(0x14b)], e));
}
async function detailContent(c) {
    try {
        const p = b,
            d = {
                'MlDBF': function (l, m) {
                    return l(m);
                }
            },
            e = /www.aliyundrive.com\/s\/([^\/]+)(\/folder\/([^\/]+))?/;
        let f = c[p(0x146)](),
            g = f[p(0x143)](e);
        if (_[p(0x13f)](g)) return '';
        let h = g[0x1],
            i = g['length'] == 0x3 ? g[0x3] : '';
        await d[p(0x14a)](setShareId, h);
        let j = await getVod(f, i),
            k = JSON[p(0x14d)]({
                'list': [j]
            });
        return k;
    }
    catch (e) {
        console.log('detail:' + e.message + ' line:' + e.lineNumber);
        return k;
    }
}
async function playContent(c, d, e) {
    const q = b,
        f = {
            'wGsFx': function (i, j) {
                return i == j;
            },
            'rAcPj': function (i, j, k) {
                return i(j, k);
            }
        };
    console.log(f)
    let g = d[q(0x144)]('+'),
        h = f[q(0x13e)](c, '原画') ? await playerContent(g) : await f['rAcPj'](playerContentByFlag, g, c);
    console.log(g, h)
    return h;
}
export {
    initAli,
    detailContent,
    playContent
};