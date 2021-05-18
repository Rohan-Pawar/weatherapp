const getBtn = document.getElementById('get-btn');

const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'http://api.openweathermap.org/data/2.5/weather?q=london&APPID=39c8b5580a6304ea36bafffe6f44d046'
  );
  xhr.send();
};

getBtn.addEventListener('click', getData);
