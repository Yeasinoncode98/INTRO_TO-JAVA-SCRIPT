console.log("handler file added");

document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log('btn-clicked');

    const pageTitleElement = document.getElementById("page-title");
    console.log(pageTitleElement);

    pageTitleElement.innerText = "Updated page title text";
  });

//   For button logged in

document.getElementById("btn-login").addEventListener("click", function () {
  // console.log("login-btn clicked");
  const userCount = document.getElementById("user-count");

  userCount.innerText = "User logged in";
  userCount.style.color = " green";
});

// changing name for user

// step 1:  Set event listener

document.getElementById("btn-update").addEventListener("click", function () {
  // step 2 : get the text from the input field

  const nameInput = document.getElementById("input-name");
  console.log(nameInput);
  const name = nameInput.value;
  console.log("name", name);

  // step 3 : set the name

  const nameP = document.getElementById("name");
  nameP.innerText = name;
});
