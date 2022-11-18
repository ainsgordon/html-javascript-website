let firstDiv = document.getElementById('course-div');
let secondDiv = document.getElementById('empty-div');



  
  function divReplace(data) {
    firstDiv.remove();
    let name = document.createElement("h2");
    name.innerHTML = data.name;

    let hoursText = document.createElement("h3");
    hoursText.innerHTML = "Hours of Operation";
    
    let hours = document.createElement("ul");
    for(let i = 0; i <data.teeTimes.length; i++) {
        let hour = document.createElement("li");
        hour.innerHTML = data.teeTimes[i];
        hours.appendChild(hour);
    }


    let booking = document.createElement("a");
    booking.setAttribute("href", data.bookingLink);
    let button1 = document.createElement("button");
    button1.innerHTML = "Book a Tee Time Here";
    booking.appendChild(button1);

    let ratesText = document.createElement("h3");
    ratesText.innerHTML = "Current Rates:";
    let rates = document.createElement("ul");
    
    for(let i = 0; i <data.fees.length; i++) {
        let rate = document.createElement("li");
        rate.innerHTML = data.fees[i];
        rates.appendChild(rate);
    }

    let contactText = document.createElement("h3");
    contactText.innerHTML = "Contact Information:";
    let contactInfo = document.createElement("p");
    contactInfo.innerHTML = data.contactInformation;

    let addressText = document.createElement("h3");
    addressText.innerHTML = "Address:";
    let address = document.createElement("p");
    address.innerHTML = data.address;
    
    secondDiv.appendChild(name);
    secondDiv.appendChild(hoursText);
    secondDiv.appendChild(hours);
    secondDiv.appendChild(booking);
    secondDiv.appendChild(ratesText);
    secondDiv.appendChild(rates);
    secondDiv.appendChild(contactText);
    secondDiv.appendChild(contactInfo);
    secondDiv.appendChild(addressText);
    secondDiv.appendChild(address);
    
  }
  
  
  
  

function clickThis(data) {
    ele = [];
    let ele2 = document.querySelectorAll('li.course');
    for(let i=0; i <ele2.length;i++) {
        ele2[i].addEventListener("click", function() {
            divReplace(data.courses[i].data);
        }, false);
    }
}




function changeList(data, num) {
    for(let i = 0; i < ele.length; i++) {
        let newText = data.Courses[num].courses[i].location;
        ele[i].textContent = newText;
    }
    clickThis(data.Courses[num]);
}

function getJSON(num) {
    fetch('./courses.json')
    .then((response) => response.json()).then((json)=> changeList(json,num))
}

let ele = document.querySelectorAll('li.course');
for(let i = 0; i < ele.length; i++){
    ele[i].addEventListener("click", function() {
        getJSON(i);
    }, false);
}
