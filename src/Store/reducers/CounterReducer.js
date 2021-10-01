const CounterReducer=(
    state={value:0},
    action)=>{
    switch(action.type){
        case 'Counter_up':
            return {
                value: state.value+1
            }
        default:
            return state
    }
    return state;

}
export default CounterReducer;