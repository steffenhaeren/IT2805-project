const path = window.location.pathname;
const page = path.split("/").pop();
console.log(`navbar lastet inn på side ${page}.`);

let loca = ".";
let home = "..";
if (page == "hjem.html") {
  loca = "./pages";
  home = ".";
}

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
