import React from 'react';
import ReactDOM from 'react-dom';
import { Machine, interpret } from 'xstate';

const toggleMachine = Machine({
    initial : 'inactive',
    states : {
        inactive : {
            on : {
                TOGGLE : 'active'
            }
        },
        active : {
            on : {
                TOGGLE : 'inactive'
            }
        }
    }
});

const toggleService = interpret(toggleMachine)
    .onTransition(state => console.log(state.value))
    .start();

toggleService.send('TOGGLE');

toggleService.send('TOGGLE');

class MyComp extends React.Component {
    render() {
        return (
            <div>This is a div</div>
        );
    }
}

ReactDOM.render(<MyComp />, document.getElementById('mount'));
