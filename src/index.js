import React    from 'react';
import ReactDOM from 'react-dom';

import { useMachine }         from '@xstate/react';
import { Machine, interpret } from 'xstate';

const toggleMachine = Machine({
    id      : 'toggle',
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

// const t

const Toggler = () => {
    const [ current, send ] = useMachine(toggleMachine);

    return (
        <button onClick={() => send('TOGGLE')} >
            {
                current.value === 'inactive' ?
                    'activate' :
                    'deactivate'
            }
        </button>
    );
}

ReactDOM.render(<Toggler />, document.getElementById('mount'));
