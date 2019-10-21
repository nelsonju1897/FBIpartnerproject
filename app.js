"use strict"

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
      mainMenu(searchResults, people);
      break;
      default:
    app(people);
      break;
  }
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
  return foundPerson;
}

function mainMenu(person, people){
  
  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'").toLowerCase().trim();

  switch(displayOption){
    case "info":
    alert("First Name:" + " " + person[0].firstName + "\nLast Name: " + person[0].lastName + "\nGender:" + " " + person[0].gender + "\nDOB:" + " " + person[0].dob + "\nHeight:" + " " + person[0].height + "\nWeight:" + " " + person[0].weight + "\nEye Color:" + " " + person[0].eyeColor + "\nOccupation:" + " " + person[0].occupation + "\nParents:" + " " + displayPeopleReturn(findParents(person[0], people)) + "\nCurrent Spouse:" + " " + displayPeopleReturn(findSpouse(person[0], people)) );
    break;
    case "family":
    alert("Spouse:" + " " + displayPeopleReturn(findSpouse(person[0], people)) + "\nParents:" + " " + displayPeopleReturn(findParents(person[0], people)) + "\nSiblings:" + " " + displayPeopleReturn(findSiblings(person[0], people)) );
    break;
    case "descendants":
    alert("Descendants:" + " " + displayPeopleReturn(findDescendants(person[0], people)));
    break;
    case "restart":
    app(people);
    break;
    case "quit":
    default: 
  }
}

  function searchByTrait(people){
    let filterResults = people
      while(filterResults.length > 1){
      let displayOption = prompt("Type what trait you would like to search by: 'height', 'weight', 'eye color', 'occupation', 'gender', 'restart', 'quit'");
      
      switch(displayOption){
      case 'height':
      filterResults = searchByHeight(filterResults);
      break;
      case 'weight':
      filterResults = searchByWeight(filterResults);
      break;
      case 'eye color':
      filterResults = searchByEyeColor(filterResults);
      break;
      case 'occupation':
      filterResults = searchByOccupation(filterResults);
      break;
      case 'gender':
      filterResults = searchByGender(filterResults);
      break;
      case 'restart':
      return searchByTrait(people);
      case 'quit':
      default:
      return app(people);
    }
  }
  return filterResults;
}

function searchByHeight(people){
  let height = prompt("What is the person's height");
  var foundHeight = people.filter(function(el){
    if(height.length === 0){
      return false;
    }
  else if( height == el.height){
    return true;
  }
  else {
    return false;
  }
});
console.log (foundHeight);  
return foundHeight;
} 

function searchByWeight(people){
    let weight = prompt("What is the person's weight");
    var foundWeight = people.filter(function(el){
      if(weight.length === 0){
        return false;
      }
    else if( weight == el.weight){
      return true;
    }
    else {
      return false;
    }
  });
  console.log (foundWeight);  
  return foundWeight;  
  }
  
  function searchByGender(people){
    let gender = prompt("What is the person's gender");
    var foundGender= people.filter(function(el){
      if(gender.length === 0){
        return false;
      }
    else if( gender == el.gender){
      return true;
    }
    else {
      return false;
    }
  });
  console.log (foundGender);  
  return foundGender;  
  }

  function searchByEyeColor(people){
    let eyeColor = prompt("What is the person's eye color");
    var foundEyeColor = people.filter(function(el){
      if(eyeColor.length === 0){
        return false;
      }
    else if( eyeColor == el.eyeColor){
      return true;
    }
    else {
      return false;
    }
  });
  console.log (foundEyeColor);  
  return foundEyeColor;  
  }

  function searchByOccupation(people){
    let occupation = prompt("What is the person's occupation");
    var foundOccupation = people.filter(function(el){
      if(occupation.length === 0){
        return false;
      }
    else if( occupation == el.occupation){
      return true;
    }
    else {
      return false;
    }
  });
  console.log (foundOccupation);  
  return foundOccupation;  
  }

function displayPeopleReturn(people){
  return people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join(", ");
}

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

function findDescendants(person, people){
  let foundDescendants = people.filter( function(el){
    if(person.id === el.parents[0]){
      return true;
    }
    else if(person.id === el.parents[1]){
      return true;
    }
    else {
      return false;
    }
  });
  for( let i = 0; i < foundDescendants.length; i++){
    foundDescendants = foundDescendants.concat(findDescendants(foundDescendants[i], people));
    
  }
  return foundDescendants
}