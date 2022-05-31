document.querySelector('#clickMe').addEventListener('click', makeReq)

let randomRating = Math.floor(Math.random()* 10)+ 1;
console.log(Math.floor(Math.random()* 10)+ 1);

async function makeReq() {
  //User input value.
  const businessName = document.querySelector("#business").value;
  console.log(businessName)

  //Pulls data from the API using the business name that the user inputed.
  const res = await fetch(`/api?business=${businessName}`)
  const data = await res.json()

  console.log(data);
  console.log(data.name);
  console.log(res);

  //Updates the Business Name, Image and Url with the information from the API.
  document.querySelector("#businessName").textContent = data.name
  document.querySelector("#businessImg").src = data.img
  document.querySelector("#businessUrl").textContent = data.url
  document.querySelector("#businessRating").textContent = randomRating



}