const locationElement = document.getElementById("location");
const openMapsButton = document.getElementById("openMapsButton");

openMapsButton.addEventListener("click", () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      locationElement.innerHTML = `Lokasi Anda:<br>Latitude: ${latitude}<br>Longitude: ${longitude}`;

      // Buat URI protokol untuk membuka Windows Maps
      const mapsUri = `bingmaps:?collection=point.${latitude}_${longitude}_Your%20Location`;

      // Buka Windows Maps
      window.location.href = mapsUri;
    });
  } else {
    locationElement.innerHTML = "Geolokasi tidak didukung oleh browser Anda.";
  }
});
