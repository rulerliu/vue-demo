import Vue from 'vue'
//弹窗组件
import {Actionsheet,Alert,AlertPlugin,Confirm,ConfirmPlugin,Loading,LoadingPlugin,Popup,Toast,ToastPlugin} from 'vux';
//表单组件
import {Group,Cell,Checker,Checklist,Radio,XButton,XInput} from 'vux'
//其他组件
import {Card,Qrcode,Tab,TabItem,Tabbar,TabbarItem,XHeader,Icon,Box,LoadMore} from 'vux'

//弹窗组件
Vue.component("actionsheet",Actionsheet);
Vue.use(AlertPlugin);
Vue.component("alert",Alert);
Vue.use(ConfirmPlugin);
Vue.component("confirm",Confirm);
Vue.use(ConfirmPlugin);
Vue.component("loading",Loading);
Vue.use(LoadingPlugin);
Vue.component("popup",Popup);
Vue.use(ToastPlugin);
Vue.component("toast",Toast);

//表单组件
Vue.component("Group",Group);
Vue.component("Cell",Cell);
Vue.component("Checker",Checker);
Vue.component("Checklist",Checklist);
Vue.component("Radio",Radio);
Vue.component("XButton",XButton);
Vue.component("XInput",XInput);
Vue.component("Popup",Popup);

//其他组件
Vue.component("Card",Card);
Vue.component("Qrcode",Qrcode);  //二维码
Vue.component("Tab",Tab);
Vue.component("TabItem",TabItem);
Vue.component("Tabbar",Tabbar);
Vue.component("TabbarItem",TabbarItem);
Vue.component("XHeader",XHeader);
Vue.component("Icon",Icon);
Vue.component("Box",Box);
Vue.component("LoadMore",LoadMore);

export default {

}

