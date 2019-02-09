import React, {Component} from "react"



class Squares extends Component {



    render(){
        return(
            <button className="square" onClick={this.props.onClick}>
            {/* {this.props.value} */}
            {this.props.value}



            </button>
        )
    }
}


export default Squares