

function login(){
    let login = document.getElementById("login_email").value
    let senha = document.getElementById("login_senha").value
    
    if(login === 'newtrip@gmail.com'|| login === "Admin" && senha === "123456"){
       window.location.href = "index.html"
        alert("Login realizado com sucesso")
    }
    else{
        alert("Login incorreto, Tente novamente")
    } 
}
    
function ocultarSenha(){

    let ocultar = document.getElementById("login_Senha")
    
    
    if(ocultar.type == "text"){
        
        ocultar.type = "password"

    }else{
        ocultar.type = "text"
    }
    
    }

    function clickmenu(){
    var itens = document.getElementById('itens');
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else{
        itens.style.display = 'block'
    }
}

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");

    if(currentItem == 2){
      items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "start"
      });
    
    }

  });
});

