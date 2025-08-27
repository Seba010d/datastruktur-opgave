// write cool JS hwere!!
const userSelect = document.getElementById("userSelect");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const colorInput = document.getElementById("colorInput");
const saveButton = document.getElementById("saveButton");

// Event listener: vis data for valgt bruger
userSelect.addEventListener("change", userSelectChange);
function userSelectChange() {
  const selectedUser = userSelect.value;
  console.log("change user to: " + selectedUser);
  // TODO: Hent data fra localStorage og vis i formularen
  const userData = localStorage.getItem(selectedUser);
  if (userData) {
    const user = JSON.parse(userData);
    nameInput.value = user.name || "";
    ageInput.value = user.age || "";
    colorInput.value = user.color || "";
    document.body.style.backgroundColor = user.color || "";
  } else {
    nameInput.value = "name";
    ageInput.value = "0";
    colorInput.value = "#ffffff";
    document.body.style.backgroundColor = colorInput.value;
  }
}

// Event listener: gem data fra formularen
saveButton.addEventListener("click", () => {
  console.log("save data");

  const selectedUser = userSelect.value;
  const name = nameInput.value;
  const age = ageInput.value;
  const color = colorInput.value;

  // TODO: Gem data i localStorage for den valgte bruger
  const user = { name: name, age: age, color: color };
  localStorage.setItem(selectedUser, JSON.stringify(user));
  document.body.style.backgroundColor = color;
});

// Vis data for første bruger ved load
window.onload = userSelectChange;
