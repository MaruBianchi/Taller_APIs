const formulario = document.getElementById("formulario")
const chiste = document.getElementById("chiste")
const btn = document.getElementById("btn")

const enviarDatos = (e) => {

      e.preventDefault();

      const data = new FormData(formulario)
      const objeto = {}

      data.forEach((value, key) => {
            objeto[key] = value === "en" ? null : value
      })

      fetch(`https://v2.jokeapi.dev/joke/Any${objeto.lang}`, {
                  method: "GET",
                  headers: {
                        "Content-Type": "application/json"
                  }


            },
            chiste.innerHTML = "Cargando..."
      ).then((response) => {

            return response.json()
      }).then((data) => {

            const joke = data.joke ? data.joke : `${data.setup} ${data.delivery}`

            chiste.innerHTML = joke

      }).catch((error) => {
            console.log(error)
      })

}

btn.addEventListener("click", enviarDatos)
btn.addEventListener("submit", enviarDatos)
formulario.addEventListener("submit", enviarDatos)