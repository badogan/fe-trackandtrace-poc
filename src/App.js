import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import ChHeader from "./components/ChHeader";
import DataEntryPage from "./pages/DataEntryPage";
import JobQueueViewerPage from "./pages/JobQueueViewerPage";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LoggedInGooglePage from "./pages/LoggedInGooglePage";

function App(props) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Route
        render={routerProps => {
          return <ChHeader {...routerProps} />;
        }}
      />
      <Route
        exact
        path="/"
        render={routerProps => {
          return (
            <React.Fragment>
              <LandingPage {...routerProps} />
            </React.Fragment>
          );
        }}
      />
      <Route
        exact
        path="/signup"
        render={routerProps => {
          return (
            <React.Fragment>
              <SignupPage {...routerProps} />
            </React.Fragment>
          );
        }}
      />
      <Route
        exact
        path="/login"
        render={routerProps => {
          return (
            <React.Fragment>
              <LoginPage {...routerProps} />
            </React.Fragment>
          );
        }}
      />
      <Route
        exact
        path="/loggedingooglepage"
        render={routerProps => {
          return (
            <React.Fragment>
              <LoggedInGooglePage {...routerProps} />
            </React.Fragment>
          );
        }}
      />
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
