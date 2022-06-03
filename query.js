document.getElementById("innHTML").style.display = "none";
var Name = document.getElementById("fname");
var email = document.getElementById("gmail");
var details = document.getElementById("details");
const QueryName = document.getElementById("Query_Name");
const QueryGmail = document.getElementById("Query_Gmail");
const QuerySubject = document.getElementById("Query_Subject");
const QueryDetails = document.getElementById("Query_Details");
document.getElementById("View").addEventListener("click", function () {
   if (Name.value.trim() == "") {
      alert("Please enter your name");
   } else if (gmail.value.trim() == "") {
      alert("Please enter your email");
   } else if (details.value.trim() == "") {
      alert("Please enter your details");
   } else if (!radioValue()) {
      alert("Please enter the subject");
   } else {
      document.getElementById("form").style.display = "none";
      var Query_Name1 = "Name: " + fname.value;
      var Query_Gmail1 = "\nE-mail: " + gmail.value;
      var Query_Subject1 = "\nSubject: " + radioValue();
      var Query_Details1 = "\ndetails: " + details.value;
      document.getElementById("innHTML").style.display = "block";
      QueryName.innerHTML = Query_Name1;
      QueryGmail.innerHTML = Query_Gmail1;
      QuerySubject.innerHTML = Query_Subject1;
      QueryDetails.innerHTML = Query_Details1;
      document.getElementById("edit").addEventListener("click", function () {
         document.getElementById("form").style.display = "block";
         document.getElementById("innHTML").style.display = "none";
      });
   }
});
var radio_value
function radioValue() {
   for (var i = 0; i < 3; i++) {
      if (document.getElementById("radio" + (i + 1)).checked) {
         radio_value = document.getElementById("radio" + (i + 1)).value;
      }
   }
   return radio_value
};

