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

        
        // if(totalPointsPlayer1 > totalPointsPlayer2){
        //     console.log(`${character1.Character} ganhou essa rodada`);
        //     player1Point++;
        // }
        // else if(totalPointsPlayer1 == totalPointsPlayer2){
        //     console.log(`Partida empatada`);
        //     i--;
        // }
        // else{
        //     console.log(`${character2.Character} ganhou essa rodada`);
        //     player2Point++;
        // }

        totalPointsPlayer1 > totalPointsPlayer2 ? (player1Point +=1 , console.log(`O ${character1.Character} venceu esta rodada`),resultIcon1 = iconWin, resultIcon2 = iconLose) //Sei que estou fazendo redundancia de código e poderia muito bem colocar o icon direto no c.log, mas estou praticando minha lógica de programação. 
        : totalPointsPlayer1 < totalPointsPlayer2 ? (player2Point +=1 , console.log(`O ${character2.Character} venceu esta rodada`),resultIcon2 = iconWin, resultIcon1 = iconLose) 
        : console.log("Rodada EMPATADA");
        await logRollResult(character1.Character, "speed", diceResult1, character1.Speed, resultIcon1);
        await logRollResult(character2.Character, "speed", diceResult2, character2.Speed, resultIcon2);
        

    }
    if(block === "CURVA"){
        totalPointsPlayer1 = character1.Maneuverability + diceResult1;
        totalPointsPlayer2 = character2.Maneuverability + diceResult2;

       
        // if(totalPointsPlayer1 > totalPointsPlayer2){
        //     console.log(`${character1.Character} ganhou essa rodada`);
        //     player1Point++;
        // }
        // else if(totalPointsPlayer1 == totalPointsPlayer2){
        //     console.log(`Partida empatada`);
        //     i--;
        // }
        // else{
        //     console.log(`${character2.Character} ganhou essa rodada`);
        //     player2Point++;
        // }

        totalPointsPlayer1 > totalPointsPlayer2 ? (player1Point += 1 , console.log(`O ${character1.Character} venceu a rodada`,),resultIcon1 = iconWin, resultIcon2 = iconLose)
        : totalPointsPlayer1 < totalPointsPlayer2 ? (player2Point += 1 , console.log(`O ${character2.Character} venceu a rodada`),resultIcon2 = iconWin, resultIcon1 = iconLose)
        : console.log("Rodada EMPATADA");
         await logRollResult(character1.Character, "maneuverability", diceResult1, character1.Maneuverability, resultIcon1);
         await logRollResult(character2.Character, "maneuverability", diceResult2, character2.Maneuverability, resultIcon2);
        
         
    }
    if(block === "CONFRONTO"){
        totalPointsPlayer1 = character1.Power + diceResult1;
        totalPointsPlayer2 = character2.Power + diceResult2;

        
        // if(totalPointsPlayer1 > totalPointsPlayer2){
        //     console.log(`${character1.Character} ganhou essa rodada`);
        //     player1Point++;
        // }
        // else if(totalPointsPlayer1 == totalPointsPlayer2){
        //     console.log(`Partida empatada`);
        //     i--;
        // }
        // else{
        //     console.log(`${character2.Character} ganhou essa rodada`);
        //     player2Point++;
        // }

        totalPointsPlayer1 > totalPointsPlayer2 ? (player1Point += 1 , console.log(`O ${character1.Character} venceu esta rodada`),resultIcon1 = iconWin, resultIcon2 = iconLose)
        : totalPointsPlayer1 < totalPointsPlayer2 ? (player2Point +=1 , console.log(`O ${character2.Character} venceu esta rodada`),resultIcon2 = iconWin, resultIcon1 = iconLose)
        : console.log("Rodada EMPATADA");
        await logRollResult(character1.Character, "power", diceResult1, character1.Power, resultIcon1);
        await logRollResult(character2.Character, "power", diceResult2, character2.Power, resultIcon2);
        
    }
    // if(i == 5){
    //     if(player1Point > player2Point){
    //         console.log(`--------------------------------------------------\n${character1.Character} ganhou a partida com ${player1Point} pontos 🏁🎉🎉🎉🍾🍾🍾`); 
    //     }
    //     else if(player1Point < player2Point){
    //         console.log(`--------------------------------------------------\n${character2.Character} ganhou a partida com ${player2Point} pontos 🏁🎉🎉🎉🍾🍾🍾`); 
    //     }

    // }
    i == lengthFor && player1Point > player2Point ? console.log(`${character1.Character} ganhou a partida com ${player1Point} pontos`) :
    i == lengthFor && player1Point < player2Point ? console.log(`${character2.Character} ganhou a partida com ${player2Point} pontos`) :
    i == 5 && player1Point == player2Point ? (console.log(`Tivemos um empate !!! Vamos desempatar...`), lengthFor+=1, desempateString = "Desempate Final") : null;
    }
    
    
    

}

(async function main(){
    console.log(`Corrida entre ${player1.Character} e ${player2.Chacacter} começando`);

    await playRacingEngine(player1, player2);
    
}())




// Minha implementação antes de ver a aula.

// const trackMapsArray = ["Reta","Curva","Batalha"]
// let drawnMaps = "";

// function trackMap (){
//     let result = Math.floor(Math.random() * trackMapsArray.length);
//     return drawnMaps = trackMapsArray[result]
// }

// (async function main(){
//     pontosMario = 0;
//     pontosYoshi = 0;
//     console.log("Super Mario Kart JS Logic on Console. 🏁🚘🚖");
//     console.log(`Corrida entre  ${player1.Character} e ${player2.Character}! Começando...\nLet's Goooooo! 🏎️   🏎️`);
//     let i = 1

//     while (i < 6){
//         console.log(`\nRound ${i}`);
//         sorteioPista = trackMap();
//         sorteioDadoPlayer1 = await rollDice();
//         sorteioDadoPlayer2 = await rollDice();
//         console.log(`Tipo da pista ${sorteioPista}`);

//         if (sorteioPista == "Curva"){
//             console.log(`${player1.Character} tem um Dirigibilidade de ${player1.Maneuverability} e tirou ${sorteioDadoPlayer1} no dado`);
//             console.log(`${player2.Character} tem um Dirigibilidade de ${player2.Maneuverability} e tirou ${sorteioDadoPlayer2} no dado`);
            
            
//             if(player1.Maneuverability + sorteioDadoPlayer1 > player2.Maneuverability + sorteioDadoPlayer2){
//                 pontosMario++;
//                 console.log(`O ${player1.Character} ganhou a rodada! ${pontosMario} ponto's`);
//                 i++;
//             }
//             else{
//                 pontosYoshi++;
//                 console.log(`O ${player2.Character} ganhou a rodada! ${pontosYoshi}ponto's`);
//                 i++;
//             }
            
//         }

//         else if (sorteioPista == "Reta"){
//             console.log(`${player1.Character} tem um Speed de ${player1.Speed} e tirou ${sorteioDadoPlayer1} no dado`);
//             console.log(`${player2.Character} tem um Speed de ${player2.Speed} e tirou ${sorteioDadoPlayer2} no dado`);
//              if(player1.Speed + sorteioDadoPlayer1 > player2.Speed + sorteioDadoPlayer2){
//                 pontosMario++;
//                 console.log(`O ${player1.Character} ganhou a rodada! ${pontosMario} ponto's`);
//                 i++;
//             }
//             else{
//                 pontosYoshi++;
//                 console.log(`O ${player2.Character} ganhou a rodada! ${pontosYoshi} ponto's`);
//                 i++;
//             }
//         }

//         else if (sorteioPista == "Batalha"){
//             console.log(`${player1.Character} tem um Power de ${player1.Power} e tirou ${sorteioDadoPlayer1} no dado`);
//             console.log(`${player2.Character} tem um Power de ${player2.Power} e tirou ${sorteioDadoPlayer2} no dado`);
//              if(player1.Power + sorteioDadoPlayer1 > player2.Power + sorteioDadoPlayer2){
//                 pontosMario++;
//                 console.log(`O ${player1.Character} ganhou a rodada! ${pontosMario} ponto's`);
//                 i++;
//             }
//             else{
//                 pontosYoshi++;
//                 console.log(`O ${player2.Character} ganhou a rodada! ${pontosYoshi} ponto's`);
//                 i++;
//             }
//         }
//         if( i == 6){
//             if(pontosMario > pontosYoshi){
//                 console.log(`\nO ${player1.Character} venceu a partida`);
    
//             }
//             else{
//                 console.log(`\nO ${player2.Character} venceu a partida`);
//             }
//         }
        
//     }
// }
// )();




