//boton menu arbol de nodos

function hamburguesa()
{
    const botonera = document.getElementById('btn_principal')


    if(botonera.style.display=='block') {
        botonera.style.display = 'none'
    } else {
        botonera.style.display = 'block'
    }
    
}

//boton subir
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

<script>
  function fetchCookies(requestMethod) {
    var req = new XMLHttpRequest();
    req.withCredentials = true;
    req.responseType = 'json';
    req.open(requestMethod, "https://samesite-sandbox.glitch.me/cookies.json", true);
    req.onload  = function() {
       var jsonResponse = { method: requestMethod, cookies: req.response };
       window.parent.postMessage(jsonResponse, "https://samesite-sandbox.glitch.me");
    };
    req.send(null);
  }
  
  fetchCookies('GET');
</script>
