const fname = document.getElementById("name");
const sirname = document.getElementById("sirname");
const age = document.getElementById("age");
const roll = document.getElementById("roll");

var genders = document.getElementsByName("gender");

var list = [];

function addStudent() {
  if (
    fname.value === "" ||
    sirname.value === "" ||
    age.value === "" ||
    roll.value === ""
  ) {
    alert("enter all the details");
  } else {
    var genderValue;
    for (var i = 0; i < genders.length; i++) {
      if (genders[i].checked) {
        genderValue = genders[i].value;
        break;
      }
    }
    var newStudent = {
      fname: fname.value,
      sirname: sirname.value,
      age: age.value,
      gender: genderValue,
      roll: roll.value,
    };

    list.push(newStudent);

    showSuccessMessage();
    showStudents();
  }
}

function showStudents() {
  var studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";
  if (list.length > 0) {
    var heading = document.createElement("div");
    heading.className = "heading";
    heading.innerHTML = "<h1>Student List</h1> <hr class='underline2'/>";
    studentList.appendChild(heading);
  }

  for (var i = 0; i < list.length; i++) {
    var item = document.createElement("div");
    item.className = "col-md-4";
    item.innerHTML =
      "<div class='content'><label>Name :</label>" +
      list[i].fname +
      "<br>" +
      "<label>Sirname :</label>" +
      list[i].sirname +
      "<br>" +
      "<label>Age :</label>" +
      list[i].age +
      "<br>" +
      "<label>Gender :</label>" +
      list[i].gender +
      "<br>" +
      "<label>Roll No. :</label>" +
      list[i].roll +
      "<br> </div>";
    studentList.appendChild(item);
  }

  fname.value = "";
  sirname.value = "";
  age.value = "";
  roll.value = "";
}

function showSuccessMessage() {
  var successMessage = document.querySelector(".alert");
  successMessage.style.display = "inline";

  setTimeout(function () {
    successMessage.style.display = "none";
  }, 5000);
}

showStudents();
