
import { types } from "../types/type";


export const loginReducer = (state = {},action)=>{
    switch(action.type){
        case types.login:
        return {
        id: action.payload.id,
        name:action.payload.displayname
        }

        case types.logout:
        return state
        default:
            return state
    }

}