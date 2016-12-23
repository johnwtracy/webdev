"use strict";
var i = 0;
var o = -1;
var correct = 0;
var q2  = "Ulyses S. Grant was a union general";
var a2 = ["True", "False"];
var q3  = "Roughly how many soldiers died in the Civil War?";
var a3 = ["100,000", "1,100,00", "600,000"];

function buttonAction() {
  o = -1;
  if (i >= 3){
    return;
  }
  i += 1;
  var pro = document.getElementById("pro");
  var ans = document.getElementById("ans");
  nextQuestion(pro, ans);
}

function rad() {
  if (o == i)
    return;
  o = i;
  var pro = document.getElementById("pro");
  var rads = document.getElementsByName("q");
  var label = document.createElement("label");
  var val;
  for (var n = 0; n < rads.length; n++) {
    if (rads[n].checked)
      val = rads[n].value;
  }
  if (val == "1") {
    correct += 1;
    label.textContent = "Correct!";
  }
  else
    label.textContent = "Incorrect";
  pro.appendChild(document.createElement("br"));
  pro.appendChild(document.createElement("br"));
  pro.appendChild(label);
}

function nextQuestion(pro, ans) {
  removeChildren(ans);
  removeChildren(pro);
  var label = document.createElement("label");
  switch (i) {
    case 1:
      label.textContent = q2;
      break;
    case 2:
      label.textContent = q3;
      break;
    case 3:
      document.body.removeChild(ans);
      document.getElementById("next").textContent = "Finish";
      label.textContent = "Results: " + correct + " out of " + 3 + " questions correct";      
      pro.style.cssFloat = "none";
      pro.style.textAlign = "center";
      break;
  }
  pro.appendChild(label);
  createForm(ans);
}

function removeChildren(ans) {
  while (ans.firstChild)
    ans.removeChild(ans.firstChild);
}

function createForm(ans) {
  var a = [];
  switch (i) {
    case 1:
      a = a2;
      break;
    case 2:
      a = a3;
      break;
  }
  for (var n = 0; n < a.length; n++) {
    if (i == 1 && n == 0)
      makeRadio(ans, 1, a[n]);
    else if (i == 2 && n == 2)
      makeRadio(ans, 1, a[n]);
    else
      makeRadio(ans, 0, a[n]);
  }
}

function makeRadio(ans, n, str)
{
  var r = document.createElement('input');
  var tex = document.createTextNode(str);
  var label = document.createElement('label');
  var br = document.createElement('br');
  r.type = "radio";
  r.name = "q";
  r.value = n;
  r.onclick = function() {
    rad();
  }
  label.appendChild(r);
  label.appendChild(tex);
  ans.appendChild(label);
  ans.appendChild(br);
}





