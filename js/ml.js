/*
 * Script qui contrôle l'état de la case à cocher pour fermer
 * le menu quand on clique sur un bouton
 */
let leCheckBox = document.getElementById("menuBurger");
/*Récupérer les boutons du menu*/
let lesBoutons = document.querySelectorAll("nav ul > li a");
console.log("Tableau des 4 boutons: ", lesBoutons);

for (let unBouton of lesBoutons) {
  unBouton.addEventListener("click", controlerBoutonBurger);
}

function controlerBoutonBurger() {
  //Gérer l'état de la case à cocher
  // leCheckBox.checked = false;
  //Remettre la barre de défilement sur le body
  // leBody.style.overflowY = "hidden";

  //ou plus simple:
  console.log("Allo");
  leCheckBox.click();
}

//function qui me permettra de toggle la nouvelle classe dans .personnel

document.addEventListener("DOMContentLoaded", function () {
  const personnelItems = document.querySelectorAll(".personnel");

  personnelItems.forEach((personnel) => {
    personnel.addEventListener("click", function () {
      const personnelTexte = this.querySelector(".personnelTexte");

      // Toggle la classe display
      personnelTexte.classList.toggle("personneTexteDisplay");
    });
  });
});
