"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'").toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      mainMenu(searchResults, people);
      break;
    case 'no':
      searchResults = searchByTrait(people);
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
  }
}  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
//   mainMenu(searchResults, people);
// }

// Menu function to call once you find who you are looking for
function mainMenu(person, people){


  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    prompt("First Name:" + " " + person[0].firstName + "\nLast Name: " + person[0].lastName + "\nGender:" + " " + person[0].gender + "\nDOB:" + " " + person[0].dob + "\nHeight:" + " " + person[0].height + "\nWeight:" + " " + person[0].weight + "\nEye Color:" + " " + person[0].eyeColor + "\nOccupation:" + " " + person[0].occupation + "\nParents:" + " " + person[0].parents + "\nCurrent Spouse:" + " " + person[0].currentSpouse);
    break;
    case "family":
    // TODO: get person's family
    prompt("Spouse:" + " " + displayPeopleReturn(findSpouse(person[0], people)) + "\nParents:" + " " + displayPeopleReturn(findParents(person[0], people)) + "\nSiblings:" + " " + displayPeopleReturn(findSiblings(person[0], people)) );
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = prompt("What is the person's first name?");
  let lastName = prompt("What is the person's last name?");

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPeopleReturn(people){
  return people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join(", ");
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

function searchByTrait(people){
  let height = prompt("What is the person's height?");
  let weight = prompt("What is the person's weight?");
  let eyeColor = prompt("What is the persons' eye color?");
  let occupation = prompt("What is the person's occupation?");
  let gender = prompt("What is the person's gender?")

  let foundTraits = people.filter(function(person){
    if(person.height === height){
      return true;
    }
    else if(person.weight === weight){
      return true;
    }
    else if(person.eyeColor === eyeColor){
      return true;
    }
    else if(person.occupation === occupation){
      return true;
    }
    else if(person.gender === gender){
      return true;
    }
    else{
      return false;
    }
    
  })
  // TODO: find the person using the name they entered
  return foundTraits;
}

// function that prompts and validates user input
// function promptFor(question, valid){
//let response;   
//do{
//     response = prompt(question).trim();
//   } while(!response || !valid(response));
//   return response;
// }

// helper function to pass into promptFor to validate yes/no answers
// function yesNo(input){
//   return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
// }

// // helper function to pass in as default promptFor validation
// function chars(input){
//   return true; // default validation only
// }
function findSiblings(person, people){
var foundSiblings = people.filter( function(el){
  if( person.parents.length === 0){
    return false;
  }
    else if( person.parents[0] === el.parents[0] && person.id !== el.id){
      return true;
    }
      else{
      return false;
      }
  });
  console.log(foundSiblings);
  return foundSiblings;
}


function findSpouse(person, people){
  var foundSpouse = people.filter( function(el){
    if(person.currentSpouse.length === 0){
      return false;
    }
  else if( person.currentSpouse === el.id){
    return true;
  }
  else {
    return false;
  }
});
  return foundSpouse;
}


function findParents(person, people){
  var foundParents = people.filter( function(el){
    if(person.parents[0].length === 0){
      return false;
    }
  else if( person.parents[0] === el.id){
    return true;
  }
  else if( person.parents[1] === el.id){
    return true;
  }
  else {
    return false;
  }
});
  return foundParents;
}

// function findDescendants(person, people){
//   var foundDescendants = people.filter(function(el{
//     if(person.)
  
//   });
// }


// function foundHeight(person, people){
//     prompt("What is the persons' height?");
//     if(person[0].height === person[0].height);
//     return mainMenu(people);
// }


// function foundWeight()


// function foundOccupation()


// function foundEyeColor()


// function foundGender()

// function displayDecendants(person, people){
//  var foundDecendants = people.filter( function(el){
//  if(counter>0){
//    return displayDecendants(counter-1);
//  }
// });
// }
// displayeDecendants