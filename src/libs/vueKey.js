var vueKey = (function(){
	var a=0;
	//遍历数组，为数组中的对象增加key属性
	var addKey = function(array){
		for (var key in array){
			if(!array.hasOwnProperty(key)){continue};
			if (array[key] instanceof Object){
				array[key].key = a++;
				addKey(array[key]);
			} else if(array[key] instanceof Array){
				addKey(array[key]);
			}
		}
	};
	//获取独一无二的key
	var getKey = function(){
		return a++
	}
	return {
		addKey: addKey,
		getKey: getKey
	};
})();
export default vueKey;