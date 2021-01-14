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
function subStationBtns() {
let btns = Array.from(document.querySelectorAll('.subs-box'));
  const handleClick = (e) => {
    e.preventDefault();
    btns.forEach(node => {
      node.classList.remove('active');
    });
    e.currentTarget.classList.toggle('active');
  }

  btns.forEach(node => {
    node.addEventListener('click', handleClick)
  });
};
subStationBtns();
//Substation second row buttons
function stationsBtns() {
let btns = Array.from(document.querySelectorAll('.station-box'));
  const handleClick = (e) => {
    e.preventDefault();
    btns.forEach(node => {
      node.classList.remove('active');
    });
    e.currentTarget.classList.toggle('active');
  }

  btns.forEach(node => {
    node.addEventListener('click', handleClick)
  });
};
stationsBtns();
//Action Buttons
function actionBtns() {
  let btns = Array.from(document.querySelectorAll('.act-btns'));
  const handleClick = (e) => {
    e.preventDefault();
    btns.forEach(node => {
      node.classList.remove('active');
    });
    e.currentTarget.classList.toggle('active');
  }

  btns.forEach(node => {
    node.addEventListener('click', handleClick)
  });
};
actionBtns();
//Stations Buttons for second Tab
function secondTabStationBtns() {
  let btns = Array.from(document.querySelectorAll('.subs-btns'));
  const handleClick = (e) => {
    e.preventDefault();
    btns.forEach(node => {
      node.classList.remove('active');
    });
    e.currentTarget.classList.toggle('active');
  }

  btns.forEach(node => {
    node.addEventListener('click', handleClick)
  });
};
secondTabStationBtns();
//Action Buttons for third Tab
function thirdTabActionBtns() {
  let btns = Array.from(document.querySelectorAll('.actionbtn'));
  const handleClick = (e) => {
    e.preventDefault();
    btns.forEach(node => {
      node.classList.remove('active');
    });
    e.currentTarget.classList.toggle('active');
  }

  btns.forEach(node => {
    node.addEventListener('click', handleClick)
  });
};
//function for adding the buttons value to the input
thirdTabActionBtns();
function addingValue() {
  const actionBtns = document.querySelectorAll('.actionbtn');
  actionBtns.forEach(actionBtn => {
    actionBtn.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget.value;
      document.querySelector('#show-result').value = currentBtn;
    });
  });
}
addingValue();