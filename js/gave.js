let total = 0;

//event listeres
const caps = get("#caps");
caps.addEventListener("change", addCaps);

const kopp = get("#kopp");
kopp.addEventListener("change", addKopp);

const tskjorte = get("#t-skjorte");
tskjorte.addEventListener("change", addTskjorte);

const rocket = get("#rocket-launch");
rocket.addEventListener("change", addRocket);

const donasjon = get("#donasjon");
donasjon.addEventListener("change", addDonasjon);

const reset = get("#reset");
reset.addEventListener("click", reset_total);

function submit_form() {
  alert("Du donerte " + total + " kroner, tusen takk!");
}

// funksjon som resetter total
function reset_total() {
  get("#kopp").checked = false;
  get("#caps").checked = false;
  get("#t-skjorte").checked = false;
  get("#rocket-launch").checked = false;
  get("#donasjon").value = 0;
  total = 0;
  updateOutput();
}

// legger til verdiet i donasjon inputfeltet, hvis input-feltet er tomt settes verdien til 0 for å unngå å få NaN
function addDonasjon() {
  if (donasjon.value == "") {
    donasjon.value = 0;
  }
  let verdi = parseInt(donasjon.value);
  total = total + verdi;
  updateOutput();
  console.log(total);
}

// funksjoner som legger til verdien til merchen
function addCaps() {
  let verdi = parseInt(this.value);
  if (this.checked) {
    total = total + verdi;
  } else {
    total = total - verdi;
  }
  updateOutput();
  console.log(total);
}

function addKopp() {
  let verdi = parseInt(this.value);
  if (this.checked) {
    total = total + verdi;
  } else {
    total = total - verdi;
  }
  updateOutput();
  console.log(total);
}

function addTskjorte() {
  let verdi = parseInt(this.value);
  if (this.checked) {
    total = total + verdi;
  } else {
    total = total - verdi;
  }
  updateOutput();
  console.log(total);
}

function addRocket() {
  let verdi = parseInt(this.value);
  if (this.checked) {
    total = total + verdi;
  } else {
    total = total - verdi;
  }
  updateOutput();
  console.log(total);
}

// funksjon som oppdaterer totalverdien
function updateOutput() {
  const output = get("#totalt");
  output.innerHTML = total;
}

// funksjon som gjør livet enklere
function get(selector) {
  return document.querySelector(selector);
}
