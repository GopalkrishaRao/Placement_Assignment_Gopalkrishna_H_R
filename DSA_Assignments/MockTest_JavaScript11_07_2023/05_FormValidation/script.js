function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const date = document.getElementById("date").value;
    const color = document.getElementById("color").value;
    const successMessage = document.getElementById('successMessage')
    const form = document.getElementById('myForm')
    const message =document.getElementsByClassName('message')[0]
    // Validate name (should not be empty)
    if (name === "") {
      alert("Please enter your name.");
      return;
    }
  
    // Validate email
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Validate phone number
    if (!validatePhone(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
  
    // Validate password (at least 6 characters)
    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }
  
    // Validate age (should be a number between 18 and 100)
    if (isNaN(age) || age < 18 || age > 100) {
      alert("Please enter a valid age between 18 and 100.");
      return;
    }
  
    // Validate gender (should be selected)
    if (gender === "") {
      alert("Please select your gender.");
      return;
    }
  
    // Validate date
    if (!validateDate(date)) {
      alert("Please enter a valid date.");
      return;
    }

    message.innerHTML=`
    <h1>Form has successfully Submitted with details:</h1>
    <div>Name: ${name}</div>
    <div>email: ${email}</div>
    <div>Phone Nmber: ${phone}</div>
    <div>Age: ${age}</div>
    <div>Gender: ${gender}</div>
    <div>Date: ${date}</div>
    <div>Favorite Color: ${color}</div>

    `
    form.style.display='none';
    successMessage.style.display='block';
  }
  
  // Email validation using regular expression
  function validateEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  
  // Phone number validation using regular expression
  function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  
  // Date validation (checks if the input is a valid date)
  function validateDate(date) {
    const dateObj = new Date(date);
    return !isNaN(dateObj);
  }
  

  // function updateColorPreview() {
  //   const colorPicker = document.getElementById("color");
  //   const colorPreview = document.getElementById("colorPreview");
  //   colorPreview.style.backgroundColor = colorPicker.value;
  // }
  
  // updateColorPreview()
  
// Reset the form fields
  function resetForm(){
    location.reload() 
  }