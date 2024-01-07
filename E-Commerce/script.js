function openNav() {
  document.getElementById('mysidenav').style.width = '250px';
}
function closeNav() {
  document.getElementById('mysidenav').style.width = '0';
}
function getOffers() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('http://127.0.0.1:3000/offers', requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      // alert('start binding');
      JSON.parse(result).data.forEach(element => {
        var txt = document.getElementById('offers').innerHTML;
        // alert(txt);
        txt += `<img src=${element.src} alt=${element.alt} />`;
        document.getElementById('offers').innerHTML = txt;
      });
    })
    .catch(error => console.log('error', error));
}
function features() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('http://127.0.0.1:3000/featured-products', requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      // alert('start binding1');
      JSON.parse(result).data.forEach(element => {
        var txt = document.getElementById('features').innerHTML;
        // alert(txt);
        txt += `<div class="gallery"><img src="${element.src}" alt="${element.alt}" class="image" />
        <div class="desc">${element.desc}</div></div>`;
        document.getElementById('features').innerHTML = txt;
      });
    })
    .catch(error => console.log('error', error));
}
function categories() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('http://127.0.0.1:3000/featured-products', requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      // alert('start binding2222');
      JSON.parse(result).data.forEach(element => {
        var txt = document.getElementById('mycard').innerHTML;
        // alert(txt);
        txt += `<div class="card"><img src="${element.src}" alt="${element.alt}" class="card" /></div>`;
        document.getElementById('mycard').innerHTML = txt;
      });
    })
    .catch(error => console.log('error', error));
}

getOffers();
features();
// categories();