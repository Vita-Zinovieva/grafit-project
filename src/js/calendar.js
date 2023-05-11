const tabsRef = document.querySelectorAll('.svg-wrapper');
const textsRefs = document.querySelectorAll('.schedule-item-list');
const listRef = document.querySelector('.schedule-list');

const checkedSchedule = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
};

setActiveClasses();

listRef.addEventListener('click', onScheduleClick);

function onScheduleClick(e) {
  let currentElement;

  if (
    e.target.nodeName === 'svg' ||
    e.target.className === 'schedule-svg-text'
  ) {
    textsRefs.forEach((el, i) => {
      if (e.target.textContent.trim() === el.dataset.id) {
        currentElement = el;
      }
    });

    currentElement.parentElement.classList.toggle('active');
    toggleSchedule(currentElement.dataset.id);
    setLocalstorage('activeSchedule', checkedSchedule);

    return;
  }
}

function setLocalstorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function getLocaleStorage(key) {
  try {
    const data = window.localStorage.getItem(key);
    return data === null ? undefined : JSON.parse(data);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function toggleSchedule(day) {
  switch (day) {
    case 'ПН':
      checkedSchedule.monday = !checkedSchedule.monday;
      break;
    case 'ВТ':
      checkedSchedule.tuesday = !checkedSchedule.tuesday;
      break;
    case 'СР':
      checkedSchedule.wednesday = !checkedSchedule.wednesday;
      break;
    case 'ЧТ':
      checkedSchedule.thursday = !checkedSchedule.thursday;
      break;
    case 'ПТ':
      checkedSchedule.friday = !checkedSchedule.friday;
      break;
    case 'СБ':
      checkedSchedule.saturday = checkedSchedule.saturday;
      break;

    default:
      break;
  }
}

function setActiveClasses() {}
