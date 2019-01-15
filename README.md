# attack-math-calculator
**TLDR: The instructions for Assignment 4 (jQuery) should be modified to correspond to the demo video or the video modified to match the instructions. The game in the demo video does not deduct health points from the player on a round where the enemy is defeated. This is not mentioned in the video or the instructions but makes all the difference in meeting the goal of making it so every player can possibly win.**


My curiosity was piqued when the instructions for UNC Full Stack Bootcamp's assignment 4 (jQuery) said that, "[each player] should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player." I tried testing different scenarios and quickly realized that to truly run the numbers, I needed a tool. So, I made one.

I have not found any set of numbers that allows each player to possibly win the game. Looking very carefully, my classmate Marcia Moss noticed that the demo video for this assignment did not deduct health points from the player in a round that defeated an enemy. There was no note of this in the demo video or in the instructions. This approach (not deducting health points when defeating) doesn't make logical sense but it can lead to sets of numbers which allow every player to possibly win.

Below are the instructions from the assignment:




### Option Two: Star Wars RPG Game (Challenge)

1. [Watch the demo](https://youtu.be/klN2-ITjRt8).

2. Here's how the app works:

   * When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

   * The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.

   * The player chooses an opponent by clicking on an enemy's picture.

   * Once the player selects an opponent, that enemy is moved to a `defender area`.

   * The player will now be able to click the `attack` button.
     * Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 
     * The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.

3. The player will keep hitting the attack button in an effort to defeat their opponent.

   * When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can now choose a new opponent.

4. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.

##### Option 2 Game design notes

* Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.

* Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
  * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
* The enemy character only has `Counter Attack Power`. 

  * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.

* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.

* No characters in the game can heal or recover Health Points. 

  * A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.

* Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.