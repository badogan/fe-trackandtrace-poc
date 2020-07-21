import React from "react";
import { Heading, Flex, Box, Button, Link } from "@chakra-ui/core";
import { Link as ReactRouterLink } from "react-router-dom";
import API from "../APIsHelpers/API";

const LandingPage = props => {
  return (
    <React.Fragment>
      <Flex
        align="center"
        justifyContent="center"
        marginTop={20}
        flexDirection="column"
      >
        <Heading as="h1" size="xl">
          Track and Trace
        </Heading>
        <Heading marginTop={4} as="h2" size="lg">
          System Entry
        </Heading>
        <Box marginTop={5}>
          <Button variantColor="teal" size="md">
            <Link as={ReactRouterLink} to={`/login`}>
              Login
            </Link>
          </Button>

          <Button marginLeft={3} color="#d13317" size="md">
            <Link href={API.LoginGoogleURL()}>Login Google +</Link>
          </Button>

          <Button marginLeft={3} variantColor="teal" size="md">
            <Link as={ReactRouterLink} to={`/signup`}>
              Signup
            </Link>
          </Button>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default LandingPage;
