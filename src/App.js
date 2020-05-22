import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Divider, Box } from "@chakra-ui/core";

import ChHeader from './components/ChHeader'

import UsersPage from "./pages/UsersPage";
import UsersPage2 from "./pages/UsersPage2";
import UsersPage3 from "./pages/UsersPage3";
import AppAstronauts from "./pages/AppAstronauts";

import DataEntryPage from "./pages/DataEntryPage";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <ChHeader/>
      <Route
        exact
        path="/dataentry"
        render={routerProps => {
          return (
            <DataEntryPage
              {...routerProps}
            />
          );
        }}
      />

      {/* <Box>
        <span>REGISTRATION CENTER 1</span>
        <UsersPage />
        <Divider borderColor="red.200" />
        <span>OBSERVATION DECK</span>
        <UsersPage2 />
        <Divider borderColor="red.200" />
        <span>REGISTRATION CENTER 2</span>
        <UsersPage3 />
        <Divider borderColor="red.200" />
        <span>LONG LIST</span>
        <AppAstronauts />
      </Box> */}
    </ThemeProvider>
  );
}

export default App;
