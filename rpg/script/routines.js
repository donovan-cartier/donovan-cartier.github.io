function explore(){
    exploreText.innerHTML = "Vous partez en expédition...";
    expeditionLevel++;
    setTimeout(() => {
        randomEvent();
    }, 500);    
}

function randomEvent(){
    RNG = Math.floor(Math.random() * 5);
    console.log(RNG);
    switch (RNG) {
        case 0:
            exploreText.innerHTML = "Niveau " + expeditionLevel + " : Plaine paisible";
            player.currentLocation = "plaine";
            setTimeout(() => {
                explore();
            }, 500);
            break;
        
        case 1:
            exploreText.innerHTML = "Niveau " + expeditionLevel + " : Rencontre avec un monstre !";
            setTimeout(() => {
                spawnMonster();
            }, 750);
            break;

        case 2:
            exploreText.innerHTML = "Niveau " + expeditionLevel + " : Grotte étroite";
            player.currentLocation = "grotte";
            setTimeout(() => {
                explore();
            }, 700);
            break;

        case 3:
            exploreText.innerHTML = "Niveau " + expeditionLevel + " : Trésor";
            treasuresObtained++;
            player.updateGold(Math.floor(Math.random()*(15-5+1)+5));

            setTimeout(() => {
                explore();
            }, 1000);
            break;
    
        case 4:
            if(Math.random() < 0.5){
                exploreText.innerHTML = "Niveau " + expeditionLevel + " : Campement (infesté)";
                if(confirm("Le campement est infesté de monstres ! Visiter le campement tout de même ?")){
                    spawnMonster();
                }
            } else {
                exploreText.innerHTML = "Niveau " + expeditionLevel + " : Campement";
                player.updateHp(5);
            }

            setTimeout(() => {
                explore();
            }, 1000);
            break;

        default:
            break;
    }
}

function startBattle(spawnedMonster){
    attackButton.disabled = false;
    // itemsButton.disabled = false;
    itemList.style.display = "block";
    currentEnemy = spawnedMonster;

    // player.hp--;
    // playerHpText.innerHTML = player.hp + "/" + player.maxHp;
    // if(player.hp == 0){
    //     exploreText.innerHTML = "Vous rentrez bredouille...";
    //     checkQuestConditions();
    //     expeditionLevel = 0;
    //     treasuresObtained = 0;

    //     player.hp = player.maxHp;
    //     playerHpText.innerHTML = player.hp + "/" + player.maxHp;
    //     exploreButton.disabled = false; 
        
    // } else {
    //     explore();
    // }
}

function checkQuestConditions(){
    console.log("l'id est : " + player.currentQuest.id)
    switch (player.currentQuest.id) {
        case 0:
            if(expeditionLevel >= 20){
                updateQuest(1);
            }
            break;

        case 1:
            if(treasuresObtained >= 5){
                updateQuest(2);
            }
            break;
    
        default:
            break;
    }
}

function updateQuest(questID){
    player.updateGold(player.currentQuest.reward);
    player.currentQuest = questList[questID];
    
    questTitleText.innerHTML = player.currentQuest.title;
    questDescriptionText.innerHTML = player.currentQuest.description;
    questRewardText.innerHTML = player.currentQuest.reward + " pièces d'or";
}

function spawnMonster(){
    var availableMonsters = [];
    Array.from(monstersList.monsters).forEach(monster => {
        if(monster.location == player.currentLocation){
            availableMonsters.push(monster);
        }
    });
    var spawnedMonster = availableMonsters[Math.floor(Math.random()*availableMonsters.length)];
    exploreText.innerHTML = "Combat : " + spawnedMonster.name + " (" + spawnedMonster.health + " PV)";
    startBattle(spawnedMonster);
}

attackButton.onclick = function(){
    console.log(currentEnemy.health)
};