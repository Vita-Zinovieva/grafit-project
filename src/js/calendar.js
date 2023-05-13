const refs = {
  list: document.querySelector('.schedule-list'),
  items: document.querySelectorAll('.schedule-item'),
};

const checkedSchedule = getLocalStorage();

function initModel() {
  refs.items.forEach((e, i) => {
    const days = Object.keys(checkedSchedule);
    e.setAttribute('data-day', days[i]);
  });
}

function setItemsView() {
  refs.items.forEach((e, i) => {
    const { day } = e.dataset;
    if (checkedSchedule[day]) {
      e.classList.add('active');
    } else {
      e.classList.remove('active');
    }
  });
}

function toggleSchedule(e) {
  if (e.target.parentNode.className !== 'svg-wrapper') {
    return;
  }
  const day = e.target.parentNode.parentNode.dataset.day;
  checkedSchedule[day] = !checkedSchedule[day];
  window.localStorage.setItem('schedule', JSON.stringify(checkedSchedule));
  setItemsView();
}

function getLocalStorage() {
  try {
    const checkedScheduleModel = {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    };

    const data = window.localStorage.getItem('schedule');
    return data ? JSON.parse(data) : checkedScheduleModel;
  } catch (error) {
    console.log(error.message);
  }
}

refs.list.addEventListener('click', toggleSchedule);

initModel();
setItemsView();
