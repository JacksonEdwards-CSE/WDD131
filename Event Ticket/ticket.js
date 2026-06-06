
const form = document.querySelector("#eventForm");
const guest = document.querySelector("#guestType");
const studentNumber = document.querySelector("#studentNumber");
const accessCode = document.querySelector("#accessCode");
const number = document.querySelector("#number");
const code = document.querySelector("#code");
const output = document.querySelector("#output");

function updateNotesField() {
    const value = guest.value;

    if (value === "student"){  
        studentNumber.hidden = false;
        number.required = true;

        accessCode.hidden = true;
        code.required = false;
    }
    else if (value === "guest"){
        accessCode.hidden = false;
        code.required = true;

        studentNumber.hidden = true;
        number.required = false;
    }

    else{
        studentNumber.hidden = true;
        number.required = false;

        accessCode.hidden = true;
        code.required = false;
    }
  
}

guest.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.guestType.value;
  const eventDate = form.eventDate.value;
  const number = form.number.value.trim();
  const code = form.code.value.trim();

    if (type === "student" && (number.length > 9 || number.length < 9)){
        output.textContent = "I# must be 9 digits.";
        return;
    }
  
    if (type === "guest" && code != "EVENT131"){
        output.textContent = "Please enter a valid code.";
        return;
    }



  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateNotesField();
});
          