const carHolder = Math.floor(Math.random()*3);
let winnerDoor;

//Wait for the DOM to be fully loaded
window.addEventListener("DOMContentLoaded",()=>{
    //Get all the doors
    const doors = document.querySelectorAll(".door");

    //Loop through all the doors
    doors.forEach((door,index)=>{
        
        door.addEventListener("click",(evt)=>{
           //If door is clicked find the currently opened door and remove the open class
            let openedDoor  = document.querySelector(".door.opened");
           
            //If there is an opened
            if(openedDoor){
                openedDoor.classList.remove("opened");
            }
            //Only open the door again if the door wasn't previously opened
            let currentTappedDoor = evt.currentTarget;

            //If the clicked door not is already opened
            if(currentTappedDoor != openedDoor){
                //Open it
                currentTappedDoor.classList.add("opened");
                //check if the right door was pressed
                selectADoor(currentTappedDoor,index);
            }
        });

        //Get the element that will hold the image
        let hiddenImage = document.getElementById(`${index}`);

        //If the index is equal to that which holds the car
        if (index == carHolder) {
            //Insert the car image into the tag
            hiddenImage.innerHTML += `<img src="https://img.icons8.com/color/144/000000/car--v2.png"class="car"/>`;
            
            //Mark this as the winner door
            winnerDoor = door;
            // listContainer.appendChild(liList);
        }else{
            //Insert the goat into the tag
            hiddenImage.innerHTML += `<img src="https://play-lh.googleusercontent.com/8QnH9AhsRfhPott7REiFUXXJLRIxi8KMAP0mFAZpYgd44OTOCtScwXeb5oPe1E4eP4oF"class="car"/>`;
        };

    });
})

/**
 * Shows messages when the right door is pressed
 * @param {*} door the door object
 * @param {*} index the current index of doors
 */
function selectADoor(door,index){

    setTimeout(()=>{
        //check if the door is the winner door
        if(door == winnerDoor){
            alert("Congratulations you have selected the correct door");
            removeEverything();
        }else{
            if(confirm("Wrong door, Do you want to switch")){
                //remove the door
                door.remove();
                //Remove the image behind the door
                const imageBehindDoor = document.getElementById(index);
                imageBehindDoor?.remove();
            }else{
                alert("Game Oveeer !!!");
                removeEverything();
            }
        }
    },100);
}

/**
 * Remove all the doors from the DOM
 */
function removeEverything(){
    const doors = document.querySelector(".doors");
    doors?.remove();
}

/**
 * Refresh the page
 */
function replay(){
    window.location.reload();
}
































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
  
