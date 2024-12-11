//const
const cocoImg = document.getElementById("coco-img")
const clickUpgrade = document.getElementById("cursor-upgrade")
const autoUpgrade = document.getElementById("automatic-upgrade")
//variables
let totalCoco = 0;
let totalCocoDisplay = document.getElementById("total-cocoa-num")

let cocoPerClick = 1
let cocoPerClickDisplay = document.getElementById("coco-per-click-num")

let cocoPerSec = 1
let cocoPerSecDisplay = document.getElementById("coco-per-sec-num")

let clickUpgradeCost = 50;
let clickUpgradeCostDisplay = document.getElementById("click-upgrade-cost")

let autoUpgradeCost = 50;
let autoUpgradeCostDisplay = document.getElementById("auto-upgrade-cost")


//test log
console.log(totalCoco)

//autoomatic coco interval
setInterval(updateAutomatic, 1000);

function updateAutomatic(){
    totalCoco += cocoPerSec
    totalCocoDisplay.innerHTML = totalCoco;
    canUserIncreaseClick()
    canUserIncreaseSec()
}

//add coco on click
cocoImg.addEventListener("click", addToTotal);

function addToTotal(){
    totalCoco += cocoPerClick;
    totalCocoDisplay.innerHTML = totalCoco;
    console.log(totalCoco)
    canUserIncreaseClick()
    canUserIncreaseSec()

}

function canUserIncreaseClick(){
    if(totalCoco >= clickUpgradeCost){
        clickUpgrade.classList.remove("too-broke")
        clickUpgrade.addEventListener("click", clickUpgradePurchased)
    }
}

function canUserIncreaseSec(){
    if(totalCoco >= autoUpgradeCost){
        autoUpgrade.classList.remove("too-broke")
        autoUpgrade.addEventListener("click", autoUpgradePurchased)
    }
}


function clickUpgradePurchased(){
    totalCoco -= clickUpgradeCost
    totalCocoDisplay.innerHTML = totalCoco
    clickUpgradeCost += 42
    clickUpgradeCostDisplay.innerHTML = clickUpgradeCost
    cocoPerClick *=2
    cocoPerClickDisplay.innerHTML =cocoPerClick
    if(totalCoco < clickUpgradeCost){
        clickUpgrade.classList.add("too-broke")
        clickUpgrade.removeEventListener("click", clickUpgradePurchased)
        //makes sure user cant click other upgrade
        autoUpgrade.classList.add("too-broke")
        autoUpgrade.removeEventListener("click", autoUpgradePurchased)
    }
    
}

function autoUpgradePurchased(){
    totalCoco -= autoUpgradeCost
    totalCocoDisplay.innerHTML = totalCoco
    autoUpgradeCost += 42
    autoUpgradeCostDisplay.innerHTML = autoUpgradeCost
    cocoPerSec *= 2
    cocoPerSecDisplay.innerHTML = cocoPerSec
    if(totalCoco < autoUpgradeCost){
        autoUpgrade.classList.add("too-broke")
        autoUpgrade.removeEventListener("click", autoUpgradePurchased)
        //makes sure user cant click other upgrade
        clickUpgrade.classList.add("too-broke")
        clickUpgrade.removeEventListener("click", clickUpgradePurchased)
    }
    
}










//game over screen once you reach a 10 thousand coco or some
//yet to be implemented
