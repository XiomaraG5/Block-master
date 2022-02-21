import { types } from "../types/type";


export default function registerReducer(state={},action) {
  switch (action.type) {
      case types.register:
          return {
            email:action.payload.email,
            password:action.payload.password,
            name:action.payload.name
          }
  
      default:
          return state
  }
}
