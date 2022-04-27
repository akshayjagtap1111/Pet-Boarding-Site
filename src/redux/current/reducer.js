const { SET_CURRENT_PET, SET_CURRENT_PLACE } = require("./action")

const initState = {
    current_pet:{},
    current_place:{}
}

export const current_reducer=(state=initState,{type,payload})=>{

    switch(type){

        case SET_CURRENT_PET:
            return{
                ...state,
                current_pet:payload
            }

        case SET_CURRENT_PLACE:
            return{
                ...state,
                current_place:payload
        
            }
        default:
            return state
    }
}