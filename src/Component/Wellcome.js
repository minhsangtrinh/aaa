import {Component} from 'react';
class Wellcome extends Component {
    render() {
        const {name, type} = this.props
        return(
            <h1>Wellcome {name} type {type}</h1>
        );
    }
}

export default Wellcome;