
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


var clickRightTrue = true;

var settingsKeyIns = false;

var KeyboardMenu = false;
var KeyMenu1 = false;
var KeyMenu2 = false;
var KeyMenu3 = false;
var KeyMenu4 = false;
var KeyMenu5 = false;
var KeyMenu6 = false;
var KeyMenu7 = false;
var KeyMenu8 = false;
var KeyMenu9 = false;
var KeyMenu10 = false;
var KeyMenu11 = false;
var KeyMenu12 = false;
var KeyMenu13 = false;
var KeyMenu14 = false;
var KeyMenu15 = false;

var MSw1 = true;                        //
var MSw2 = false;                       //
var MSw3 = false;                       //
var MSw4 = false;                       //
var MSw5 = false;                       //
var MSw6 = false;                       //                                        
var MSw7 = false;                       // 
var MSw8 = false;                       //
var MSw9 = false;  
var MSw10 = false; 
var MSw11 = false; 
var MSw12 = false; 
var MSw13 = false;
var MSw14 = false; 
var MSw15 = false;

// center text
var w = canvas.width / 2;

var roundsEnd = false;

const keys = []; // keyboard operations

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
});

var firstRd = true;

var nextLevel = false;


var scoreGiven = false;
var hitPost = false;
var saved = false;


var randomGoal = 3;

var blueFP = true;
var redFP = false;


var goalUp = true;
var leftDown = false;
var rightDown = false;

var splashSc = true;
var insSc = false;
var gameSc = false;
var SetBalltrue = true;

var sec = true;
var thd = false;
var foth = false;
var fith = false;
var six = false;
var lastScreen = false;


var score = 0;
var Rolling = true;
var introSp = true;
var wellDone = true;

var footballPlayer = true;

/////
var clickLeft = true;
/////

var round1 = true;
var round2 = false;
var round3 = false;
var round4 = false;
var round5 = false;
var round6 = false;
var end = false;

var g1 = w-120;
var dg1 = 0.3;

var bowlRse = false;
var x = w;
var y = 675;
var dx = 1;
var dy = -5;
var dyl = -5;

var dxh = 1;
var dyh = -5;



// Settings Menu //

var setMenu = false; // Game = false // setMenu = true

var musicOn = true;
var speechOn = true;
var effectsOn = true;
/////Translation Menu //////////
var En = true;
var Ger = false;
var Rom = false;
var Bul = false;
var Grk = false;
var Tuk = false;

// red tick
const rTick1 = new Image();
rTick1.src = "images/menuAssets/rTick.png";

// white background
const mBack = new Image();
mBack.src = "images/menuAssets/menuBackGr.png";

// Purple Header
const menuHead = new Image();
menuHead.src = "images/menuAssets/header.png";

// Circles
const BoxMus1 = new Image();
BoxMus1.src = "images/menuAssets/Box.png";

const BoxMus2 = new Image();
BoxMus2.src = "images/menuAssets/Box.png";

const BoxSp1 = new Image();
BoxSp1.src = "images/menuAssets/Box.png";

const BoxSp2 = new Image();
BoxSp2.src = "images/menuAssets/Box.png";

const BoxEff1 = new Image();
BoxEff1.src = "images/menuAssets/Box.png";

const BoxEff2 = new Image();
BoxEff2.src = "images/menuAssets/Box.png";

const BoxTeams1 = new Image();
BoxTeams1.src = "images/menuAssets/Box.png";

const BoxTeams2 = new Image();
BoxTeams2.src = "images/menuAssets/Box.png";

// Trans cicles

const BoxEn = new Image();
BoxEn.src = "images/menuAssets/Box.png";

const BoxGer = new Image();
BoxGer.src = "images/menuAssets/Box.png";

const BoxRom = new Image();
BoxRom.src = "images/menuAssets/Box.png";

const BoxBul = new Image();
BoxBul.src = "images/menuAssets/Box.png";

const BoxGrk = new Image();
BoxGrk.src = "images/menuAssets/Box.png";

const BoxTur = new Image();
BoxTur.src = "images/menuAssets/Box.png";


// Cross - return to game
const cross= new Image();
cross.src = "images/menuAssets/cross.png";

// icon on splash screen
const settings = new Image();
settings.src = "images/settings.png";


// End of Settings //


// sound effects
//var kick = new Audio("audio/kick.mp3");

var letsGoAud = new Audio("audio/letsGoAud.mp3");
var letsGoAudGer = new Audio("audio/letsGoAudGer.mp3");
var letsGoAudRom = new Audio("audio/letsGoAudRom.mp3");
var letsGoAudBul = new Audio("audio/letsGoAudBul.mp3");
var letsGoAudGrk = new Audio("audio/letsGoAudGrk.mp3");
var letsGoAudTur = new Audio("audio/letsGoAudTur.mp3");

var cheeringAud = new Audio("audio/cheering.mp3");

var mGoal = new Audio("audio/missed-goal.mp3");

var Sgoal = new Audio("audio/goal.mp3");

const splash_img = new Image();
splash_img.src = "images/splash_img.png";

const r2 = new Image();
r2.src = "images/splEnd.png";

const r3 = new Image();
r3.src = "images/splEnd.png";
   
const splEnd = new Image();
splEnd.src = "images/splEnd.png";

const insEnd = new Image();
insEnd.src = "images/splEnd.png";


const blueL = new Image();
blueL.src = "images/blueL.png";

const blueR = new Image();
blueR.src = "images/blueR.png";

const redL = new Image();
redL.src = "images/redL.png";

const redR = new Image();
redR.src = "images/redR.png";


const goal = new Image();
goal.src = "images/newGoal.png";

const ball = new Image();
ball.src = "images/ball.png";

const keeperSaved = new Image();
keeperSaved.src = "images/keeper-saved.png";

const keeper = new Image();
keeper.src = "images/goalkeeper.png";



const keeperHitPost = new Image();
keeperHitPost.src = "images/goal-keeper-Hit-Post-sd.png";

const keeperDownL = new Image();
keeperDownL.src = "images/goalkeeper-downL.png";

const keeperDownR = new Image();
keeperDownR.src = "images/goalkeeper-downR.png";

const setBowl = new Image();
setBowl.src = "images/splEnd.png";

const ohno = new Image();
ohno.src = "images/ohno.png";

const happy = new Image();
happy.src = "images/happy.png";

// Keyboard Instructions
function endInsKey() {


    //alert("settingsKeyIns is " + settingsKeyIns);


    
    if (!gameSc) {
    if (keys[32]) {
        settingsKeyIns = false;
        //alert("setMenu is " + setMenu);
        removeEventListener("keydown", endInsKey);
    }
    }
}

function switchKeysM1(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu1 && MSw1) {

        KeyMenu1 = false;
        KeyMenu2 = true;

        MSw1 = false;
        MSw2 = true;

        removeEventListener("keydown", switchKeysM1);
    }
    }
}

function switchKeysM2(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu2 && MSw2) {

    KeyMenu2 = false;
    KeyMenu3 = true;

    MSw2 = false;
    MSw3 = true;

    
    removeEventListener("keydown", switchKeysM2);
    }
    }
}

function switchKeysM3(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu3 && MSw3) {

        KeyMenu3 = false;
        KeyMenu4 = true;

        MSw3 = false;
        MSw4 = true;

        removeEventListener("keydown", switchKeysM3);
    }
    }
}

function switchKeysM4(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu4 && MSw4) {

        KeyMenu4 = false
        KeyMenu5 = true;

        MSw4 = false;
        MSw5 = true;

        removeEventListener("keydown", switchKeysM4);
    }
    }
}

function switchKeysM5(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu5 && MSw5) {
        
        KeyMenu5 = false;
        KeyMenu6 = true;

        MSw5 = false;
        MSw6 = true;
  
        removeEventListener("keydown", switchKeysM5);
    }
    }
}

function switchKeysM6(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu6 && MSw6) {

        KeyMenu6 = false;
        KeyMenu7 = true;

        MSw6 = false;    
        MSw7 = true;

        removeEventListener("keydown", switchKeysM6);
    }
    }
}

function switchKeysM7(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu7 && MSw7) {

        KeyMenu7 = false;
        KeyMenu8 = true;
        
        MSw7 = false;
        MSw8 = true;

        removeEventListener("keydown", switchKeysM7);
    }
    }
}

function switchKeysM8(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu8 && MSw8) {

        KeyMenu8 = false;
        KeyMenu9 = true;
        
        MSw8 = false;
        MSw9 = true;

        removeEventListener("keydown", switchKeysM8);
    }
    }
}

function switchKeysM9(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu9 && MSw9) {

        KeyMenu9 = false;
        KeyMenu10 = true;
        
        MSw9 = false;
        MSw10= true;
       
        removeEventListener("keydown", switchKeysM9);
    }
    }
}

function switchKeysM10(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu10 && MSw10) {

        KeyMenu10 = false;
        KeyMenu11 = true;
        
        MSw10 = false;
        MSw11 = true;

        removeEventListener("keydown", switchKeysM10);
    }
    }
}

function switchKeysM11(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu11 && MSw11) {

        KeyMenu11 = false;
        KeyMenu12 = true;
       
        MSw11 = false;
        MSw12 = true;

        removeEventListener("keydown", switchKeysM11);
    }
    }
}

function switchKeysM12(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu12 && MSw12) {

        KeyMenu12 = false;
        KeyMenu13 = true;
       
        MSw12 = false;
        MSw13 = true;

        removeEventListener("keydown", switchKeysM12);
    }
    }
}

function switchKeysM13(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu13 && MSw13) {

        KeyMenu13 = false;
        KeyMenu14 = true;
       
        MSw13 = false;
        MSw14 = true;

        removeEventListener("keydown", switchKeysM13);
    }
    }
}

function switchKeysM14(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu14 && MSw14) {

        KeyMenu14 = false;
        KeyMenu15 = true;
       
        MSw14 = false;
        MSw15 = true;

        removeEventListener("keydown", switchKeysM14);
    }
    }
}

function switchKeysM15(e) {
    if (KeyboardMenu) {
    if ((keys[32]) && KeyMenu15 && MSw15) {

        KeyMenu15 = false;
        KeyMenu1 = true;
       
        MSw15 = false;
        MSw1 = true;

        removeEventListener("keydown", switchKeysM15);
    }
    }
}





// 12/1/23

function MustickTKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu1 && MSw1) {
            musicOn=true;
            removeEventListener("keydown", MustickTKey);
        }
    } // setMenu
}

function MustickFKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu2 && MSw2) {
            musicOn=false;
            removeEventListener("keydown", MustickFKey);
        }
    } // setMenu
}

/////End of Mouse music Change///////////////////
/////////////////////////////////////////////////


////// speech change ///////////////////
///////////////////////////////////////

function SptickTKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu3 && MSw3) {
            speechOn=true;
            removeEventListener("keydown", SptickTKey);
        }
    } // setMenu
}

function SptickFKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu4 && MSw4) {
            speechOn=false;
            removeEventListener("keydown", SptickFKey);
        }
    } // setMenu
}

/////End of Mouse speech Change///////////////////
/////////////////////////////////////////////////

////// translate change ///////////////////
///////////////////////////////////////

function enOnKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu5 && MSw5) {
            En=true;
            Ger=false;
            Rom=false;
            Bul=false;
            Grk=false;
            Tuk=false;
            removeEventListener("keydown", enOnKey);
        }
    }
}

function gerOnKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu6 && MSw6) {
            En=false;
            Ger=true;
            Rom=false;
            Bul=false;
            Grk=false;
            Tuk=false;
            removeEventListener("keydown", gerOnKey);
        }
    }
}

function romOnKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu7 && MSw7) {
            En=false;;
            Ger=false;
            Rom=true;
            Bul=false;
            Grk=false;
            Tuk=false;
            removeEventListener("keydown", romOnKey);
        }
    }
}

function bulOnKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu8 && MSw8) {
            En=false;
            Ger=false;
            Rom=false;
            Bul=true;
            Grk=false;
            Tuk=false;
            removeEventListener("keydown", bulOnKey);
        }
    }
}

function grkOnKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu9 && MSw9) {
            En=false;
            Ger=false;
            Rom=false;
            Bul=false;
            Grk=true;
            Tuk=false;
            removeEventListener("keydown", grkOnKey);
        }
    }
}

function turOnKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu10 && MSw10) {
            En=false;
            Ger=false;
            Rom=false;
            Bul=false;
            Grk=false;
            Tuk=true;
            removeEventListener("keydown", turOnKey);
        }
    }
}

/////End of translate speech Change///////////////////
/////////////////////////////////////////////////

////// effects change ///////////////////
///////////////////////////////////////

function effectsTKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu11 && MSw11) {
            effectsOn=true;
            removeEventListener("keydown", effectsTKey);
        }
    } // setMenu
}

function effectsFKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu12 && MSw12) {
            effectsOn=false;
            removeEventListener("keydown", effectsFKey);
        }
    } // setMenu
}

/////End of Mouse effects Change///////////////////
/////////////////////////////////////////////////




 // Teams
 function teamsTKey() {
    if (setMenu && !gameSc) {
        if (keys[13] && KeyMenu13 && MSw13 && !gameSc) {
            blueFP = true;
            redFP = false;
            removeEventListener("keydown", teamsTKey);
        }
    }
}

function teamsFKey() {
    if (setMenu && !gameSc) {
        if (keys[13] && KeyMenu14 && MSw14 && !gameSc) {
            blueFP = false;
            redFP = true;
            removeEventListener("keydown", teamsFKey);
        }
    }
}


// End Mouse Menu and return to game //
function endMenuKey(e) {
    if (setMenu && !gameSc) {
        if (keys[13] && setMenu && KeyMenu15 && MSw15) {

            setMenu=false;
            insSc=false;
            splashSc=true;

            removeEventListener("keydown", endMenuKey);
        }
    }
}




////// music change ///////////////////
///////////////////////////////////////

function MustickT(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxMus1.path, e.offsetX, e.offsetY)) {
            musicOn=true;
            canvas.removeEventListener("click", MustickT);
        }
    } // setMenu
}

function MustickF(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxMus2.path, e.offsetX, e.offsetY)) {
            musicOn=false;
            canvas.removeEventListener("click", MustickF);
        }
    } // setMenu
}

/////End of Mouse music Change///////////////////
/////////////////////////////////////////////////

////// speech change ///////////////////
///////////////////////////////////////

function SptickT(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxSp1.path, e.offsetX, e.offsetY)) {
            speechOn=true;
            canvas.removeEventListener("click", SptickT);
        }
    } // setMenu
}

function SptickF(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxSp2.path, e.offsetX, e.offsetY)) {
            speechOn=false;
            canvas.removeEventListener("click", SptickF);
        }
    } // setMenu
}

/////End of Mouse speech Change///////////////////
/////////////////////////////////////////////////

////// translate change ///////////////////
///////////////////////////////////////

function enOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxEn.path, e.offsetX, e.offsetY)) {
            En=true;
            Ger=false;
            Rom=false;
            Bul=false;
            Grk=false;
            Tuk=false;
            canvas.removeEventListener("click", enOn);
        }
    }
}

function gerOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxGer.path, e.offsetX, e.offsetY)) {
            En=false;
            Ger=true;
            Rom=false;
            Bul=false;
            Grk=false;
            Tuk=false;
            canvas.removeEventListener("click", gerOn);
        }
    }
}

function romOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxRom.path, e.offsetX, e.offsetY)) {
            En=false;;
            Ger=false;
            Rom=true;
            Bul=false;
            Grk=false;
            Tuk=false;
            canvas.removeEventListener("click", romOn);
        }
    }
}

function bulOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxBul.path, e.offsetX, e.offsetY)) {
            En=false;
            Ger=false;
            Rom=false;
            Bul=true;
            Grk=false;
            Tuk=false;
            canvas.removeEventListener("click", bulOn);
        }
    }
}

function grkOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxGrk.path, e.offsetX, e.offsetY)) {
            En=false;
            Ger=false;
            Rom=false;
            Bul=false;
            Grk=true;
            Tuk=false;
            canvas.removeEventListener("click", grkOn);
        }
    }
}

function turOn(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxTur.path, e.offsetX, e.offsetY)) {
            En=false;
            Ger=false;
            Rom=false;
            Bul=false;
            Grk=false;
            Tuk=true;
            canvas.removeEventListener("click", turOn);
        }
    }
}

/////End of translate speech Change///////////////////
/////////////////////////////////////////////////

////// effects change ///////////////////
///////////////////////////////////////

function effectsT(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxEff1.path, e.offsetX, e.offsetY)) {
            effectsOn=true;
            canvas.removeEventListener("click", effectsT);
        }
    } // setMenu
}

function effectsF(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxEff2.path, e.offsetX, e.offsetY)) {
            effectsOn=false;
            canvas.removeEventListener("click", effectsF);
        }
    } // setMenu
}

/////End of Mouse effects Change///////////////////
/////////////////////////////////////////////////


////// Teams change ///////////////////
///////////////////////////////////////

function teamsB(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxTeams1.path, e.offsetX, e.offsetY)) {
            redFP=false;
            blueFP=true;
            canvas.removeEventListener("click", teamsB);
        }
    } // setMenu
}

function teamsR(e) {
    if (setMenu) {
        if (ctx.isPointInPath(BoxTeams2.path, e.offsetX, e.offsetY)) {
            redFP=true;
            blueFP=false;
            canvas.removeEventListener("click", teamsR);
        }
    } // setMenu
}

/////End of Mouse effects Change///////////////////
/////////////////////////////////////////////////


// End Mouse Menu and return to game //
function endMenu(e) {
    if (setMenu) {
        if (ctx.isPointInPath(cross.path, e.offsetX, e.offsetY)) {

            setMenu=false;
            insSc=false;
            splashSc=true;

            canvas.removeEventListener("click", endMenu);
        }
    }
}


function showMenu() {
    if (setMenu) {

      ctx.fillStyle = "black";
  
      ctx.drawImage(mBack, 0, 0, canvas.width, canvas.height);
  
      ctx.globalAlpha = 1.0; 
      ctx.textAlign = "center"; 
      ctx.font = "100 80px Impact, fantasy";

      if (En) {
        ctx.fillText("Settings", w, 100);
      }
      if (Ger) {
        ctx.fillText("Einstellungen", w, 100);
      }
      if (Rom) {
        ctx.fillText("Setări", w, 100);
      }
      if (Bul) {
        ctx.fillText("Настройки", w, 100);
      }
      if (Grk) {
        ctx.fillText("Ρυθμίσεις", w, 100);
      }
      if (Tuk) {
        ctx.fillText("Ayarlar", w, 100);
      }

      ////////////////////////////////////////////////////////// 29/12/22
      if (settingsKeyIns) {
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = "green";
        ctx.fillRect(90, 140, 535, 550);
        ctx.textAlign = "center"; 

        ctx.fillStyle = "black";
        ctx.font = "900 50px Arial"; 
        ctx.fillText("Instructions", w, 200);
        ctx.font = "900 30px Arial"; 
        ctx.fillStyle = "white";
        ctx.fillText("Press the Spacebar to tab", w, 280);
        ctx.fillText("between the options", w, 320);
        ctx.fillText("Then press the", w, 400);
        ctx.fillText("enter key to select", w, 440);

        ctx.fillText("To play with a Switch -", w, 510);
        ctx.fillText("You need two Switches to play", w, 550);

        ctx.fillStyle = "black";
        ctx.fillText("Press the spacebar", w, 620);
        ctx.fillText("to continue", w, 660);

        addEventListener("keydown", endInsKey);
    }
    /////////////////////////////////////////////////////////////////////

    if (!settingsKeyIns) {

      ctx.textAlign = "left";

       ///////////////////////////////////////////////
       if (KeyboardMenu) {
        if (KeyMenu1) {
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "Blue";
        ctx.fillRect(60, 190, 257, 50);
        ctx.globalAlpha = 1.0;
        }
      }
        ///////////////////////////////////////////////

      ctx.fillStyle = "white";

      ctx.drawImage(menuHead, 62, 130, 250, 50);

      ctx.font = "900 20px Arial"; 
    
    if (En) {
        ctx.fillText("Crowd Noise", 110, 164);
    }

    if (Ger) {
        ctx.fillText("Lärm der Menge", 100, 164);
    }

    if (Rom) {
        ctx.fillText("Zgomot de mulțime", 85, 164);
    }

    if (Bul) {
        ctx.fillText("Шум от тълпата", 95, 164);
    }

    if (Grk) {
        ctx.fillText("Θόρυβος πλήθους", 85, 164);
    }

    if (Tuk) {
        ctx.fillText("Kalabalık Gürültüsü", 75, 164);
    }
    
    ctx.font = "700 27px Arial";

    ctx.drawImage(BoxMus1, 62, 190, 50, 50);
    BoxMus1.path = new Path2D();
    BoxMus1.path.rect(62, 190, 50, 50);

        ///////////////////////////////////////////////
        if (KeyboardMenu) {
            if (KeyMenu2) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = "Blue";
            ctx.fillRect(60, 245, 257, 50);
            }
        }
            ///////////////////////////////////////////////

    ctx.fillStyle = "black";
    ctx.globalAlpha = 1.0;

    if (musicOn) {
        ctx.drawImage(rTick1, 67, 192, 50, 40);
    }

    
    if (En) {
        ctx.fillText("On", 120, 230);
    }
    if (Ger) {
        ctx.fillText("An", 120, 230);
    }
    if (Rom) {
        ctx.fillText("Pe", 120, 230);
    }
    if (Bul) {
        ctx.fillText("Ha", 120, 230);
    }
    if (Grk) {
        ctx.fillText("Επί", 120, 230);
    }
    if (Tuk) {
        ctx.fillText("Açık", 120, 230);
    }

    ctx.drawImage(BoxMus2, 62, 245, 50, 50);
    BoxMus2.path = new Path2D();
    BoxMus2.path.rect(62, 245, 50, 50);

    if (!musicOn) {
        ctx.drawImage(rTick1, 67, 247, 50, 40);
    }

    

    if (En) {
        ctx.fillText("Off", 120, 282);
    }
    if (Ger) {
        ctx.fillText("Aus", 120, 282);
    }
    if (Rom) {
        ctx.fillText("Oprit", 120, 282);
    }
    if (Bul) {
        ctx.fillText("Изключено", 120, 282);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 120, 282);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 120, 282);
    }


    canvas.addEventListener("click", MustickT);
    canvas.addEventListener("click", MustickF);

    addEventListener("keydown", MustickTKey);
    addEventListener("keydown", MustickFKey);
    // End of Music


    // Speech
  
    ctx.drawImage(menuHead, 410, 130, 250, 50);

        ///////////////////////////////////////////////
        if (KeyboardMenu) {
            if (KeyMenu3) {
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "Blue";
        ctx.fillRect(410, 190, 257, 50);
        ctx.globalAlpha = 1.0;
            }
        }
        ///////////////////////////////////////////////

    ctx.fillStyle = "white";

    ctx.font = "900 25px Arial"; 

    if (En) {
        ctx.fillText("Speech", 480, 164);
    }

    if (Ger) {
        ctx.fillText("Rede", 480, 164);
    }

    if (Rom) {
        ctx.fillText("Vorbire", 480, 164);
    }

    if (Bul) {
        ctx.fillText("Реч", 480, 164);
    }

    if (Grk) {
        ctx.fillText("Ομιλία", 480, 164);
    }
    if (Tuk) {
        ctx.fillText("Konuşma", 480, 164);
    }


    ctx.fillStyle = "black";
    ctx.font = "700 27px Arial";

    ctx.drawImage(BoxSp1, 410, 190, 50, 50);
    BoxSp1.path = new Path2D();
    BoxSp1.path.rect(410, 190, 50, 50);

          ///////////////////////////////////////////////
          if (KeyboardMenu) {
            if (KeyMenu4) {
       ctx.globalAlpha = 0.3;
       ctx.fillStyle = "Blue";
       ctx.fillRect(410, 245, 257, 50);
       ctx.globalAlpha = 1.0;
       ctx.fillStyle = "black";
            }
           }
       ///////////////////////////////////////////////  

    if (speechOn) {  
        ctx.drawImage(rTick1, 417, 192, 50, 40);
    }



    if (En) {
        ctx.fillText("On", 470, 230);
    }
    if (Ger) {
        ctx.fillText("An", 470, 230);
    }
    if (Rom) {
        ctx.fillText("Pe", 470, 230);
    }
    if (Bul) {
        ctx.fillText("Ha", 470, 230);
    }
    if (Grk) {
        ctx.fillText("Επί", 470, 230);
    }
    if (Tuk) {
        ctx.fillText("Açık", 470, 230);
    }

    ctx.drawImage(BoxSp2, 410, 245, 50, 50);
    BoxSp2.path = new Path2D();
    BoxSp2.path.rect(410, 245, 50, 50);

    

    if (!speechOn) {
        ctx.drawImage(rTick1, 417, 247, 50, 40);
    }
    
    if (En) {
        ctx.fillText("Off", 470, 282);
    }
    if (Ger) {
        ctx.fillText("Aus", 470, 282);
    }
    if (Rom) {
        ctx.fillText("Oprit", 470, 282);
    }
    if (Bul) {
        ctx.fillText("Изключено", 470, 282);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 470, 282);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 470, 282);
    }

    canvas.addEventListener("click", SptickT);
    canvas.addEventListener("click", SptickF);

    addEventListener("keydown", SptickTKey);
    addEventListener("keydown", SptickFKey);

    // End of Speech

    // Translations
  
    ctx.fillStyle = "white";

      ctx.drawImage(menuHead, 62, 320, 250, 50);

                 ///////////////////////////////////////////////
                 if (KeyboardMenu) {
                    if (KeyMenu5) {
         ctx.globalAlpha = 0.3;
         ctx.fillStyle = "Blue";
         ctx.fillRect(62, 378, 257, 50);
         ctx.globalAlpha = 1.0;
         ctx.fillStyle = "white";
                    }
                 }
         ///////////////////////////////////////////////

      ctx.font = "900 25px Arial"; 
    
    if (En) {
        ctx.fillText("Translations", 102, 353);
    }

    if (Ger) {
        ctx.fillText("Übersetzungen", 84, 353);
    }

    if (Rom) {
        ctx.fillText("Traduceri", 115, 353);
    }

    if (Bul) {
        ctx.fillText("Преводи", 115, 353);
    }

    if (Grk) {
        ctx.fillText("Μεταφράσεις", 95, 353);
    }

    if (Tuk) {
        ctx.fillText("Çeviriler", 112, 353);
    }
    
    ctx.font = "700 27px Arial";
    ctx.fillStyle = "black";

    ctx.drawImage(BoxEn, 62, 378, 50, 50);
    BoxEn.path = new Path2D();
    BoxEn.path.rect(62, 378, 50, 50);

             ///////////////////////////////////////////////
             if (KeyboardMenu) {
                if (KeyMenu6) {
       ctx.globalAlpha = 0.3;
       ctx.fillStyle = "Blue";
       ctx.fillRect(62, 430, 257, 50);
       ctx.globalAlpha = 1.0;
       ctx.fillStyle = "black";
                }
               }
       ///////////////////////////////////////////////

    if (En) {
        ctx.drawImage(rTick1, 67, 379, 50, 40);
    }

    if (En) {
        ctx.fillText("English", 120, 412);
    }
    if (Ger) {
        ctx.fillText("Englisch", 120, 412);
    }
    if (Rom) {
        ctx.fillText("Engleză", 120, 412);
    }
    if (Bul) {
        ctx.fillText("Английски", 120, 412);
    }
    if (Grk) {
        ctx.fillText("Αγγλικά", 120, 412);
    }
    if (Tuk) {
        ctx.fillText("ingilizce", 120, 412);
    }

    ctx.drawImage(BoxGer, 62, 430, 50, 50);
    BoxGer.path = new Path2D();
    BoxGer.path.rect(62, 430, 50, 50);

                 ///////////////////////////////////////////////
                 if (KeyboardMenu) {
                    if (KeyMenu7) {
       ctx.globalAlpha = 0.3;
       ctx.fillStyle = "Blue";
       ctx.fillRect(62, 482, 257, 50);
       ctx.globalAlpha = 1.0;
       ctx.fillStyle = "black";
                    }
                   }
       ///////////////////////////////////////////////

    if (Ger) {
        ctx.drawImage(rTick1, 67, 431, 50, 40);
    }
    

    if (En) {
        ctx.fillText("German", 120, 465);
    }
    if (Ger) {
        ctx.fillText("Deutsch", 120, 465);
    }
    if (Rom) {
        ctx.fillText("limba germana", 120, 465);
    }
    if (Bul) {
        ctx.fillText("Немски", 120, 465);
    }
    if (Grk) {
        ctx.fillText("Γερμανός", 120, 465);
    }
    if (Tuk) {
        ctx.fillText("Almanca", 120, 465);
    }

    ctx.drawImage(BoxRom, 62, 482, 50, 50);
    BoxRom.path = new Path2D();
    BoxRom.path.rect(62, 482, 50, 50);

    ///////////////////////////////////////////////
if (KeyboardMenu) {
    if (KeyMenu8) {
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "Blue";
    ctx.fillRect(62, 534, 257, 50);
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = "black";
    }
    }
    ///////////////////////////////////////////////

    if (Rom) {
        ctx.drawImage(rTick1, 67, 483, 50, 40);
    }
    

    if (En) {
        ctx.fillText("Romanian", 120, 518);
    }
    if (Ger) {
        ctx.fillText("rumänisch", 120, 518);
    }
    if (Rom) {
        ctx.fillText("Română", 120, 518);
    }
    if (Bul) {
        ctx.fillText("румънски", 120, 518);
    }
    if (Grk) {
        ctx.fillText("ρουμανικός", 120, 518);
    }
    if (Tuk) {
        ctx.fillText("Rumence", 120, 518);
    }

    ctx.drawImage(BoxBul, 62, 534, 50, 50);
    BoxBul.path = new Path2D();
    BoxBul.path.rect(62, 534, 50, 50);

      ///////////////////////////////////////////////
    if (KeyboardMenu) {
        if (KeyMenu9) {
       ctx.globalAlpha = 0.3;
       ctx.fillStyle = "Blue";
       ctx.fillRect(62, 586, 257, 50);
       ctx.globalAlpha = 1.0;
       ctx.fillStyle = "black";
        }
    }
       ///////////////////////////////////////////////

    if (Bul) {
        ctx.drawImage(rTick1, 67, 535, 50, 40);
    }

    

    if (En) {
        ctx.fillText("Bulgarian", 120, 571);
    }
    if (Ger) {
        ctx.fillText("bulgarisch", 120, 571);
    }
    if (Rom) {
        ctx.fillText("bulgară", 120, 571);
    }
    if (Bul) {
        ctx.fillText("български", 120, 571);
    }
    if (Grk) {
        ctx.fillText("Βούλγαρος", 120, 571);
    }
    if (Tuk) {
        ctx.fillText("Bulgarca", 120, 571);
    }

    ctx.drawImage(BoxGrk, 62, 586, 50, 50);
    BoxGrk.path = new Path2D();
    BoxGrk.path.rect(62, 586, 50, 50);

                    ///////////////////////////////////////////////
                    if (KeyboardMenu) {
                        if (KeyMenu10) {
       ctx.globalAlpha = 0.3;
       ctx.fillStyle = "Blue";
       ctx.fillRect(62, 638, 257, 50);
       ctx.globalAlpha = 1.0;
       ctx.fillStyle = "black";
                        }
                       }
       ///////////////////////////////////////////////

    if (Grk) {
        ctx.drawImage(rTick1, 67, 587, 50, 40);
    }

    if (En) {
        ctx.fillText("Greek", 120, 621);
    }
    if (Ger) {
        ctx.fillText("griechisch", 120, 621);
    }
    if (Rom) {
        ctx.fillText("greacă", 120, 621);
    }
    if (Bul) {
        ctx.fillText("Гръцки", 120, 621);
    }
    if (Grk) {
        ctx.fillText("Ελληνικά", 120, 621);
    }
    if (Tuk) {
        ctx.fillText("Yunan", 120, 621);
    }

    

    ctx.drawImage(BoxTur, 62, 638, 50, 50);
    BoxTur.path = new Path2D();
    BoxTur.path.rect(62, 638, 50, 50);

    if (Tuk) {
        ctx.drawImage(rTick1, 67, 639, 50, 40);
    }

   

    if (En) {
        ctx.fillText("Turkish", 120, 673);
    }
    if (Ger) {
        ctx.fillText("Türkisch", 120, 673);
    }
    if (Rom) {
        ctx.fillText("turc", 120, 673);
    }
    if (Bul) {
        ctx.fillText("Турски", 120, 673);
    }
    if (Grk) {
        ctx.fillText("τούρκικος", 120, 673);
    }
    if (Tuk) {
        ctx.fillText("Türk", 120, 673);
    }

    canvas.addEventListener("click", enOn);
    canvas.addEventListener("click", gerOn);
    canvas.addEventListener("click", romOn);
    canvas.addEventListener("click", bulOn);
    canvas.addEventListener("click", grkOn);
    canvas.addEventListener("click", turOn);


    if (KeyboardMenu && !gameSc) {
        addEventListener("keydown", enOnKey);
        addEventListener("keydown", gerOnKey);
        addEventListener("keydown", romOnKey);
        addEventListener("keydown", bulOnKey);
        addEventListener("keydown", grkOnKey);
        addEventListener("keydown", turOnKey);
        }
    

    
    // End of Translations

    // Effects
  
    ctx.drawImage(menuHead, 410, 320, 250, 50);

                         ///////////////////////////////////////////////
                         if (KeyboardMenu) {
                            if (KeyMenu11) {
       ctx.globalAlpha = 0.3;
       ctx.fillStyle = "Blue";
       ctx.fillRect(410, 378, 257, 50);
       ctx.globalAlpha = 1.0;
                            }
                           }
       ///////////////////////////////////////////////

    ctx.fillStyle = "white";

    ctx.font = "900 25px Arial"; 

    if (En) {
        ctx.fillText("Effects", 480, 353);
    }

    if (Ger) {
        ctx.fillText("Auswirkungen", 440, 353);
    }

    if (Rom) {
        ctx.fillText("Efecte", 480, 353);
    }

    if (Bul) {
        ctx.fillText("Ефекти", 480, 353);
    }

    if (Grk) {
        ctx.fillText("Υπάρχοντα", 460, 353);
    }
    if (Tuk) {
        ctx.fillText("Etkileri", 480, 353);
    }


    ctx.fillStyle = "black";
    ctx.font = "700 27px Arial";

    ctx.drawImage(BoxEff1, 410, 378, 50, 50);
    BoxEff1.path = new Path2D();
    BoxEff1.path.rect(410, 378, 50, 50);

    ///////////////////////////////////////////////
if (KeyboardMenu) {
    if (KeyMenu12) {
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "Blue";
    ctx.fillRect(410, 433, 257, 50);
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = "black";
    }
    }
    ///////////////////////////////////////////////

    if (effectsOn) {  
        ctx.drawImage(rTick1, 416, 379, 50, 40);
    }

    if (En) {
        ctx.fillText("On", 470, 415);
    }
    if (Ger) {
        ctx.fillText("An", 470, 415);
    }
    if (Rom) {
        ctx.fillText("Pe", 470, 415);
    }
    if (Bul) {
        ctx.fillText("Ha", 470, 415);
    }
    if (Grk) {
        ctx.fillText("Επί", 470, 415);
    }
    if (Tuk) {
        ctx.fillText("Açık", 470, 415);
    }

    ctx.drawImage(BoxEff2, 410, 433, 50, 50);
    BoxEff2.path = new Path2D();
    BoxEff2.path.rect(410, 433, 50, 50);

    

    if (!effectsOn) {
        ctx.drawImage(rTick1, 417, 433, 50, 40);
    }
    
    if (En) {
        ctx.fillText("Off", 470, 470);
    }
    if (Ger) {
        ctx.fillText("Aus", 470, 470);
    }
    if (Rom) {
        ctx.fillText("Oprit", 470, 470);
    }
    if (Bul) {
        ctx.fillText("Изключено", 470, 470);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 470, 470);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 470, 470);
    }

    canvas.addEventListener("click", effectsT);
    canvas.addEventListener("click", effectsF);

    addEventListener("keydown", effectsTKey);
    addEventListener("keydown", effectsFKey);

    // End of Effects




// Effects
  
    ctx.drawImage(menuHead, 410, 320, 250, 50);

       ///////////////////////////////////////////////
if (KeyboardMenu) {
    if (KeyMenu13) {
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "Blue";
    ctx.fillRect(410, 560, 257, 50);
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = "black";
    }
    }
    ///////////////////////////////////////////////

    ctx.fillStyle = "white";

    ctx.font = "900 25px Arial"; 

    if (En) {
        ctx.fillText("Effects", 480, 353);
    }

    if (Ger) {
        ctx.fillText("Auswirkungen", 440, 353);
    }

    if (Rom) {
        ctx.fillText("Efecte", 480, 353);
    }

    if (Bul) {
        ctx.fillText("Ефекти", 480, 353);
    }

    if (Grk) {
        ctx.fillText("Υπάρχοντα", 460, 353);
    }
    if (Tuk) {
        ctx.fillText("Etkileri", 480, 353);
    }


    ctx.fillStyle = "black";
    ctx.font = "700 27px Arial";

    ctx.drawImage(BoxEff1, 410, 378, 50, 50);
    BoxEff1.path = new Path2D();
    BoxEff1.path.rect(410, 378, 50, 50);

           ///////////////////////////////////////////////
if (KeyboardMenu) {
    if (KeyMenu14) {
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "Blue";
    ctx.fillRect(410, 615, 257, 50);
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = "black";
    }
    }
    ///////////////////////////////////////////////

    if (effectsOn) {  
        ctx.drawImage(rTick1, 416, 379, 50, 40);
    }

    if (En) {
        ctx.fillText("On", 470, 415);
    }
    if (Ger) {
        ctx.fillText("An", 470, 415);
    }
    if (Rom) {
        ctx.fillText("Pe", 470, 415);
    }
    if (Bul) {
        ctx.fillText("Ha", 470, 415);
    }
    if (Grk) {
        ctx.fillText("Επί", 470, 415);
    }
    if (Tuk) {
        ctx.fillText("Açık", 470, 415);
    }

    ctx.drawImage(BoxEff2, 410, 433, 50, 50);
    BoxEff2.path = new Path2D();
    BoxEff2.path.rect(410, 433, 50, 50);

    

    if (!effectsOn) {
        ctx.drawImage(rTick1, 417, 433, 50, 40);
    }
    
    if (En) {
        ctx.fillText("Off", 470, 470);
    }
    if (Ger) {
        ctx.fillText("Aus", 470, 470);
    }
    if (Rom) {
        ctx.fillText("Oprit", 470, 470);
    }
    if (Bul) {
        ctx.fillText("Изключено", 470, 470);
    }
    if (Grk) {
        ctx.fillText("Μακριά από", 470, 470);
    }
    if (Tuk) {
        ctx.fillText("Kapalı", 470, 470);
    }

    canvas.addEventListener("click", effectsT);
    canvas.addEventListener("click", effectsF);

    // End of Effects






    // Player Selection
  
    ctx.drawImage(menuHead, 410, 500, 250, 50);

    ctx.fillStyle = "white";

    ctx.font = "900 25px Arial"; 

    if (En) {
        ctx.fillText("Teams", 490, 533);
    }

    if (Ger) {
        ctx.fillText("Mannschaften", 440, 533);
    }

    if (Rom) {
        ctx.fillText("Echipe", 490, 533);
    }

    if (Bul) {
        ctx.fillText("Екипи", 490, 533);
    }

    if (Grk) {
        ctx.fillText("Της ομάδας", 460, 533);
    }
    if (Tuk) {
        ctx.fillText("Takımlar", 480, 533);
    }


    ctx.fillStyle = "black";
    ctx.font = "700 27px Arial";

    ctx.drawImage(BoxTeams1, 410, 560, 50, 50);
    BoxTeams1.path = new Path2D();
    BoxTeams1.path.rect(410, 560, 50, 50);

    if (blueFP) {  
        ctx.drawImage(rTick1, 416, 561, 50, 40);
    }

    if (En) {
        ctx.fillText("Blue Team", 470, 592);
    }
    if (Ger) {
        ctx.fillText("Blaues Team", 470, 592);
    }
    if (Rom) {
        ctx.fillText("Echipa albastră", 470, 592);
    }
    if (Bul) {
        ctx.fillText("Син отбор", 470, 592);
    }
    if (Grk) {
        ctx.fillText("Μπλε ομάδα", 470, 592);
    }
    if (Tuk) {
        ctx.fillText("Mavi takım", 470, 592);
    }

    ctx.drawImage(BoxTeams2, 410, 615, 50, 50);
    BoxTeams2.path = new Path2D();
    BoxTeams2.path.rect(410, 615, 50, 50);

    

    if (redFP) {
        ctx.drawImage(rTick1, 416, 617, 50, 40);
    }
    
    if (En) {
        ctx.fillText("Red Team", 470, 650);
    }
    if (Ger) {
        ctx.fillText("rotes Team", 470, 650);
    }
    if (Rom) {
        ctx.fillText("Echipa Rosie", 470, 650);
    }
    if (Bul) {
        ctx.fillText("Червен отбор", 470, 650);
    }
    if (Grk) {
        ctx.fillText("Κόκκινη ομάδα", 470, 650);
    }
    if (Tuk) {
        ctx.fillText("kırmızı takım", 470, 650);
    }

    canvas.addEventListener("click", teamsB);
    canvas.addEventListener("click", teamsR);

    addEventListener("keydown", teamsTKey);
    addEventListener("keydown", teamsFKey);

    // End of Player Selection



    


    ctx.textAlign = "center";

               ///////////////////////////////////////////////
if (KeyboardMenu) {
    if (KeyMenu15) {
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "Blue";
    ctx.fillRect(w-30, 675, 50, 50);
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = "black";
    }
    }
    ///////////////////////////////////////////////

    ctx.drawImage(cross, w-30, 675, 50, 50);

    cross.path = new Path2D();
    cross.path.rect(w-30, 675, 50, 50);


    canvas.addEventListener("click", endMenu);
    addEventListener("keydown", endMenuKey);



    //////////////////////////////////30/12/22


    if (MSw1 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM1);
    }
    
    if (MSw2 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM2);
    }
    
    if (MSw3 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM3);
    }
    
    if (MSw4 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM4);
    }
    
    
    if (MSw5 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM5);
    }
    
    if (MSw6 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM6);
    }
    
    if (MSw7 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM7);
    }
    
    
    if (MSw8 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM8);
    }
    
    if (MSw9 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM9);
    }
    
    if (MSw10 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM10);
    }
    
    if (MSw11 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM11);
    }
    
    if (MSw12 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM12);
    }
    
    if (MSw13 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM13);
    }

    if (MSw14 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM14);
    }
    
    // End of Menu //
    if (MSw15 && KeyboardMenu && setMenu) {
        addEventListener("keydown", switchKeysM15);
    }


    ///////////////////////////////////30/12/22



    } //settingsKeyIns = false
  } // setMenu = true
} // end of showMenu



function SplashEnd(e) {
       if (ctx.isPointInPath(splEnd.path, e.offsetX, e.offsetY)) {
           splashSc = false;
           insSc = true;
           //randomGoal = Math.floor(Math.random() * 1) + 1;
           canvas.removeEventListener("click", SplashEnd);
        }
    }

    function SplashEndKey() {
        if (keys[32]) {
            splashSc = false;
            insSc = true;
            removeEventListener("keydown", SplashEndKey);
        }
     }

function settingsOpen(e) {
    if (ctx.isPointInPath(settings.path, e.offsetX, e.offsetY)) {
        setMenu=true;
        canvas.removeEventListener("click", settingsOpen);
        }
    }

    function settingsOpenKey() {
        if (keys[13] && !gameSc) {
            KeyboardMenu = true;
            settingsKeyIns = true;
            KeyMenu1 = true;
            setMenu = true;
            removeEventListener("keydown", settingsOpenKey);
            }
        }

        

function Splash() {
    ctx.drawImage(splash_img, 0, 0, 800, 800);
    ctx.drawImage(settings, 600, 0, 80, 80);
    settings.path = new Path2D();
    settings.path.rect(600, 0, 100, 100);

    

    ctx.textAlign = "center";
    ctx.font='900 13px Arial';
    ctx.fillStyle = "white";

    
    if (En) {
        ctx.fillText("Settings", 640, 86);
        ctx.font='400 13px Arial';
        ctx.fillText("Click Here", 640, 102);
        ctx.fillText("Or press the", 640, 117);
        ctx.fillText("Enter Key", 640, 133);
    }
    if (Ger) {
        ctx.fillText("Einstellungen", 640, 85);
    }
    if (Rom) {
        ctx.fillText("Setări", 640, 85);
    }
    if (Bul) {
        ctx.fillText("Настройки", 640, 85);
    }
    if (Grk) {
        ctx.fillText("Ρυθμίσεις", 640, 85);
    }
    if (Tuk) {
        ctx.fillText("Ayarlar", 640, 85);
    }


    ctx.font='900 55px Arial';
    ctx.fillStyle = "white";

    
    

    if (En) {
        ctx.fillText("Football Shootout", w, 245);
    }
    if (Ger) {
        ctx.fillText("Fußball-Schießerei", w, 245);
    }
    if (Rom) {
        ctx.fillText("Shootout de fotbal", w, 245);
    }
    if (Bul) {
        ctx.fillText("Футболни дузпиг", w, 205);
    }
    if (Grk) {
        ctx.fillText("Ποδοσφαιρική πέναλτι", w, 235);
    }
    if (Tuk) {
        ctx.fillText("futbol atışları", w, 245);
    }


    ctx.font='900 45px Comic Sans MS';
    ctx.fillStyle = "white";

    
    if (En) {
        ctx.fillText("Game", w, 325);
    }
    if (Ger) {
        ctx.fillText("Spiel", w, 325);
    }
    if (Rom) {
        ctx.fillText("Joc", w, 325);
    }
    if (Bul) {
        ctx.fillText("Игра", w, 325);
    }
    if (Grk) {
        ctx.fillText("Παιχνίδι", w, 325);
    }
    if (Tuk) {
        ctx.fillText("oyun", w, 325);
    }

    ctx.fillRect(0, 450, 715, 235); 
    ctx.drawImage(splEnd, w/2-40, 465, 450, 200);
    ctx.font='900 40px Comic Sans MS';
    ctx.fillStyle = "Black";
 
    if (En) {
        ctx.fillText("Start Game!", w, 560);
        ctx.font='900 20px Comic Sans MS';
        ctx.fillText("Left Click or Press the Spacebar", w, 590);
    }
    if (Ger) {
        ctx.fillText("Spiel beginnen!", w, 560);
        ctx.font='900 20px Comic Sans MS';
        ctx.fillText("Klicken Sie mit der linken Maustaste", w, 595);
        ctx.fillText("oder drücken Sie die Leertaste", w, 615);
    }
    if (Rom) {
        ctx.fillText("Incepe jocul!", w, 560);
        ctx.font='900 15px Comic Sans MS';
        ctx.fillText("Faceți clic stânga sau apăsați pe bara de spațiu", w, 590);
    }
    if (Bul) {
        ctx.fillText("Започни игра!", w, 560);
        ctx.font='900 14px Comic Sans MS';
        ctx.fillText("Щракнете с левия бутон или натиснете интервала", w, 590);
    }
    if (Grk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Ξεκίνα το παιχνίδι!", w, 560);
        ctx.font='900 15px Comic Sans MS';
        ctx.fillText("Αριστερό κλικ ή Πατήστε το πλήκτρο διαστήματος", w, 590);
    }
    if (Tuk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Oyunu başlatmak!", w, 560);
        ctx.font='900 19px Comic Sans MS';
        ctx.fillText("Sol Tıklayın veya Boşluk Çubuğuna Basın", w, 590);
    }

    splEnd.path = new Path2D();
    splEnd.path.rect(w/2-40, 465, 450, 200);

    canvas.addEventListener("click", settingsOpen);
    addEventListener("keydown", settingsOpenKey);
    canvas.addEventListener("click", SplashEnd);
    addEventListener("keydown", SplashEndKey);
}

function InsEnd(e) {
    if (ctx.isPointInPath(insEnd.path, e.offsetX, e.offsetY)) {

        if (speechOn) {         
            if (En) {
                letsGoAud.play();
            }
            if (Ger) {
                letsGoAudGer.play();
            }
            if (Rom) {
                letsGoAudRom.play();
            }
            if (Bul) {
                letsGoAudBul.play();
            }
            if (Grk) {
                letsGoAudGrk.play();
            }
            if (Tuk) {
                letsGoAudTur.play();
            }
        }

        insSc = false;
        gameSc = true;
        

        canvas.removeEventListener("click", InsEnd);
     }
 } 



 function InsEndKey() {
 
    if (keys[32]) {
        
        if (speechOn) {         
            if (En) {
                letsGoAud.play();
            }
            if (Ger) {
                letsGoAudGer.play();
            }
            if (Rom) {
                letsGoAudRom.play();
            }
            if (Bul) {
                letsGoAudBul.play();
            }
            if (Grk) {
                letsGoAudGrk.play();
            }
            if (Tuk) {
                letsGoAudTur.play();
            }
        }

        insSc = false;
        gameSc = true;


  
        

        removeEventListener("keydown", InsEndKey);
    }  
 } 




function Ins() {
    setMenu=false;
    ctx.drawImage(splash_img, 0, 0, 800, 800);
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillRect(50, 80, 616, 550);  
    ctx.fillStyle = "black";
    ctx.font='900 50px Comic Sans MS';

    if (En) {
        ctx.fillText("Football Shootout", w, 180);
    }
    if (Ger) {
        ctx.fillText("Fußball-Schießerei", w, 180);
    }
    if (Rom) {
        ctx.fillText("Shootout de fotbal", w, 180);
    }
    if (Bul) {
        ctx.fillText("Футболни дузпи", w, 180);
    }
    if (Grk) {
        ctx.font='900 50px Comic Sans MS';
        ctx.fillText("Ποδοσφαιρική πέναλτι", w, 180);
    }
    if (Tuk) {
        ctx.fillText("futbol atışları", w, 180);
    }

    ctx.font='600 25px Comic Sans MS';

    

    if (En) {
        ctx.fillText("It's gone to penalties!", w, 260);
        ctx.fillText("You have 5 chances to score a goal", w, 310);
        ctx.fillText("See how many you can score!", w, 360);
    }
    if (Ger) {
        ctx.fillText("Es geht ins Elfmeterschießen!", w, 260);
        ctx.fillText("Sie haben 5 Chancen, ein Tor zu erzielen", w, 310);
        ctx.fillText("Sehen Sie, wie viele Sie punkten können!", w, 360);
    }
    if (Rom) {
        ctx.fillText("S-a trecut la penalty-uri!", w, 260);
        ctx.fillText("Ai 5 ocazii sa marchezi un gol", w, 310);
        ctx.fillText("Vezi câte poți înscrie!", w, 360);
    }
    if (Bul) {
        ctx.fillText("Стигна се до дузпи!", w, 260);
        ctx.fillText("Имате 5 шанса да отбележите гол", w, 310);
        ctx.fillText("Вижте колко можете да вкарате!", w, 360);
    }
    if (Grk) {
        ctx.font='700 25px Comic Sans MS';
        ctx.fillText("Πάει στα πέναλτι!", w, 260);
        ctx.fillText("Έχετε 5 ευκαιρίες να πετύχετε ένα γκολ", w, 310);
        ctx.fillText("Δείτε πόσους μπορείτε να σκοράρετε!", w, 360);
    }
    if (Tuk) {
        ctx.fillText("Penaltılara gitti!", w, 260);
        ctx.fillText("Gol atmak için 5 şansınız var", w, 310);
        ctx.fillText("Kaç tane puan alabileceğinizi görün!", w, 360);
    }



    /*if (introSp && speechOn) {
        if (En) {
            introSpAud.play();
            introSp = false;
        }
    }*/

    ctx.drawImage(insEnd, w/2-40, 400, 450, 200);
    ctx.font='900 50px Comic Sans MS';
    ctx.fillStyle = "black";
    
    
    
    if (En) {
        ctx.fillText("Let's Go!", w, 500);
        ctx.font='900 20px Comic Sans MS';
        ctx.fillText("Left Click or Press the Spacebar", w, 535);
    }
    if (Ger) {
        ctx.font='900 35px Arial';
        ctx.fillText("Lass uns gehen!", w, 490);
        ctx.font='900 20px Comic Sans MS';
        ctx.fillText("Klicken Sie mit der linken Maustaste", w, 535);
        ctx.fillText("oder drücken Sie die Leertaste", w, 555);
    }
    if (Rom) {
        ctx.font='900 35px Arial';
        ctx.fillText("Sa mergem!", w, 500);
        ctx.font='900 15px Comic Sans MS';
        ctx.fillText("Faceți clic stânga sau apăsați pe bara de spațiu", w, 535);
    }
    if (Bul) {
        ctx.fillText("Да тръгваме!", w, 500);
        ctx.font='900 14px Comic Sans MS';
        ctx.fillText("Щракнете с левия бутон или натиснете интервала", w, 535);
    }
    if (Grk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Πάμε!", w, 500);
        ctx.font='900 16px Comic Sans MS';
        ctx.fillText("Αριστερό κλικ ή Πατήστε το πλήκτρο διαστήματος", w, 535);
    }
    if (Tuk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Hadi gidelim!", w, 480);
        ctx.font='900 17px Comic Sans MS';
        ctx.fillText("Sol Tıklayın veya Boşluk Çubuğuna Basın", w, 535);
    }

    insEnd.path = new Path2D();
    insEnd.path.rect(w/2-40, 465, 450, 200);

    canvas.addEventListener("click", InsEnd);

    addEventListener("keydown", InsEndKey);
}

// Set up Bowling Ball //

function SetBall(e) {
    if (clickLeft && ctx.isPointInPath(setBowl.path, e.offsetX, e.offsetY)) {    
        Rolling = true;
        clickRightTrue = true;
    }
}

function SetBallKey() {
    if (keys[13]) {      
        Rolling = true;
        clickRightTrue = true;
        //removeEventListener("keydown", SetBallKey);
    }
}

function setBall() {

    nextLevel = false;
    ctx.drawImage(setBowl, w/2-165, 225, 695, 265);
    setBowl.path = new Path2D();
    setBowl.path.rect(w/2-10, 350, 600, 400);
    ctx.font='900 22px Comic Sans MS';

    scoreGiven = false;
    hitPost = false;
    saved = false;

    mGoal.pause();
    mGoal.currentTime = 0;
    Sgoal.pause();
    Sgoal.currentTime = 0;

    if (En) {
        ctx.fillStyle = "black";
        ctx.fillText("Move the position of the football player", w+10, 300);
        ctx.fillText("by Left Clicking or pressing the spacebar", w+10, 340);
        ctx.fillText("on the player", w, 380);

        ctx.fillStyle = "blue";
        ctx.fillText("Then Right Click or Pressing the enter key to Shoot!", w, 430);
        ctx.fillStyle = "black";
    }
    if (Ger) {
        ctx.fillText("Bewegen Sie die Position des Fußballspielers", w+10, 300);    
        ctx.fillText("durch Linksklick oder Drücken der Leertaste", w+10, 330);
        ctx.fillText("auf dem Spieler", w, 360);

        ctx.fillStyle = "blue";
        ctx.fillText("Klicken Sie dann mit der rechten Maustaste", w+5, 410);
        ctx.fillText("oder drücken Sie die Eingabetaste, um zu schießen!", w+5, 440);
        ctx.fillStyle = "black";

    } 
    if (Rom) {
        ctx.fillText("Mutați poziția jucătorului de fotbal", w+10, 300);
        ctx.fillText("făcând clic stânga sau apăsând bara de spațiu", w+10, 330);
        ctx.fillText("pe player", w, 360);

        ctx.fillStyle = "blue";
        ctx.fillText("Apoi faceți clic dreapta sau apăsând", w+5, 410);
        ctx.fillText("tasta Enter pentru a trage!", w+5, 440);
        ctx.fillStyle = "black";
         
    }
    if (Bul) {
        ctx.font='900 21px Comic Sans MS';  
        ctx.fillText("Преместете позицията на футболиста", w+10, 300);
        ctx.fillText("като щракнете с левия бутон или натиснете интервала", w+10, 330);
        ctx.fillText("на плейъра", w, 360);

        ctx.fillStyle = "blue";
        ctx.fillText("След това щракнете с десния бутон или ", w+5, 410);
        ctx.fillText("натиснете клавиша enter, за да стреляте!", w+5, 440);
        ctx.fillStyle = "black";
        
    }
    if (Grk) {
        ctx.font='900 24px Comic Sans MS';  
        ctx.fillText("Μετακινήστε τη θέση του", w+10, 300);
        ctx.fillText("ποδοσφαιριστής με αριστερό κλικ", w+10, 330);
        ctx.fillText("στον παίκτη", w, 360);

        ctx.fillStyle = "blue";
        ctx.fillText("Στη συνέχεια κάντε δεξί κλικ", w+5, 410);
        ctx.fillText("Εδώ για να πυροβολήσετε!", w+5, 440);
        ctx.fillStyle = "black";
    }
    if (Tuk) {
        ctx.fillText("konumunu hareket ettirin", w+10, 300);
        ctx.fillText("Sol Tıklama ile futbolcu", w+10, 330);
        ctx.fillText("oyuncuda", w, 360);

        ctx.fillStyle = "blue";
        ctx.fillText("Sonra Sağ Tıkla", w+5, 410);
        ctx.fillText("İşte Vurmak için!", w+5, 440);
        ctx.fillStyle = "black";
    }
    
    canvas.addEventListener("click", SetBall);
    addEventListener("keydown", SetBallKey);
}



    function goalKeeper() {

    if (goalUp) { 
    
    if (g1>270 || g1<200) {
    dg1 = -dg1;
    }

    g1 += dg1;

    ctx.drawImage(keeper, g1, 20, 240, 230);
    }
    
    if (saved && !hitPost && !goalUp) { 
        ctx.drawImage(keeperSaved, w-100, 20, 220, 230);
    }

    if (hitPost && !saved && !goalUp) {
        ctx.drawImage(keeperHitPost, w-100, 20, 220, 230);
    }

    if (leftDown) {
        ctx.drawImage(keeperDownL, w-270, 70, 210, 150);
    }

    if (rightDown) {
        ctx.drawImage(keeperDownR, w+60, 70, 210, 150);
    }
    
    }

    function Rd() {

        clearTimeout(leftD);
        clearTimeout(rightD);
        clearTimeout(Saved);
        clearTimeout(HitPost);

        clickLeft = true;  

        goalUp = true;

        saved = false;
        hitPost = false;
        leftDown = false;
        rightDown = false;

        x = w;
        y = 675;

        bowlRse = false;
        SetBalltrue = true;

        clickRightTrue = false;
    
    }

    function Round2(e) {
        if (ctx.isPointInPath(r2.path, e.offsetX, e.offsetY)) {
            Rd();
            
            round2 = false;
            thd = true;
            randomGoal = Math.floor(Math.random() * 1) + 1;
            //console.log(randomGoal);
            canvas.removeEventListener("click", Round2);
         }
     } 

         ///////////////////////////////////////
         function Round2Key() {
            setMenu=false;
            if (keys[32]) {    
                Rd();
                round2 = false;
                thd = true;
                randomGoal = Math.floor(Math.random() * 1) + 1;
                removeEventListener("keydown", Round2Key);
         }
        }
        //////////////////////////////////////////

     function Round3(e) {
        if (ctx.isPointInPath(r2.path, e.offsetX, e.offsetY)) {
            Rd();
            round3 = false;
            foth = true;
            randomGoal = Math.floor(Math.random() * 2) + 1;
            canvas.removeEventListener("click", Round3);
         }
     } 

      ///////////////////////////////////////
      function Round3Key() {
        if (keys[32]) { 
            setMenu=false;
            Rd();
            round3 = false;
            foth = true;
            randomGoal = Math.floor(Math.random() * 1) + 1;
            removeEventListener("keydown", Round3Key);
     }
    }
    //////////////////////////////////////////

     function Round4(e) {
        if (ctx.isPointInPath(r2.path, e.offsetX, e.offsetY)) {
            Rd();
            round4 = false;
            fith = true;
            randomGoal = Math.floor(Math.random() * 2) + 1;
            canvas.removeEventListener("click", Round4);
         }
     } 

     ///////////////////////////////////////
     function Round4Key() {
        if (keys[32]) {    
            Rd();
            round4 = false;
            fith = true;
            randomGoal = Math.floor(Math.random() * 1) + 1;
            removeEventListener("keydown", Round4Key);
     }
    }
    //////////////////////////////////////////

     function Round5(e) {
        if (ctx.isPointInPath(r2.path, e.offsetX, e.offsetY)) {
            Rd();
            round5 = false;
            lastScreen=true;
            //six = true;
            roundsEnd = true; // true if the game is ending
            randomGoal = Math.floor(Math.random() * 1) + 1;
            canvas.removeEventListener("click", Round5);
         }
     }

     ///////////////////////////////////////
     function Round5Key() {
        if (keys[32]) {    
            Rd();
            round5 = false;
            lastScreen = true;
            roundsEnd = true; // true if the game is ending
            randomGoal = Math.floor(Math.random() * 1) + 1;
            removeEventListener("keydown", Round5Key);
     }
    }
    //////////////////////////////////////////


     function Round6(e) {
        if (ctx.isPointInPath(r2.path, e.offsetX, e.offsetY)) {
            round6 = false;
            lastScreen = true;

            /*goalUp = true;

            rightDown = false;
            leftDown = false;
            saved = false;
            hitPost = false;*/

            //randomGoal = Math.floor(Math.random() * 1) + 1;
            canvas.removeEventListener("click", Round6);
         }
     } 

     ///////////////////////////////////////
     function Round6Key() {
        if (keys[32]) {    
            round6 = false;
            lastScreen = true;
            removeEventListener("keydown", Round6Key);
     }
    }
    //////////////////////////////////////////

     function End(e) {
        if (ctx.isPointInPath(r3.path, e.offsetX, e.offsetY)) {

            clickLeft = false;

            goalUp = true;
            saved = false;
            hitPost = false;
            leftDown = false;
            rightDown = false;

            x = w;
            y = 675;

            sec = true;
            bowlRse = false;
            pinLeft = true;
            pinRight = true;
            gameSc = false;
            round1 = true;
            end = false;
            lastScreen = false;
            SetBalltrue = true;
            splashSc = true;
            score=0;
            wellDone = true;
            randomGoal = 3;

            roundsEnd = false;
            firstRd = false;
            //randomGoal = Math.floor(Math.random() * 1) + 1;
            canvas.removeEventListener("click", End);
         }
     } 


     function EndKey() {
        if (keys[32]) {

            clickLeft = false;

            goalUp = true;
            saved = false;
            hitPost = false;
            leftDown = false;
            rightDown = false;

            x = w;
            y = 675;

            sec = true;
            bowlRse = false;
            pinLeft = true;
            pinRight = true;
            gameSc = false;
            round1 = true;
            end = false;
            lastScreen = false;
            SetBalltrue = true;
            splashSc = true;
            score=0;
            wellDone = true;
            randomGoal = 3;

            roundsEnd = false;
            firstRd = false;
            //randomGoal = Math.floor(Math.random() * 1) + 1;
            removeEventListener("keydown", EndKey);
         }
     } 


     function Goals() {
            ctx.fillStyle = "blue";
            ctx.font='900 100px Comic Sans MS';

            if (En) {
                ctx.fillText("Goal!", w, 335);
            }
            if (Ger) {
                ctx.fillText("das Goal!", w, 335);
            }
            if (Rom) {
                ctx.fillText("Poartă!", w, 335);
            }
            if (Bul) {
                ctx.fillText("Гол!", w, 335);
            }
            if (Grk) {
                ctx.fillText("Τέρμα!", w, 335);
            }
            if (Tuk) {
                ctx.fillText("Hedef!", w, 335);
            }            
     }

     function noGoal() {
        ctx.fillStyle = "#FFBF00";
        ctx.font='900 55px Comic Sans MS';
      
        if (saved) {
           if (En) {
               ctx.font='900 65px Comic Sans MS';
               ctx.fillText("Saved", w, 300);
               ctx.font='900 55px Comic Sans MS';
               ctx.fillText("No goal!", w, 350);
            }
            if (Ger) {
                ctx.font='900 65px Comic Sans MS';
                ctx.fillText("Gerettet", w, 300);
                ctx.font='900 55px Comic Sans MS';
                ctx.fillText("Kein Tor!", w, 350);
            }
            if (Rom) {
                ctx.font='900 65px Comic Sans MS';
                ctx.fillText("Salvat", w, 300);
                ctx.font='900 55px Comic Sans MS';
                ctx.fillText("Nici un gol!", w, 350);
            }
            if (Bul) {
                ctx.font='900 65px Comic Sans MS';
                ctx.fillText("Запаметено", w, 300);
                ctx.font='900 55px Comic Sans MS';
                ctx.fillText("Без гол!", w, 350);
            }
            if (Grk) {
                ctx.font='900 65px Comic Sans MS';
                ctx.fillText("Αποθηκεύτηκε", w, 300);
                ctx.font='900 55px Comic Sans MS';
                ctx.fillText("Κανένας στόχος!", w, 350);
            }
            if (Tuk) {
                ctx.font='900 65px Comic Sans MS';
                ctx.fillText("kaydedildi", w, 300);
                ctx.font='900 55px Comic Sans MS';
                ctx.fillText("Gol yok!", w, 350);
            } 
        }

        if (hitPost) {
            if (En) {
                ctx.fillText("Hit the Goalpost", w, 300);
                ctx.fillText("No goal!", w, 350);
            }
            if (Ger) {
                ctx.font='900 40px Comic Sans MS';
                ctx.fillText("Triff den Torpfosten", w, 300);
                ctx.font='900 35px Comic Sans MS';
                ctx.fillText("Kein Tor!", w, 350);
            }
            if (Rom) {
                ctx.font='900 40px Comic Sans MS';
                ctx.fillText("Loviți stâlpul porții", w, 300);
                ctx.font='900 35px Comic Sans MS';
                ctx.fillText("Nici un gol!", w, 350);
            }
            if (Bul) {
                ctx.font='900 40px Comic Sans MS';
                ctx.fillText("Удари вратата", w, 300);
                ctx.font='900 35px Comic Sans MS';
                ctx.fillText("Без гол!", w, 350);
            }
            if (Grk) {
                ctx.font='900 40px Comic Sans MS';
                ctx.fillText("Χτυπήστε το γκολπόστ", w, 300);
                ctx.font='900 35px Comic Sans MS';
                ctx.fillText("Κανένας στόχος!", w, 350);
            }
            if (Tuk) {
                ctx.font='900 40px Comic Sans MS';
                ctx.fillText("Kale direğine vur", w, 300);
                ctx.font='900 35px Comic Sans MS';
                ctx.fillText("Gol yok!", w, 350);
            } 
        }

                      
     }

    function levels() {
        ctx.drawImage(r2, w/2-190, 200, 735, 300);
        ctx.textAlign = "center"; 

        if (!goalUp && (leftDown || rightDown)) {
            if (firstRd) {
                score=1;
                firstRd = false;
            }
            Goals();
        }

        if (saved && !goalUp && (!leftDown || !rightDown)) {
            noGoal();
        }

        if (hitPost && !goalUp && (!leftDown || !rightDown)) {
            noGoal();
        }

        ctx.font='900 40px Comic Sans MS';

        
        if (En) {
            ctx.fillText("Score: " + score, w, 395);
        }
        if (Ger) {
            ctx.fillText("Punktzahl: " + score, w, 395);
        }
        if (Rom) {
            ctx.fillText("Scor: " + score, w, 395);
        }
        if (Bul) {
            ctx.fillText("резултат: " + score, w, 395);
        }
        if (Grk) {
            ctx.fillText("Σκορ: " + score, w, 395);
        }
        if (Tuk) {
            ctx.fillText("Puan: " + score, w, 395);
        }


        ctx.fillStyle = "black";
        

        if (!roundsEnd) {
            
            if (En) {
                ctx.font='900 21px Comic Sans MS';
                ctx.fillText("Click here or Press the Spacebar for the next penalty!", w, 440);
            }
            if (Ger) {
                ctx.font='900 17px Comic Sans MS';
                ctx.fillText("Klicken Sie hier oder drücken Sie die Leertaste für die nächste Strafe!", w, 440);//
            }
            if (Rom) {
                ctx.font='900 16px Comic Sans MS';
                ctx.fillText("Faceți clic aici sau apăsați pe bara de spațiu pentru următoarea penalizare!", w, 440);//
            }
            if (Bul) {
                ctx.font='900 19px Comic Sans MS';
                ctx.fillText("Щракнете тук или натиснете интервала за следващата дузпа!", w, 440);//
            }
            if (Grk) {
                ctx.font='900 17px Comic Sans MS';
                ctx.fillText("Κάντε κλικ εδώ ή πατήστε το πλήκτρο διαστήματος για την επόμενη ποινή!", w, 440);//
            }
            if (Tuk) {
                ctx.font='900 17px Comic Sans MS';
                ctx.fillText("Bir sonraki ceza için buraya tıklayın veya Ara Çubuğuna basın!", w, 440);//
            }
        }

        if (roundsEnd) {
            
            if (En) {
                ctx.fillText("Click Here for the final score!", w+10, 440);
            }
            if (Ger) {
                ctx.fillText("Klicken Sie hier für das Endergebnis!", w+10, 440);
            }
            if (Rom) {
                ctx.fillText("Click aici pentru scorul final!", w+10, 440);
            }
            if (Bul) {
                ctx.fillText("Щракнете тук за крайния резултат!", w+10, 440);
            }
            if (Grk) {
                ctx.fillText("Κάντε κλικ εδώ για την τελική βαθμολογία!", w+10, 440);
            }
            if (Tuk) {
                ctx.fillText("Nihai puan için buraya tıklayın!", w+10, 440);
            }
        }
    
        r2.path = new Path2D();
        r2.path.rect(w/2-100, 100, 365, 400);
    }

    function rounds() {
        if (round2) {
            levels();
            sec = false;
            canvas.addEventListener("click", Round2);
            addEventListener("keydown", Round2Key);
        }

        if (round3) {
            levels();
            thd = false;
            canvas.addEventListener("click", Round3);
            addEventListener("keydown", Round3Key);
        }

        if (round4) {
            levels();
            foth = false;
            canvas.addEventListener("click", Round4);
            addEventListener("keydown", Round4Key);
        }

        if (round5) {
            levels();
            fith = false;
            canvas.addEventListener("click", Round5);
            addEventListener("keydown", Round5Key);
        }

        if (round6) {
            levels();   
            six = false;
            canvas.addEventListener("click", Round6);
            addEventListener("keydown", Round6Key);
        }

        if (end) {
            clearTimeout(leftD);
            clearTimeout(rightD);
            clearTimeout(Saved);
            clearTimeout(HitPost);

            goalUp = true;

            rightDown = false;
            leftDown = false;
            saved = false;
            hitPost = false;
            
            ctx.drawImage(r3, w/2-170, 160, 705, 380);
            ctx.textAlign = "center"; 
            ctx.font='900 70px Comic Sans MS';
            ctx.fillStyle = "blue";

            if (En) {
                ctx.fillText("Game Over!", w+10, 280);
            }

            if (Ger) {
                ctx.fillText("Spiel ist aus!", w+10, 280);
            }
            if (Rom) {
                ctx.fillText("Joc încheiat!", w+10, 280);
            }
            if (Bul) {
                ctx.font='900 50px Comic Sans MS';
                ctx.fillText("Играта приключи!", w+10, 280);
            }
            if (Grk) {
                ctx.font='900 55px Comic Sans MS';
                ctx.fillText("Τέλος παιχνιδιού!", w+10, 280);
            }
            if (Tuk) {
                ctx.fillText("Oyun bitti!", w+10, 280);
            }
                

            if (score >= 0 && score <= 0) {
                ctx.fillStyle = "black";
                ctx.font='900 30px Comic Sans MS';
                    
                if (En) {
                    ctx.fillText("You didn't Score any Goals!", w+10, 333);
                    ctx.drawImage(ohno, w-20, 345, 70, 70);
                    ctx.font='900 30px Comic Sans MS';
                    ctx.fillText("Click Here or Press the Spacebar to Play Again", w+10, 440);
                }
                if (Ger) {
                    
                }
                if (Rom) {
                    
                }
                if (Bul) {
                    
                }
                if (Grk) {
                    
                }
                if (Tuk) {
                    
                }

            }

                
                if (score >= 1 && score <= 1) {
                    ctx.font='900 45px Comic Sans MS';
                    ctx.fillText("You scored " + score + " Goal!", w+10, 328);
                    ctx.drawImage(happy, w-20, 338, 70, 70);
                }

                if (score >= 2 && score <=5) {

                    ctx.font='900 35px Comic Sans MS';
                    
                    if (En) {
                        ctx.fillText("You scored " + score + " Goals!", w+10, 328);
                    }
                    if (Ger) {
                        ctx.fillText("Du hast gepunktet " + score + " Goals!", w+10, 328);
                    }
                    if (Rom) {
                        ctx.fillText("Ai marcat " + score + " Goals!", w+10, 328);
                    }
                    if (Bul) {
                        ctx.fillText("Ти отбеляза гол " + score + " Goals!", w+10, 328);
                    }
                    if (Grk) {
                        ctx.fillText("Σκόραρες " + score + " Goals!", w+10, 328);
                    }
                    if (Tuk) {
                        ctx.fillText("gol attın " + score + " Goals!", w+10, 328);
                    }
                }

            ctx.drawImage(happy, w-20, 338, 70, 70);
    
 
            ctx.fillStyle = "black";
            ctx.font='900 22px Comic Sans MS';

            if (score>=1) {

                if (En) {
                    ctx.fillText("Well Done!", w+10, 445);
                    ctx.fillText("Click Here or Press the Spacebar to Play Again", w+10, 480);
                }

                if (Ger) {
                    ctx.fillText("Gut erledigt!", w+10, 445);
                    ctx.fillText("Klicken Sie hier, um erneut zu spielen", w+10, 480);
                }

                if (Rom) {
                    ctx.fillText("Bine făcut!", w+10, 445);
                    ctx.fillText("Faceți clic aici pentru a juca din nou", w+10, 480);
                }

                if (Bul) {
                    ctx.fillText("Много добре!", w+10, 445);
                    ctx.fillText("Щракнете тук, за да играете отново", w+10, 480);
                }

                if (Grk) {
                    ctx.fillText("Μπράβο!", w+10, 445);
                    ctx.fillText("Κάντε κλικ εδώ για να παίξετε ξανά", w+10, 480);
                }

                if (Tuk) {
                    ctx.fillText("Aferin!", w+10, 445);
                    ctx.fillText("Tekrar Oynamak İçin Buraya Tıklayın", w+10, 480);
                }

            }
            

            r3.path = new Path2D();
            r3.path.rect(w/2-100, 160, 565, 380);
            lastScreen = false;
       
            canvas.addEventListener("click", End);
            addEventListener("keydown", EndKey);

        }

        

    }









    function leftD() {
        goalUp = false;
        rightDown = false;
        hitPost = false;
        leftDown = true;
        saved = false;
        if (effectsOn) {
            Sgoal.play();
            Sgoal.volume = 0.9;
        }
    }

    function rightD() {
        goalUp = false;
        rightDown = true;
        hitPost = false;
        leftDown = false;
        saved = false;
        if (effectsOn) {
            Sgoal.play();
            Sgoal.volume = 0.9;
        }
    }

    function Saved() {
        goalUp = false;
        rightDown = false;
        hitPost = false;
        leftDown = false;
        saved = true;
        if (effectsOn) {
            mGoal.play();
            mGoal.volume = 0.7;
        }
    }
    

    function HitPost() {
        goalUp = false;
        rightDown = false;
        leftDown = false;
        saved = false;
        hitPost = true;
        if (effectsOn) {
            mGoal.play();
            mGoal.volume = 0.7;
        }
    }


    function rolling() {


/////////////////////////////////////////

// Keyboard controls
if (keys[13]) {  
    if (clickRightTrue) {
    clickLeft = true;
    SetBalltrue = false;
    bowlRse = true;
    }
 }

//////////////////////////////////////////////////


    window.addEventListener('contextmenu', (e) => {
        if (clickRightTrue) {

           clickLeft = true;

           SetBalltrue = false;
           bowlRse = true;
           e.preventDefault();
        }
    });





    if (randomGoal<=1 && randomGoal>=1) {
        scoreGiven = true;
        //console.log("randomGoal is " + randomGoal);
    }

    if (randomGoal<=2 && randomGoal>=2) {
        saved = true;
        //console.log("randomGoal is " + randomGoal);
    }

    if (randomGoal<=3 && randomGoal>=3) {
        hitPost = true;
        console.log("randomGoal is " + randomGoal);
        //console.log("hitPost is " + hitPost);
        //console.log("scoregiv is " + scoreGiven);
        //console.log("saved is " + saved);
    }






    if (bowlRse) {

        

        //score dive
        if (footballPlayer && scoreGiven && !hitPost && !saved) {
            x += dx;
            y += dy;
            setTimeout(leftD, 5);
        }

        if (!footballPlayer && scoreGiven && !hitPost && !saved) {
            x -= dx;
            y += dy;
            setTimeout(rightD, 5); 
        }

        ////////////////////////////////////////////////////

        // saved goalkeeper middle
        if (footballPlayer && !scoreGiven && !hitPost && saved) {
            x = w
            y += dyl;
            setTimeout(Saved, 5);
        }

        if (!footballPlayer && !scoreGiven && !hitPost && saved) {
            x = w;
            y += dyl;
            setTimeout(Saved, 5);
        }

        ///////////////////////////////////

        // hit post goalkeeper middle
        if (footballPlayer && hitPost) {
            x += dxh;
            y += dyh;
  
            setTimeout(HitPost, 5);
        }

        if (!footballPlayer && hitPost) {
            x -= dxh;
            y += dyh;

            setTimeout(HitPost, 5);
        }

    }

    // saved
    if (y < 200 && !scoreGiven && !hitPost && saved) {
        Rolling = false; 
        y = 200;
        nextLevel = true;
    }

    // hit post
    if (y < -50 && !scoreGiven && hitPost && !saved) {
        Rolling = false; 
        nextLevel = true;
    }

    // score
    if (y < 50 && scoreGiven && !hitPost && !saved) {
        Rolling = false;
        y = 140;
        score=score+1;
        nextLevel = true;
    }

    round1 = false;
    
    if (nextLevel) {

    if (sec) {
        round2 = true;
    }

    if (thd) {
        round3 = true;
    }

    if (foth) {
        round4 = true;
    }

    if (fith) {
        round5 = true;
    }

    if (six) {
        round6 = true;
    }

    if (lastScreen) {
        end = true;
    } 

    }
}


function playerLck(e) {
if (blueFP) {
    if (ctx.isPointInPath(blueL.path, e.offsetX, e.offsetY)) {  
        footballPlayer = false;
        canvas.removeEventListener("click", playerLck);
     }
}

if (redFP) {
     if (ctx.isPointInPath(redL.path, e.offsetX, e.offsetY)) {  
        footballPlayer = false;
        canvas.removeEventListener("click", playerLck);
     }
}
}

function playerLckKey() {
    if (blueFP) {
        if (keys[32]) {  
            footballPlayer = false;
            removeEventListener("keydown", playerLckKey);
         }
    }
    
    if (redFP) {
         if (keys[32]) {
            footballPlayer = false;
            removeEventListener("keydown", playerLckKey);
         }
    }
}

function playerRck(e) {
if (blueFP) {
    if (ctx.isPointInPath(blueR.path, e.offsetX, e.offsetY)) {
        footballPlayer = true;
        canvas.removeEventListener("click", playerRck);
    }
}

if (redFP) {
    if (ctx.isPointInPath(redR.path, e.offsetX, e.offsetY)) {
        footballPlayer = true;
        canvas.removeEventListener("click", playerRck);
    }
}
}

 function playerRckKey() {
 if (blueFP) {
    if (keys[32]) {  
        footballPlayer = true;
        removeEventListener("keydown", playerRckKey);
     }
}

if (redFP) {
     if (keys[32]) {
        footballPlayer = true;
        removeEventListener("keydown", playerRckKey);
     }
}
}

function Game() {

    

    ctx.drawImage(goal, 0, 0, 715, 750);

    ctx.drawImage(ball, x-28, y, 60, 60);





    

    if (footballPlayer) {

        if (blueFP) {
            ctx.drawImage(blueL, w-170, 480, 170, 260);
            blueL.path = new Path2D();
            blueL.path.rect(w-170, 480, 170, 260);
            canvas.addEventListener("click", playerLck);

            addEventListener("keydown", playerLckKey);
        }

        if (redFP) {
            ctx.drawImage(redL, w-170, 480, 170, 260);
            redL.path = new Path2D();
            redL.path.rect(w-170, 480, 170, 260);
            canvas.addEventListener("click", playerLck);

            addEventListener("keydown", playerLckKey);
        }
    
    }

    if (!footballPlayer) {

        if (blueFP) {
            ctx.drawImage(blueR, w+2, 480, 170, 260);
            blueR.path = new Path2D();
            blueR.path.rect(w+2, 480, 170, 260);
            canvas.addEventListener("click", playerRck);

            addEventListener("keydown", playerRckKey);
        }

        if (redFP) {
            ctx.drawImage(redR, w+2, 480, 170, 260);
            redR.path = new Path2D();
            redR.path.rect(w+2, 480, 170, 260);
            canvas.addEventListener("click", playerRck);

            addEventListener("keydown", playerRckKey);
        } 
    }

    goalKeeper();
    rounds();
}


function playGame() {

    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    
    if (setMenu) {
        showMenu();
    }

    if (splashSc && !setMenu) {
        Splash();
    }
    
    if (insSc && !setMenu) {
        Ins();
    }  
    
    if (gameSc && !setMenu) {
  
        Game();

        //introSpAud.pause();
        //introSpAud.currentTime = 0;

        if (SetBalltrue) {
            setBall();
        }

        if (Rolling) {
            rolling();
            clickRightTrue = true;
        }        
    }
}

function animate() {  
    
    playGame();

    if (musicOn) {
        cheeringAud.play();
        cheeringAud.volume = 0.2;
    }
    
    if (!musicOn) {
        cheeringAud.pause();
        cheeringAud.currentTime = 0;
    }

    requestAnimationFrame(animate);
    
}

requestAnimationFrame(animate);
