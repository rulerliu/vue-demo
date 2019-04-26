let isTest = location.hostname == "redpacket.ohaotian.cn" || location.hostname == "localhost";
let config = {
  // port:"http://172.16.1.198:18081/",//于
  // port:"http://172.16.0.115:18089/",//愿
  // port:"http://172.16.1.90:8081/",//林
  // port:"http://172.16.0.11:8086/",//董涛

   // port: 'http://172.16.0.92:8083/', // 王可伟


  // port:"http://redpacket.ohaotian.cn/",
  // port:isTest ? "http://redpacket.ohaotian.cn/" : "/", //原来旧的
  // port:"http://192.168.252.2:8181/", //秀测试
  // port:"http://172.16.0.13:8084/", //肖测试
  // port:'http://redpacket.ohaotian.cn/',
  port: "http://172.16.0.70:8082/",//文强
  // 抢红包页面的publicEntity
  publicEntity:{
    mechanismCode:"9940",
    jobNumber:"007",
    channelCode:"CBDF4",
    requestTime:"20180517143354022",
    cityNo:"510",
    provinceNo:"51",
    areaNo:"5102"
  },
  //页面路由表(链接)
  routerList:{
    home:"app.html", //首页
    recharge:"recharge.html", //充值送
    rodRedPacket:"rodRedPacket.html" //抢红包
  },
  benefitType:{
    "00":{
      title:"减",
      color:"#3767e1"
    },
    "01":{
      title:"送",
      color:"#fc9106"
    },
    "02":{
      title:"特",
      color:"#fc5127"
    },
    "03":{
      title:"满",
      color:"#fc05bb"
    }
  },
  benefitGoodsComponentId:8888,
  cooperateActivitiesComponentId:7777,
  storeDetailComponentId:6666,
  touchSpotType:"01", //触点类型
  homeActivityComponentId:5555,// 首页活动位
  redPacketActivityComponentId:9999 //红包列表广告位
};

export default config;
