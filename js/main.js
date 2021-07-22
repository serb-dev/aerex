let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");
calculation = document.getElementById("calculation").innerHTML;

document.getElementById("buttonCountPlus").onclick = function () {
  let countPlus = count.innerHTML;
  if (+countPlus <= 9) {
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus);
  }
};

document.getElementById("buttonCountMinus").onclick = function () {
  let countMinus = count.innerHTML;
  if (+countMinus >= 2) {
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus);
  }
};

calculations = (count) => {
  return +count * +calculation;
};

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

$(document).ready(function () {
  $(".more-slider").slick({
    
  });
});
