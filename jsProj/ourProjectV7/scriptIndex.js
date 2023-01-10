let disc = document.querySelector(".disc");
let r = 0;
function na() {
  document.querySelector(".markDiscribe h2").innerHTML =
    document.querySelector(".df").value;
}

function nb() {
  document.querySelector(".dMark").innerHTML =
    document.querySelector(".pf").value;
}

function imgB() {
    let file = document.querySelector('.file');
    let f = file.files[0];
    document.querySelector('.markDiscribe img').src = URL.createObjectURL(f);
}

function changeRate () {
  if (!document.querySelector('.raiting .count').classList.contains('countDisabled')){
    r++;
    document.querySelector('.redgrad').style = "width:" + (r / document.querySelector('.grad').clientWidth * 1000) + '% ;';
    document.querySelector('.raiting .count').innerHTML = r;
  }
}
