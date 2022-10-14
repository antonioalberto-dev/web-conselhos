var url = "https://api.adviceslip.com/advice";

// API - CONSELHOS
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((corpo) => {
    console.log(corpo.slip);
    document.getElementById("id-message").innerHTML = "ADVICE #";
    document.getElementById("id-message").innerHTML += corpo.slip.id;
    document.getElementById("text-message").innerHTML += '"';
    document.getElementById("text-message").innerHTML += corpo.slip.advice;
    document.getElementById("text-message").innerHTML += '"';
  });

var btn = document.querySelector(".btn-reload");

btn.addEventListener("click", () => location.reload());
