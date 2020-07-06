function handleSubmit(event) {
    event.preventDefault()

  //Get Input

  var inputURL = document.querySelectorAll('input[name=input-url]')

  //Check for validURL
  if(Client.validURL(JSON.parse(JSON.stringify(inputURL[0].value))))
  {
    console.log("Valid URL")
    console.log("Fetching Analysis")

    fetch('http://localhost/8080/article', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({inputURL[0].value})
    })
    .then(res => res.json())
    .then(function(res) {
      console.log(res);

      document.querySelector('section.results #polarity').innerHTML = res.polarity
      document.querySelector('section.results #subjectivity').innerHTML = res.subjectivity
      document.querySelector('section.results #pol-confidence').innerHTML = res.polarity_confidence
      document.querySelector('section.results #sub-confidence').innerHTML = res.subjectivity_confidence
      document.querySelector('section.results #excerpt').innerHTML = res.text
    })
  }else{
    var errorSection = document.querySelector('section.errors');
    var error = document.querySelector('section.errors #error');
    error.innerHTML = "The URL:[" +JSON.stringify(inputURL[0].value)+"] is not a valid URL";
    errorSection.style.display ='block';
  }
}

export { handleSubmit }
