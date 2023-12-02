console.log("Client side js is loaded ✅");

const form = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");

const messageOne = document.getElementById("message-one");
const messageTwo = document.getElementById("message-two");
const messageThree = document.getElementById("message-three");
const messageFour = document.getElementById("message-four");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchValue = input.value;

  async function fetchData() {
    const response = await fetch(
      "http://localhost:3000/weather?address=" + searchValue
    );
    const data = await response.json();

    console.log(data);

    messageOne.textContent ="weather : "+data.discription;
    messageTwo.textContent ="temperature : "+ data.temperature;
    messageThree.textContent ="country : "+ data.country;
  }

  fetchData();
});
