

function toggleDarkMode(){

    document.body.classList.toggle("dark");

}

/* ===== ABRIR MODAL ===== */

function openModal(id){

    document.getElementById(id).style.display = "block";

    document.body.style.overflow = "hidden";

}

/* ===== CERRAR MODAL ===== */

function closeModal(id){

    document.getElementById(id).style.display = "none";

    document.body.style.overflow = "auto";

}

/* ===== CERRAR MODAL AFUERA ===== */

window.onclick = function(event){

    let modals = document.querySelectorAll(".modal");

    modals.forEach(modal => {

        if(event.target == modal){

            modal.style.display = "none";

            document.body.style.overflow = "auto";

        }

      








    });

}
