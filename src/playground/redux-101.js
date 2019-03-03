import {createStore} from 'redux';

// const incrementBy () => ({
// });

const reset = () => ({
    type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
            break;
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
            break;
        case 'SET':
            return {
                count: action.count
            };
            break;
        case 'RESET':
            return {
                count: 0
            };
            break;
        default:
            return state;
    }
});

console.log('Redux 101');
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch(reset());
