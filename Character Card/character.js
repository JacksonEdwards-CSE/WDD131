
const stats = document.querySelectorAll(".stats p");
const level = stats[1];
const health = stats[2];

const buttons = document.querySelectorAll(".buttons")
const healthButton = buttons[1];
const levelButton = buttons[2];

let currentHealth = 100;

let currentLevel = 1;

let attackDamage = 20;

healthButton.addEventListener("click", function() {
    if (currentHealth > attackDamage){

        currentHealth = currentHealth - attackDamage;
        
        health.textContent = "Health: " + currentHealth;
    }

    else{
        health.textContent = "Character Died!"
    }
})

levelButton.addEventListener("click", function() {

    if (currentHealth > attackDamage)

        currentLevel = currentLevel + 1;
        
        level.textContent = "Level: " + currentLevel;
})