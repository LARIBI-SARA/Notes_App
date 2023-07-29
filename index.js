const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
/*let notes = document.querySelector(".input-box");*/

function updateStorage() {

localStorage.setItem("notes",notesContainer.innerHTML);

}

function showNotes(){

    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

createBtn.addEventListener("click", ()=> {

let inputBox = document.createElement("p");
let img = document.createElement("img");
inputBox.className = "input-box";
inputBox.setAttribute("contenteditable","true");
inputBox.setAttribute("placeholder","Write her ");

img.src = "images/delete.png";
notesContainer.appendChild(inputBox).appendChild(img);

})
notesContainer.addEventListener("click", function(e){

    /* On va les stocker d'abord */
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box"); /*All the children of input-box*/ 
        notes.forEach(nt => { /* for each element in notes taper on le store */

            nt.onkeyup = function(){
            /*une boucle forEach est utilisée pour itérer sur chaque élément nt dans notes.
                Pour chaque élément, un gestionnaire d'événements onkeyup est défini avec 
                la fonction de rappel anonyme function(){ updateStorage(); }. Cela signifie
                que chaque fois qu'une touche est relâchée dans l'une des zones de texte,
                la fonction updateStorage() est appelée pour mettre à jour les données 
                stockées localement avec le contenu modifié de la note. */
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event => {
    if (event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
/*La fonction addEventListener() est utilisée pour ajouter un gestionnaire d'événements
 à l'objet document (le document HTML). Cela permet de détecter les événements qui se 
 produisent au niveau global de la page.

L'événement spécifié dans ce cas est "keydown", ce qui signifie qu'il se déclenchera 
lorsque l'utilisateur appuie sur une touche du clavier.

La fonction fléchée event => { ... } est utilisée comme fonction de rappel, qui sera 
exécutée lorsque l'événement "keydown" se produira.

À l'intérieur de la fonction de rappel, la condition if (event.key === "Enter") vérifie
 si la touche appuyée est la touche "Entrée".

Si la touche "Entrée" est appuyée, la fonction document.execCommand("insertLineBreak") 
est appelée. Cette fonction permet d'insérer une rupture de ligne à l'emplacement actuel
 du curseur dans un élément éditable (comme la zone de texte de la note). Cela permet de
  passer à la ligne suivante lorsque l'utilisateur appuie sur "Entrée".

Enfin, la fonction event.preventDefault() est appelée pour empêcher le comportement par 
défaut de la touche "Entrée" dans la zone de texte. Par défaut, la touche "Entrée" 
déclenche la soumission d'un formulaire ou un saut de ligne dans un paragraphe. 
En utilisant event.preventDefault(), nous empêchons ce comportement par défaut afin de 
pouvoir insérer une rupture de ligne à la place.*/