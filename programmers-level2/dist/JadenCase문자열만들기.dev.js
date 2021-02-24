"use strict";

function solution(s) {
  var list = s.toLowerCase().split(" ");
  var result = '';
  result = list.map(function (str) {
    return str === "" ? "" : str.replace(str[0], str[0].toUpperCase());
  }).join(" ");
  return result;
}