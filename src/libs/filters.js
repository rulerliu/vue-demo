import Vue from 'vue'
import util from './util'
/*手机号格式化参数无*/
Vue.filter('phoneFormat', function (phoneNum) {
  return util.phoneFormat(phoneNum);
});
/*手机号加密(phoneNum,[replaceSymbol])*/
Vue.filter('phoneEncryption', function (phoneNum,replaceSymbol="*") {
  return util.phoneEncryption(phoneNum,replaceSymbol)
});
/*手机号格式化并加密(phoneNum,[replaceSymbol])*/
Vue.filter('phoneFormatEncryption', function (phoneNum,replaceSymbol="*") {
  return util.phoneFormatEncryption(phoneNum,replaceSymbol)
});
