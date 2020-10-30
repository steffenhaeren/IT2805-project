window.onscroll = rakett = () => {
  let prosent =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  console.log(prosent);
  let verdi = window.innerHeight * prosent + -100;
  document.getElementById("lander").style.marginTop = verdi.toString() + "px";
};
