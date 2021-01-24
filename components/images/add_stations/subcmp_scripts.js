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
//Show Substation
function showSubstation() {
  const subBTns = document.querySelectorAll('.subs-box');
  const subContainer = document.querySelector('.sub_wrapper');
  subBTns.forEach(subBTn => {
    subBTn.addEventListener('click', () => {
      subContainer.classList.add('sub_show');
    })
  })
};
showSubstation();
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
thirdTabActionBtns();

//Creating Station buttons
function createStation() {
  const createBtn = document.querySelector('#create_station');
  const container = document.querySelector('#btn-create-container');
    
    let count = 0;
    let attr;
    createBtn.addEventListener('click', () => {
    count += 1;
    attr = document.createAttribute('type');
    attr.value = 'button';
    newBtn = document.createElement('button');
    newBtn.classList.add('subs-btns');
    newBtn.setAttributeNode(attr);
    newBtn.innerHTML = `Station ${count}`;
    container.appendChild(newBtn);

    let btns = Array.from(container.querySelectorAll('.subs-btns'));
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
  });
};
createStation();
//Deleting Station Buttons
function deleteStationBtn() {
  const btns = document.querySelectorAll('.subs-btns');
    btns.forEach(btn => {
      if(btn.classList.contains('active')){
        btn.remove();
      }
    })
};

//Actions Accordian
function actionAcordian() {
  const firstBtn = document.querySelector('#fisrt_action_accordian');
  const firstCont = document.querySelector('.first_accordian');
  firstBtn.addEventListener('click', () => {
   firstCont.classList.toggle('show-row');
  });
  const secondBtn = document.querySelector('#second_action_accordian');
  const secondCont = document.querySelector('.second_accordian');
  secondBtn.addEventListener('click', () => {
    secondCont.classList.toggle('show-row');
  });
  const thirdBtn = document.querySelector('#third_action_accordian');
  const thirdCont = document.querySelector('.third_accordian');
  thirdBtn.addEventListener('click', () => {
    thirdCont.classList.toggle('show-row');
  });
  const fourthBtn = document.querySelector('#fourth_action_accordian');
  const fourthCont = document.querySelector('.fourth_accordian');
  fourthBtn.addEventListener('click', () => {
    fourthCont.classList.toggle('show-row');
  });
  const fifthBtn = document.querySelector('#fifth_action_accordian');
  const fifthCont = document.querySelector('.fifth_accordian');
  fifthBtn.addEventListener('click', () => {
    fifthCont.classList.toggle('show-row');
  });
};
actionAcordian();
//function for changing the value of input in action page
function addAction() {
  const inputVal = document.querySelector('#show-result');
  let actionBtns = document.querySelectorAll('.actionbtn');
  actionBtns.forEach((actionBtn, index) => {
    actionBtn.addEventListener('click', () => {
      inputVal.value = `(${index})`;
    })
  })
};
addAction()