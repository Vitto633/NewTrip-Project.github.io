
function login(){
    let login = document.getElementById("login_email").value
    let senha = document.getElementById("login_senha").value
    
    if(login === 'newtrip@gmail.com'|| login === "123456789/12" && senha === '123456'){
       window.location.href = "index.html"
        alert("Login realizado com sucesso")
    
    }else{
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