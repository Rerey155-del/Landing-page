const myApi =
  "http://api.weatherapi.com/v1/current.json?key=9a48c70008314c3a81e124642232010&aqi=no";
const keyword = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");

const container = document.getElementById(`contant`);

btnSearch.onclick = () => {
  fetch(`${myApi}&q=${keyword.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let elemen = "";

      element = showElement(data);

      container.innerHTML = element;
    });
};

function showElement(data) {
  return `<h3>${data.location.name},${data.location.region}, ${data.location.country}</h3>
    <div class="box">   
      <img src="https:${data.current.condition.icon}" alt="" />
      <h1>${data.current.temp_c}°C</h1>
    </div>
    <p>${data.current.last_updated}</p>
    <p>${data.current.condition.text}</p>`;
}
