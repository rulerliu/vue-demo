let editData = function (index) {
  this.$store.commit("increment",{id:"4545",index:index})
}
let setTelAndToken = function () {
  let vm = this;
  let tel = "";
  let token = "";
  let query = "";
  if(vm.$route){
    query = vm.$route.query
  }else{
    query = vm.$util.getAllQueryString();
  }
  //手机号
  if(query.tel && Number(query.tel)){
    tel = query.tel;
    vm.$util.storeSet("userInfoTel",query.tel)
  }else{
    tel = vm.$util.storeGet("userInfoTel");
  }
  //token
  if(query.token){
    token = query.token;
    vm.$util.storeSet("userInfoToken",query.token)
  }else{
    token = vm.$util.storeGet("userInfoToken");
  }
  //from 参数
  if(query.from){
    vm.$util.storeSet("userFrom",query.from);
    vm.$util.setData("userFrom",query.from)
  }else{
    let userFrom = vm.$util.storeGet("userFrom");
    vm.$util.setData("userFrom",userFrom)

  }


  vm.$store.commit("setPhone", {tel: tel || ""});
  vm.$store.commit("setToken", {token: token || ""});
};


export  {
  editData,
  setTelAndToken
}
