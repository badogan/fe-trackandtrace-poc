import React from "react";
import { connect } from "react-redux";
import { Link as ReactRouterLink } from "react-router-dom";

import { Spinner, Alert, AlertIcon, Flex, Button, Link } from "@chakra-ui/core";

const JobQueueConfirmation = props => {
  return (
    <React.Fragment>
      {props.requesting ? (
        <Spinner
          thickness="5px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Flex align="stretch">
          <Alert status="success">
            <AlertIcon />
            JobQueue assigned. Reference Id: {props.recentJobQueueRef}
          </Alert>
          <Button variantColor="teal" size="lg">
            <Link
              as={ReactRouterLink}
              to={`/jobqueueviewer?jobqueue=${props.recentJobQueueRef}`}
            >
              Job Queue Details
            </Link>
          </Button>
        </Flex>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  requesting: state.requesting,
  recentJobQueueRef: state.recentJobQueueRef
});

export default connect(mapStateToProps, null)(JobQueueConfirmation);
