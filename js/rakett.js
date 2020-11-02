/*funksjon som kjører on scroll*/
window.onscroll = rakett = () => {
  /*regner ut prosentandelen av siden som er skrollet ned*/
  let prosent =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  /*finner avstanden ned på siden som tilsvarer prosenten*/
  let verdi = window.innerHeight * prosent - 100;
  /*flytter på romskipet*/
  document.getElementById("lander").style.marginTop = verdi.toString() + "px";
};
