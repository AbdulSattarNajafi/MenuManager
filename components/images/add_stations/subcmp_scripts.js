//Tabs
function displayStationContent() {
  const subStations = document.querySelector('#substation-container');
  const stations = document.querySelector('#stations-container');
  const actions = document.querySelector('#actions-container');

  const subStnBtn = document.querySelector('#subs-btn');
  const stationBtn = document.querySelector('#substation-btn');
  const actionBtn = document.querySelector('#subaction-btn');

  stationBtn.addEventListener('click', () => {
    actionBtn.classList.add('btn-light');
    actionBtn.classList.remove('btn-secondary');
    subStnBtn.classList.add('btn-light');
    subStnBtn.classList.remove('btn-secondary')
    stationBtn.classList.remove('btn-light')
    stationBtn.classList.add('btn-secondary');
    subStations.style.display = 'none';
    actions.style.display = 'none';
    stations.style.display = 'block';
  });
  actionBtn.addEventListener('click', () => {
    actionBtn.classList.remove('btn-light');
    actionBtn.classList.add('btn-secondary');
    subStnBtn.classList.add('btn-light');
    subStnBtn.classList.remove('btn-secondary')
    stationBtn.classList.add('btn-light')
    stationBtn.classList.remove('btn-secondary');
    subStations.style.display = 'none';
    stations.style.display = 'none';
    actions.style.display = 'block';
  });
  subStnBtn.addEventListener('click', () => {
    actionBtn.classList.add('btn-light');
    actionBtn.classList.remove('btn-secondary');
    stationBtn.classList.add('btn-light')
    stationBtn.classList.remove('btn-secondary');
    subStnBtn.classList.remove('btn-light');
    subStnBtn.classList.add('btn-secondary')
    stations.style.display = 'none';
    actions.style.display = 'none';
    subStations.style.display = 'block';
  });
};
displayStationContent();
//Substations Buttons
