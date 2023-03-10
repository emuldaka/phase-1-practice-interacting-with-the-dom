let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let counter = document.getElementById("counter");
let timerId = null;

minus.addEventListener("click", function () {
  const countNum = parseInt(counter.innerText);
  counter.innerText = countNum - 1;
});

plus.addEventListener("click", function () {
  const countNum = parseInt(counter.innerText);
  counter.innerText = countNum + 1;
});

function timer() {
  return setInterval(function () {
    const countNum = parseInt(counter.innerText);
    counter.innerText = countNum + 1;
  }, 1000);
}

commentForm = document.getElementsByTagName("form")[0];

commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const comment = this.children[0].value;
  const d = document.querySelector(".comments"),
    f = document.createElement("p");
  (f.innerText = comment), d.appendChild(f);
});

heart = document.getElementById("heart");

const likesList = document.querySelector(".likes");

heart.addEventListener("click", function () {
  const count = parseInt(counter.textContent);
  let likeItem = likesList.querySelector(`[data-num="${count}"]`);

  if (likeItem) {
    const likesCount = parseInt(likeItem.children[0].textContent);
    likeItem.innerHTML = `${count} has been liked <span>${
      likesCount + 1
    }</span> times`;
  } else {
    likeItem = document.createElement("li");
    likeItem.setAttribute("data-num", count);
    likeItem.innerHTML = `${count} has been liked <span>1</span> time`;
    likesList.appendChild(likeItem);
  }
});

const pauseBtn = document.getElementById("pause");

timerId = timer();

pauseBtn.addEventListener("click", function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    console.log("if");
    this.innerText = "resume";
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
  } else {
    timerId = timer();
    console.log("else", timerId);
    this.innerText = "pause";
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
  }
});
