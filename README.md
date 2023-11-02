<!--
 * @Author: bestpvp bestpvp@sina.com
 * @Date: 2023-09-12 15:56:58
 * @LastEditors: bestpvp bestpvp@sina.com
 * @LastEditTime: 2023-10-13 23:06:07
 * @FilePath: /tm/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 插兜的广告与赞助

1. **捐助目录**

    - [2310捐助名单](./donate/2310.md)
    - [2309捐助名单](./donate/2309.md)

    ***

2. **购买腾讯云产品**  
各位通过我的链接购买/续费/升级服务器可以让我得到一些返利  
[![支持插兜](./img/腾讯云邀请.jpg "支持插兜")](https://curl.qcloud.com/sjfCjc8D)

    ***

3. **微信打赏赞助**  
通过微信打赏码，支持插兜的开发工作，补贴一下腾讯云的服务器成本，会定期公布赞助人员名单  
![支持插兜](./img/打赏码.jpg "支持插兜")

***

# 更新日志

## 卧龙 20231102_1601

> 核心代码基于 ``https://github.com/takagen99/Box`` 构建

1. 分别为64位，32位系统提供不同的安装包，同时减少体积
2. 由于稳定版流量受限，默认数据源切换至领先版

**下载地址:**

- [64位](release/tm_wolong_64位_V1.0.20231102_1601.apk)
- [32位](release/tm_wolong_32位_V1.0.20231102_1601.apk)

## 本地包 20231102-公测版

1. 融合源更新，饭、道、多、香、米，总共558条线路
2. 直播更新到1102
3. 已知问题，饭的jar不是jar结尾，未下载，使用饭融合的源时仍会请求，速度会慢

**下载地址:** [点我下载](release/20231102-公测版.zip)

<!-- ## 卧龙 20231023-2021

1. 增加启动时直接进直播的开关，默认关闭
2. 设置中安全DNS默认选中腾讯
3. 由于涉及关键字审核，将原来的时光TV黄哥哥改名为卧龙

**下载地址:** [tm_Box_black_20231023-2021.apk](release/tm_Box_black_20231023-2021.apk)

## 本地包 20231019-公测版

1. 本次融合 2 个数据源：
    - http://饭太硬.top/tv
    - https://pastebin.com/raw/5NHaxyGR
2. 增加自营的玩偶T4线路

**下载地址:** [20231019-公测版.zip](release/20231019-公测版.zip)

## 时光TV黄哥哥 20231018-0810

1. 解决gitcode闪退问题
2. 解决部分站点因加速代理异常导致的可能闪退的bug
3. 优化js加载规则
4. 默认数据源回滚，仍然使用稳定版

**下载地址:** [tm_Box_black_20231018-0810.apk](release/tm_Box_black_20231018-0810.apk)

## 时光TV白妹妹 20231017-1633

1. 修复错误
2. 增加部分站点一集分两段mp4的支持，代码里写死该站点的嗅探逻辑
3. 嗅探使用okhttp后，忘记添加缓存机制，加入缓存机制以提升嗅深速度
4. quickjs lib include arm64-v8a now, add it to build type.
5. 更新quickjs版本

**下载地址:** [tm_TVBoxOS_white_20231017-1633.apk](release/tm_TVBoxOS_white_20231017-1633.apk) -->

<!-- 

## 时光TV黄哥哥 20231013-2253

1. 更新quickJS以及配套工程
2. 嗅探使用okhttp后，忘记添加缓存机制，加入缓存机制以提升嗅深速度
3. 增加部分站点一集分两段mp4的支持，代码里写死该站点的嗅探逻辑
4. 时光机哥哥改名时光TV黄哥哥，以及图标，以及详情页的品牌外露

**下载地址:** [tm_Box_black_20231013-2253.apk](release/tm_Box_black_20231013-2253.apk "时光TV黄哥哥 20231013-2253")

## 时光TV白妹妹 20231013-2133

1. 时光机妹妹改名时光TV白妹妹，以及图标，以及详情页的品牌外露

**下载地址:** [tm_TVBoxOS_white_20231013-2133.apk](release/tm_TVBoxOS_white_20231013-2133.apk "时光TV白妹妹 20231013-2133")

## 本地包 20231013-公测版

1. 直播版本更新到最新的1013
2. 制作工具的重构以及问题修复

**下载地址:** [20231013-公测版.zip](release/20231013-公测版.zip "20231013-公测版")

## 本地包 20231009-公测版

1. 增加更多内置线路，使用自研的merge.js，体积更小
2. 制作工具的重构以及问题修复

**下载地址:** [20231009-公测版.zip](release/20231009-公测版.zip "20231009-公测版")

## 本地包 20230927-公测版

1. 支持相对路径的源融合，比如荷城茶秀
2. 制作工具的重构以及问题修复

**下载地址:** [20230927-公测版.zip](release/20230927-公测版.zip "20230927-公测版")

## 时光机哥哥20230925-2204

1. 修复由于xstream升级后导致xml源解析失败的问题，报错：ForbiddenClassException

**下载地址:** [tm_Box_black_20230925-2204.apk](release/tm_Box_black_20230925-2204.apk "时光机哥哥20230925-2204")

## 时光机哥哥20230922-0959

1. 回滚到 FF4, 更新 Exo

**下载地址:** [tm_Box_black_20230922-0959.apk](release/tm_Box_black_20230922-0959.apk "时光机哥哥20230922-0959") -->

> [历史下载地址](https://github.com/bestpvp/tm/tree/main/release)

# 关注公众号, 和爱好者一起共建

[![加入我们](./img/join.png "加入我们")](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzUyNzg2NTM5Ng==&action=getalbum&album_id=3013702748250390530#wechat_redirect)
