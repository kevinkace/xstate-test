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
