// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
/*
let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  console.log("storage.sync.get")
  console.log(data)
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
console.log("changeColor:")
console.log(changeColor)
changeColor.onclick = function(element) {
  console.log("element")
  console.log(element)
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};
*/
chrome.storage.sync.get('color', function(data) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + data.color + '";'});
  });
});