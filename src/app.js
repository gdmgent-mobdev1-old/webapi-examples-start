import './styles/main.css';
import SITE_TITLE from './consts';

const App = () => {
  // -----
  // THE APP TITLE
  // -----

  document.getElementById('mainTitle').innerHTML = `<h1>${SITE_TITLE}</h1>`;

  // -----
  // NOTIFICATIONS API
  // https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API
  // -----

  // TODO: implement the notification API

  // -----
  // MAPBOX External API
  // https://www.mapbox.com/
  // -----

  // TODO: implement mapbox

  // -----
  // GEOLOCATION API
  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  // -----

  // TODO: implement the geolocation API

  // -----
  // DRAG AND DROP API
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
  // -----

  // TODO: implement the drag and drop API
};

App();
