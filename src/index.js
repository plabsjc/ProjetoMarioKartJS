const player1 = {
    Character: "Mario",
    Power: 3,
    Maneuverability: 4, 
    Speed: 3 
}

const player2 = {
    Character:"Yoshi",
    Power: 4,
    Maneuverability: 2,
    Speed: 4
}




async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random();
    let result 

    switch (true){
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"    
    }

    return result;

}
async function logRollResult(characterName, parteMapa, diceResult, attribute, iconFigure){
    console.log(`${characterName} 🎲 rolou um dado ${parteMapa} de ${diceResult} + ${attribute} de atributo = ${diceResult+attribute} ${iconFigure}`);
   
}




async function playRacingEngine (character1, character2){
    let player1Point = 0;
    let player2Point = 0;
    let totalPointsPlayer1 = 0;
    let totalPointsPlayer2 = 0;
    let desempateString = "";
    let lengthFor = 5;
    for (let i = 1; i <= lengthFor;i++){
        console.log(`\n🏁 Rodada ${i} ${desempateString}`);
        let block = await getRandomBlock();
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();
        console.log(`Bloco: ${block}`);
        let iconWin = "✅";
        let iconLose = "❌";
        let resultIcon1 = "";
        let resultIcon2 = "";
        
        if(block === "RETA"){
        totalPointsPlayer1 = character1.Speed + diceResult1;
        totalPointsPlayer2 = character2.Speed + diceResult2;

        
    

        totalPointsPlayer1 > totalPointsPlayer2 ? (player1Point +=1 , console.log(`O ${character1.Character} venceu esta rodada`),resultIcon1 = iconWin, resultIcon2 = iconLose) //Sei que estou fazendo redundancia de código e poderia muito bem colocar o icon direto no c.log, mas estou praticando minha lógica de programação. 
        : totalPointsPlayer1 < totalPointsPlayer2 ? (player2Point +=1 , console.log(`O ${character2.Character} venceu esta rodada`),resultIcon2 = iconWin, resultIcon1 = iconLose) 
        : console.log("Rodada EMPATADA");
        await logRollResult(character1.Character, "speed", diceResult1, character1.Speed, resultIcon1);
        await logRollResult(character2.Character, "speed", diceResult2, character2.Speed, resultIcon2);
        

    }
    if(block === "CURVA"){
        totalPointsPlayer1 = character1.Maneuverability + diceResult1;
        totalPointsPlayer2 = character2.Maneuverability + diceResult2;

       
       

        totalPointsPlayer1 > totalPointsPlayer2 ? (player1Point += 1 , console.log(`O ${character1.Character} venceu a rodada`,),resultIcon1 = iconWin, resultIcon2 = iconLose)
        : totalPointsPlayer1 < totalPointsPlayer2 ? (player2Point += 1 , console.log(`O ${character2.Character} venceu a rodada`),resultIcon2 = iconWin, resultIcon1 = iconLose)
        : console.log("Rodada EMPATADA");
         await logRollResult(character1.Character, "maneuverability", diceResult1, character1.Maneuverability, resultIcon1);
         await logRollResult(character2.Character, "maneuverability", diceResult2, character2.Maneuverability, resultIcon2);
        
         
    }
    if(block === "CONFRONTO"){
        totalPointsPlayer1 = character1.Power + diceResult1;
        totalPointsPlayer2 = character2.Power + diceResult2;

        
       

        totalPointsPlayer1 > totalPointsPlayer2 ? (player1Point += 1 , console.log(`O ${character1.Character} venceu esta rodada`),resultIcon1 = iconWin, resultIcon2 = iconLose)
        : totalPointsPlayer1 < totalPointsPlayer2 ? (player2Point +=1 , console.log(`O ${character2.Character} venceu esta rodada`),resultIcon2 = iconWin, resultIcon1 = iconLose)
        : console.log("Rodada EMPATADA");
        await logRollResult(character1.Character, "power", diceResult1, character1.Power, resultIcon1);
        await logRollResult(character2.Character, "power", diceResult2, character2.Power, resultIcon2);
        
    }
   
    i == lengthFor && player1Point > player2Point ? console.log(`${character1.Character} ganhou a partida com ${player1Point} pontos`) :
    i == lengthFor && player1Point < player2Point ? console.log(`${character2.Character} ganhou a partida com ${player2Point} pontos`) :
    i == 5 && player1Point == player2Point ? (console.log(`Tivemos um empate !!! Vamos desempatar...`), lengthFor+=1, desempateString = "Desempate Final") : null;
    }
    
    
    

}

(async function main(){
    console.log(`Corrida entre ${player1.Character} e ${player2.Chacacter} começando`);

    await playRacingEngine(player1, player2);
    
}())






