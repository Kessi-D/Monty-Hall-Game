const doorOne = document.getElementById("d1");
const doorTwo = document.getElementById("d2");
const doorThree= document.getElementById("d2");
const carHolder = Math.floor(Math.random()*3);
let winnerDoor;

window.addEventListener("DOMContentLoaded",()=>{
    //Get all the doors
    const doors = document.querySelectorAll(".door");

    //Loop through all the doors
    doors.forEach((door,index)=>{
        
        door.addEventListener("click",(evt)=>{
           //If door is clicked find the currently opened door and remove the open class
            let openedDoor  = document.querySelector(".door.opened");
            console.log("OpenedDorr",openedDoor);
            if(openedDoor){
                openedDoor.classList.remove("opened");
            }
            //Only open the door again if the door wasn't previously opened
            let currentTappedDoor = evt.currentTarget;
            if(currentTappedDoor != openedDoor){
                currentTappedDoor.classList.add("opened");
                selectADoor(currentTappedDoor,index);
            }
        });

        let hiddenImage = document.getElementById(`${index}`);
        if (index == carHolder) {
            hiddenImage.innerHTML += `<img src="https://img.icons8.com/color/144/000000/car--v2.png"class="car"/>`;
            winnerDoor = door;
            // listContainer.appendChild(liList);
        }else{
            hiddenImage.innerHTML += `<img src="https://play-lh.googleusercontent.com/8QnH9AhsRfhPott7REiFUXXJLRIxi8KMAP0mFAZpYgd44OTOCtScwXeb5oPe1E4eP4oF"class="car"/>`;
        };

    });
})



// const behindDoorTwo = document.getElementById("1");
// const behindDoorThree = document.getElementById("2");

//  console.log(carHolder);   

const selectedBehindDoor = document.getElementById(carHolder);
 console.log(selectedBehindDoor); 
function selectDoors(index){
    
    
    var doors = [0,1,2];
    var index = doors[index];
    
    
    //   const liList = document.createElement("li");
    //   liList.innerHTML = arr[i] + `<button onclick="Edit">X</button>`;
    //   liList.className = "sublist";
    //   listContainer.appendChild(liList);
   
    for (let i=0; i<doors.length; i++){
        selectedBehindDoor.innerHTML = doors[i];
        if ((index = carHolder)) {
          selectedBehindDoor.innerHTML += `<img src="https://img.icons8.com/color/144/000000/car--v2.png"class="car"/>`;
          // listContainer.appendChild(liList);
        };
        // console.log(selectedBehindDoor)
        // console.log(index)
        
    }
}


function selectADoor(door,index){
    setTimeout(()=>{
        if(door == winnerDoor){
            alert("Congratulations you have selected the correct door");
            removeEverything();
        }else{
            if(confirm("Wrong door, Do you want to switch")){
                //remove the door
                door.remove();
                //Remove the image behind the door
                console.log('index',index);
                const imageBehindDoor = document.getElementById(index);
                imageBehindDoor?.remove();
            }else{
                alert("Game Oveeer !!!");
                removeEverything();
            }
        }
    },100);
}

function removeEverything(){
    const doors = document.querySelector(".doors");
    doors?.remove();
}


function replay(){
    window.location.reload();
}

   

// function selectDoors() {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;

// console.log(selectDoors())
//  console.log(index);





































// function display_random_images(){
//     let selectTheImage = [
//       {
//         img_1: `<img src="https://img.icons8.com/emoji/96/000000/goat-emoji.png" class="goat"/>`,
//       },
//       {
//         img_2: `<img src="https://img.icons8.com/color/144/000000/car--v2.png"class="car"/>`,
//       },
//       {
//         img_3: `<img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-goat-animal-faces-icongeek26-linear-colour-icongeek26.png" class="goat_2"/>`,
//       },
//     ];
// }
//  function getRandomInt(min,max) 
//     {
//       //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
// imn = Math.floor(Math.random() * (max - min + 1)) + min;
//     return picksAnImage[imn];
//     }  

// // 0 is first image,   picksAnImage.length - 1) is  last image
  
// var newImage = getRandomInt(0, picksAnImage.length - 1);
 
// // remove the previous images
// var images = document.getElementsByTagName('img');
// var l = images.length;
// for (var p = 0; p < l; p++) {
//     images[0].parentNode.removeChild(images[0]);
// }
// // display the image  
// document.body.appendChild(newImage);
// }

// let  picksAnImage = []
//     for(let i=0; k = selectTheImage.length; i < k, i++){
//          newImage = picksAnImage[i];
//          picksAnImage[i].src =selectTheImage[i].src;
//     }


// function addDoors(toSwitch){
    
//     const carHolder = Math.floor(Math.random()*3);
//     const selectedBehindDoor = document.getElementById(carHolder.toString());

//     selectedBehindDoor.innerHTML = `<img src="https://img.icons8.com/color/144/000000/car--v2.png"class="car"/>`;
    
    // let selectTheImage = [
    //   {
    //     img_1: `<img src="https://img.icons8.com/emoji/96/000000/goat-emoji.png" class="goat"/>`,
    //   },
    //   {
    //     img_2: `<img src="https://img.icons8.com/color/144/000000/car--v2.png"class="car"/>`,
    //   },
    //   {
    //     img_3: `<img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-goat-animal-faces-icongeek26-linear-colour-icongeek26.png" class="goat_2"/>`,
    //   },

    // let revealedDoor = [0, 1, 2].find(
    //   (door) => door !== carHolder && door !== selectedBehindDoor
    // );
    // if (toSwitch) {
    //   return (
    //     carHolder ===
    //     [0, 1, 2].find(
    //       (door) => door !== selectedBehindDoor && door !== revealedDoor
    //     )
    //   );
    // } else {
    //   return carHolder === selectedBehindDoor;
    // }
// }

// function playMontyHall(toSwitch) {
//   let carIsIn = Math.floor(Math.random() * 3);

//   let doorSelected = Math.floor(Math.random() * 3);

//   let revealedDoor = [0, 1, 2].find(
//     (door) => door !== carIsIn && door !== doorSelected
//   );

//   if (toSwitch) {
//     return (
//       carIsIn ===
//       [0, 1, 2].find((door) => door !== doorSelected && door !== revealedDoor)
//     );
//   } else {
//     return carIsIn === doorSelected;
//   }
// }
// function simulateGame(num, toSwitch) {
//   let gamesWon = 0;

//   for (let i = 0; i < num; i++) {
//     gamesWon += addDoors(toSwitch);
//   }

//   return gamesWon;
// }

// console.log(simulateGame(1000, toSwitch = true));  // play 1000 times, switch the door. Print how many times won. 

// console.log(simulateGame(1000, toSwitch = false));  // play 1000 times, don't switch the door. Print how many times won. 




// door_1.addEventListener('click', () => {
//     if(door_1){
//         console.log("You've selected door 1")
//     }
// }
  
