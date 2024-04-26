const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loss: 0,
    ties: 0,
    Total_games: 0
};

updateScore();

// if(!score){
//     score = {
//         wins: 0,
//         loss: 0,
//         ties: 0,
//     };
// }

let computerMove = '';

function playRPS(playerMove){
    compMove();
    console.log(computerMove);

    let res = '';

    if(playerMove === 'Scissors'){
        if(computerMove === 'Rock'){
            res = 'You Lose!';
        }

        else if(computerMove === 'Paper'){
            res = 'You Win!';
        }

        else{
            res = 'Tie!';
        }
    }

    else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            res = 'You Win!';
        }

        else if(computerMove === 'Paper'){
            res = 'Tie!';
        }

        else{
            res = 'You Lose!';
        }
    }

    else{
        if(computerMove === 'Rock'){
            res = 'Tie!';
        }

        else if(computerMove === 'Paper'){
            res = 'You Lose!';
        }

        else{
            res = 'You Win!';
        }
    }
    
    if(res === 'You Win!'){
        score.wins += 1;
    }

    else if(res === 'You Lose!'){
        score.loss += 1;
    }

    else{
        score.ties += 1;
    }

    score.Total_games = score.wins + score.loss + score.ties;

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = res;
    document.querySelector('.js-moves').innerHTML = `You picked ${playerMove}.  Computer picked ${computerMove}.`;
    // document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}.jpg" alt="" class="moves-dis"> &nbsp; &nbsp;
    // Computer <img src="${computerMove}.jpg" alt="" class="moves-dis">`;

    //alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${res}
    //  Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}
    //  Total games: ${score.Total_games}`);
}

function updateScore(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} : : Losses: ${score.loss} : : Ties: ${score.ties} : : Total games: ${score.Total_games}`;
}

function compMove(){
    const randNum = Math.random();

    if(randNum >= 0 && randNum < 1 / 3){
        computerMove = 'Rock';
    }

    else if(randNum >= 1 / 3 && randNum < 2 / 3){
        computerMove = 'Paper';
    }

    else{
        computerMove = 'Scissors';
    }
}