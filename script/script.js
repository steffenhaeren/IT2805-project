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
const logo = document.createElement("img");
logo.src = home + "/bilder/logo.png";
logo.alt = "logo";
logo.width = "100%";
logo.height = "100%";
document.getElementById("logoa").appendChild(logo);

const politikk = document.createElement("a");
politikk.href = loca + "/politikk.html";
politikk.innerHTML = "<h1>Politikk</h1>";
politikk.id = "n1";
document.getElementById("navbar").appendChild(politikk);

const partiet = document.createElement("a");
partiet.href = loca + "/partiet.html";
partiet.innerHTML = "<h1>Partiet</h1>";
partiet.id = "n2";
document.getElementById("navbar").appendChild(partiet);

const romfart = document.createElement("a");
romfart.href = loca + "/romfart.html";
romfart.innerHTML = "<h1>Romfart på 1,2,3</h1>";
romfart.id = "n3";
document.getElementById("navbar").appendChild(romfart);

const støtt = document.createElement("a");
støtt.id = "støtt";
støtt.innerHTML = "<h1 id='far'>Støtt oss</h1>";
document.getElementById("navbar").appendChild(støtt);
const medlem = document.createElement("a");
medlem.id = "medlem";
medlem.href = loca + "/medlem.html";
medlem.innerHTML = "<br><h1>Bli medlem</h1>";
document.getElementById("far").appendChild(medlem);
const gave = document.createElement("a");
gave.id = "gave";
gave.href = loca + "/gave.html";
gave.innerHTML = "<br><h1>Gi gave</h1>";
document.getElementById("far").appendChild(gave);

//FOOTER:
const logof = document.createElement("img");
logof.id = "logof";
logof.src = home + "/bilder/logo.png";
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
ut1.innerHTML = "<i class='fab fa-facebook'></i> <a href='#'>Facebook</a>";
document.getElementById("t3").appendChild(ut1);
const ut2 = document.createElement("p");
ut2.innerHTML = "<i class='fab fa-instagram'></i> <a href='#'>Instagram</a>";
document.getElementById("t3").appendChild(ut2);
const ut3 = document.createElement("p");
ut3.innerHTML = "<i class='fab fa-twitter'></i> <a href='#'>Twitter</a>";
document.getElementById("t3").appendChild(ut3);
const ut4 = document.createElement("p");
ut4.innerHTML = "<i class='fab fa-youtube'></i> <a href='#'>Youtube</a>";
document.getElementById("t3").appendChild(ut4);
