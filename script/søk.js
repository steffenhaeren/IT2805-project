//funksjon for å ha samme text til samme ord:
let last = "";
let verdi = "";
//søkefunksjon:
const søk = () => {
  last = verdi;
  verdi = document.getElementById("søkemotor").value;
  if (document.getElementById("søkemotor").value && verdi != last) {
    let text = "";
    const lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const ord = lorem.split(" ");
    const random = Math.floor(Math.random() * ord.length);

    let i = 0;

    while (i <= random + 200) {
      text = text + " " + ord[Math.floor(Math.random() * ord.length)];
      i = i + 1;
    }

    document.getElementById("outputt").innerText = verdi + ":" + text;
  }
};
//få enterfunskjonen til å funke
document
  .getElementById("søkemotor")
  .addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      søk();
    }
  });
