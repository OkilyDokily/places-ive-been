//business logic
function Place(city, country, landmarks, year, notes){
  this.city = city,
  this.country = country,
  this.landmarks = landmarks,
  this.year = year,
  this.notes = notes
}

function PlaceHolder(){
  this.places = [];
}

$(document).ready(function(){
//business logic
PlaceHolder.prototype.AddPlace = function (place){
  this.places.push(place);
};

})