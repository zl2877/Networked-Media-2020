//let data = [{"breed":"britishshorthair"},{"breed":"ragdoll"},{"breed":"abyssinian"},{"breed":"siamese"}, {"breed":"americanshorthair"}, {"breed":"americanshorthair"}];

let data = [];

let touchMultiplier = 20;
let formattedData = [];


function loadData() {

  fetch('/data')
   .then((response) => {
     return response.json();
   })
   .then((incoming) => {
     console.log(data);
     data = incoming.thedata;

     for (let i = 0; i < data.length; i++) {
      let current = data[i];
       print("On " + current.breed);
       let foundBreed = false;
       
       for (let j = 0; j < formattedData.length; j++) {
        if (current.breed == formattedData[j].breed) {
          formattedData[j].cat++;
          print("found " + formattedData[j].cat);
          foundBreed = true;
        }
       } 
       if (foundBreed == false) {
        formattedData.push({"breed": current.breed, "cat": 1}); 
         print("not found, added to formattedData");
       }
     }
     print(formattedData);
   });
   setTimeout(loadData, 10000);
}


function setup() {
  createCanvas(600, 400);
  loadData();
  //console.log(data);
  print(data);
  

}

function draw() {
  background(250);
  for (let i = 0; i < formattedData.length; i++) {
    fill(0)
    textSize(15);
    text('British', 2, 30);
    textSize(15);
    text('Short Hair', 2, 45);
    
    fill(0, 50, 100)
    textSize(15);
    text('Ragdoll', 110, 35);
    
    fill(0, 100, 200)
    textSize(15);
    text('Abyssinian', 220, 35);
    
    fill(0, 150, 250)
    textSize(15);
    text('Siamese', 330, 35);

  }
  
  for (let i = 0; i < formattedData.length; i++) {
    noStroke()
    fill(0, i* 50, i* 100)
    rect(i*110,60, 40, touchMultiplier * formattedData[i].cat);
  }

}