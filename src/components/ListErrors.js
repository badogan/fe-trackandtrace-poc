import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/core";

const ListErrrors = props => {
  const { errorArray } = props;
  return (
    <React.Fragment>
      {errorArray.map((error, index) => (
        <Alert key={index} status="warning">
          <AlertIcon/>
          <h5>{error}</h5>
        </Alert>
      ))}
    </React.Fragment>
  );
};

export default ListErrrors;
