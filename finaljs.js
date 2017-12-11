// structural items
var splashBra = document.getElementById("splash"),
    homeBra = document.getElementById("indexbra"),
    getHeader = document.getElementById("header"),
    findFacts = document.getElementById("facts"),
    findSize = document.getElementById("sizing"),
    factBox = document.getElementById("factobj"),
    sizeBox = document.getElementById("sizeobj"),
    getSize = document.getElementById("getSize"),
    Display = document.getElementById("results"),
    SaveButt = document.getElementById("save"),
    StatsButt = document.getElementById("statsButt"),
    BustInp = document.getElementById("bustsize"),
    BandInp = document.getElementById("bandsize");

var cupHistory = JSON.parse(localStorage.getItem("cups")),
    bandHistory = JSON.parse(localStorage.getItem("bands"));

// In Javascript, a variable will return False if it's undefined or null
if (!cupHistory) {
	cupHistory = [];
}
if (!bandHistory) {
	bandHistory = [];
}

//interactive items
var RegBra = document.getElementById("regbra"),
    Bralette = document.getElementById("bralette"),
    SportsBra = document.getElementById("sportsbra"),
    Strapless = document.getElementById("strapless"),
    CloseButt = document.getElementById("close"),
    ActiveFact = null,
    Corset = document.getElementById("corset"),
    Whale = document.getElementById("whale"),
    Tennis = document.getElementById("tennis"),
    Man = document.getElementById("man"),
    Food = document.getElementById("food"),
    Ninja = document.getElementById("ninja"),
    Nuclear = document.getElementById("toxic");
    
//--------- Navigation functions or interactions ----------//
function goHome() {
    getHeader.style.display = "initial";
    splashBra.style.display = "none";
    factBox.style.display = "none";
    sizeBox.style.display = "none";
    findSize.style.display = "inline-block";
    findFacts.style.display = "inline-block";
}
splashBra.addEventListener("click", function () {
    goHome();
    document.getElementById("main").style.top = 20 + "%";
});
homeBra.addEventListener("click", function () {
    goHome();
});
homeBra.addEventListener("mouseover", function (){
    
});

findSize.addEventListener("click",function () {
    findFacts.style.display = "none";
    findSize.style.display = "none";
    sizeBox.style.display = "block";
});
findFacts.addEventListener("click", function () {
    findSize.style.display = "none";
    findFacts.style.display = "none";
    factBox.style.display = "block";
});

//------------10 facts interactions ---------//
RegBra.addEventListener("mouseover", function(){
    document.getElementById("regInfo").style.display = "block";
});
RegBra.addEventListener("mouseout", function(){
    document.getElementById("regInfo").style.display = "none";
});

Bralette.addEventListener("mouseover", function(){
    document.getElementById("braletteInfo").style.display = "block";
});
Bralette.addEventListener("mouseout", function(){
    document.getElementById("braletteInfo").style.display = "none";
});

SportsBra.addEventListener("mouseover", function(){
    document.getElementById("sportInfo").style.display = "block";
});
SportsBra.addEventListener("mouseout", function(){
    document.getElementById("sportInfo").style.display = "none";
});

Strapless.addEventListener("mouseover", function(){
    document.getElementById("straplessInfo").style.display = "block";
});
Strapless.addEventListener("mouseout", function(){
    document.getElementById("straplessInfo").style.display = "none";
});

function displayClose(status){
    if(status == "closed"){ 
        CloseButt.style.display = "block";
    }else if (status == "open"){
        CloseButt.style.display = "none";
    }
}
CloseButt.addEventListener("click", function(){
    if (ActiveFact == "corset"){
        document.getElementById("corsetfact").style.display = "none";
    } else if (ActiveFact == "whale"){
        document.getElementById("whalefact").style.display = "none";
    } else if (ActiveFact == "tennis"){
        document.getElementById("tennisfact").style.display = "none";
    } else if (ActiveFact == "man"){
        document.getElementById("malefact").style.display = "none";
    } else if (ActiveFact == "random") {
        document.getElementById("hiddenfact").style.display = "none";
    } else if (ActiveFact == "toxic"){
        document.getElementById("maskfact").style.display = "none";
    }
    
    displayClose("open");
});
Corset.addEventListener("click", function(){
    ActiveFact = "corset";
    document.getElementById("corsetfact").style.display = "block";
    displayClose("closed");
});
Whale.addEventListener("click", function (){
    ActiveFact = "whale";
    document.getElementById("whalefact").style.display = "block";
    displayClose("closed");
});
Tennis.addEventListener("click", function(){
   ActiveFact = "tennis";
    document.getElementById("tennisfact").style.display = "block";
    displayClose("closed");
});
Man.addEventListener("click", function(){
    ActiveFact = "man";
    document.getElementById("malefact").style.display = "block";
    displayClose("closed");
});

var foodstatus = "full";
Food.addEventListener("mouseover", function(){
    Ninja.style.bottom = -20 + "%";
});
Food.addEventListener("mouseout", function(){
    if (foodstatus == "full"){
        Ninja.style.bottom = -25 + "%";
    } else if (foodstatus = "empty"){
        Ninja.style.display = "none";
    }
});
Food.addEventListener("click", function(){
    foodstatus = "empty";
    Food.src = "imgs/empty.png";
    ActiveFact = "random";
    Food.style.height = 15 + "%";
    setTimeout(function(){
        document.getElementById("hiddenfact").style.opacity = 1;
        document.getElementById("hiddenfact").style.display = "block";
        displayClose("closed");
    }, 505) ;
   
});
Nuclear.addEventListener("click", function (){
    ActiveFact = "toxic";
    document.getElementById("maskfact").style.display = "block";
    displayClose("closed");
})

//------------Getting and calculating user input-----------//
//Determining the cup size
function CupSize(){
    var userbust = BustInp.options[BustInp.selectedIndex].value,
        userband = BandInp.options[BandInp.selectedIndex].value,
        cupnum = null,
        cupsize = null;
    
    cupnum = parseInt(userbust) - parseInt(userband);

    if (cupnum == 0){
        cupsize = 'AA';
    } else if(cupnum == 1){
        cupsize = 'A';
    } else if(cupnum == 2){
        cupsize = 'B';
    } else if (cupnum == 3){
        cupsize = 'C';
    } else if (cupnum == 4){
        cupsize = 'D';
    } else if (cupnum == 5){
        cupsize = 'E';
    } else if (cupnum == 6){
        cupsize = 'F';
    } else if (cupnum == 7){
        cupsize = 'G';
    } else if (cupnum == 8){
        cupsize = 'H';
    } else if (cupnum == 9){
        cupsize = 'I';
    } else if (cupnum == 10){
        cupsize = 'J';
    } else if (cupnum == 11){
        cupsize = 'K';
    } else if (cupnum >= 12 || cupnum < 0) {
        cupsize = 'Beyond the scope of commerically made bras'
    }
    
    return cupsize;
}

//Check to see if band size is even number, if not, round the size down
function makeEven(){
    var newnum = 0,
        num = parseInt(BandInp.options[BandInp.selectedIndex].value);
    
    if (num%2 == 1 ){
        newnum = num - 1;
    } else {
        newnum = num;
    }
    return newnum;    
}
//Appending the new div
function DisplayStats(){
    var ndiv = document.createElement("div"),
        results = findCommonCup();
    console.log(results);
    Display.appendChild(ndiv);
    ndiv.style.display = "block";
    ndiv.style.height = 55 +"%";
    ndiv.style.width = 60 + "%";
    ndiv.style.position = "absolute";
    ndiv.style.top = 10 +"%";
    ndiv.style.left = 20 + "%";
    ndiv.style.border = "1px black solid";
    ndiv.style.padding = 2 + "px";
    ndiv.style.backgroundColor = "#eafffe";
    
    // ndiv.innerHTML = '<b>These are the tally of cups so far</b>: <br><pre>' + results;
    ndiv.innerHTML = '<b>These are the tally of cups so far</b>: <br><pre>';

    var cups = Object.keys(results);
    for(var i in cups){
       ndiv.innerHTML += '<b>' + cups[i] + '</b>' + ": " + results[cups[i]] + "<br>";
   	};
    
    document.getElementById("hidden").addEventListener("click", function(){
        ndiv.style.display = "none";
        document.getElementById("hidden").style.display = "none";
    })
}

function findCommonCup(){
    var arrCup = localStorage.getItem("cups"),
        cupCounter = {},
        allCups = JSON.parse(arrCup);

    for(var i in allCups){
        if (allCups[i] in cupCounter){
            cupCounter[allCups[i]] += 1;
        } else {
            cupCounter[allCups[i]] = 1;
        }
    }
    console.log(cupCounter);
    return cupCounter;
}

//Output user size and save to local server
function saveLocally(){
    localStorage.setItem("cups", JSON.stringify(cupHistory));
    localStorage.setItem("bands", JSON.stringify(bandHistory));
}

getSize.addEventListener("click", function () {
    var userband = makeEven(),
        usercup = CupSize();

    console.log(cupHistory);
    console.log(bandHistory);
    
    if (usercup.length > 2){
        alert(usercup);
        cupHistory.push('No cup');
        bandHistory.push(userband);
    } else {
        alert(usercup + userband + " is your primary bra size");
        cupHistory.push(usercup);
        bandHistory.push(userband);
    }
    saveLocally();
});

StatsButt.addEventListener("click", function(){
    document.getElementById("hidden").style.display = "inline-block";
    DisplayStats();
})