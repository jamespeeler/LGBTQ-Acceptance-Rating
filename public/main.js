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

  //displays business rating on page 
  let randomRating = (Math.floor(Math.random() * 10) + 1);
  let ratingText = ""
  switch (randomRating) {
    case 1:
      ratingText = `This place is not safe!`
      break;
    case 2:
      ratingText = `They have a long way to go to be safe for the LGBTQ+ community!`
      break;
    case 3:
      ratingText = `Not good, try somewhere else!`
      break;
    case 4:
      ratingText = `This place definitely doesn't pass the vibe check`
      break;
    case 5:
      ratingText = `Do better at supporting the LGBTQ+ community!`
      break;
    case 6:
      ratingText = `Above average isn't good enough in this case... do better!`
      break;
    case 7:
      ratingText = `Seems to be moving in the right direction but not there yet!`
      break;
    case 8:
      ratingText = `Starting to get there... let's move toward 10 though!`
      break;
    case 9:
      ratingText = `Doing pretty good, but there's room for improvement!`
      break;
    case 10:
      ratingText = `They know what's up!!! Must be rainbow community ;)`
      break;
    default:
      ratingText = `You shouldn't be here... how'd you get here???`
      break;
  }
  document.querySelector("#businessRating").innerText = randomRating
  document.querySelector("#businessRatingMessage").innerText = ratingText
}