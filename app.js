console.log("hello");
async function getData() {
    const response = await fetch(
        "https://disease.sh/v3/covid-19/countries/Mozambique?yesterday=true&strict=true"
    );

    return response;
}

async function showInfo() {
    const data = await (await getData()).json();
    console.log(data);
    document.getElementById("active-cases").textContent = data.active;
    document.getElementById("total-cases").textContent = data.cases;
    document.getElementById("day-cases").textContent = data.todayCases;
    document.getElementById("total-deaths").textContent = data.deaths;
    document.getElementById("day-deaths").textContent = data.todayDeaths;
    document.getElementById("total-recovered").textContent = data.recovered;
    document.getElementById("day-recovered").textContent = data.todayRecovered;
}
showInfo();