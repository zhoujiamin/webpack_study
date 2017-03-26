#how webpack works

>打包后js文件内容_分析_

主要的结构是一个匿名的立即执行函数
````
(function(module){})([function(){},function(){}]);
````
这个匿名函数的参数，是一个数组，在这个case中只包含main.js代码。
````
[
(function(module, exports) {
    console.log('main');
})
]
````
在匿名函数中，只有2个参数 installedModules __webpack_require__
