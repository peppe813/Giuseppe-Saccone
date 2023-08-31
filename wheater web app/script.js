const apiDefault = `https://api.weatherapi.com/v1/forecast.json?key=9261c85fccac455c860184333231407&q=Rome&days=4&aqi=no&alerts=no&lang=it`;
let luogo = document.querySelector(".luogo");
let temperatura = document.querySelector(".temperatura span");
let cielo = document.querySelector(".cielo");
let alba = document.querySelector(".hour-sunrise");
let tramonto = document.querySelector(".hour-sunset");
let icona = document.querySelector(".main-weather img");
let iconePrevisione = document.querySelectorAll(".icon-forecast");
let dayPrevisione = document.querySelectorAll(".giorno");
let temperaturaMinima = document.querySelectorAll(".minima");
let temperaturaMassima = document.querySelectorAll(".massima");

//manipolazione dati riguardanti i dati principali città di DEFAULT su ROMA
fetch(apiDefault)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // creo array senza il primo elemento
    let arrayForecast = data.forecast.forecastday;
    let arrayForecastSliced = arrayForecast.slice(1);
    console.log(arrayForecastSliced);

    // itero l array creato e inserisco dati di previsione come giorno, icona, temperatura
    for (let i = 0; i < arrayForecastSliced.length; i++) {
      let previsione = arrayForecastSliced[i];
      iconePrevisione[i].src = previsione.day.condition.icon;
      temperaturaMinima[i].textContent =
        "min " + previsione.day.mintemp_c + " °C";
      temperaturaMassima[i].textContent =
        "max " + previsione.day.maxtemp_c + " °C";

      let giornoInNUmero = previsione.date_epoch;
      const date = new Date(giornoInNUmero * 1000); // Moltiplicato per 1000 per ottenere il valore in millisecondi
      const giorniSettimana = [
        "Domenica",
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato",
      ];
      const giornoSettimana = giorniSettimana[date.getDay()];
      dayPrevisione[i].textContent = giornoSettimana;

      //informazioni principali
      luogo.textContent = data.location.name + ", " + data.location.country;
      temperatura.textContent = data.current.temp_c + "°C";
      cielo.textContent = data.current.condition.text;
      icona.src = data.current.condition.icon;
      alba.textContent = data.forecast.forecastday[0].astro.sunrise;
      tramonto.textContent = data.forecast.forecastday[0].astro.sunset;
    }
  })
  .catch((error) => {
    // Gestisci eventuali errori di connessione o di parsing
    console.log(error);
  });

//manipolazione dati riguardanti i dati principali città inserita
let btnInputCity = document.querySelector("button");

btnInputCity.addEventListener("click", () => {
  let inputCity = document.querySelector("input");
  let city = inputCity.value;
  const api = `https://api.weatherapi.com/v1/forecast.json?key=9261c85fccac455c860184333231407&q=${city}&days=4&aqi=no&alerts=no&lang=it`;

  //manipolazione dati riguardanti i dati principali città inserita
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      // creo array senza il primo elemento
      let arrayForecast = data.forecast.forecastday;
      let arrayForecastSliced = arrayForecast.slice(1);
      console.log(arrayForecastSliced);

      // itero l array creato e inserisco dati di previsione come giorno, icona, temperatura
      for (let i = 0; i < arrayForecastSliced.length; i++) {
        let previsione = arrayForecastSliced[i];
        iconePrevisione[i].src = previsione.day.condition.icon;
        temperaturaMinima[i].textContent =
          "min " + previsione.day.mintemp_c + " °C";
        temperaturaMassima[i].textContent =
          "max " + previsione.day.maxtemp_c + " °C";

        let giornoInNUmero = previsione.date_epoch;
        const date = new Date(giornoInNUmero * 1000); // Moltiplicato per 1000 per ottenere il valore in millisecondi
        const giorniSettimana = [
          "Domenica",
          "Lunedì",
          "Martedì",
          "Mercoledì",
          "Giovedì",
          "Venerdì",
          "Sabato",
        ];
        const giornoSettimana = giorniSettimana[date.getDay()];
        dayPrevisione[i].textContent = giornoSettimana;

        //informazioni principali
        luogo.textContent = data.location.name + ", " + data.location.country;
        temperatura.textContent = data.current.temp_c + "°C";
        cielo.textContent = data.current.condition.text;
        icona.src = data.current.condition.icon;
        alba.textContent = data.forecast.forecastday[0].astro.sunrise;
        tramonto.textContent = data.forecast.forecastday[0].astro.sunset;
      }
    })
    .catch((error) => {
      // Gestisci eventuali errori di connessione o di parsing
      console.log(error);
    });
});

//funzione di autocompletamento
let input = document.querySelector("input");
let btn = document.querySelector("button");
let risultato = document.querySelector(".result");
input.addEventListener("input", autocomplete);

function autocomplete() {
  let valoreInserito = input.value;

  if (valoreInserito === "") {
    risultato.innerHTML = "";
    return;
  }

  const apiAutocomplete = `https://api.weatherapi.com/v1/search.json?key=9261c85fccac455c860184333231407&q=${valoreInserito}`;

  fetch(apiAutocomplete)
    .then((response) => response.json())
    .then((data) => {
      // I dati della risposta sono disponibili qui
      console.log(data);

      data.forEach((città) => {
        let lista = document.createElement("li");
        risultato.appendChild(lista);
        lista.innerHTML =
          città.name + ", " + città.country + ", " + città.region;
        console.log(lista);

        lista.addEventListener("click", () => {
          //inseriamo la città selezionata
          let inputCity = document.querySelector("input");
          let city = inputCity.value;
          const api = `https://api.weatherapi.com/v1/forecast.json?key=9261c85fccac455c860184333231407&q=${city}&days=4&aqi=no&alerts=no&lang=it`;

          //manipolazione dati riguardanti i dati principali città inserita
          fetch(api)
            .then((response) => response.json())
            .then((data) => {
              // creo array senza il primo elemento
              let arrayForecast = data.forecast.forecastday;
              let arrayForecastSliced = arrayForecast.slice(1);
              console.log(arrayForecastSliced);

              // itero l array creato e inserisco dati di previsione come giorno, icona, temperatura
              for (let i = 0; i < arrayForecastSliced.length; i++) {
                let previsione = arrayForecastSliced[i];
                iconePrevisione[i].src = previsione.day.condition.icon;
                temperaturaMinima[i].textContent =
                  "min " + previsione.day.mintemp_c + " °C";
                temperaturaMassima[i].textContent =
                  "max " + previsione.day.maxtemp_c + " °C";

                let giornoInNUmero = previsione.date_epoch;
                const date = new Date(giornoInNUmero * 1000); // Moltiplicato per 1000 per ottenere il valore in millisecondi
                const giorniSettimana = [
                  "Domenica",
                  "Lunedì",
                  "Martedì",
                  "Mercoledì",
                  "Giovedì",
                  "Venerdì",
                  "Sabato",
                ];
                const giornoSettimana = giorniSettimana[date.getDay()];
                dayPrevisione[i].textContent = giornoSettimana;

                //informazioni principali
                luogo.textContent =
                  data.location.name + ", " + data.location.country;
                temperatura.textContent = data.current.temp_c + "°C";
                cielo.textContent = data.current.condition.text;
                icona.src = data.current.condition.icon;
                alba.textContent = data.forecast.forecastday[0].astro.sunrise;
                tramonto.textContent =
                  data.forecast.forecastday[0].astro.sunset;
              }
            })
            .catch((error) => {
              // Gestisci eventuali errori di connessione o di parsing
              console.log(error);
            });

          input.value = ""; //valore azzerato al click
          risultato.innerHTML = "";
        });
      });
    })
    .catch((error) => {
      // Gestisci eventuali errori di connessione o di parsing
      console.log(error);
    });
}
