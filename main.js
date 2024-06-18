// The address of the resource
const url = "https://ghibliapi.vercel.app/films/"

// Performing the fetch request
const result = await fetch(url)
const movies = await result.json()

// Get the element we want to insert our new elements into
const listElement = document.getElementById("list")

// Go through each element in the list and create a new HTML element
for (const movie of movies) {
  const newImage = createElement(movie)
  listElement.append(newImage)
}

// A function for 
function createElement(data) {
  // Create a new element
  const imageElement = document.createElement("img")
  // Configure the properties
  imageElement.src = data.image
  // Return the result
  return imageElement
}
