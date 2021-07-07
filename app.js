var obj;

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => obj = data)
    .then(function(data) {

      var message = document.createElement("img")

      message.src = obj.message;
      document.body.appendChild(message);

    })