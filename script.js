$("#login").click(function(){
  if($("#email").val() === '' && $("#password").val() === '')
  {
      Swal.fire({
      title: 'Warning',
      text: 'Email and Password is REQUIRED!',
      icon: 'warning',
      })
  } else 
  {
      Swal.fire({
      title: 'Success',
      text: 'Email and Password is ACCEPTED!',
      icon: 'success',
      })
  }

});


let personList = []; 


function processData() {
    
    const person = {
        firstName: document.getElementById('fname').value.trim(),
        middleName: document.getElementById('mname').value.trim(),
        lastName: document.getElementById('lname').value.trim(),
        age: document.getElementById('age').value,
        email: document.getElementById('email').value.trim()
    };

    
    if (person.firstName === "" || person.lastName === "") {
        alert("Action Denied: First Name and Last Name are required.");
        return;
    }else{
      alert("Congrats your Registered");
    }

    
    personList.push(person);
    
    updateTable();
    clearInputs();
}


function undoEntry() {
    
    if (personList.length > 0) {
        personList.pop(); 
        updateTable();
    } else {
        alert("The list is already empty.");
    }
}

function updateTable() {
 
