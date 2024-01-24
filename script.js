//your JS code here. If required.
 let checkboxEle = document.getElementById("checkbox");
    let userNameEle = document.getElementById("username");
    let passwordEle = document.getElementById("password");
    let submitBtn = document.getElementById("submit");

    // Check if there are existing user details in localStorage
    let existingData = JSON.parse(localStorage.getItem("userdetails")) || null;

    if (existingData) {
      // Show "Login as existing user" button
      let existingBtn = document.createElement("button");
      existingBtn.id = "existing";
      existingBtn.innerText = "existing";
      document.body.appendChild(existingBtn);

      // Attach click event for "Login as existing user" button
      existingBtn.onclick = function () {
        alert(`Logged in as ${existingData.name}`);
      };
    }

    // Form submission handling
    submitBtn.onclick = function (event) {
      event.preventDefault();

      let checked = checkboxEle.checked;

      if (checked) {
        let user = userNameEle.value;
        let password = passwordEle.value;
        let obj = {
          name: user,
          pass: password
        };

        localStorage.setItem("userdetails", JSON.stringify(obj));

        alert(`Logged in as ${user}`);
      } else {
        localStorage.removeItem("userdetails");
      }
    };