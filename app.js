"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = prompt("Do you know the name of the person you are looking for? Enter 'yes' or 'no'").toLowerCase().trim();
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
  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'").toLowerCase().trim();


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

  function searchByTrait(people){
    let filterResults = people
      while(filterResults.length >1){
      let displayOption = prompt("");
      
      switch(displayLayout){
      case "height":
      filterResults = searchByHeight(people);
      case "weight":
      filterResults = searchByWeight(people);
      break;
      case "eyeColor":
      filterResults = searchByEyeColor(people);
      break;
      case "occupation":
      filterResults = searchByOccupation(people);
      break;
      case "gender":
      filterResults = searchByGender(people);
      break;
      case "restart":
      return searchByTraits(people); // restart
      break;
      case "quit":
      return; // stop execution
      default:
      return app(people); // ask again
    }
  }
  return filterResults;
}


function searchByName(people){
  let firstName = prompt("What is the person's first name?").toLowerCase().trim();
  let lastName = prompt("What is the person's last name?").toLowerCase().trim();

  let foundPerson = people.filter(function(person){
    if(person.firstName.toLowerCase() === firstName && person.lastName.toLowerCase() === lastName){
      return true;
    }
    else{
      return false;
    }
  });
}

  
  function searchByHeight(people){
    let height = prompt("What is the person's height");
    
    let foundPerson = people.filter(function(person){
      if(person.height === height){
        return true;
      }
      else{
        return false;
      }
    });
  }
  
    function searchByWeight(people){
      let weight = prompt("What is the person's weight");
      
      let foundPerson = people.filter(function(person){
        if(person.weight === weight){
          return true;
        }
        else{
          return false;
        }
      });
    }

      function searchByGender(people){
        let gender = prompt("What is the person's gender?");
        
        let foundPerson = people.filter(function(person){
          if(person.gender === gender){
            return true;
          }
          else{
            return false;
          }
        });
      }

        function searchByEyeColor(people){
          let eyeColor = prompt("What is the person's eye color?");
          
          let foundPerson = people.filter(function(person){
            if(person.eyeColor === eyecolor){
              return true;
            }
            else{
              return false;
            }
          });
        }
        

          function searchByOccupation(people){
            let foccupation = prompt("What is the persons' occupation?");
            
            let foundPerson = people.filter(function(person){
              if(person.occupation === occupation){
                return true;
              }
              else{
                return false;
              }
            });
          }
//     // TODO: find the person using the name they entered
//   return foundPerson;{}
// }

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
  let personInfo = "First Name: " + person.firstName + "\n"; personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function searchByTrait(people){
  

//   let foundTraits = people.filter(function(person){
//     if(person.height === height){
//       return true;
//     }
//     else if(person.weight === weight){
//       return true;
//     }
//     else if(person.eyeColor === eyeColor){
//       return true;
//     }
//     else if(person.occupation === occupation){
//       return true;
//     }
//     else if(person.gender === gender){
//       return true;
//     }
//     else{
//       return false;
//     }
    
//   })
  // TODO: find the person using the name they entered
  // return foundTraits;
// }

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
    if(person.parents.length === 0){
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
