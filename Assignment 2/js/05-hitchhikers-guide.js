let choice = prompt("Are you ready to play the game?");

    if (choice.toUpperCase() != "YES"){
        alert("Thank you! Please play again sometime!");
        exit;
    }


alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");
let direction = prompt("Which direction would you like to head (please enter forward, left, or right)");
switch(direction) {
    case "forward":
        alert("You walk 100 yards and safely make your way out of the cave.");
        break;
    case "left":
        alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
        break;
    case "right":
        alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
        break;
    default:
        alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
    }
var rate = prompt("Thank you for playing. Please rate the game between 1 and 10.");
if (rate >= 1 && rate <= 5) {
    alert("Thank you. I am working hard to improve the game.");
    break;
} else if (rate >=6 && rate <= 10) {
    alert("Thank you! I hope you play the game again soon!")
} else (alert("Thank you for playing the game."));