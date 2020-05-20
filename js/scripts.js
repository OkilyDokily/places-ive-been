//business logic
function Place(city, country, year){
  this.city = city
  this.country = country
  this.year = year
  this.landmarks = []
  this.notes = []
}
Place.prototype.AddLandmark = function (string){
  this.landmarks.push(string);
}
Place.prototype.AddNote = function (string){
  this.notes.push(string);
}

var placeHolder = new PlaceHolder();

  
$(document).ready(function(){
//ui logic

  $("#addplace").submit(function(e){
    e.preventDefault();
    var city = $("#city").val();
    var country = $("#country").val();
    var year = $("#year").val();
    
    var landmarks = $("#landmarks").val().split(",");
    var notes = $("#notes").val().split("/");

    var place = new Place(city,country,year);
    landmarks.forEach(function(landmark){
      place.AddLandmark(landmark);
    });
    notes.forEach(function(note){
      place.AddNote(note);
    })
    
    var id = place.city.split(' ').join('').toLowerCase();
    $("#places").append("<li id='"+ id +"'>"+ place.city+"</li>");
   
    $('#' + id).append("<ul class='visibility hide'>"
    +"<li>" + place.country + "</li>"
    + "<li>" + place.year + "</li>"
    + "<li> Landmarks" 
    +  "<ul class='landmarks'>"
        
    +  "</ul>"
    + "</li>"
    + "<li> Notes"
    +  "<ul class='notes'>"

    +  "</ul>"
    + "</li>"
    + "</ul>");
    
    place.landmarks.forEach(function(landmark){
      $("#" + id + " " + ".landmarks").append("<li>" + landmark + "</li>")
    })
    place.notes.forEach(function(note){
      $("#" + id + " " + ".notes").append("<li>" + note + "</li>")
    })
    
    $("#"+ id).click(function(){
      $("#"+ id +" " + ".visibility").toggleClass("hide");  
    });
  });
})