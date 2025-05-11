const map = L.map('map').setView([45, 30], 3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const objects = [
  { name: "Північне море", lat: 56.5, lng: 3.0 },
  { name: "Балтійське море", lat: 57.7, lng: 19.5 },
  { name: "Чорне море", lat: 44.6, lng: 35.2 },
  { name: "Азовське море", lat: 46.0, lng: 37.5 },
  { name: "Баренцове море", lat: 74.0, lng: 40.0 },
  { name: "Східносибірське море", lat: 73.0, lng: 160.0 },
  { name: "Жовте море", lat: 35.5, lng: 124.5 },
  { name: "Японське море", lat: 40.0, lng: 135.0 },
  { name: "Берингове море", lat: 58.0, lng: -170.0 },
  { name: "Південнокитайське море", lat: 12.0, lng: 114.0 },
  { name: "Аравійське море", lat: 16.0, lng: 63.0 },
  { name: "Біскайська затока", lat: 45.0, lng: -4.5 },
  { name: "Бенгальська затока", lat: 16.0, lng: 88.0 },
  { name: "Перська затока", lat: 26.0, lng: 52.0 },
  { name: "Велика Британія", lat: 54.5, lng: -2.5 },
  { name: "Ірландія", lat: 53.4, lng: -8.0 },
  { name: "Ісландія", lat: 64.9, lng: -18.0 },
  { name: "Нова Земля", lat: 74.0, lng: 60.0 },
  { name: "Сахалін", lat: 50.5, lng: 143.0 },
  { name: "Японські острови", lat: 36.0, lng: 138.0 },
  { name: "Великі Зондські острови", lat: -7.5, lng: 110.0 },
  { name: "Філіппінські острови", lat: 12.5, lng: 122.5 },
  { name: "Шрі-Ланка", lat: 7.8, lng: 80.7 },
  { name: "Тайвань", lat: 23.7, lng: 121.0 },
  { name: "Балканський півострів", lat: 42.5, lng: 22.0 },
  { name: "Апеннінський півострів", lat: 42.5, lng: 13.0 },
  { name: "Піренейський півострів", lat: 40.0, lng: -4.0 },
  { name: "Скандинавський півострів", lat: 61.0, lng: 10.0 },
  { name: "Таймир", lat: 75.0, lng: 100.0 },
  { name: "Чукотський півострів", lat: 66.0, lng: -170.0 },
  { name: "Камчатка", lat: 58.0, lng: 160.0 },
  { name: "Корейський півострів", lat: 38.0, lng: 127.5 },
  { name: "Індокитай", lat: 15.0, lng: 105.0 },
  { name: "Малакка", lat: 4.0, lng: 102.0 },
  { name: "Індостан", lat: 21.0, lng: 78.0 },
  { name: "Мала Азія", lat: 39.0, lng: 35.0 },
  { name: "Східноєвропейська рівнина", lat: 55.0, lng: 35.0 },
  { name: "Західносибірська рівнина", lat: 60.0, lng: 75.0 },
  { name: "Велика Китайська рівнина", lat: 35.0, lng: 116.0 },
  { name: "Середньодунайська рівнина", lat: 47.0, lng: 19.0 },
  { name: "Індо-Ганська рівнина", lat: 25.0, lng: 85.0 },
  { name: "Месопотамська низовина", lat: 32.0, lng: 45.0 },
  { name: "Плоскогірʼя Декан", lat: 17.0, lng: 77.0 },
  { name: "Середньосибірське плоскогірʼя", lat: 65.0, lng: 100.0 },
  { name: "Казахський дрібносопковик", lat: 49.0, lng: 70.0 },
  { name: "Тибетське нагірʼя", lat: 31.5, lng: 88.5 },
  { name: "Іранське нагірʼя", lat: 32.0, lng: 53.0 },
  { name: "Гекла", lat: 63.98, lng: -19.7 },
  { name: "Везувій", lat: 40.82, lng: 14.43 },
  { name: "Фудзіяма", lat: 35.36, lng: 138.73 },
  { name: "Піренеї", lat: 42.5, lng: 0.0 },
  { name: "Альпи", lat: 46.5, lng: 10.5 },
  { name: "Апенніни", lat: 43.0, lng: 13.0 },
  { name: "Скандинавські гори", lat: 62.0, lng: 13.0 },
  { name: "Уральські гори", lat: 61.0, lng: 60.0 },
  { name: "Кавказ", lat: 43.5, lng: 44.5 },
  { name: "Тянь-Шань", lat: 42.0, lng: 78.0 },
  { name: "Гімалаї", lat: 28.0, lng: 87.0 },
  { name: "Рейн", lat: 50.0, lng: 7.0 },
  { name: "Дунай", lat: 45.1, lng: 29.3 },
  { name: "Дніпро", lat: 48.5, lng: 32.0 },
  { name: "Волга", lat: 49.0, lng: 45.0 },
  { name: "Об", lat: 60.0, lng: 72.0 },
  { name: "Єнісей", lat: 60.0, lng: 90.0 },
  { name: "Лена", lat: 63.0, lng: 126.0 },
  { name: "Амур", lat: 52.0, lng: 132.0 },
  { name: "Хуанхе", lat: 35.0, lng: 112.0 },
  { name: "Янцзи", lat: 31.0, lng: 112.0 },
  { name: "Меконг", lat: 14.0, lng: 105.0 },
  { name: "Ганг", lat: 25.0, lng: 87.0 },
  { name: "Інд", lat: 29.0, lng: 69.0 },
  { name: "Євфрат", lat: 33.0, lng: 40.0 },
  { name: "Тигр", lat: 33.0, lng: 44.0 },
  { name: "Каспійське озеро", lat: 42.5, lng: 51.8 },
  { name: "Женевське озеро", lat: 46.45, lng: 6.6 },
  { name: "Світязь", lat: 51.5, lng: 23.9 },
  { name: "Ладозьке озеро", lat: 61.0, lng: 31.5 },
  { name: "Байкал", lat: 53.5, lng: 108.0 },
  { name: "Мертве море", lat: 31.5, lng: 35.5 }
];

let currentObject = null;
let score = 0;

function nextQuestion() {
  document.getElementById('result').textContent = "";
  const index = Math.floor(Math.random() * objects.length);
  currentObject = objects[index];
  document.getElementById('question').textContent = `Знайди на карті: ${currentObject.name}`;
}

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

map.on('click', function(e) {
  if (!currentObject) return;
  const clickedLat = e.latlng.lat;
  const clickedLng = e.latlng.lng;

  const distance = getDistance(clickedLat, clickedLng, currentObject.lat, currentObject.lng);
  const result = document.getElementById('result');

  if (distance <= 200) {
    result.textContent = `Правильно! Відстань: ${Math.round(distance)} км.`;
    result.style.color = 'green';
    score++;
  } else {
    result.textContent = `Неправильно. Відстань до правильного місця: ${Math.round(distance)} км.`;
    result.style.color = 'red';
  }

  document.getElementById('score').textContent = `Очки: ${score}`;
});

nextQuestion();