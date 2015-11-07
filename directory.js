var directory = {
  jim: 'Bulb',
  sara: 'Leading Learners',
  ray: 'Chem with Ray'
};

var input = window.prompt("Who are you looking for?")


function searchGalvanize (input){
  for(var key in directory){
    if(key===input){
      return directory[input];
    }
}
}
console.log(searchGalvanize(input));
