const birthdayBox = document.querySelector("#birthday-box");
const luckyBox = document.querySelector("#lucky-box");
const button = document.querySelector("#btn")
const luckyPara = document.querySelector("#lucky-para")


function userData(sum, luckyBox) {
    if (sum % luckyBox===0) {
        luckyPara.innerText = "Your Birthdate Is Lucky😊";
    }else {
        luckyPara.innerText = "Your Birthdate Is Unlucky😥";
    }
}

function checkBirthdayLucky(){
    const dob = birthdayBox.value;
    const sum = calculateValue(dob);
    userData(sum, luckyBox.value);
}


function calculateValue(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0 
    for (let i=0; i<dob.length; i++) {
        sum = sum + Number(dob.charAt(i))
    }
    return sum;
}


button.addEventListener("click", checkBirthdayLucky);