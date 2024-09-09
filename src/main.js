let flightID;

const inputFlightURL  = document.getElementById('flightURL');
const inputFlightID  = document.getElementById('flightID');
const submitBtn  = document.getElementById('submitBtn');

inputFlightURL.addEventListener('input', (event) => {
  if(event.target.value.includes('#')) {
    flightID = event.target.value.split('#')[1];
    inputFlightID.value = flightID;
  }
});

inputFlightID.addEventListener('input', (event) => {
  if (event.target.value !== '') {
    flightID = event.target.value;
  }
});

submitBtn.addEventListener('click', (event) => {
  if(flightID !== '') {
    import('./flight_spy.js')
      .then(module => {
        module.main(flightID)
      })
      .catch(err => {
        console.error('Failed to load the module:', err);
      })
  }
});
