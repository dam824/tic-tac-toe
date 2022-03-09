// affiche un unique button
import React from 'react';

/*class Square extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: null,
        };
    } 
   hendleClick=()=>{
        this.props.onClick({value: "X"})  //la fonction a été commentéé car elle a été crée dans BOARD
    }; 
    render () { */

        //remplacement de la class Square par function composant car Une seule methode et pas de propre etat
        //sous class React.Component => function avec props en arguments et renvoi ce qui doit ê

    function Square(props) {    
      return (
        <button 
        className={"square " + (props.isWinning ? "square--winning" : null)}
        onClick={props.onClick}
        data-pro={props.value}> 
          {props.value}
        </button>
      );
    }
  
  



export default Square