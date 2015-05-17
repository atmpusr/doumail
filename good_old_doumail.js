// ==UserScript==
// @name        doumail
// @namespace   ***
// @description 替换私信为豆邮
// @include     *.douban.com/*
// @version     0.1
// @grant       none
// ==/UserScript==

// 页面标题
document.title = document.title.replace('私信','我的豆邮');

// 导航
var var_nav = $('#top-nav-doumail-link')[0];
var_nav.innerHTML = var_nav.innerHTML.replace('私信','豆邮');

// 删除提示条，替换标题
$(".pop").remove()
var var_header =$('#content h1')[0];
var_header.innerHTML = var_header.innerHTML.replace('私信','我的豆邮')

// 剩余内容
var var_list = $("a")
for(var i = 0;i < var_list.length; i++) {
  var_list[i].innerHTML = var_list[i].innerHTML.replace('私信', '豆邮');
}
