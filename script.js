//onclick of img, plus variable(this "")
const cocoImg = document.getElementById("coco-img")
let cocoPerClick = 1;
//let cocoPerSec = 1
let totalCoco = 48

let cocoPerClickDisplay = document.getElementById("coco-per-click-num")
let cocoPerSecDisplay = document.getElementById("coco-per-sec-num")
let totalCocoaDisplay = document.getElementById("total-cocoa-num")
let amountTilNextDisplay  = document.getElementById("amount-til-next-num")

let clickUpgradeCost = 50
//let autoUpgradeCost = 50

let clickUpgradeCostDisplay = document.getElementById("click-upgrade-cost")
//let autoUpgradeCostDisplay = document.getElementById("auto-upgrade-cost")

let clickUpgrade =  document.getElementById("cursor-upgrade")
//let autoUpgrade = document.getElementById("automatic-upgrade")



cocoImg.addEventListener('click', () => {
    totalCoco += cocoPerClick
    totalCocoaDisplay.innerHTML= totalCoco  


    if(totalCoco >= clickUpgradeCost){
        clickUpgrade.classList.remove("too-broke")
        clickUpgrade.addEventListener("click", function(e){
            totalCoco -= clickUpgradeCost
            totalCocoaDisplay.innerHTML = totalCoco
            cocoPerClick *=2
            cocoPerClickDisplay.innerHTML = cocoPerClick
        })
    }
    
    if(totalCoco < clickUpgradeCost){
        clickUpgrade.classList.add("too-broke")
        clickUpgrade.removeEventListener("click", function(e){})
    }

    if(totalCoco==100){
        cocoImg.setAttribute("src", "./images/CocoSeeds.jpg")
    }
});
