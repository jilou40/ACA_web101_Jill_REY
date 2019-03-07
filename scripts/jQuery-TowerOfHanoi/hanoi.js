'use strict';

$(document).ready(function(){
  let block = null;
  let pickUp = null;
  let dropOff = null;
  
  $('[data-row]').click(function() {
    //gets the block color
    if (block) {
        dropOff = $(this).children().last().data("color");
        console.log('dropOff:', dropOff)
        console.log('block:',block)
    
    } else {
        pickUp = $(this).children().last().data("color");
      
    } 

    //moves the block
    if ((block) && (dropOff === undefined)){
    $(this).append(block)
    block = null;
    } else if (block == null){
        block = $(this).children().last().detach();
    }

    })

})
