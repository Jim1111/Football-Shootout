
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

var clickRightTrue = true;

// center text
var w = canvas.width / 2;

var roundsEnd = false;



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

      

      ctx.textAlign = "left";

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
    // End of Music


    // Speech
  
    ctx.drawImage(menuHead, 410, 130, 250, 50);

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

    // End of Speech

    // Translations
  
    ctx.fillStyle = "white";

      ctx.drawImage(menuHead, 62, 320, 250, 50);

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
    

    
    // End of Translations

    // Effects
  
    ctx.drawImage(menuHead, 410, 320, 250, 50);

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




// Effects
  
    ctx.drawImage(menuHead, 410, 320, 250, 50);

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

    // End of Player Selection



    


    ctx.textAlign = "center"; 

    ctx.drawImage(cross, w-30, 675, 50, 50);

    cross.path = new Path2D();
    cross.path.rect(w-30, 675, 50, 50);

    canvas.addEventListener("click", endMenu);

  
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

function settingsOpen(e) {
    if (ctx.isPointInPath(settings.path, e.offsetX, e.offsetY)) {
        setMenu=true;
        canvas.removeEventListener("click", settingsOpen);
        }
    }

function Splash() {
    ctx.drawImage(splash_img, 0, 0, 800, 800);
    ctx.drawImage(settings, 600, 0, 80, 80);
    settings.path = new Path2D();
    settings.path.rect(600, 0, 100, 100);

    

    ctx.textAlign = "center";
    ctx.font='400 17px Arial';
    ctx.fillStyle = "white";

    
    if (En) {
        ctx.fillText("Settings", 640, 85);
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
        ctx.fillText("Start Game!", w, 575);
    }
    if (Ger) {
        ctx.fillText("Spiel beginnen!", w, 575);
    }
    if (Rom) {
        ctx.fillText("Incepe jocul!", w, 575);
    }
    if (Bul) {
        ctx.fillText("Започни игра!", w, 575);
    }
    if (Grk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Ξεκίνα το παιχνίδι!", w, 575);
    }
    if (Tuk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Oyunu başlatmak!", w, 575);
    }

    splEnd.path = new Path2D();
    splEnd.path.rect(w/2-40, 465, 450, 200);

    canvas.addEventListener("click", settingsOpen);
    canvas.addEventListener("click", SplashEnd);
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








function Ins() {
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
        ctx.fillText("", w, 260);
        ctx.fillText("", w, 310);
        ctx.fillText("", w, 360);
    }
    if (Tuk) {
        ctx.fillText("", w, 260);
        ctx.fillText("", w, 310);
        ctx.fillText("", w, 360);
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
        ctx.fillText("Let's Go!", w, 520);
    }
    if (Ger) {
        ctx.font='900 35px Arial';
        ctx.fillText("Lass uns gehen!", w, 505);
    }
    if (Rom) {
        ctx.font='900 35px Arial';
        ctx.fillText("Sa mergem!", w, 510);
    }
    if (Bul) {
        ctx.fillText("Да тръгваме!", w, 514);
    }
    if (Grk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Πάμε!", w, 510);
    }
    if (Tuk) {
        ctx.font='900 35px Arial';
        ctx.fillText("Hadi gidelim!", w, 510);
    }

    insEnd.path = new Path2D();
    insEnd.path.rect(w/2-40, 465, 450, 200);
    canvas.addEventListener("click", InsEnd);
}

// Set up Bowling Ball //

function SetBall(e) {
    if (clickLeft && ctx.isPointInPath(setBowl.path, e.offsetX, e.offsetY)) {    
        Rolling = true;
        clickRightTrue = true;
    }
}

function setBall() {
    nextLevel = false;
    ctx.drawImage(setBowl, w/2-65, 225, 495, 265);
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

    //console.log("clickRightTrue is " + clickRightTrue);
    //console.log("SetBalltrue is " + SetBalltrue);
    //console.log("bowlRse is " + bowlRse);

    if (En) {
        ctx.fillStyle = "black";
        ctx.fillText("Move the position of the", w+10, 300);
        ctx.fillText("football player by Left Clicking", w+10, 340);
        ctx.fillText("on the player", w, 380);
        ctx.fillStyle = "blue";
        ctx.fillText("Then Right Click Here to Shoot!", w, 430);
        ctx.fillStyle = "black";
    }
    if (Ger) {
        ctx.fillText("Verschieben Sie die Position der", w+10, 470);
        ctx.fillText("Bowlingkugel durch Linksklick", w+10, 500);
        ctx.fillText("auf diesem Etikett", w, 530);

        ctx.fillText("Dann Rechtsklick auf", w+5, 575);
        ctx.fillText("um den Ball loszulassen!", w+5, 605);
    }
    if (Rom) {
        ctx.fillText("Mutați poziția", w+10, 470);
        ctx.fillText("minge de bowling prin clic stânga", w+10, 500);
        ctx.fillText("pe această etichetă", w, 530);

        ctx.fillText("Apoi faceți clic dreapta pentru", w+5, 575);
        ctx.fillText("sa eliberez mingea!", w+5, 605);
    }
    if (Bul) {
        ctx.font='900 21px Comic Sans MS';  
        ctx.fillText("Преместете позицията на", w+10, 470);
        ctx.fillText("топка за боулинг с ляв клик", w+10, 500);
        ctx.fillText("на този етикет", w, 530);

        ctx.fillText("След това щракнете с десния бутон за", w+5, 575);
        ctx.fillText("да пусне топката!", w+5, 605);
    }
    if (Grk) {
        ctx.font='900 24px Comic Sans MS';  
        ctx.fillText("Μετακινήστε τη θέση του", w+10, 470);
        ctx.fillText("μπάλα μπόουλινγκ με αριστερό κλικ", w+10, 500);
        ctx.fillText("σε αυτή την ετικέτα", w, 530);

        ctx.fillText("Στη συνέχεια, κάνετε δεξί κλικ στο", w+5, 575);
        ctx.fillText("να αφήσει την μπάλα!", w+5, 605);
    }
    if (Tuk) {
        ctx.fillText("konumunu hareket ettirin", w+10, 470);
        ctx.fillText("Sol Tıklama ile bowling topu", w+10, 500);
        ctx.fillText("bu etikette", w, 530);

        ctx.fillText("Ardından Sağ Tıklayarak", w+5, 575);
        ctx.fillText("topu serbest bırakmak için!", w+5, 605);
    }
    
    canvas.addEventListener("click", SetBall);
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

     function Round3(e) {
        if (ctx.isPointInPath(r2.path, e.offsetX, e.offsetY)) {
            Rd();
            round3 = false;
            foth = true;
            randomGoal = Math.floor(Math.random() * 2) + 1;
            canvas.removeEventListener("click", Round3);
         }
     } 

     function Round4(e) {
        if (ctx.isPointInPath(r2.path, e.offsetX, e.offsetY)) {
            Rd();
            round4 = false;
            fith = true;
            randomGoal = Math.floor(Math.random() * 2) + 1;
            canvas.removeEventListener("click", Round4);
         }
     } 

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


     function Goals() {
            ctx.fillStyle = "blue";
            ctx.font='900 100px Comic Sans MS';

            if (En) {
                ctx.fillText("Goal!", w, 335);
            }
            if (Ger) {
                ctx.font='600 52px Arial';
                ctx.fillText("Punktzahl: " + score, w, 70);
            }
            if (Rom) {
                ctx.fillText("Scor: " + score, w, 70);
            }
            if (Bul) {
                ctx.fillText("резултат: " + score, w, 70);
            }
            if (Grk) {
                ctx.fillText("Σκορ: " + score, w, 70);
            }
            if (Tuk) {
                ctx.fillText("Puan: " + score, w, 70);
            }            
     }

     function noGoal() {
        ctx.fillStyle = "#FFBF00";
            ctx.font='900 55px Comic Sans MS';

            if (En) {
                if (saved) {
                    ctx.font='900 65px Comic Sans MS';
                    ctx.fillText("Saved", w, 300);
                    ctx.font='900 55px Comic Sans MS';
                    ctx.fillText("No goal!", w, 350);
                }
                if (hitPost) {
                    ctx.fillText("Hit the Goalpost", w, 300);
                    ctx.fillText("No goal!", w, 350);
                }
            }
            if (Ger) {
                ctx.font='600 52px Arial';
                ctx.fillText("Punktzahl: " + score, w, 70);
                }
            if (Rom) {
                ctx.fillText("Scor: " + score, w, 70);
                }
            if (Bul) {
                ctx.fillText("резултат: " + score, w, 70);
                }
            if (Grk) {
                ctx.fillText("Σκορ: " + score, w, 70);
                }
            if (Tuk) {
                ctx.fillText("Puan: " + score, w, 70);
                }            
     }

    function levels() {
        ctx.drawImage(r2, w/2-100, 200, 565, 300);
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
        ctx.fillText("Score: " + score, w, 395);
        ctx.fillStyle = "black";
        ctx.font='900 23px Comic Sans MS';

        if (!roundsEnd) {
            ctx.fillText("Click here for the next penalty!", w+10, 440);
        }

        if (roundsEnd) {
            ctx.fillText("Click Here for the final score!", w+10, 440);
        }
    
        r2.path = new Path2D();
        r2.path.rect(w/2-100, 100, 365, 400);
    }

    function rounds() {
        if (round2) {
            levels();
            sec = false;
            canvas.addEventListener("click", Round2);
        }

        if (round3) {
            levels();
            thd = false;
            canvas.addEventListener("click", Round3);
        }

        if (round4) {
            levels();
            foth = false;
            canvas.addEventListener("click", Round4);
        }

        if (round5) {
            levels();
            fith = false;
            canvas.addEventListener("click", Round5);
        }

        if (round6) {
            levels();   
            six = false;
            canvas.addEventListener("click", Round6);
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
            
            ctx.drawImage(r3, w/2-100, 160, 565, 380);
            ctx.textAlign = "center"; 
            ctx.font='900 70px Comic Sans MS';
            ctx.fillStyle = "blue";

            if (En) {
                ctx.fillText("Game Over!", w+10, 280);

                if (score >= 0 && score <= 0) {
                    ctx.fillStyle = "black";
                    ctx.font='900 30px Comic Sans MS';
                    ctx.fillText("You didn't Score any Goals!", w+10, 333);
                    ctx.drawImage(ohno, w-20, 345, 70, 70);
                    ctx.font='900 30px Comic Sans MS';
                    ctx.fillText("Click Here to Play Again", w+10, 440);
                 }

                if (Ger) {
                    ctx.fillText("Spiel ist aus!", w+10, 475);
                }
                if (Rom) {
                    ctx.fillText("Joc încheiat!", w+10, 475);
                }
                if (Bul) {
                    ctx.fillText("Играта приключи!", w+10, 475);
                }
                if (Grk) {
                    ctx.fillText("Τέλος παιχνιδιού!", w+10, 475);
                }
                if (Tuk) {
                    ctx.fillText("Oyun bitti!", w+10, 475);
                }
                
                if (score >= 1 && score <= 1) {
                    ctx.font='900 45px Comic Sans MS';
                    ctx.fillText("You scored " + score + " Goal!", w+10, 328);
                    ctx.drawImage(happy, w-20, 338, 70, 70);
                }

                if (score >= 2 && score <=5) {
                    ctx.font='900 45px Comic Sans MS';
                    ctx.fillText("You scored " + score + " Goals!", w+10, 328);
                    ctx.drawImage(happy, w-20, 338, 70, 70);
                }

            }
 
            ctx.fillStyle = "black";
            ctx.font='900 14px Comic Sans MS';

            if (score>=1) {

                if (En) {
                    ctx.font='900 30px Comic Sans MS';
                    ctx.fillText("Well Done!", w+10, 445);
                    ctx.fillText("Click Here to Play Again", w+10, 480);
                }

                if (Ger) {
                    ctx.fillText("Gut erledigt! - Klicken Sie hier, um erneut zu spielen", w+10, 545);
                }

                if (Rom) {
                    ctx.fillText("Bine făcut! - Faceți clic aici pentru a juca din nou", w+10, 545);
                }

                if (Bul) {
                    ctx.fillText("Много добре! - Щракнете тук, за да играете отново", w+10, 545);
                }

                if (Grk) {
                    ctx.fillText("Μπράβο! - Κάντε κλικ εδώ για να παίξετε ξανά", w+10, 545);
                }

                if (Tuk) {
                    ctx.fillText("Aferin! - Tekrar Oynamak İçin Buraya Tıklayın", w+10, 545);
                }

            }
            

            r3.path = new Path2D();
            r3.path.rect(w/2-100, 160, 565, 380);
            lastScreen = false;
       
            canvas.addEventListener("click", End);

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

function Game() {

    

    ctx.drawImage(goal, 0, 0, 715, 750);

    ctx.drawImage(ball, x-28, y, 60, 60);





    

    if (footballPlayer) {

        if (blueFP) {
            ctx.drawImage(blueL, w-170, 480, 170, 260);
            blueL.path = new Path2D();
            blueL.path.rect(w-170, 480, 170, 260);
            canvas.addEventListener("click", playerLck);
        }

        if (redFP) {
            ctx.drawImage(redL, w-170, 480, 170, 260);
            redL.path = new Path2D();
            redL.path.rect(w-170, 480, 170, 260);
            canvas.addEventListener("click", playerLck);
        }
    
    }

    if (!footballPlayer) {

        if (blueFP) {
            ctx.drawImage(blueR, w+2, 480, 170, 260);
            blueR.path = new Path2D();
            blueR.path.rect(w+2, 480, 170, 260);
            canvas.addEventListener("click", playerRck);
        }

        if (redFP) {
            ctx.drawImage(redR, w+2, 480, 170, 260);
            redR.path = new Path2D();
            redR.path.rect(w+2, 480, 170, 260);
            canvas.addEventListener("click", playerRck);
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
    
    if (gameSc) {
  
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
