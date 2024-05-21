// Add Bookmark
var calendarColumns = document.querySelectorAll(".calendar-column");
var btnAddBookmarks = document.querySelectorAll(".btn-add-bookmark");
var btnModalAddBookmark = document.querySelector(".btn-modal-add-bookmark");
var inputClassTime = document.querySelector(".input-class-time").value;
var selectMinutes = document.getElementById("select-minutes");
var selectHours = document.getElementById("select-hours");

var inputClassTime;
var arrayStart = [];
var arrayEnd = [];
var optmin = 0,
  opthour = 0,
  optConvertHrs = 0,
  optConvertMin = 0,
  totalClassTime = 0,
  finishClassTime = 0;
var dropdownTime = 0;

var modalBookmark = "modal-bookmark_add";
var modalAlert = "modal-msg";

btnAddBookmarks.forEach((btnAdd, i) => {
  btnAdd.onclick = () => {
    if (inputClassTime > 0) {
      showModalDialog(modalBookmark);
      newEntry(i);
    } else {
      getinputValue(0);
    }
  };
});

function getMinutesHour(number) {
  finishClassTime = "";
  num = Number(number);
  var h = Math.floor((num % 3600) / 60);
  var m = Math.floor((num % 3600) % 60);

  var hh = h <= 9 ? (h = `0${h}`) : h;
  var mm = m <= 9 ? (h = `0${m}`) : m;

  finishClassTime = hh + ":" + mm;
}

function getinputValue(number) {
  if (number > 0) {
    inputClassTime = number;
  } else {
    showModalDialog(modalAlert);
  }
}

function newEntry(number) {
  btnModalAddBookmark.onclick = () => {
    var div = document.createElement("div");
    var valRange = new Boolean(false);

    optmin = document.getElementById("select-minutes").value;
    opthour = document.getElementById("select-hours").value;
    optConvertMin = parseInt(optmin);
    optConvertHrs = parseInt(opthour);

    dropdownTime = optConvertMin;
    totalClassTime = dropdownTime + parseInt(inputClassTime);
    arrayStart.push([number, dropdownTime]);
    arrayEnd.push([number, totalClassTime]);

    getMinutesHour(totalClassTime);

    // console.log(arrayStart);
    // console.log(arrayEnd);

    for (i = 0; i < arrayStart.length; i++) {
      if (
        arrayStart[number] >= arrayStart[(number, dropdownTime)] ||
        arrayStart[number] <= arrayStart[(number, totalClassTime)]
      ) {
        valRange = false;
        // console.log(valRange);
      } else {
        valRange = true;
        // console.log(valRange);
      }
    }

    div.innerHTML = `<div class="time">${finishClassTime} - ${opthour}:${optmin}</div>
             <div class="action">
                <button type="button" class="btn-delete" onclick="deleteReserve(this)">
                    <i class="fi fi-rr-trash"></i>
                </button>
             </div>`;

    div.setAttribute("class", "column-row-item");

    calendarColumns[number].appendChild(div);
    hideModalDialog(modalBookmark);
  };
}

function deleteReserve(el) {
  el.parentElement.parentElement.remove();
}

function showModalDialog(modalName) {
  let modal = document.getElementById(modalName);
  modal.classList.remove("hidden");
  body.classList.add("fixed-position");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
  }, 20);
}
function hideModalDialog(modalid) {
  let modal = document.getElementById(modalid);
  modal.classList.add("opacity-0");
  body.classList.remove("fixed-position");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 500);
}
