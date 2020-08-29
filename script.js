const gameBoard = (function() {
    let board = [
        topLeft='',
        topCenter= '',
        topRight='',
        middleLeft='',
        middleCenter='',
        middleRight='',
        bottomLeft='',
        bottomCenter='',
        bottomRight=''


];


const winner = () =>{
if (    ( (board[0] === 'x' || board[0] ==='o') && board[0] === board[1] && board[0] === board[2]) || 
(board[0] === 'x' || board[0] ==='o') && (board[0] === board[3] && board[0]===board[6]) ||
 ((board[0] === 'x' || board[0] ==='o') && board[0]===board[4] && board[0]===board[8])  ||
 ((board[1] === 'x' || board[1] ==='o') && board[1] === board[4] && board[1] === board[7]) ||
 ((board[2] === 'x' || board[2] ==='o') && board[2] === board[5] && board[2]=== board[8]) ||
 ((board[2] === 'x' || board[2] ==='o') && board[2] === board[4] && board[2] === board[6]) ||
 ((board[3] === 'x' || board[3] ==='o') && board[3] === board[4] && board[3] === board[5]) ||
 ((board[6] === 'x' || board[6] ==='o') && board[6] === board[7] && board[6] ===board[8])
) 
{
    alert(`Congrats to the Winner`);

    for (let i = 0; i < 9; i++){ document.getElementById(i).style.pointerEvents = 'none'; }

}
else if ( count > 8){
    console.log("Tie")
   console.log( displayController.newPosition.length)
}

}



const insertAt = (array, index, ...elementsArray) => {
    array.splice(index, 1, ...elementsArray);
}


const clearFields = () => {

    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";
}


//const buttonPlay = () => {
const btn = document.getElementById("play")
btn.addEventListener("click", () =>{
    let player1 = document.getElementById("player1").value;
    let player2 = document.getElementById("player2").value;
    player(player1,player2);
    clearFields();

} )
//}

function getOccurrence(array, value) {
    var count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}


return {
    board,
    //GameBoard,
    insertAt,
    winner
};






})();


let count= 0;

    function incrementCount(){
       count++;
    }



const player = (playerOne,playerTwo) => {
   
alert(`Hello, ${playerOne} you are X and ${playerTwo}, you are O.... Good Luck`)



    


};





const displayController= (function(){





let overall = document.getElementsByClassName("game-board")

let xNo = gameBoard.board;
let newBoard = [];
let newPosition = [];
console.log(xNo[0].length);
    for (let i = 0; i< 9; i++){
        let div = document.getElementById(i)
        div.innerHTML += gameBoard.board[i]
        

        
    }
    const click = (function(){
       // gameBoard.board = [];
        for (let i = 0;i<9;i++){
            
        let div = document.getElementById(i)
        div.addEventListener('click', function(event){
            
            
            div.innerHTML = '';
            if (count% 2 === 0 && div.innerHTML === '') {
            div.innerHTML += 'x';
            newBoard.push('x')
            newPosition.push(i)
            
            const newGame = gameBoard.insertAt(gameBoard.board,(i),'x')
            console.log(gameBoard.board)

            incrementCount();
            document.getElementById(i).style.pointerEvents = 'none';   
            gameBoard.winner();
            

            
                   
    
            
        }
            else if (div.innerHTML === ''){
                div.innerHTML += 'o'
                incrementCount();
                newBoard.push('o')
                newPosition.push(i)
                const newGame = gameBoard.insertAt(gameBoard.board,(i),'o')
                console.log(gameBoard.board)


                document.getElementById(i).style.pointerEvents = 'none';
                gameBoard.winner();      
                

                   

            }
            
        })
        
    
        }
    




        })();


const reset = (function(){       
     const btn = document.getElementById("reset")
        btn.addEventListener("click", () =>{
            document.location.reload(true);
           gameBoard.board = [];
           gameBoard.board = [topLeft='',
           topCenter= '',
           topRight='',
           middleLeft='',
           middleCenter='',
           middleRight='',
           bottomLeft='',
           bottomCenter='',
           bottomRight=''];
           newBoard = [];
           newPosition = [];
           count = 0;
           for (let i = 0; i<9 ; i++){
            let div = document.getElementById(i)
            document.getElementById(i).style.pointerEvents = 'auto';
            div.innerHTML = '';
           }
           

        } )



    })();



    return {newBoard,newPosition}
 
})();


