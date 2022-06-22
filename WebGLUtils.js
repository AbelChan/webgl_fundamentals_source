/*
 * @Author       : Abel Chan
 * @Date         : 2022-06-21 14:08:34
 * @LastEditors: Abel Chan
 * @LastEditTime: 2022-06-22 08:08:04
 * @FilePath: \WebGLUtils.js
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


    function resizeCanvasToDisplaySize(canvas, multiplier) {
        multiplier = multiplier || 1;
        const width = canvas.clientWidth * multiplier | 0;
        const height = canvas.clientHeight * multiplier | 0;
        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            return true;
        }
        return false;
    }

    return {
        resizeCanvasToDisplaySize: resizeCanvasToDisplaySize,
    }
}))