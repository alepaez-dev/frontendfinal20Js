// Selectores DOM
const token = localStorage.getItem("token") || ""
const buttonPerfil = document.querySelector("#traer-perfil")
const mentorContainer = document.querySelector("#mentor-container")
const payload = token.split(".")[1]
const id = JSON.parse(atob(payload)).id
const userURL = `http://localhost:8080/users/${id}`
const mentorsURL = `http://localhost:8080/mentors/`

buttonPerfil.addEventListener("click", async (e) => {
  e.preventDefault()
  
  const response = await fetch(`${userURL}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  const jsonData = await response.json()
  mentorContainer.innerHTML = `
      <div>
        <label for="">Email : </label>
        <span>${jsonData.data.user.email}</span>
      </div>
      <div>
        <label for="">Name: </label>
        <span>${jsonData.data.user.name}</span>
      </div>
    `
})
