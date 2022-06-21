/*
 * @Author       : Abel Chan
 * @Date         : 2022-06-21 13:09:20
 * @LastEditors  : Abel Chan
 * @LastEditTime : 2022-06-21 13:31:09
 * @FilePath     : \chapter1\chapter1.js
 * @Description  : 
 */
"use strict";

/** 创建 着色器 */
function createShader(gl, type, source) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }

    gl.deleteShader(shader);
}

/** 创建 着色程序 */
function createProgram(gl, vertexShader, fragmentShader) {
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    let success = gl.getProgramParmeter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }

    gl.deleteProgram(program);
}

function main() {
    var canvas = document.querySelector("#c");
    var gl = canvas.getContext("webgl");
    if (!gl) {
        return;
    }

    let vertexShaderSource = document.querySelector("#vertex-shader-2d").text;
    let fragmentShaderSource = document.querySelector("#fragment-shader-2d").text;

    let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    let program = createProgram(gl, vertexShader, fragmentShader);

    let positionAttributeLocation = gl.getAttribLocation(program, "a_position");

    let positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    let positions = [
        0, 0,
        0, 0.5,
        0.7, 0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);



}



