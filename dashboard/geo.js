var loc = document.getElementById("myloc");

function myLocation() {
    console.log(loc)

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

}else{
    loc.innerHTML = "Location Tracking Not Possible .";
}

}

function showPosition(position){
    loc.innerHTML = " Longitude : " + position.coords.longitude + " <br> Latitude : " + position.coords.latitude + "<br>";
}

