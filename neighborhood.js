
const resBtn = document.querySelector('#res-btn');
const resMsg = document.querySelector('#res-msg');

const resArr = ["Taste of India", "Haru Ramen", "Chris' Cafe"];

function resBtnClick() {
    let rand = Math.floor(Math.random() * resArr.length);
    resMsg.textContent = `Maybe you should try ${resArr[rand]}`
}

resBtn.addEventListener("click", resBtnClick)