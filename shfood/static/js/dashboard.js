$(document).ready(()=>{
  console.log("hello?");
  var cardNumber = 1;
  $(".cardCreator").hide();  
  $(".plusButton").on("click", ()=>{
    $(".cardCreator").slideToggle('slow');
    console.log("Does this work");
  });
  
 class invitation{
   constructor(name, dateTime, people, cuisine, cost){
     this._name = name;
     this._dateTime = dateTime;
     this._people = people;
     this._cuisine = cuisine;
     this._cost = cost;
     this._cardNumber = cardNumber;
     this._subscriptions = 1;
     cardNumber++;  
   }
   get card(){
     var card = [this._name, this._dateTime, this._people, this._cuisine, this._cost];
     return card;
   }   
 }

  $(".createButton").on("click", ()=>{
    console.log('classTest');
    var correct = checkFields();
    if(correct === true){
    var name = "Cedric Valenwood";
    console.log(name);
    var dateTime = document.getElementById('dateTime').value;
    dateTime = dateTime.substr(dateTime.length - 5);
    console.log(dateTime);  //only select the time for now
    var people = $('#noPeople').val();
    console.log(people);
    var cuisine = document.getElementById('cuisine').value;
    console.log(cuisine);
    var cost = document.getElementById('cost').value;
    const newCard = new invitation(name,dateTime,people,cuisine,cost); //create a new card object
    console.log(newCard);
      
    $('#latestCard').clone().prependTo('#cardRow');
    $('#cardName').text(name);
    $('#cardDateTime').text(dateTime);
    $('#cardNoPeople').text(newCard._subscriptions + "/" + people);
    $('#cardCuisine').text(cuisine);
    $('#cardCost').text("€"+cost);
    
    $(".cardCreator").slideToggle('slow');
    
    $('#creatorHeading').css({
        color: 'rgb(80,94,108)'
    })
    $('#creatorHeading').text("Create an invitation");
       
    document.getElementById('dateTime').value = "";
    document.getElementById('noPeople').value = "";
    document.getElementById('cuisine').value = "";
    document.getElementById('cost').value = "";
    
    } else{
        $('#creatorHeading').css({
            color: 'rgb(216, 45, 36)'
        })
      $('#creatorHeading').text("Check if all the fields are filled in");
        
    }
  });   

  function checkFields(){
    if(document.getElementById('dateTime').value === "" || document.getElementById('noPeople') === "" || document.getElementById('cuisinie') === "" || document.getElementById('cost') === ""){
      return false;
    } else{
      return true;
    }
  }
});
