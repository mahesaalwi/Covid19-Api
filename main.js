window.onload =()=> {
    
    this.gettanggapCovid();
}

 gettanggapCovid =()=> {
    fetch('https://coronavirus-19-api.herokuapp.com/countries/indonesia')
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        
        let country = data.country;
        let death = data.deaths;
        let cases = data.cases;
        let recover = data.recovered;


        document.getElementById('country').innerHTML = country.toLocaleString();
        document.getElementById('deaths').innerHTML = death.toLocaleString();
        document.getElementById('cases').innerHTML = cases.toLocaleString();
        document.getElementById('recovered').innerHTML = recover.toLocaleString();
  })
  .catch(function() {
      return "error";
  })
  setTimeout(gettanggapCovid,43200000)
}