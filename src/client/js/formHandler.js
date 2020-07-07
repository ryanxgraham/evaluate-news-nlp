function handleSubmit(event) {
    event.preventDefault()
  //Get Input
  var inputURL = document.getElementById('url').value
  //Check for validURL
  if(Client.validURL(JSON.parse(JSON.stringify(inputURL)))) {
    console.log("Valid URL")
    console.log("Fetching Analysis")
    _postData('http://localhost:8080/article', inputURL)
    }else{
      var errorSection = document.querySelector('section.errors');
      var error = document.querySelector('section.errors #error');
      error.innerHTML = "Please enter a valid URL.";
      errorSection.style.display ='block';
    }
}

const _postData = async (url, input) => {

    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: input})
    });
    try {
      const data = await res.json()
      if(res.status === 200) {
      document.querySelector('section.results #polarity').innerHTML = data.polarity;
      document.querySelector('section.results #subjectivity').innerHTML = data.subjectivity;
      document.querySelector('section.results #pol-confidence').innerHTML = data.polarity_confidence;
      document.querySelector('section.results #sub-confidence').innerHTML = data.subjectivity_confidence;
      document.querySelector('section.results #excerpt').innerHTML = data.text;
      }
    } catch(error) {
      var errorSection = document.querySelector('section.errors');
      var error = document.querySelector('section.errors #error');
      error.innerHTML = "Something went wrong, please try again.";
      errorSection.style.display ='block';
      }
    }

export { handleSubmit, _postData }
