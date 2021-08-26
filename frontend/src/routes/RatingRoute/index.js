import {config} from "./config";
import {Route, Switch} from "react-router-dom";
import React from "react";

export default function RatingRoute() {
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