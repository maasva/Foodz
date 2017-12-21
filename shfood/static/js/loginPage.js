$(document).ready(()=>{
  console.log("hello?");

  $(".loginButton").on("click", () =>{
    if ($('#loginEmail').val() === "admin@admin.com" && $('#loginPassword').val() === "123" ) {

    } else if ($('#loginEmail').val() != "admin@admin.com" && $('#loginPassword').val() != "123" ) {
      $('#errorLabel').text("incorrect email adress or password")
    }
  });


  $(".createButton").on("click", ()=>{
    console.log('classTest');
    val correct = checkFields();
    if(correct === true){
    var name = "Maas van Apeldoorn";
    console.log(name);
    var dateTime = document.getElementById('dateTime').value;
    console.log(dateTime);
    var people = $('#noPeople').val();
    console.log(people);
    var cuisine = document.getElementById('cuisine').value;
    console.log(cuisine);
    var cost = document.getElementById('cost').value;
    const newCard = new invitation(name,dateTime,people,cuisine,cost);
    console.log(newCard);

    $('#latestCard').clone().prependTo('#cardRow');
    $('#cardName').text(name);
    $('#cardDateTime').text(dateTime);
    $('#cardNoPeople').text(newCard._subscriptions + "/" + people);
    $('#cardCuisine').text(cuisine);
    $('#cardCost').text("€"+cost);

      $(".cardCreator").slideToggle('slow');
    } else{
      $('#creatorHeading').text("Check if all the fields are filled in.")
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
