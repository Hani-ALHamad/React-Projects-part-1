const reducer = (state, action) => {
    switch(action.type) {
        case "GET_DATA" :
            return action.data

        case "ARROW_ADD" :
            state.map((element, index) =>{
                if (action.id === element.id) {
                    state[index].amount = action.amount
            }
        })
            return [...state]

        case "ARROW_REMOVE" : 
            if(action.amount === 0){
                return state.filter(item => item.id !== action.id)
            } 
            state.map((element, index) => {
                if (action.id === element.id) {
                    state[index].amount = action.amount
                }
            })
            return [...state]

        case "BUTTON_REMOVE" :
            return state.filter(item => item.id !== action.id)
        default: 
            return state
    }
}

export default reducer