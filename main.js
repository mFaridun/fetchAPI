const card = document.querySelector('.card');
const wrapper = document.querySelector('.wrapper');
const fname = document.querySelector('.fname');
const emails = document.querySelector('.emails');
const subBtn = document.querySelector('.subBtn');

const url = 'https://reqres.in/api/users?page=2';

fetch (url).then((response) => response.json()).then((data) => {
  data.data.map((data) => {
    console.log(data);

    const box = document.createElement('div');
    box.classList.add('box');

    const name = document.createElement('h2');
    name.textContent = `Name: ${data.first_name}`;
    box.appendChild(name);

    const email = document.createElement("h3");
    email.textContent = `Email: ${data.email}`;
    box.appendChild(email);

    const avatar = document.createElement('img');
    avatar.src = data.avatar;
    box.appendChild(avatar);

    card.appendChild(box);
  });
});

subBtn.addEventListener("click", function () {
  fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({name: nameInput.value, year: emailInput.value}),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const userDiv = document.createElement("div");
      userDiv.classList.add('userDiv');

      const name = document.createElement("h2");
      const email = document.createElement("h3");

      name.textContent = "Name: " + data.name;
      email.textContent = "Email: " + data.email;

      wrappers.appendChild(name);
      wrappersv.appendChild(email);

      wrappers.appendChild(userDiv);
    });
});
