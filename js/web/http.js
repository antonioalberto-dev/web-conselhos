var url = "https://api.adviceslip.com/advice";
var bodyTranslate = "";

// API - CONSELHOS
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((corpo) => {
    // console.log(corpo.slip.advice);
    document.getElementById("message").innerHTML = corpo.slip.advice;
  });
