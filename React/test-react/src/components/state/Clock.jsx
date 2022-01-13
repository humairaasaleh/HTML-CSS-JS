import {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        return(
            <>
                <h1>What time is it you ask?</h1>
                <p>It is...{this.state.date.toLocaleTimeString()}</p>
            </>
        );
    }
}
export default Clock;