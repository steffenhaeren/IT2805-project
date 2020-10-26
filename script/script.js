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
logo.width = "200";
logo.height = "100";
document.getElementById("logoa").appendChild(logo);

const politikk = document.createElement("a");
politikk.href = loca + "/politikk.html";
politikk.innerText = "Politikk";
document.getElementById("navbar").appendChild(politikk);

const partiet = document.createElement("a");
partiet.href = loca + "/partiet.html";
partiet.innerText = "Partiet";
document.getElementById("navbar").appendChild(partiet);

const romfart = document.createElement("a");
romfart.href = loca + "/romfart.html";
romfart.innerText = "Romfart på 1,2,3";
document.getElementById("navbar").appendChild(romfart);

const støtt = document.createElement("a");
støtt.id = "støtt";
støtt.href = loca + "/gave.html";
støtt.innerText = "Støtt oss";
document.getElementById("navbar").appendChild(støtt);
