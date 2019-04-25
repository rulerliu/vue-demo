import axios from 'axios';
import config from'../config/config';
import { Spin ,Message} from 'iview';
let spinSign = false;
axios.defaults.method = 'post';
axios.defaults.timeout = 50000;
 //axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
/* axios.defaults.transformRequest = [function (data, headers) {
  // By default, axios serializes JavaScript objects to JSON. To send data in the application/x-www-form-urlencoded format instead, you can use the following options.
   return qs.stringify(data);
  return data
 }];*/
axios.defaults.validateStatus = function (status) {
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
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(!spinSign && config.showLoading !== false){
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
    spinSign = true;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  if(spinSign && response.config.showLoading !== false){
    Spin.hide();
    spinSign = false;
  }
  if(response.status == '204'){
    location.href = response.headers.url + location.href;
    return false;
  }
  if(new RegExp(/^[0]*$/g).test(response.data.respCode)){
    return response.data;
  }else{
    //进行提示弹框
    Message.error(response.data.respDesc || "网络错误，请刷新重进");
    return Promise.reject({
      respDesc:response.data.respDesc,
      respCode:response.data.aop_code || response.data.respCode
    });
  }
}, function (error) {
  if(spinSign){
    Spin.hide();
    spinSign = false;
  }
  if(Object.prototype.toString.call(error) == "[object Error]"){
    Message.error("网络异常");
  }
  return Promise.reject(error);
});
export default axios;
