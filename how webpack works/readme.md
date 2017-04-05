# how webpack works

>打包后js文件内容_分析_

主要的结构是一个匿名的立即执行函数
````
(function(modules){})([function(){},function(){}]);
````
这个匿名函数的参数，是一个数组，在这个case中只包含main.js代码。
````
[
(function(module, exports) {
    console.log('main');
})
]
````
在匿名函数中，只有2个参数 installedModules \__webpack_require__

installedModules是用于缓存的

\__webpack_require__是一个函数，且有多个属性（在此场景中，没什么用）,\__webpack_require__如下：
````
function __webpack_require__(moduleId) {
    // Check if module is in cache
    if(installedModules[moduleId])
        return installedModules[moduleId].exports;

    // Create a new module (and put it into the cache) 
    var module = installedModules[moduleId] = {
           i: moduleId,
           l: false,
           exports: {}
    };

    // Execute the module function
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    // Flag the module as loaded
    module.l = true;

    // Return the exports of the module
    return module.exports;
}
````
如下用于检查installedModules缓存中是否有moduleId的模块，如果有,就执行

    if(installedModules[moduleId])
        return installedModules[moduleId].exports;

如果没有就创建一个module

    var module = installedModules[moduleId] = {
           i: moduleId,
           l: false,
           exports: {}
    };

执行module

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

