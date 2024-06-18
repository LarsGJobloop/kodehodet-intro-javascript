// The address of the resource
const url = "https://ghibliapi.vercel.app/films/"

// Performing the 
const result = await fetch(url)
const movies = await result.json()

const listElement = document.getElementById("list")

for (const movie of movies) {
  const newImage = createElement(movie)
  listElement.append(newImage)
}

function createElement(data) {
  const imageElement = document.createElement("img")
  imageElement.src = data.image
  return imageElement
}
