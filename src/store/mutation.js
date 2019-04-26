export default {

  increment (state,obj) {
    // 变更状态
    if(obj.index == 1){
      state.todos = [{id:"23",text:"第一条"}]
    }else{
      state.todos[obj.index]["id"]=obj.id;

    }
  },
  setPosition(state,obj) {
    let detail = obj.detail || {};
    if(obj.flag){
      state.position.flag=true;
      state.position.errorCode = "0000";
      state.position.lat =detail.location.lat;
      state.position.lng =detail.location.lng;
      state.position.address = detail.address;
      state.position.city = detail.addressComponents.city;
      state.position.province = detail.addressComponents.province;
      state.position.addressComponents = detail.addressComponents;
      state.position.detail = detail;
      state.position.msg = "请求成功";
      state.position.cnMsg = "请求成功";
    }else{
      state.position.flag=false;
      state.position.lat ="";
      state.position.lng = "";
      state.position.errorCode = obj.errorCode;
      state.position.msg = obj.msg;
      state.position.cnMsg = obj.cnMsg;
      state.position.address = "";
      state.position.city = "";
      state.position.province = "";
      state.position.addressComponents = {};
      state.position.detail = {};
    }


  },
  setIpPosition(state,obj) {
    if(obj.flag){
      state.IpPosition.flag=true;
      state.IpPosition.errorCode = "0000";
      state.IpPosition.lat =obj.lat;
      state.IpPosition.lng = obj.lng;
      state.IpPosition.name = obj.detail.name;
      state.IpPosition.level = obj.detail.level;
      state.IpPosition.msg = "请求成功";
      state.IpPosition.cnMsg = "请求成功";

    }else{
      state.IpPosition.flag=false;
      state.IpPosition.lat ="";
      state.IpPosition.lng = "";
      state.IpPosition.errorCode = obj.errorCode;
      state.IpPosition.msg = obj.msg;
      state.IpPosition.cnMsg = obj.cnMsg;
      state.IpPosition.name = "";
      state.IpPosition.level = "";

    }
  },
  setPhone(state,obj){
    let data = state.userInfo;
    data.tel = obj.tel;
  },
  setUserInfo(state,obj){
    let data = state.userInfo;
    data.name = obj.name;
    data.userId = obj.userId;
    data.level = obj.level;
    data.isLogin = true;
    data.icon = obj.icon;
  },
  setRedpacket(state,obj){
    let data = state.userInfo;
    data.redPacket = obj.redPacket;
  },
  setLogin(state,obj){
    let data = state.userInfo;
    data.isLogin = true;
  },
  setHandlePosition(state,city){
    if(typeof city == "object"){
      state.handleAddress.city=state.position.city || state.IpPosition.name;
      state.handleAddress.address = state.position.address || "";
      state.handleAddress.lat=state.position.lat || "";  //纬度
      state.handleAddress.lng =state.position.lng ||"";

    }else{
      state.handleAddress.city=city;
      state.handleAddress.address = "";
      state.handleAddress.lat="";  //纬度
      state.handleAddress.lng = "";

    }
  },

  setToken(state,obj){
    state.userInfo.token=obj.token;

  }
}
