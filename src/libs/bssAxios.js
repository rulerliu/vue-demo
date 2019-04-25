import axios from 'axios';
import qs from 'qs';
import { Spin ,Message} from 'iview';
import config from '../config/config';
let bssAxios = axios.create();
bssAxios.defaults.method = 'post';
bssAxios.defaults.timeout = 10000;
/*bssAxios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';*/
bssAxios.defaults.transformRequest = [function (data, headers) {
  // By default, axios serializes JavaScript objects to JSON. To send data in the application/x-www-form-urlencoded format instead, you can use the following options.
  let obj = JSON.parse(JSON.stringify(config.bssAxios || {}));
  let newData = {};
  let bodyAttributeName = data.bodyAttributeName || "default";
  delete data.bodyAttributeName;
  let str = JSON.stringify(data).replace(/("\w*":)/g, word => word.replace(/([A-Z])/g,"_$1").toUpperCase());
  obj.UNI_BSS_BODY[bodyAttributeName ] = JSON.parse(str);
  return JSON.stringify(obj);
}];

bssAxios.defaults.validateStatus = function (status) {
  //去除loading框
  switch (status + "") {
    case '404':
      break;
    case '500':
      break;
    case '401':
      break;
    case '200':
      break;
    default:
      break;
  }
  return status >= 200 && status < 300; // default
};
bssAxios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(config.showLoading !== false){
    Spin.show({
      render: (h) => {
        return h('div', [
          h('Icon', {
            style: {
              animation: 'ani-demo-spin 1s linear infinite'
            },
            props: {
              type: 'load-c',
              size: 18
            }
          })
        ])
      }
    });
  }
  config.headers["Content-Type"]='application/json; charset=utf-8';
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
bssAxios.interceptors.response.use(function (response) {
  if(response.config.showLoading !== false){
    Spin.hide();
  }
  response.data = transformReaponse(response.data);
  if(new RegExp(/^[0]*$/g).test(response.data.respCode)){
    return response.data;
  }else{
    //进行提示弹框
    Message.error(response.data.respDesc || "网络错误，请刷新重进");
    return Promise.reject({
      respDesc:response.data.respDesc,
      respCode:response.data.respCode
    });
  }
}, function (error) {
  Spin.hide();
  if(Object.prototype.toString.call(error) == "[object Error]"){
    Message.error("网络异常");
  }
  return Promise.reject(error);
});
var transformReaponse = function (data = {}) {
  let newData = {};
  newData.respCode = data.UNI_BSS_HEAD.RESP_CODE;
  newData.respDesc = data.UNI_BSS_HEAD.RESP_DESC;
  if(new RegExp(/^[0]*$/g).test(newData.respCode)){
    for(let i in data.UNI_BSS_BODY){
      newData = lowerCaser(data.UNI_BSS_BODY[i]);
    }
  }
  return newData;
};

var lowerCaser = function (obj) {
 let str = JSON.stringify(obj);
  str = str.replace(/("\w*":)/g, word => word.toLowerCase().replace(/(_\w)/g,w => w.replace("_","").toUpperCase()));
  return JSON.parse(str);
};



export default bssAxios;
