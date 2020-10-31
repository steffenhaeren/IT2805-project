//NAVBAR:
const path = window.location.pathname;
const page = path.split("/").pop();
console.log(`navbar lastet inn på side ${page}.`);

let loca = ".";
let home = "..";
if (page == "hjem.html") {
  loca = "./pages";
  home = ".";
}

document.getElementById("navbar").className = "underlinje";

const logoa = document.createElement("a");
logoa.href = home + "/hjem.html";
logoa.id = "logoa";

document.getElementById("navbar").appendChild(logoa);
const div = document.createElement("div");
div.id = "logoDiv";
document.getElementById("logoa").appendChild(div);
const logo = document.createElement("img");
logo.src = home + "/bilder/mp.png";
logo.id = "l";
logo.alt = "logo";
document.getElementById("logoDiv").appendChild(logo);
const moon = document.createElement("img");
moon.id = "lb";
moon.src = home + "/bilder/logo.png";
document.getElementById("logoDiv").appendChild(moon);

const politikk = document.createElement("a");
politikk.href = loca + "/politikk.html";
politikk.innerHTML = "<h1 class='fancyUnderline'>Politikk</h1>";
politikk.id = "n1";
document.getElementById("navbar").appendChild(politikk);

const partiet = document.createElement("a");
partiet.href = loca + "/partiet.html";
partiet.innerHTML = "<h1 class='fancyUnderline'>Partiet</h1>";
partiet.id = "n2";
document.getElementById("navbar").appendChild(partiet);

const romfart = document.createElement("a");
romfart.href = loca + "/romfart.html";
romfart.innerHTML = "<h1 class='fancyUnderline'>Romfart på 1,2,3</h1>";
romfart.id = "n3";
document.getElementById("navbar").appendChild(romfart);

const dropdown = document.createElement("div");
dropdown.id = "dropdown";
document.getElementById("navbar").appendChild(dropdown);
const støtt = document.createElement("a");
støtt.id = "støtt";
støtt.innerHTML = "<h1>Støtt oss</h1>";
document.getElementById("dropdown").appendChild(støtt);
const medlem = document.createElement("a");
medlem.id = "medlem";
medlem.href = loca + "/medlem.html";
medlem.innerHTML = "<h1 class='fancyUnderline'>Bli medlem</h1>";
document.getElementById("dropdown").appendChild(medlem);
const gave = document.createElement("a");
gave.id = "gave";
gave.href = loca + "/gave.html";
gave.innerHTML = "<h1 class='fancyUnderline'>Gi gave</h1>";
document.getElementById("dropdown").appendChild(gave);

//FOOTER:
document.getElementById("footer").className = "underlinje";
const logof = document.createElement("img");
logof.id = "logof";
logof.src = home + "/bilder/mp.png";
document.getElementById("footer").appendChild(logof);

const t1 = document.createElement("div");
t1.id = "t1";
t1.innerHTML =
  "<h3>Info:</h3><p>Månegata 42, 1337 Månen</p><p>Kontonummer: 1234 56 78912</p><p>Vipps: 95148025</p>";

document.getElementById("footer").appendChild(t1);
const t2 = document.createElement("div");
t2.id = "t2";
t2.innerHTML =
  "<h3>Pressehenvendelser:</h3><p>presse@maanen.no</p><p>45102693</p>";
document.getElementById("footer").appendChild(t2);

const t3 = document.createElement("div");
t3.id = "t3";
t3.innerHTML = "<h3>Sosiale medier:</h3>";
document.getElementById("footer").appendChild(t3);
const ut1 = document.createElement("p");
ut1.innerHTML =
  "<i class='fab fa-facebook'></i> <a href='#' class='fancyUnderline'>Facebook</a>";
document.getElementById("t3").appendChild(ut1);
const ut2 = document.createElement("p");
ut2.innerHTML =
  "<i class='fab fa-instagram'></i> <a href='#' class='fancyUnderline'>Instagram</a>";
document.getElementById("t3").appendChild(ut2);
const ut3 = document.createElement("p");
ut3.innerHTML =
  "<i class='fab fa-twitter'></i> <a href='#' class='fancyUnderline'>Twitter</a>";
document.getElementById("t3").appendChild(ut3);
const ut4 = document.createElement("p");
ut4.innerHTML =
  "<i class='fab fa-youtube'></i> <a href='#' class='fancyUnderline'>Youtube</a>";
document.getElementById("t3").appendChild(ut4);
