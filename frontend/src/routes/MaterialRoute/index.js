import React from "react";
import {config} from "./config";
import {Route, Switch} from "react-router-dom";

export default function HomeRoute() {
  return (
    <Switch>
      {config.map(({path, Component, ...props}, idx) => 
        <Route
          key={idx}
          path={path}
          {...props}
          render={() => {
            return <Component {...props}></Component>
          }}
        >
        </Route>
      )}
    </Switch>
  )
}