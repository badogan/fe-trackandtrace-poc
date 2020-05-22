import React from "react";
import { Route } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import ChHeader from './components/ChHeader'

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
    </ThemeProvider>
  );
}

export default App;
