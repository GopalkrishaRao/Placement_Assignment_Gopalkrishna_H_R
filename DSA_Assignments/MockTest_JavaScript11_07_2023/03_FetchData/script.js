const userList = document.getElementById('user-list');

// Display the skeleton loader while data is being fetched
function showLoader() {
  userList.innerHTML = `
  
    <div class="skeleton-loader">
        <div><img alt='img'></div>
        <p>Name: </p>
        <p>Email:</p>
    </div>
    <hr>
    <div class="skeleton-loader">
        <div><img alt='img'></div>
        <p>Name: </p>
        <p>Email:</p>
    </div>
    <hr>
    <div class="skeleton-loader">
        <div><img alt='img'></div>
        <p>Name: </p>
        <p>Email:</p>
    </div>
    <hr>
    <div class="skeleton-loader">
        <div><img alt='img'></div>
        <p>Name: </p>
        <p>Email:</p>
    </div>
  `;
}

// Fetch user data from the API and display it in the browser
function fetchUserData() {
  showLoader();
  fetch('https://randomuser.me/api/?results=4')
    .then(response => response.json())
    .then(data => {
      userList.innerHTML = '';

      data.results.forEach(user => {
        const userCard = document.createElement('div');
        userCard.innerHTML = `
        <div><img src='${user.picture.medium}'></div>
          <p>Name: ${user.name.first} ${user.name.last}</p>
          <p>Email: ${user.email}</p>
          <hr>
        `;
        userList.appendChild(userCard);
      });
    })
    .catch(error => {
      console.log('Error:', error);
      userList.innerHTML = 'An error occurred while fetching user data.';
    });
}

fetchUserData();

function reload(){
    location.reload() 
}