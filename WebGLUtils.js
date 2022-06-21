/*
 * @Author       : Abel Chan
 * @Date         : 2022-06-21 14:08:34
 * @LastEditors  : Abel Chan
 * @LastEditTime : 2022-06-21 14:25:04
 * @FilePath     : \WebGLUtils.js
 * @Description  : 
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return factory.call(root);
        });
    } else {
        root.webglUtils = factory.call(root);
    }
}(this, function () {
    'use strict';
    const topWindow = this;

    function isInIFrame(w) {
        w = w || topWindow;
        return w !== w.top;
    }


}))