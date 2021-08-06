import React from "react";
import {config} from "./config";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";

export default function HomeRoute() {
  return (
    <Switch>
      {config.map(({path, Component, ...props}, idx) =>
        <Route
          key={idx}
          path={path}
          {...props}
        >
          <Component {...props} />
        </Route>
      )}
    </Switch>
  )
}