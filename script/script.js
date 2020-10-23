console.log("navbar lastet inn");

const logo = document.createElement("IMG");
logo.src = "logo.jpg";
logo.alt = "logo";
logo.width = "300";
logo.height = "500";
logo.href = "hjem.html";
document.getElementById("navbar").appendChild(logo);

const politikk = document.createElement("a");
politikk.href = "politikk.html";
politikk.innerText = "Politikk";
document.getElementById("navbar").appendChild(politikk);

const partiet = document.createElement("a");
partiet.innerHTML = "href='partiet.html'";
partiet.innerText = "Partiet";
document.getElementById("navbar").appendChild(partiet);

const romfart = document.createElement("a");
romfart.innerHTML = "href='romfart.html'";
romfart.innerText = "Romfart på 1,2,3";
document.getElementById("navbar").appendChild(romfart);

const støtt = document.createElement("a");
støtt.innerHTML = "href='gave.html'";
støtt.innerText = "Støtt oss";
document.getElementById("navbar").appendChild(støtt);
