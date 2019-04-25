import store from 'store';
import config from '../config/config';
import axios from './axios';

let util = {};
//util 数据对象，用于存取数据
let data = {};
let utilData = {
  sign: 0,
  interfaceSign: 0,
  ajaxCacheData: {} //接口的缓存数据
}
//util闭包数据存储
util.setData = function (name, obj) {
  if (name) {
    data[name] = obj;
    return true;
  }
  return false;
};
//util闭包数据获取
util.getData = function (name) {
  return data[name];
}
//util闭包数据删除
util.removeData = function (name) {
  if (name) {
    delete data[name];
    return true;
  }
  return false;
}
//util 删除所有的闭包数据
util.removeAllData = function () {
  data = {};
  return true;
}
//数据存储
util.storeSet = function (param, data) {
  store.set(param, data);
};
//数据获取
util.storeGet = function (param) {
  return store.get(param)
};
//数据删除
util.storeRemove = function (param) {
  store.remove(param)
};
//数据全清
util.storeClear = function () {
  store.clearAll();
};
//所有存储数据列表展示
util.storeList = function () {

};
//获取值的类型
util.getType = function (obj) {
  var typeStr = Object.prototype.toString.call(obj),
    typeArr = [];
  typeStr = typeStr.substring(1, typeStr.length - 1);
  typeArr = typeStr.split(" ");
  return typeArr[1];
};
//路由跳转时，获取用户是否登录,若未登录，则登录他
util.isLogin = function () {
  return new Promise((resolve, reject) => {
    if (util.getData("isLogin")) {
      resolve(util.getData("isLogin"))
    } else {
      Indicator.open();
      setTimeout(function () {
        util.setData("isLogin", true);
        Indicator.close();
        resolve(util.getData("isLogin"))
      }, 1500)
    }
  })


};
util.getUrl = function (url) {
  return config.port + url;
}

util.getCid = function (string) {
  utilData.sign++;
  if (string !== undefined) {
    return string + (new Date().getTime() + "" + utilData.sign);
  } else {
    return "tydic" + (new Date().getTime() + "" + utilData.sign);
  }
}
/**
 * @param  {[Function]}  延时调用函数
 * @param  {[Number]}  延迟多长时间
 * @return {[Number]}  至少多长时间触发一次
 */

util.throttle = function (fn, delay, mustRun) {
  var timer = null,
    previous = null;

  return function () {
    var now = +new Date(),
      context = this,
      args = arguments;
    if (!previous) previous = now;
    var remaining = now - previous;
    if (mustRun && remaining >= mustRun) {
      fn.apply(context, args);
      previous = now;
    } else {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);

    }
  }
}


//fn 为数组中的对象设置key值
/**
 * @param {Array} 需要添加key值的数组，
 * @param {string} 添加的key值名称，默认为indexId
 * */
util.setKey = function (arr, sign = "indexId") {
  if (util.getType(arr) == "Array") {
    arr.forEach(function (value) {
      if (typeof value == "object") {
        value[sign] = util.getCid();
      }
    })
  }
  return arr;
}


//深拷贝
util.deepExtend = function (child, parent) {
  child = child || {};
  parent = parent || {};
  for (var i in parent) {
    if (parent.hasOwnProperty(i)) {
//检测当前属性是否为对象
      if (parent[i] instanceof Object && !(parent[i] instanceof Date)) {
//如果当前属性为对象，还要检测它是否为数组
//这是因为数组的字面量表示和对象的字面量表示不同
//前者是[],而后者是{}
        child[i] = (Object.prototype.toString.call(parent[i]) === "[object Array]") ? [] : {};
//递归调用extend
        util.deepExtend(child[i], parent[i]);
      } else {
        child[i] = parent[i];
      }
    }
  }
  return child;
};

//把空变成无字样
util.changeNull = function (child, parent, name = "无") {
  child = child || {};
  parent = parent || {};
  for (var i in parent) {
    if (parent.hasOwnProperty(i)) {
//检测当前属性是否为对象
      if (parent[i] instanceof Object && !(parent[i] instanceof Date) && parent[i] != null) {
//如果当前属性为对象，还要检测它是否为数组
//这是因为数组的字面量表示和对象的字面量表示不同
//前者是[],而后者是{}
        child[i] = (Object.prototype.toString.call(parent[i]) === "[object Array]") ? [] : {};
//递归调用extend
        util.changeNull(child[i], parent[i], name);
      } else {
        if (parent[i]) {
          child[i] = parent[i];
        } else {
          child[i] = name;
        }
      }
    }
  }
  return child;
};

//去除空字符串
util.removeNull = function (child, parent, num) {
  child = child || {};
  parent = parent || {};
  num = num || "";
  for (var i in parent) {
    if (parent.hasOwnProperty(i)) {
//检测当前属性是否为对象
      if (parent[i] instanceof Object && !(parent[i] instanceof Date) && parent[i] != null) {
//如果当前属性为对象，还要检测它是否为数组
//这是因为数组的字面量表示和对象的字面量表示不同
//前者是[],而后者是{}
        child[i] = (Object.prototype.toString.call(parent[i]) === "[object Array]") ? [] : {};
//递归调用extend
        util.removeNull(child[i], parent[i]);
      } else {
        if (parent[i] && parent[i] != num) {
          child[i] = parent[i];
        }
      }
    }
  }
  return child;
};
//fn 获得url后面的参数
util.getAllQueryString = function () {
  if (!location.search) {
    return {};
  }
  var searchStr = location.search.substring(1),
    search = searchStr.split("&"),
    param = {};
  search.forEach(function (value) {
    var Arr = value.split("=");
    param[Arr[0]] = Arr[1];
  });
  return param;
};
//fn 手机号格式化
/**
 * @param {string or number} 需格式化的手机号，
 * */
util.phoneFormat = function (phoneNum) {
  if (!phoneNum || phoneNum.length == 0) {
    return ""
  }
  var phoneNew = "";
  let phone = phoneNum + "";
  let symbol = " ";
  phone = phone.trim();
  phoneNew = phone.slice(0, 3) + symbol + phone.slice(3, 7) + symbol + phone.slice(7, 11);
  return phoneNew;
};
/**
 * @param {string or number} 需加密的手机号，
 * @param {string} 加密符号
 * */
util.phoneEncryption = function (phoneNum, replaceSymbol = "*") {
  if (!phoneNum || phoneNum.length == 0) {
    return ""
  }
  var phoneNew = "";
  let phone = phoneNum + "";
  let replace = replaceSymbol + replaceSymbol + replaceSymbol + replaceSymbol;
  phoneNew = phone.slice(0, 3) + phone.slice(3, 7).replace(/^[0-9]{4}$/, replace) + phone.slice(7, 11);
  return phoneNew;
};
/**
 * @param {string or number} 需加密并格式化的手机号，
 * @param {string} 加密符号
 * */
util.phoneFormatEncryption = function (phoneNum, replaceSymbol = "*") {
  if (!phoneNum || phoneNum.length == 0) {
    return ""
  }
  var phoneNew = "";
  let phone = phoneNum + "";
  let symbol = " ";
  let replace = replaceSymbol + replaceSymbol + replaceSymbol + replaceSymbol;
  phoneNew = phone.slice(0, 3) + symbol + phone.slice(3, 7).replace(/^[0-9]{4}$/, replace) + symbol + phone.slice(7, 11);
  return phoneNew;
};
//fn 字符串替换
util.replaceStr = function (str = "", type, replaceStr, replaceWithStr) {
  str = str || "";
  str = str.replace(/</g, "&").replace(/>/g, "&");
  switch (type) {
    //根据传入的值直接替换
    case 1:
      return str.replace(new RegExp(replaceStr, 'g'), replaceWithStr);
    //给某一段文字添加颜色
    case 2:
      let newStr = str;
      newStr = str.replace(/[/][#][a-fA-F0-9]{6}/g, "</span>").replace(/([#][a-fA-F0-9]{6})/g, "<span style='color: " + '$1' + "'>");
      return newStr;
    default:
      return str;
  }
};
/**
 * @param {string} util缓存的数据名称，
 * @param {string} 缓存不存在时，请求的url名
 * @param {object} 请求参数
 * @param {boolean} 是否强制请求后台数据并将数据写入缓存
 * */
util.getCacheOrAjaxData = function (cacheName, url, params, flag) {

  return new Promise(function (resolve, reject) {
    if (utilData["ajaxCacheData"][cacheName] && (!flag)) {
      resolve(utilData["ajaxCacheData"][cacheName])
    } else {
      axios.post(url, params || {}, {showLoading: false}).then(function (returnData) {
        if (flag) {
          utilData["ajaxCacheData"][cacheName] = returnData;
        } else {
          if (!utilData["ajaxCacheData"][cacheName]) {
            utilData["ajaxCacheData"][cacheName] = returnData;
          }
        }
        resolve(utilData["ajaxCacheData"][cacheName]);
      }).catch(function (error) {
        reject(error)
      })
    }
  })
};

//格式化时间
util.formatDate = function (time) {
  var date = new Date(time);
  var year = date.getFullYear(),
    month = date.getMonth() + 1,//月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  var newTime = year + '-' +
    (month < 10 ? '0' + month : month) + '-' +
    (day < 10 ? '0' + day : day) + ' ' +
    (hour < 10 ? '0' + hour : hour) + ':' +
    (min < 10 ? '0' + min : min) + ':' +
    (sec < 10 ? '0' + sec : sec);
  console.log(typeof month);
  return newTime;
};

//判断是哪个活动，跳转哪个详情
util.getDetailsUrl = function (type) {
  let path;
  switch (type) {
    case "01":
      //充值送
      path = "rechargeDetails";
      break;
    case "02":
      //满减送
      path = "fullDetails";
      break;
    case "03":
      //抢红包
      path = "randomDetails";
      break;
    case "04":
      //外链活动
      path = "outerChainDetails";
      break;
    // 号码黑名单详情
    case"05":
      path = "blackMenuDetails";
      break;
    // IP黑名单详情
    case"06":
      path = "ipBlackMenuDetails";
      break;
    case"07":
      // 余额满送
      path = "balanceSendDetail";
      break;
    case"08":
      //广告活动
    path = "adverCampaignsDetails";
    break;
    default:
      path = "/";
      break;
  }
  return path;
};
//判断是哪个活动，跳转哪个编辑
util.getCopiesUrl = function (type) {
  let path;
  switch (type) {
    case "01":
      //充值送
      path = "addRedPacket";
      break;
    case "02":
      //满减送
      path = "addConsume";
      break;
    case "03":
      //抢红包
      path = "randomRedPacket";
      break;
    case "04":
      //外链活动
      path = "addOuterChain";
      break;
    case"07":
      // 余额满送
      path = "balanceSendTemplate";
      break;
    default:
      path = "/";
      break;
  }
  return path;
};
//判断是哪个活动，跳转哪个编辑
util.getEditUrl = function (type) {
  let path;
  switch (type) {
    case "01":
      //充值送
      path = "addRedPacket";
      break;
    case "02":
      //满减送
      path = "addConsume";
      break;
    case "03":
      //抢红包
      path = "randomRedPacket";
      break;
    case "04":
      //抢红包
      path = "addOuterChain";
      break;
    case"05":
      // 号码黑名单编辑
      path = "blackMenuEdit";
      break;
    case"06":
      // IP黑名单编辑
      path = "ipBlackMenuEdit";
      break;
    case"07":
      // 余额满送
      path = "balanceSend";
      break;
    case"08":
     //广告活动
      path = "adverCampaignsEdit";
      break;
    default:
      path = "/";
      break;
  }
  return path;
};

export default util;
