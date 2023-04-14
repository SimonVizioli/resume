var themeSelected = "dark";
var hide = false;
const themeToggle = () => {
    var id = document.getElementById("buttonToggle");
    id.addEventListener("click", cambiarTema);
};

const cambiarTema = () => {
    if (themeSelected === "dark") {
        document.getElementById("temaOscuro").classList = "darkTheme";
        document.getElementById("buttonContacto").classList = "contactoLight";
        document.getElementById("buttonToggle").classList = "buttonToggleLight";
        themeSelected = "white";
    } else {
        document.getElementById("temaOscuro").classList = "lightTheme";
        document.getElementById("buttonContacto").classList = "contactoDark";
        document.getElementById("buttonToggle").classList = "buttonToggleDark";
        themeSelected = "dark";
    }
};

function mostrarInformacion() {
    if (hide == true) {
        document.getElementById("infoBox").classList = "hide";
        hide = false;
    } else {
        document.getElementById("infoBox").classList = "show";
        hide = true;
    }
}
