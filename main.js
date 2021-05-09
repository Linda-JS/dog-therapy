var image = document.querySelector(".dog-image");

function fetchDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      image.src = data.message;
    })
    .catch(function () {
      console.log("No image");
    });
}
