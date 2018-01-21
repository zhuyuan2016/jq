~~记得清空哦
// var $ = function() {
// 	return new $.prototype.init();
// };

// $.prototype.init = function() {
// 	this.name = 'fulu';
// 	this.age = 16;
// }


// $.prototype.init.prototype = $.prototype;
// $.fn = $.prototype;

// $.prototype.changeName = function(name) {
// 	this.name = name || '';
// 	return this;
// }

// $.fn.changeAge = function(age) {
// 	this.age = age || 0;
// 	return this;
// }

// var obj = $();
// obj.changeName('zhuyuan').changeAge(18)

// console.log(obj);

(function(window) {
	var $ = function() {
		return new $.fn.init();
	};

	$.fn = $.prototype;
	$.fn.init = function() {
		this.name = 'fulu';
		this.age = 16;
	};
	$.fn.init.prototype = $.fn;


	$.fn.say = function() {
		console.log("I'm say hello")
		return this;
	};
	$.fn.eat = function() {
		console.log("I'm eating")
		return this;
	};

	window.$ = $;
})(window)


$.fn.extend({
	dance: function() {
		console.log("I'm dancing")
		return this;
	}
})



$.prototype.init=function(){};

$().say();

// var test = new $();
// test.init();
// test.say();

$().say().eat().dance();


//闭包写法,为什么传入windows
//core_concat = core_deletedIds.concat,为什么要这样写
//给出传统写法示例
//原型链构成，为什么不需要new，链式写法
//尝试实现链式写法的jquery，尝试进行prototype方法扩展，引出拓展API该如何设计
//$.fn

//举出2～3个
//选取jQuery中典型的方法2～3个进行剖析 each、extend
//为什么不直接var obj2=obj1，引出对象引用关系

// js tips
// html中直接输入id名即可获取对象
