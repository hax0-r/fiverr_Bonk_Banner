const startUpText = document.getElementById("startUpText");
const startUpPrice = document.getElementById("startUpPrice");
const startUpText2 = document.getElementById("startUpText2");
const startUpPrice2 = document.getElementById("startUpPrice2");
const startUpPrice3 = document.getElementById("startUpPrice3");
const startUpText3 = document.getElementById("startUpText3");

let isPremiumPlan = false;

btnChangePrice.addEventListener('click', () => {
    if (isPremiumPlan) {
        startUpText.innerText = "Per month (Tax included)";
        startUpPrice.innerText = "$219.99";
        startUpText2.innerText = "Per month (Tax included)";
        startUpPrice2.innerText = "$1,199.99";
        startUpText3.innerText = "Per month (Tax included)";
        startUpPrice3.innerText = "$459.99";
    } else {
        startUpText.innerText = "$154.16 Per month (Tax included)";
        startUpPrice.innerText = "$1,849.99";
        startUpText2.innerText = "$719.99 Per month (Tax included)";
        startUpPrice2.innerText = "$8,639.99";
        startUpText3.innerText = "$322.49 Per month (Tax included)";
        startUpPrice3.innerText = "$3,869.99";
    }
    isPremiumPlan = !isPremiumPlan;
});
