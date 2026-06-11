
const button = document.getElementById("rollButton");

const images = document.querySelectorAll("#gameboard img");

button.addEventListener("click", (event) => {
    

    images.forEach(image => {

        if(isDieUnlocked(image)){
            image.src = "assets/die_rolling.gif"
        }

    });

    setTimeout(() => {

        
        images.forEach(image => {
            
            if(isDieUnlocked(image)){

                let chosenDiceNumber = Math.floor(Math.random() * 6) + 1;
                
                image.src = `assets/white_dice_${chosenDiceNumber}.gif`
            }

        });
    }, 2000);

});

function isDieUnlocked(dieImage) {

    const checkboxes = document.querySelectorAll("#gameboard input");

    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
    
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}