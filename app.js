function carregaArquivo(container,arquivo){


    fetch(arquivo).
    then(arq => arq.text()).   
    then(elemento => {
        document.getElementById(container).innerHTML = elemento;
    }).
    catch(erro => console.log('Erro ao carregar o arquivo' + arquivo));
}

carregaArquivo('container-sidebar','sidebar.html');
carregaArquivo('container-navbar','navbar.html');


let toggleMenu = document.getElementById('toggleMenu');
           let sidebar = document.querySelector('.sidebar');

           toggleMenu.addEventListener('click',()=>{
                sidebar.classList.toggle('show');



           });

document.addEventListener("DOMContentLoaded", function () {
const profileIcon = document.getElementById("profileIcon");
const profileMenu = document.getElementById("profileMenu");

// Abrir ou fechar o menu ao clicar no ícone
profileIcon.addEventListener("click", function (event) {
    profileMenu.classList.toggle("show");
    event.stopPropagation(); // Impede que o clique feche o menu imediatamente
});

// Fechar o menu ao clicar fora dele
document.addEventListener("click", function (event) {
    if (!profileMenu.contains(event.target) && event.target !== profileIcon) {
        profileMenu.classList.remove("show");
    }
});
});