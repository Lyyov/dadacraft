import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Home, Saula, Sagro, Projects, Prgisc, Mancomm, Banners } from "../components/pages";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/projects",
    component: Projects,
    exact: true
  },
  {
    path: "/saula",
    component: Saula,
    exact: true
    // routes: [
    //   {
    //     path: "/tacos/bus",
    //     component: Bus
    //   },
    //   {
    //     path: "/tacos/cart",
    //     component: Cart
    //   }
    // ]
  },
  {
    path: '/sagro',
    component: Sagro,
    exact: true
  },
  {
    path: '/prgisc',
    component: Prgisc,
    exact: true
  },
  {
    path: '/mancomm',
    component: Mancomm,
    exact: true
  },
  {
    path: '/banners',
    component: Banners,
    exact: true
  }
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
function Routes() {
  
  return (
    <Fragment>
      {
      routes.map((route, i) => {
        return <RouteWithSubRoutes key={i} {...route} />
      })
    }
    </Fragment>
  )
}
export default Routes;