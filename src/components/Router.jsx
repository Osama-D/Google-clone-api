import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Results from "./Results";
import { useResultContext } from "../contexts/ResultsContentProvider";

function Router() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();

  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route path={["/search", "/images", "/news", "/videos"]}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
