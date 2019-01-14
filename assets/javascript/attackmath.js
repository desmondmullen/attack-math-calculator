$(document).ready(function () {
    characters = {
        one: {
        },
        two: {
        },
        three: {
        },
        four: {
        }
    };

    scenarios = [1234, 1243, 1324, 1342, 1423, 1432, 2134, 2143, 2314, 2341, 2413, 2431, 3124, 3142, 3214, 3241, 3412, 3421, 4123, 4132, 4213, 4231, 4312, 4321];

    var theFighterHealth = 0;
    var theFighterAttack = 0;
    var theEnemyHealth = 0;
    var theFighterInitialAttack = 0;
    var thePreFightEnemyHealth = 0;

    function resetPage() {
        location = location;
    };

    function initializeFields(theCharacter, x) {
        $("#player" + (x + 1) + "-name").attr({ "value": eval("characters." + theCharacter + ".name") });
        $("#player" + (x + 1) + "-health").attr({ "value": eval("characters." + theCharacter + ".health") });
        $("#player" + (x + 1) + "-attack").attr({ "value": eval("characters." + theCharacter + ".attack") });
    };

    function loadDataIntoVariables() {
        var player1name = document.getElementById('player1-name').value;
        var player1health = document.getElementById('player1-health').value;
        var player1attack = document.getElementById('player1-attack').value;
        var player2name = document.getElementById('player2-name').value;
        var player2health = document.getElementById('player2-health').value;
        var player2attack = document.getElementById('player2-attack').value;
        var player3name = document.getElementById('player3-name').value;
        var player3health = document.getElementById('player3-health').value;
        var player3attack = document.getElementById('player3-attack').value;
        var player4name = document.getElementById('player4-name').value;
        var player4health = document.getElementById('player4-health').value;
        var player4attack = document.getElementById('player4-attack').value;
        eval(characters.one).name = player1name;
        eval(characters.one).health = player1health;
        eval(characters.one).preFightHealth = player1health;
        eval(characters.one).attack = player1attack;
        eval(characters.one).preFightAttack = player1attack;
        eval(characters.two).name = player2name;
        eval(characters.two).health = player2health;
        eval(characters.two).preFightHealth = player2health;
        eval(characters.two).attack = player2attack;
        eval(characters.two).preFightAttack = player2attack;
        eval(characters.three).name = player3name;
        eval(characters.three).health = player3health;
        eval(characters.three).preFightHealth = player3health;
        eval(characters.three).attack = player3attack;
        eval(characters.three).preFightAttack = player3attack;
        eval(characters.four).name = player4name;
        eval(characters.four).health = player4health;
        eval(characters.four).preFightHealth = player4health;
        eval(characters.four).attack = player4attack;
        eval(characters.four).preFightAttack = player4attack;
    };

    function runOneRound(x, y, theScenario) {
        let theFighter = Object.keys(characters)[x - 1];
        let theEnemy = Object.keys(characters)[y - 1];
        // subtract enemy's attack from fighter's hp
        theEnemyAttack = parseInt(eval("characters." + theEnemy + ".preFightAttack"));
        thePreFightFighterHealth = parseInt(theFighterHealth);
        thePreFightFighterAttack = parseInt(theFighterAttack);
        theFighterAttack = (parseInt(theFighterAttack) + parseInt(theFighterInitialAttack));
        // subtract fighter's attack from enemy hp
        theTempPreFightEnemyHealth = theEnemyHealth;
        theEnemyHealth = parseInt(theEnemyHealth) - parseInt(thePreFightFighterAttack);//post-fight

        //if no-damage-on-winning is checked then don't do this once enemyHealth is < 1
        if (theEnemyHealth < 1) {
            if ($("#no-damage").is(":checked")) {
            } else {
                theFighterHealth = parseInt(theFighterHealth) - parseInt(theEnemyAttack);
            }
        } else {
            theFighterHealth = parseInt(theFighterHealth) - parseInt(theEnemyAttack);
        }
        if ($("#verbose").is(":checked")) {
            $("#results").append("<br><font color=\"red-text\"><b>fighter " + x + "'s post-fight hp: " + theFighterHealth + "</b></font>");
        } else {
            if (theScenario.length === 0) {
                $("#results").append("<br><font color=\"red-text\"><b>fighter " + x + "'s post-fight hp: " + theFighterHealth + "</b></font>");
            }
        }
        if ($("#verbose").is(":checked")) {
            $("#results").append("<br>fighter " + x + "'s pre-fight hp: " + thePreFightFighterHealth);
            $("#results").append("<br>enemy " + y + "'s attack: " + theEnemyAttack);
            $("#results").append("<br>enemy " + y + "'s pre-fight hp: " + theTempPreFightEnemyHealth);
            $("#results").append("<br>fighter " + x + "'s attack: " + thePreFightFighterAttack);
            $("#results").append("<br>enemy " + y + "'s post-fight hp: " + theEnemyHealth);
            $("#results").append("<br>fighter " + x + "'s post-fight attack: " + theFighterAttack);
            $("#results").append("<br>**************<br>");
        }
        eval("characters." + theFighter).health = theFighterHealth;
        eval("characters." + theFighter).attack = theFighterAttack;
        eval("characters." + theEnemy).health = theEnemyHealth;
    };

    function runThisScenario() {
        $("#results").empty();
        loadDataIntoVariables()
        for (let scenarioCount = 0; scenarioCount < scenarios.length; scenarioCount++) {
            let theScenario = (scenarios[scenarioCount]).toString(); // get the scenario
            let theScenarioTitle = theScenario;
            scenarios[scenarioCount].shift// delete that scenario from the array
            let theFighter = parseInt(theScenario.substring(0, 1)); // the fighter is the first char of the scenario
            theScenario = theScenario.substring(1); // delete the first character of theScenario
            theFighterHealth = eval("characters." + Object.keys(characters)[theFighter - 1]).preFightHealth;
            theFighterInitialHealth = theFighterHealth;
            theFighterAttack = eval("characters." + Object.keys(characters)[theFighter - 1]).preFightAttack;
            theFighterInitialAttack = theFighterAttack;
            $("#results").append("<br> <b>== Scenario " + theScenarioTitle + " ==</b>");
            if ($("#verbose").is(":checked")) {
                $("#results").append("<br>fighter " + theFighter + "'s initial hp: " + theFighterHealth);
                $("#results").append("<br>fighter " + theFighter + "'s initial attack: " + theFighterAttack);
                $("#results").append("<br>");
            }
            thePreFightFighterAttack = parseInt(eval("characters." + Object.keys(characters)[theFighter - 1] + ".preFightAttack"));
            thePreFightFighterHealth = parseInt(eval("characters." + Object.keys(characters)[theFighter - 1] + ".preFightHealth"));
            for (let n = 0; n < 3; n++) { // there are 3 enemies
                let theEnemy = theScenario.substring(0, 1); // enemy is the first character of theScenario
                if ($("#verbose").is(":checked")) {
                    $("#results").append("<br> ---- against enemy " + theEnemy + " ----");
                }
                thePreFightEnemyHealth = (parseInt(eval("characters." + Object.keys(characters)[theEnemy - 1] + ".preFightHealth")));
                theEnemyHealth = thePreFightEnemyHealth
                theScenario = theScenario.substring(1); // delete the first character of theScenario
                while (theEnemyHealth > 0) { // while enemyStillAlive is true
                    runOneRound(theFighter, theEnemy, theScenario);
                }
            }
        }
    }

    $("#run-scenarios").click(function (event) {
        runThisScenario();
    });

});