 const getLocationButton = document.getElementById('getLocation');
    const resultElement = document.getElementById('result');
    
    getLocationButton.addEventListener('click', () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resultElement.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
        });
      } else {
        resultElement.textContent = "Geolocation is not supported by your browser.";
      }
    });