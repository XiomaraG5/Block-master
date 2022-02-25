import "@testing-library/jest-dom";
import React from "react";
import { Navigate } from "react-router-dom";
import { DashboardRoutes } from "../routers/Dashboard";
import { PrivateRoute } from "../routers/PrivateRoute";
import { PublicRoute } from "../routers/PublicRoute";
import { shallow, mount, render } from 'enzyme';
import AppRouter from "../routers/AppRouters";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Inicio } from "../routers/Inicio";

configure({ adapter: new Adapter() });

describe("verificar rutas", () => {
  test("verificar ruta privada", () => {
    const loggin = true
   const wrapper = shallow(<PrivateRoute isAuthenticated={loggin} children={DashboardRoutes} />)
   expect(wrapper).toMatchSnapshot()
   console.log(wrapper);
    
    
  });
  test("verificar ruta publica",()=>{
      const loggin = false
      const wrapper = shallow(<PublicRoute isAuthenticated={loggin} children={Inicio}/>)
      expect(wrapper).toMatchSnapshot()
  })
});

