import axios from './axios';
import bssAxios from './bssAxios';
import util from './util';
import lodash from 'lodash';
import config from'../config/config';
let module = {
    util,
    axios,
    bssAxios
};

module.install = function (Vue) {
    Vue.prototype.$util = util;
    Vue.prototype.$axios = axios;
    Vue.prototype.$config = config;
    Vue.prototype.$bssAxios = bssAxios;
    Vue.prototype.$lodash = lodash;
}

export default module;
