// variables
let clicks = 0;
let cpc = 1;
let cps = 0;
let cpcCost = 20;
let cpsCost = 50;

// click main
document.getElementById("click").onclick = function score() {
  clicks += cpc;
  document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
};

//cps main
document.getElementById("cpsUpgrade").onclick = function cpsUpgrade() {
  if (clicks >= cpsCost) {
    clicks -= cpsCost;
    document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
    cpsCost += Math.ceil(cpsCost / 1.75);
    document.getElementById("cpsCost").innerHTML = "CPS COST: " + cpsCost;
    if (cps === 0) {
      cps += 1;
    } else cps += Math.ceil(cps / 1.75);
    document.getElementById("cps").innerHTML = "CPS: " + cps;
  }
};
setInterval(function cpcScore() {
  clicks += cps;
  document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
}, 1000);

// cpc Main
document.getElementById("cpcUpgrade").onclick = function cpcUpgrade() {
  if (clicks >= cpcCost) {
    clicks -= cpcCost;
    document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
    cpcCost += Math.ceil(cpcCost / 2);
    document.getElementById("cpcCost").innerHTML = "CPC COST: " + cpcCost;
    cpc += Math.ceil(cpc / 1.75);
    document.getElementById("CPC").innerHTML = "CPC: " + cpc;
  }
};

document.getElementById("speed").onclick = function speed() {
  setInterval(function cpcScore() {
    clicks += cps;
    document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
    console.log(clicks, cps, cpc);
  }, 5); // 5 ms to reduce lag
};
