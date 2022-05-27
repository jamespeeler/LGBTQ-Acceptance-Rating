document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq() {
  console.log("clicked")

  const businessName = document.querySelector("#business").value;
  console.log(businessName)

  const res = await fetch(`/api?business=${businessName}`)
  const data = await res.json()

  console.log(data);
  console.log(data.name);
  document.querySelector("#businessName").textContent = data.name
  document.querySelector("#businessImg").src = data.img
  document.querySelector("#businessUrl").textContent = data.url
  document.querySelector("#businessUrl").textContent = data.url


}