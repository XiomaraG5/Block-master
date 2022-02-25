import '@testing-library/jest-dom';
import  actionLogin, { actionLogout } from '../redux/actions/actionLogin';
import { loginReducer } from '../redux/reducers/LoginReducer';
import { types } from '../redux/types/type';


describe("verificar estado de Login",()=>{
    // Test autenticación: Login
    test("validad login", () =>{
        const id = 'abc'
        const displayname = 'Xiom'

        const login = actionLogin(id,displayname)

        expect(login).toEqual({
            type: types.login,
            payload:{
                id,
                displayname
            }
        })
    })
    // Test autenticación: Logout
    test("cerrar sesion",()=>{
        const id = `abc`
        const displayname = `Xiom`

        const logoutAction = actionLogout();
        expect( logoutAction ).toEqual({
            type:types.logout
        })
    })
})
 