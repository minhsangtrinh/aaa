import {Component} from 'react';

class State extends Component {

    constructor() {
        super()
        this.state = {
            message : 'Wellcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message : 'Thanks for you'
        })
    }
    

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscricbe</button>
            </div>
        );
    }
}

export default State;