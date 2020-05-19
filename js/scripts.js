//business logic
function Place(city, country, year){
  this.city = city
  this.country = country
  this.year = year
  this.landmarks = []
  this.notes = []
}

function PlaceHolder(){
  this.places = [];
}

function initializeProgram(){
  PlaceHolder.prototype.AddPlace = function (place){
    this.places.push(place);
  }
  Place.prototype.AddLandmark = function (string){
    this.landmarks.push(string);
  }
  Place.prototype.AddNote = function (string){
    this.notes.push(string);
  }
  var placeHolder = new PlaceHolder();

  var paris = new Place("Paris","France",2000);
  var newYork = new Place("New York City","USA",2002);
  var sydney = new Place("Sydney","Australia", 1991);
  var orlando = new Place("Orland","USA",1992);
  
  paris.AddLandmark("Eiffel Tower");
  paris.AddLandmark("Arc de Triomphe");
  paris.AddNote("Was traveling in europe for 4 months at the time");
  paris.AddNote("The camp grounds were bad, impossible to stake the tents");
  
  newYork.AddLandmark("Statue of Liberty");
  newYork.AddLandmark("Ground Zero");
  newYork.AddNote("The people were rude");
  newYork.AddNote("The bars closed at 4 am");
  
  sydney.AddLandmark("Sydney Opera House");
  sydney.AddLandmark("The Royal Botanic Gardens");
  sydney.AddNote("I saw arsenic and old lace at the sydney opera house");
  sydney.AddNote("As a kid I loved Australia");
  
  orlando.AddLandmark("Disney World");
  orlando.AddLandmark("Universal Studios");
  orlando.AddNote("I missed out on Nickelodean Studios because I was at space camp");
  orlando.AddNote("Disney World is exactly like Disney Land")
  
  
  placeHolder.AddPlace(paris);
  placeHolder.AddPlace(newYork);
  placeHolder.AddPlace(sydney);
  placeHolder.AddPlace(orlando);

  return placeHolder.places;
}

$(document).ready(function(){
//ui logic
  var places = initializeProgram();
  places.forEach(function(place){
    console.log(place)
  });

})