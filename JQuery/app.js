$( document ).ready(function() {
  
    $('body').append('<button id="btn1"></button>');
    $('#btn1').html('Button1');
    $('#btn1').click(function () { 
        alert("Welcome To The Page!!! Welcome To The Page!!!");
    });

  $('#btn2').click( () => {let boxVal = box1.value;alert(boxVal);});

  $( "#div1" ).bind({ mouseenter: function() {
   $('#div1').css('background-color', 'blue'); 
  },
  mouseleave: function() {
    $('#div1').css('background-color', 'black');
  
  }});

  $('#p1').click(() => {
    let colors = ["red", "green", "blue", "purple", "black", "orange", "yellow", "pink"];
    let colorPicker = colors[Math.floor(Math.random() * colors.length)];
    $('#p1').css('color', colorPicker);
  });

  $('#btn3').click( () => {$('#div2').append('<span id="spans"> Quinton </span>');});

   $('#btn4').click(() =>{
  let friends = ["Joshua","Lauren","Michael","Erica", "Hector","Taylor", "Carson","Victoria", "Thomas", "Jackson"];
  for(i=0;i<friends.length;i++){
    let friends = ["Joshua","Lauren","Michael","Erica", "Hector","Taylor", "Carson","Victoria", "Thomas", "Jackson"];
    let friends1 = friends[i];
    $("#ul1").append('<li id=friends"></li>').append(friends1).css('list-style', 'none');
   
  };
   });

});


 

