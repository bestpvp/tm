const _0x389bb7 = function () {
  let _0x1a7634 = true;
  return function (_0x5b6f22, _0x4aa7a8) {
    const _0x30095d = _0x1a7634 ? function () {
      if (_0x4aa7a8) {
        const _0x28af2f = _0x4aa7a8.apply(_0x5b6f22, arguments);

        _0x4aa7a8 = null;
        return _0x28af2f;
      }
    } : function () { };

    _0x1a7634 = false;
    return _0x30095d;
  };
}(),
  _0x3a65fa = _0x389bb7(this, function () {
    // _0x26fa0b.console = _0x26fa0b.console || {};

    const _0x1b43ef = function () {
      let _0x285433;

      try {
        _0x285433 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x5b0321) {
        _0x285433 = window;
      }

      return _0x285433;
    },
      _0x26fa0b = _0x1b43ef(),
      _0x1de15d = _0x26fa0b.console,
      _0x58df9d = ["log", "warn", "info", "error", "exception", "table", "trace"];

    for (let _0x460471 = 0; _0x460471 < _0x58df9d.length; _0x460471++) {
      const _0x21102a = _0x389bb7.constructor.prototype.bind(_0x389bb7),
        _0x3ab8f5 = _0x58df9d[_0x460471],
        _0x1c5cad = _0x1de15d[_0x3ab8f5] || _0x21102a;

      _0x21102a.__proto__ = _0x389bb7.bind(_0x389bb7);
      _0x21102a.toString = _0x1c5cad.toString.bind(_0x1c5cad);
      _0x1de15d[_0x3ab8f5] = _0x21102a;
    }
  });

_0x3a65fa();

import { _, jinja2 } from "./cat.js";
import * as _0x5f2ae7 from "./utils.js";

class User {
  constructor() {
    this.driveId = "";
    this.userId = "";
    this.tokenType = "";
    this.accessToken = "";
    this.refreshToken = "";
  }

  static objectFrom(_0x168463) {
    if (_.isEmpty(_0x168463)) {
      return new User();
    }

    let _0x69ec9c = JSON.parse(_0x168463),
      _0x4764ce = new User();

    _0x4764ce.driveId = _0x69ec9c.default_drive_id;
    _0x4764ce.userId = _0x69ec9c.user_id;
    _0x4764ce.tokenType = _0x69ec9c.token_type;
    _0x4764ce.accessToken = _0x69ec9c.access_token;
    _0x4764ce.refreshToken = _0x69ec9c.refresh_token;
    return _0x4764ce;
  }

  getDriveId() {
    return _.isEmpty(this.driveId) ? "" : this.driveId;
  }

  getUserId() {
    return _.isEmpty(this.userId) ? "" : this.userId;
  }

  getTokenType() {
    return _.isEmpty(this.tokenType) ? "" : this.tokenType;
  }

  getAccessToken() {
    return _.isEmpty(this.accessToken) ? "" : this.accessToken;
  }

  getRefreshToken() {
    return _.isEmpty(this.refreshToken) ? "" : this.refreshToken;
  }

  setRefreshToken(_0x47f5b0) {
    this.refreshToken = _0x47f5b0;
  }

  getAuthorization() {
    return this.getTokenType() + " " + this.getAccessToken();
  }

  isAuthed() {
    return this.getTokenType().length > 0 && this.getAccessToken().length > 0;
  }

  clean() {
    this.refreshToken = "";
    this.accessToken = "";
    return this;
  }

  async save() {
    await local.set("ali", "aliyundrive_user", this.toString());
    return this;
  }

  toString() {
    var _0x23e797 = {
      default_drive_id: this.getDriveId(),
      user_id: this.getUserId(),
      token_type: this.getTokenType(),
      access_token: this.getAccessToken(),
      refresh_token: this.getRefreshToken()
    };
    return JSON.stringify(_0x23e797);
  }

}

class OAuth {
  constructor() {
    this.tokenType = "";
    this.accessToken = "";
    this.refreshToken = "";
  }

  static objectFrom(_0x31d5ae) {
    // console.log("OAuthobjectFrom----- ");
    // console.log(_0x31d5ae);

    if (_.isEmpty(_0x31d5ae)) {
      return new OAuth();
    }

    let _0x55f3e2 = JSON.parse(_0x31d5ae),
      _0x4d660e = new OAuth();

    _0x4d660e.tokenType = _0x55f3e2.token_type;
    _0x4d660e.accessToken = _0x55f3e2.access_token;
    _0x4d660e.refreshToken = _0x55f3e2.refresh_token;
    return _0x4d660e;
  }

  getTokenType() {
    return _.isEmpty(this.tokenType) ? "" : this.tokenType;
  }

  getAccessToken() {
    return _.isEmpty(this.accessToken) ? "" : this.accessToken;
  }

  getRefreshToken() {
    return _.isEmpty(this.refreshToken) ? "" : this.refreshToken;
  }

  getAuthorization() {
    return this.getTokenType() + " " + this.getAccessToken();
  }

  clean() {
    this.refreshToken = "";
    this.accessToken = "";
    return this;
  }

  async save() {
    await local.set("ali", "aliyundrive_oauth", this.toString());
    return this;
  }

  toString() {
    var _0x118f3c = {
      token_type: this.getTokenType(),
      access_token: this.getAccessToken(),
      refresh_token: this.getRefreshToken()
    };
    return JSON.stringify(_0x118f3c);
  }

}

class Code {
  constructor() {
    this.redirectUri = "";
  }

  static objectFrom(_0x3b40c3) {
    if (_.isEmpty(_0x3b40c3)) {
      return new Code();
    }

    let _0x506567 = JSON.parse(_0x3b40c3),
      _0x3afc06 = new Code();

    _0x3afc06.redirectUri = _0x506567.redirectUri;
    return _0x3afc06;
  }

  getRedirectUri() {
    return _.isEmpty(this.redirectUri) ? "" : this.redirectUri;
  }

  getCode() {
    return this.getRedirectUri().split("code=")[1];
  }

}

class Item {
  constructor(_0x55ee5a) {
    this.items = [];
    this.nextMarker = "";
    this.fileId = _0x55ee5a;
    this.shareId = "";
    this.name = "";
    this.type = "";
    this.fileExtension = "";
    this.category = "";
    this.size = "";
    this.parent = "";
  }

  static objectFrom(_0x4174d7) {
    if (_.isEmpty(_0x4174d7)) {
      return new Item();
    }

    let _0x4ca777 = JSON.parse(_0x4174d7),
      _0x6ae688 = new Item();

    _0x6ae688.nextMarker = typeof _0x4ca777.next_marker == "undefined" ? "" : _0x4ca777.next_marker;
    _0x6ae688.fileId = typeof _0x4ca777.file_id == "undefined" ? "" : _0x4ca777.file_id;
    _0x6ae688.shareId = typeof _0x4ca777.share_id == "undefined" ? "" : _0x4ca777.share_id;
    _0x6ae688.name = typeof _0x4ca777.name == "undefined" ? "" : _0x4ca777.name;
    _0x6ae688.type = typeof _0x4ca777.type == "undefined" ? "" : _0x4ca777.type;
    _0x6ae688.fileExtension = typeof _0x4ca777.file_extension == "undefined" ? "" : _0x4ca777.file_extension;
    _0x6ae688.category = typeof _0x4ca777.category == "undefined" ? "" : _0x4ca777.category;
    _0x6ae688.size = typeof _0x4ca777.size == "undefined" ? "" : _0x4ca777.size;
    _0x6ae688.parent = typeof _0x4ca777.parent_file_id == "undefined" ? "" : _0x4ca777.parent_file_id;
    typeof _0x4ca777.items != "undefined" && Array.isArray(_0x4ca777.items) && !_.isEmpty(_0x4ca777.items) && _0x4ca777.items.forEach(function (_0x52899a) {
      let _0x2fc86b = Item.objectFrom(JSON.stringify(_0x52899a));

      _0x6ae688.items.push(_0x2fc86b);
    });
    return _0x6ae688;
  }

  getItems() {
    return _.isEmpty(this.items) ? [] : this.items;
  }

  getNextMarker() {
    return _.isEmpty(this.nextMarker) ? "" : this.nextMarker;
  }

  getFileId() {
    return _.isEmpty(this.fileId) ? "" : this.fileId;
  }

  getName() {
    return _.isEmpty(this.name) ? "" : this.name;
  }

  getType() {
    return _.isEmpty(this.type) ? "" : this.type;
  }

  getExt() {
    return _.isEmpty(this.fileExtension) ? "" : this.fileExtension;
  }

  getCategory() {
    return _.isEmpty(this.category) ? "" : this.category;
  }

  getSize() {
    return this.size == 0 ? "" : "[" + _0x5f2ae7.getSize(this.size) + "]";
  }

  getParent() {
    return _.isEmpty(this.parent) ? "" : "[" + this.parent + "]";
  }

  parentFunc(_0x2bc127) {
    this.parent = _0x2bc127;
    return this;
  }

  getDisplayName() {
    return this.getParent() + " " + this.getName() + " " + this.getSize();
  }

}

class Sub {
  constructor() {
    this.url = "";
    this.name = "";
    this.lang = "";
    this.format = "";
  }

  static create() {
    return new Sub();
  }

  setName(_0xddda04) {
    this.name = _0xddda04;
    return this;
  }

  setUrl(_0x28433b) {
    this.url = _0x28433b;
    return this;
  }

  setLang(_0x403e9a) {
    this.lang = _0x403e9a;
    return this;
  }

  setFormat(_0x510b5b) {
    this.format = _0x510b5b;
    return this;
  }

  setExt(_0x1c1623) {
    switch (_0x1c1623) {
      case "vtt":
        return this.setFormat("text/vtt");

      case "ass":
      case "ssa":
        return this.setFormat("text/x-ssa");

      default:
        return this.setFormat("application/x-subrip");
    }
  }

}

const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
  CLIENT_ID = "76917ccccd4441c39457a04f6084fb2f";
let quality = {},
  tempIds = [],
  refreshToken = "",
  shareToken = "",
  shareId = "",
  oauth = new OAuth(),
  user = new User(),
  driveInfo = {},
  tmpFolderName = "关注【码上放生】公众号",
  curTmpFolderFileId = "",
  log = _0x5f2ae7.log;

async function getUserCache() {
  var _0x1ec031 = await local.get("ali", "aliyundrive_user");

  return _0x1ec031;
}

async function getOAuthCache() {
  var _0x453a02 = await local.get("ali", "aliyundrive_oauth");

  return _0x453a02;
}

async function initSome() {
  tempIds = [];

  let _0x4ab022 = await getOAuthCache();

  await log("initSome----oauth-" + _0x4ab022);
  oauth = OAuth.objectFrom(_0x4ab022);
  // // console.debug("initSome----");
  // // console.debug(oauth);

  let _0x2286d7 = await getUserCache();

  // // console.debug(_0x2286d7);
  await log("initSome----user-" + _0x2286d7);
  user = User.objectFrom(_0x2286d7);
  quality = {
    "4K": "UHD",
    "2k": "QHD",
    "超清": "FHD",
    "高清": "HD",
    "标清": "SD",
    "流畅": "LD"
  };
}

function setRefreshToken(_0x3ca000) {
  refreshToken = _0x3ca000;
}

function getToken() {
  return user.getRefreshToken();
}

async function setShareId(_0x2d393c) {
  getOAuthCache().length == 0 && (await oauth.clean().save());
  getUserCache().length == 0 && (await user.clean().save());
  shareId = _0x2d393c;
  await refreshShareToken();
}

function getHeader() {
  var _0x1caa15 = {};
  _0x1caa15["User-Agent"] = UA;
  _0x1caa15.Referer = "https://www.aliyundrive.com/";
  return _0x1caa15;
}

function getHeaderAuth() {
  var _0x495cd9 = {};
  _0x495cd9["x-share-token"] = shareToken;
  _0x495cd9["X-Canary"] = "client=Android,app=adrive,version=v4.3.1";

  if (user.isAuthed()) {
    _0x495cd9.authorization = user.getAuthorization();
  }

  return _0x495cd9;
}

function getHeaderShare() {
  var _0x4da1d6 = getHeader();

  _0x4da1d6["x-share-token"] = shareToken;
  _0x4da1d6["X-Canary"] = "client=Android,app=adrive,version=v4.3.1";
  return _0x4da1d6;
}

function getHeaderOpen() {
  var _0x4cbfa4 = {};
  // // console.debug("getHeaderOpen---");
  // // console.debug(oauth);
  _0x4cbfa4.authorization = oauth.getAuthorization();
  return _0x4cbfa4;
}

async function alist(_0xd7cae8, _0x1c8f86) {
  let _0x27f623 = "https://api-cf.nn.ci/alist/ali_open/" + _0xd7cae8,
    _0xf5f2a = await postJson(_0x27f623, _0x1c8f86, getHeader()),
    _0xed5ef7 = _0xf5f2a.content;

  // // console.debug("alist---" + _0xd7cae8);
  // // console.debug(_0xed5ef7);

  if (await isManyRequest(_0xed5ef7)) {
    return false;
  }

  oauth = await OAuth.objectFrom(_0xed5ef7).save();
  return true;
}

async function getString(_0x3f0365) {
  let _0x35ad12 = await req(_0x3f0365, {});

  return _0x35ad12.content;
}

async function postJson(_0x53da97, _0x1cb102, _0x106c3d) {
  _0x106c3d["Content-Type"] = "application/json";

  let _0x46da1c = await req(_0x53da97, {
    headers: _0x106c3d,
    method: "post",
    data: _0x1cb102
  });

  return _0x46da1c;
}

async function post(_0x1a5b50, _0x1bd558) {
  _0x1a5b50 = _0x1a5b50.startsWith("https") ? _0x1a5b50 : "https://api.aliyundrive.com/" + _0x1a5b50;

  let _0x2cd70a = await postJson(_0x1a5b50, _0x1bd558, getHeader());

  return _0x2cd70a.content;
}

async function auth(_0x2e711e, _0x539d0d, _0x450932) {
  _0x2e711e = _0x2e711e.startsWith("https") ? _0x2e711e : "https://api.aliyundrive.com/" + _0x2e711e;

  let _0x47047a = await postJson(_0x2e711e, _0x539d0d, getHeaderAuth());

  await log("auth--res--" + _0x47047a.content);

  if (_0x450932 && (_0x47047a.code == 400 || _0x47047a.code == 401) && (await refreshAccessToken())) {
    await log("auth--res--400" + _0x47047a.content);
    return await auth(_0x2e711e, _0x539d0d, false);
  }

  if (_0x450932 && _0x47047a.code == 429) {
    await log("auth--res--429" + _0x47047a.content);
    return await auth(_0x2e711e, _0x539d0d, false);
  }

  return _0x47047a.content;
}

async function shareFunc(_0x33bb85, _0x20c4e6) {
  _0x33bb85 = _0x33bb85.startsWith("https") ? _0x33bb85 : "https://api.aliyundrive.com/" + _0x33bb85;

  let _0x18cc9a = getHeaderShare(),
    _0x590866 = await postJson(_0x33bb85, _0x20c4e6, _0x18cc9a);

  // // console.debug("----shareFunc----" + _0x33bb85);
  // // console.debug(_0x18cc9a);
  // // console.debug(_0x20c4e6);
  // // console.debug(_0x590866);
  return _0x590866.content;
}

async function oauthFunc(_0xc6dd7f, _0x136b31, _0x3c591c) {
  _0xc6dd7f = _0xc6dd7f.startsWith("https") ? _0xc6dd7f : "https://open.aliyundrive.com/adrive/v1.0/" + _0xc6dd7f;

  let _0x3f751a = await postJson(_0xc6dd7f, _0x136b31, getHeaderOpen());

  await log("oauthFunc--res-1-" + _0xc6dd7f);
  await log("oauthFunc--res-1-" + JSON.stringify(_0x3f751a));

  if (_0x3c591c && (_0x3f751a.code == 400 || _0x3f751a.code == 401) && (await refreshOpenToken())) {
    await log("oauthFunc--res-2-" + _0x3f751a.content);
    return await oauthFunc(_0xc6dd7f, _0x136b31, false);
  }

  return _0x3f751a.content;
}

async function isManyRequest(_0x566244) {
  if (!(_0x566244.indexOf("Too Many Requests") > -1)) {
    return false;
  }

  await oauth.clean().save();
  return true;
}

async function refreshShareToken() {
  try {
    let _0x1b9661 = {};
    _0x1b9661.share_id = shareId;
    _0x1b9661.share_pwd = "";

    let _0x57ec20 = await post("v2/share_link/get_share_token", _0x1b9661),
      _0x383e26 = JSON.parse(_0x57ec20);

    shareToken = _0x383e26.share_token;
  } catch (_0x458cf4) {
    // // console.debug(_0x458cf4);
  }
}

async function refreshAccessToken() {
  try {
    let _0x3eb65f = {},
      _0x1b9846 = user.getRefreshToken();

    _.isEmpty(_0x1b9846) && (_0x1b9846 = refreshToken);
    _0x1b9846.startsWith("http") && (_0x1b9846 = await getString(_0x1b9846), _0x1b9846 = _0x1b9846.trim());
    _0x3eb65f.refresh_token = _0x1b9846;
    _0x3eb65f.grant_type = "refresh_token";
    await log("refreshAccessToken---body--" + JSON.stringify(_0x3eb65f));

    let _0x6463 = await post("https://auth.aliyundrive.com/v2/account/token", _0x3eb65f);

    await log("refreshAccessToken---result--" + _0x6463);
    user = await User.objectFrom(_0x6463).save();
    await log("refreshAccessToken--user.driveId-" + user.getDriveId());

    if (_.isEmpty(user.getAccessToken())) {
      throw new Error(_0x6463);
    }

    return true;
  } catch (_0x1a6f2d) {
    await log("refreshAccessToken---error-" + _0x1a6f2d.message);
    // // console.debug(_0x1a6f2d);
    await user.clean().save();
    return true;
  }
}

async function oauthRequest() {
  try {
    let _0x2e1971 = {};
    _0x2e1971.authorize = 1;
    _0x2e1971.scope = "user:base,file:all:read,file:all:write";

    let _0x4ba4d3 = "https://open.aliyundrive.com/oauth/users/authorize?client_id=" + CLIENT_ID + "&redirect_uri=https://alist.nn.ci/tool/aliyundrive/callback&scope=user:base,file:all:read,file:all:write&state=",
      _0x23a922 = await auth(_0x4ba4d3, _0x2e1971, true);

    await log("oauthRequest---" + _0x23a922);
    // // console.debug("oauthRequest---");
    // // console.debug(_0x23a922);
    return await oauthRedirect(Code.objectFrom(_0x23a922).getCode());
  } catch (_0x20a5ac) {
    // // console.debug(_0x20a5ac);
    return false;
  }
}

async function oauthRedirect(_0x464a61) {
  try {
    let _0x4d9e11 = {};
    _0x4d9e11.code = _0x464a61;
    _0x4d9e11.grant_type = "authorization_code";
    return await alist("code", _0x4d9e11);
  } catch (_0x114c46) {
    // // console.debug(_0x114c46);
    await oauth.clean().save();
    return false;
  }
}

async function refreshOpenToken() {
  try {
    if (_.isEmpty(oauth.getRefreshToken())) {
      return await oauthRequest();
    }

    let _0x2a7205 = {};
    _0x2a7205.grant_type = "refresh_token";
    _0x2a7205.refresh_token = oauth.getRefreshToken();
    return await alist("token", _0x2a7205);
  } catch (_0x3d6bf0) {
    // console.debug(_0x3d6bf0);
    oauth.clean().save();
    return false;
  }
}

async function getVod(_0x44edf2, _0x3a1577) {
  const prefix = "关注【码上放生】公众号: ";
  let _0x159c79 = {};
  _0x159c79.share_id = shareId;

  let _0x6b815f = await post("adrive/v3/share_link/get_share_by_anonymous", _0x159c79),
    _0x187f1c = JSON.parse(_0x6b815f),
    _0x2a8932 = [],
    _0x185d3e = [],
    _0x3164ad = getParentFileId(_0x3a1577, _0x187f1c),
    _0x143f2b = new Item(_0x3164ad);

  await listFiles(_0x143f2b, _0x2a8932, _0x185d3e);
  let _0x51f891 = ["原画", "超清", "高清"],
    _0x3048b2 = [],
    _0x4529ae = [];

  for (var _0x2e60ee of _0x2a8932) _0x3048b2.push(_0x2e60ee.getDisplayName() + "$" + _0x2e60ee.getFileId() + findSubs(_0x2e60ee.getName(), _0x185d3e));

  for (var _0x30df75 = 0; _0x30df75 < _0x51f891.length; _0x30df75++) {
    _0x4529ae.push(_0x3048b2.join("#"));
  }

  let _0x1b2b50 = {
    vod_id: _0x44edf2,
    vod_content: prefix + _0x44edf2,
    vod_pic: _0x187f1c.avatar,
    vod_name: _0x187f1c.share_name,
    vod_play_url: _0x4529ae.join("$$$"),
    vod_play_from: _0x51f891.map(item => prefix + item).join("$$$"),
    type_name: "阿里云盘",
    vod_year: "",
    vod_area: "",
    vod_remarks: "",
    vod_actor: "",
    vod_director: ""
  };
  return _0x1b2b50;
}

async function listFiles(_0x44c747, _0x3fe101, _0x4662ce) {
  return await listFilesMarker(_0x44c747, _0x3fe101, _0x4662ce, "");
}

async function listFilesMarker(_0x12b384, _0x23dcbe, _0x2b629f, _0x17d2f3) {
  let _0x17a017 = {},
    _0x58f77e = [];
  _0x17a017.limit = 200;
  _0x17a017.share_id = shareId;
  _0x17a017.parent_file_id = _0x12b384.getFileId();
  _0x17a017.order_by = "name";
  _0x17a017.order_direction = "ASC";

  if (_0x17d2f3.length > 0) {
    _0x17a017.marker = _0x17d2f3;
  }

  let _0x1bcd30 = Item.objectFrom(await shareFunc("adrive/v2/file/list_by_share", _0x17a017));

  for (var _0x4b8202 of _0x1bcd30.getItems()) {
    if (_0x4b8202.getType() == "folder") {
      _0x58f77e.push(_0x4b8202);
    } else {
      if (_0x4b8202.getCategory() == "video" || _0x4b8202.getCategory() == "audio") {
        _0x23dcbe.push(_0x4b8202.parentFunc(_0x12b384.getName()));
      } else {
        _0x5f2ae7.isSub(_0x4b8202.getExt()) && _0x2b629f.push(_0x4b8202);
      }
    }
  }

  _0x1bcd30.getNextMarker().length > 0 && (await listFilesMarker(_0x12b384, _0x23dcbe, _0x2b629f, _0x1bcd30.getNextMarker()));

  for (var _0x41704d of _0x58f77e) {
    await listFiles(_0x41704d, _0x23dcbe, _0x2b629f);
  }
}

function getParentFileId(_0x51a121, _0x254338) {
  let _0xc0497 = _0x254338.file_infos;

  if (!_.isEmpty(_0x51a121)) {
    return _0x51a121;
  }

  if (_0xc0497.length == 0) {
    return "";
  }

  let _0x491fd2 = _0xc0497[0];

  if (_0x491fd2.type == "folder") {
    return _0x491fd2.file_id;
  }

  if (_0x491fd2.type == "file" && _0x491fd2.category == "video") {
    return "root";
  }

  return "";
}

function pair(_0x5d750b, _0x4de629, _0x271dd1) {
  for (var _0x3ff9a0 of _0x4de629) {
    var _0x1f881c = _0x5f2ae7.removeExt(_0x3ff9a0.getName()).toLowerCase();

    if (_0x5d750b.indexOf(_0x1f881c) > -1 || _0x1f881c.indexOf(_0x5d750b) > -1) {
      _0x271dd1.push(_0x3ff9a0);
    }
  }
}

function findSubs(_0x3ede19, _0x4a8833) {
  let _0x423c93 = [];
  pair(_0x5f2ae7.removeExt(_0x3ede19).toLowerCase(), _0x4a8833, _0x423c93);

  if (_0x423c93.length == 0) {
    for (var _0x4afa94 of _0x4a8833) {
      _0x423c93.push(_0x4afa94);
    }
  }

  let _0x4c164b = "";

  for (var _0x2f7dbb of _0x423c93) {
    _0x4c164b += "+" + _0x5f2ae7.removeExt(_0x2f7dbb.getName()) + "@@@" + _0x2f7dbb.getExt() + "@@@" + _0x2f7dbb.getFileId();
  }

  return _0x4c164b;
}

async function getSubs(_0x28986a) {
  let _0x2e50d2 = [];

  for (var _0x5a6e4f of _0x28986a) {
    if (!(_0x5a6e4f.indexOf("@@@") > -1)) {
      continue;
    }

    let _0x482f1f = _0x5a6e4f.split("@@@"),
      _0x50c7db = _0x482f1f[0],
      _0x2fa639 = _0x482f1f[1],
      _0x290983 = _0x482f1f[2],
      _0xb0a0ad = await getDownloadUrl(_0x290983);

    _0x2e50d2.push(Sub.create().setName(_0x50c7db).setExt(_0x2fa639).setUrl(_0xb0a0ad));
  }

  return _0x2e50d2;
}

async function getDriveInfo() {
  if (!_.isEmpty(driveInfo) && !_.isEmpty(driveInfo.default_drive_id)) {
    return driveInfo;
  }

  let _0x3740f3 = await oauthFunc("user/getDriveInfo", {}, true),
    _0x56fde5 = JSON.parse(_0x3740f3);

  driveInfo = {
    default_drive_id: _0x56fde5.default_drive_id,
    resource_drive_id: _0x56fde5.resource_drive_id,
    backup_drive_id: _0x56fde5.backup_drive_id
  };
  return driveInfo;
}

async function getDriveId() {
  let _0x419112 = await getDriveInfo();

  // console.debug("curDriveInfo---");
  // console.debug(_0x419112);

  if (!_.isEmpty(_0x419112.resource_drive_id)) {
    return _0x419112.resource_drive_id;
  }

  return _0x419112.default_drive_id;
}

async function getDownloadUrl(_0x5be8a4) {
  let _0xd2176d = await getDriveId();

  // console.debug("getDownloadUrl--fileId-");
  // console.debug(_0x5be8a4);
  tempIds.unshift(await copy(_0x5be8a4));
  let _0x604944 = {};
  _0x604944.file_id = tempIds[0];
  _0x604944.drive_id = _0xd2176d;

  let _0x4cffce = await oauthFunc("openFile/getDownloadUrl", _0x604944, true);

  // console.debug("getDownloadUrl---");
  // console.debug(_0x4cffce);
  await log("getDownloadUrl---" + _0x4cffce);
  return JSON.parse(_0x4cffce).url;
}

async function getVideoPreviewPlayInfo(_0xcfd481) {
  let _0x253de2 = await getDriveId();

  tempIds.unshift(await copy(_0xcfd481));
  let _0x53d289 = {};
  _0x53d289.file_id = tempIds[0];
  _0x53d289.drive_id = _0x253de2;
  _0x53d289.category = "live_transcoding";
  _0x53d289.url_expire_sec = "14400";

  let _0x42aaf3 = await oauthFunc("openFile/getVideoPreviewPlayInfo", _0x53d289, true);

  // console.debug("getVideoPreviewPlayInfo===");
  // console.debug(_0x42aaf3);
  return JSON.parse(_0x42aaf3).video_preview_play_info;
}

async function playerContent(_0x2b625d) {
  try {
    await deleteTmpFolderAndRecreate();
  } catch (_0x107a85) {
    // console.debug(_0x107a85);
  }

  try {
    let _0x1080b3 = await getDownloadUrl(_0x2b625d[0]),
      _0x407ee4 = await getSubs(_0x2b625d),
      _0x26b438 = [];

    for (var _0x2a989c of _0x407ee4) {
      _0x26b438.push(_0x2a989c.url);
    }

    return JSON.stringify({
      parse: 0,
      url: _0x1080b3,
      header: getHeader(),
      extra: {
        subt: _0x26b438
      },
      format: "application/octet-stream",
      subs: _0x407ee4
    });
  } catch (_0x2c79d4) {
    // console.debug(_0x2c79d4);
  }
}

async function playerContentByFlag(_0x1b7f96, _0x5eb4bf) {
  try {
    await deleteTmpFolderAndRecreate();
  } catch (_0x2b81f7) {
    // console.debug(_0x2b81f7);
  }

  try {
    let _0x2b98d2 = await getVideoPreviewPlayInfo(_0x1b7f96[0]),
      _0xf32d95 = getPreviewUrl(_0x2b98d2, _0x5eb4bf),
      _0xa8e494 = await getSubs(_0x1b7f96),
      _0x507d22 = getSubsByPlayInfo(_0x2b98d2);

    for (var _0x3b844d of _0x507d22) {
      _0xa8e494.push(_0x3b844d);
    }

    let _0x524736 = [];

    for (var _0x1b1a81 of _0xa8e494) {
      _0x524736.push(_0x1b1a81.url);
    }

    return JSON.stringify({
      parse: 0,
      url: _0xf32d95,
      header: getHeader(),
      extra: {
        subt: _0x524736
      },
      format: "application/x-mpegURL",
      subs: _0xa8e494
    });
  } catch (_0x4f810b) {
    // console.debug(_0x4f810b);
  }
}

function getPreviewUrl(_0x429883, _0x53b6ac) {
  if (!_0x429883.hasOwnProperty("live_transcoding_task_list")) {
    return "";
  }

  let _0x5bb088 = _0x429883.live_transcoding_task_list;

  for (var _0x15dcd8 = 0; _0x15dcd8 < _0x5bb088.length; ++_0x15dcd8) {
    let _0x8b3730 = _0x5bb088[_0x15dcd8];

    if (_0x8b3730.template_id == quality[_0x53b6ac]) {
      return _0x8b3730.url;
    }
  }

  return _0x5bb088[0].url;
}

function getSubsByPlayInfo(_0x4a91e6) {
  if (!_0x4a91e6.hasOwnProperty("live_transcoding_subtitle_task_list")) {
    return [];
  }

  let _0x5adb38 = _0x4a91e6.live_transcoding_subtitle_task_list,
    _0x2506c2 = [];

  for (var _0x59872f = 0; _0x59872f < _0x5adb38.length; ++_0x59872f) {
    let _0x5d089a = _0x5adb38[_0x59872f],
      _0x54730a = _0x5d089a.language,
      _0xddba3a = _0x5d089a.url;

    _0x2506c2.push(Sub.create().setUrl(_0xddba3a).setName(_0x54730a).setLang(_0x54730a).setExt("vtt"));
  }

  return _0x2506c2;
}

async function copy(_0x1cc37d) {
  await log("copy---user-" + user.toString());

  let _0x1d5900 = "{\"requests\":[{\"body\":{\"file_id\":\"{{data.fileId}}\",\"share_id\":\"{{data.shareId}}\",\"auto_rename\":true,\"to_parent_file_id\":\"{{data.tmpFolderFileId}}\",\"to_drive_id\":\"{{data.driveId}}\"},\"headers\":{\"Content-Type\":\"application/json\"},\"id\":\"0\",\"method\":\"POST\",\"url\":\"/file/copy\"}],\"resource\":\"file\"}",
    _0x3ced75 = await getDriveId(),
    _0x329511 = {
      fileId: _0x1cc37d,
      shareId: shareId,
      driveId: _0x3ced75,
      tmpFolderFileId: curTmpFolderFileId
    };

  _0x1d5900 = jinja2(_0x1d5900, {
    data: _0x329511
  });
  await log("copy---" + _0x1d5900);

  let _0x3f4a02 = await auth("adrive/v2/batch", JSON.parse(_0x1d5900), true);

  await log("copy---result" + _0x3f4a02);

  if (_0x3f4a02.indexOf("ForbiddenNoPermission.File") > -1) {
    return copy(_0x1cc37d);
  }

  return JSON.parse(_0x3f4a02).responses[0].body.file_id;
}

async function deleteTmpFolderAndRecreate() {
  let _0x10af5f = await tmpFolderExistsFunc();

  // console.debug("-----tmpFolderFileId-----");
  // console.debug(_0x10af5f);
  _0x10af5f && (await trashFile(_0x10af5f), await recyclebinClear());
  curTmpFolderFileId = await createTmpFolder();
}

async function trashFile(_0x328801) {
  let _0x46cabc = "{\"requests\":[{\"body\":{\"file_id\":\"{{data.fileId}}\",\"drive_id\":\"{{data.driveId}}\"},\"headers\":{\"Content-Type\":\"application/json\"},\"id\":\"0\",\"method\":\"POST\",\"url\":\"/recyclebin/trash\"}],\"resource\":\"file\"}",
    _0x57975f = await getDriveId(),
    _0x336d7 = {
      fileId: _0x328801,
      driveId: _0x57975f
    };

  _0x46cabc = jinja2(_0x46cabc, {
    data: _0x336d7
  });

  let _0x189d93 = await auth("v2/batch", JSON.parse(_0x46cabc), true);

  // console.debug("trashFile-----");
  // console.debug(_0x189d93);
  return true;
}

async function recyclebinClear() {
  let _0xca8e26 = await getDriveId(),
    _0x3ac975 = {
      drive_id: _0xca8e26
    },
    _0x128f24 = await auth("v2/recyclebin/clear", _0x3ac975, true);

  // console.debug("recyclebinClear-----");
  // console.debug(_0x128f24);
  return true;
}

async function createTmpFolder() {
  let _0x30869f = await tmpFolderExistsFunc();

  if (_0x30869f) {
    return true;
  }

  let _0x52b279 = await getDriveId(),
    _0x1f7c7e = {
      check_name_mode: "refuse",
      drive_id: _0x52b279,
      name: tmpFolderName,
      parent_file_id: "root",
      type: "folder"
    },
    _0xcde860 = await oauthFunc("openFile/create", _0x1f7c7e, true);

  // console.debug("-----createTmpFolder-----");
  // console.debug(_0xcde860);

  let _0x5a8c34 = JSON.parse(_0xcde860);

  if (_.isEmpty(_0x5a8c34.drive_id)) {
    return false;
  }

  return _0x5a8c34.file_id;
}

async function tmpFolderExistsFunc() {
  let _0x13ae17 = await getDriveId(),
    _0x461fbd = {
      drive_id: _0x13ae17,
      parent_file_id: "root",
      limit: 100,
      order_by: "updated_at",
      order_direction: "DESC"
    },
    _0x4f2a1e = await oauthFunc("openFile/list", _0x461fbd, true);

  // console.debug("------tmpFolderExists-------");
  // console.debug(_0x4f2a1e);

  let _0x5de3b1 = JSON.parse(_0x4f2a1e);

  if (_.isEmpty(_0x5de3b1.items)) {
    return false;
  }

  for (var _0x1fa9cf of _0x5de3b1.items) {
    if (_0x1fa9cf.name == tmpFolderName) {
      return _0x1fa9cf.file_id;
    }
  }

  return false;
}

async function setToken(_0x5d2c52) {
  user.setRefreshToken(_0x5d2c52);
  await refreshAccessToken();
  await refreshOpenToken();
}

export { initSome, setToken, setShareId, getVod, playerContent, playerContentByFlag };