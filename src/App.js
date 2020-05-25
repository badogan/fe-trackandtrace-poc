import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import ChHeader from "./components/ChHeader";
import DataEntryPage from "./pages/DataEntryPage";
import JobQueueViewerPage from "./pages/JobQueueViewerPage";

function App(props) {
  return (
    <ThemeProvider>
      <CSSReset />
      <ChHeader />
      <Route
        exact
        path="/dataentry"
        render={routerProps => {
          return (
            <React.Fragment>
              <DataEntryPage {...routerProps} />
            </React.Fragment>
          );
        }}
      />
      <Route
        exact
        path="/jobqueueviewer"
        render={routerProps => {
          return (
            <React.Fragment>
              <JobQueueViewerPage {...routerProps} />
            </React.Fragment>
          );
        }}
      />
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({ search: state.search });

export default connect(mapStateToProps, null)(App);
