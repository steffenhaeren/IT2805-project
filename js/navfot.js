//finner hvor vi er i filstrukturen
const test = document.getElementById("footer").className;
console.log(`navbar lastet inn.`);
//lager pathsene til sidene pga hjem.html befinner seg et annet sted enn pages
let loca = ".";
let home = "..";
if (test == "anchor") {
  console.log("side er index");
  loca = "./pages";
  home = ".";
}

//NAVBAR:
document.getElementById("navbar").className = "underlinje";
const logoa = document.createElement("a");
logoa.href = home + "/index.html";
logoa.id = "logoa";
//logo med animasjon:
document.getElementById("navbar").appendChild(logoa);
const div = document.createElement("div");
div.id = "logoDiv";
document.getElementById("logoa").appendChild(div);
const logo = document.createElement("img");
logo.src = home + "/img/mp.png";
logo.id = "l";
logo.alt = "logo";
document.getElementById("logoDiv").appendChild(logo);
const moon = document.createElement("img");
moon.id = "lb";
moon.src = home + "/img/logo.png";
document.getElementById("logoDiv").appendChild(moon);
/*de forsjellige linkene*/
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
/*droppdown-meny*/
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
//logo:
const logof = document.createElement("img");
logof.id = "logof";
logof.src = home + "/img/mp.png";
document.getElementById("footer").appendChild(logof);
//kontaktinfo
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
//linker:
const t3 = document.createElement("div");
t3.id = "t3";
t3.innerHTML = "<h3>Sosiale medier:</h3>";
document.getElementById("footer").appendChild(t3);
const ut1 = document.createElement("p");
ut1.innerHTML =
  "<i class='fab fa-facebook'></i> <a href='https://www.1001spill.no/spill/russian_car_driver_hd', target='_blank', class='fancyUnderline'>Facebook</a>";
document.getElementById("t3").appendChild(ut1);
const ut2 = document.createElement("p");
ut2.innerHTML =
  "<i class='fab fa-instagram'></i> <a href='https://ikkepedia.org/wiki/M%C3%A5nen', target='_blank', class='fancyUnderline'>Instagram</a>";
document.getElementById("t3").appendChild(ut2);
const ut3 = document.createElement("p");
ut3.innerHTML =
  "<i class='fab fa-twitter'></i> <a href='https://boards.4channel.org/mlp/thread/36079387', target='_blank', class='fancyUnderline'>Twitter</a>";
document.getElementById("t3").appendChild(ut3);
const ut4 = document.createElement("p");
ut4.innerHTML =
  "<i class='fab fa-youtube'></i> <a href='http://endless.horse/', target='_blank', class='fancyUnderline'>Youtube</a>";
document.getElementById("t3").appendChild(ut4);
