import React, {Component} from "react"
import Squares from './Squares'



class GameBoard extends Component {

    constructor() {
        super()
        this.state= {
            playerX: true, 
            squares: Array(9).fill(null)
        
          }
    }
   
    

    handleClick= (i)=> {
        
        const squares = this.state.squares.slice();
        if(this.checkForWinner(squares) || squares[i]){
            return
        }
        squares[i] = this.state.playerX ? 'X' : "O"
        this.setState({
            squares: squares,
            playerX: !this.state.playerX });
            this.checkForWinner(squares)

    }





    renderSquares= (i)=> {

        return <Squares 
        value= {this.state.squares[i]}
        onClick={()=>this.handleClick(i)} />

    }


    checkForWinner = (squares)=> {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          console.log(squares)
          for(let i =0; i < lines.length; i++) {
              let [a,b,c] = lines[i]
              if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
              }
              else {
                  return null
              }

          }
    }


    resetGame = ()=> {
        this.setState({
            playerX: true, 
            squares: Array(9).fill(null)

        })
    }

    render() {
        const winner = this.checkForWinner(this.state.squares);
        let status = null
        if(winner) {
             status = winner
        }
        const playerTurn = this.state.playerX
        let turn = null;
        if (playerTurn === true) {
            turn = 'X'
        }
        else {
             turn = 'O'
        }
    




        return(
            <div>
            Player Turn: {turn}
            <div className= "board-row">
            {this.renderSquares(0)}
            {this.renderSquares(1)}
            {this.renderSquares(2)}
            </div>

            <div className= "board-row">
            {this.renderSquares(3)}
            {this.renderSquares(4)}
            {this.renderSquares(5)}
            </div>

            <div className= "board-row">
            {this.renderSquares(6)}
            {this.renderSquares(7)}
            {this.renderSquares(8)}
            </div>

            Winner: {status}
            <br/>

            <button onClick={this.resetGame}>RESET</button>

             
            </div>

            
        )
    }
}




export default GameBoard