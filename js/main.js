document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(event) {
  event.preventDefault()

  //User input value.
  const businessName = document.querySelector("#business").value;
  const location = document.querySelector("#location").value;
  console.log(businessName)

  //Pulls data from the API using the business name that the user inputed.
  const res = await fetch(`/api?business=${businessName}&location=${location}`)
  const data = await res.json()
  console.log(data);
  //console.log(`res: ${res}`);

  /*
  //this gets results for each business returned by the Yelp API. we are going to just grab the first one returned for now and work with that. 
  // but could be nice feature in future...
  for (let index = 0; index < data.length; index++) {
    let business = data[index]
    console.log(business)
    console.log(business.name)
  }
  */
  let business = data[0]

  //Updates the Business Name, Image and Url with the information from the API.
  document.querySelector("#businessName").textContent = business.name
  document.querySelector("#businessImg").src = business.image_url
  document.querySelector("#businessUrl").innerText = `${business.name}'s Yelp Page`
  document.querySelector("#businessUrl").href = business.url



}