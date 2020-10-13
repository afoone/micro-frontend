import { types } from '../types'

const stateInitial = {
    menu: []
};

const menuReducer = (state = stateInitial, action) => {
    console.log("action: ", action)
    switch (action.type) {
        case types.ADD_MENU:
            console.log("Estadd", { ...state })
            console.log("datos para add menu, estado actual", state.menu, action.payload)
            console.log("estado final", [...state.menu, ...action.payload])
            return {
                ...state,
                menu: [...state.menu, ...action.payload],
            };
        default:
            return state;
    }
};

export default menuReducer;
