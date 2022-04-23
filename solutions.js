
// Converts a binary string into a base 10 decimal number
function binToDec(bin){
    return parseInt(bin,2);
  }


//   Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

//   Write a code that gives out the total amount for different days(d).
  function rentalCarCost(d) {
    if(d >= 7){
      return (d * 40) - 50
    }
    else if(d >= 3){
      return (d * 40) - 20
    }
    else{
      return d * 40
    }
  }


  // switch statement practice
  function getDrinkByProfession(param){
    let lowerParam = param.toLowerCase();
    switch(lowerParam){
        case 'jabroni': return 'Patron Tequila'
        case 'school counselor' : return 'Anything with Alcohol'
        case 'programmer' : return 'Hipster Craft Beer'
        case 'bike gang member' : return 'Moonshine'
        case 'politician' : return 'Your tax dollars'
        case 'rapper' : return 'Cristal'
        default: return 'Beer'
    }
  }


// returns if the alarm should be set given boolean of if employed and if on vacation
  function setAlarm(employed, vacation){
    return employed && !vacation
  }