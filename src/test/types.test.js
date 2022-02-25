import '@testing-library/jest-dom';
import { loginReducer } from '../redux/reducers/LoginReducer';
import { types } from '../redux/types/type';


describe('Verificar que carguen los types', () =>{
    // Test Redux: Types
    test('compara que se envien los mismos types', () =>{
        expect(types).toEqual({
            login: 'login',
            logout:'logout',
            register: 'register'
        })
    })
    // Test Redux: loginReducer
    test('realizar reducer de login', () =>{
        const initialState = {};
        const action = {
            type: types.login,
            payload:{
                id:"abc",
                displayname: "Xiom"
            }
        }
        const logRed = loginReducer(initialState, action);
        expect( logRed ).toEqual({
            id:"abc",
            name: "Xiom"
        })
    })
    
})