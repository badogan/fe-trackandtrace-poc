import React from "react";
import { Heading, Flex, Box, Button, Link } from "@chakra-ui/core";
import { Link as ReactRouterLink } from "react-router-dom";

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
          Covid 19 - Track and Trace
        </Heading>
        <Heading marginTop={4} as="h2" size="lg">
          System Entry
        </Heading>
        <Box marginTop={5}>
          <Button variantColor="teal" size="md">
            <Link as={ReactRouterLink} to={`/dataentry`}>
              Login
            </Link>
          </Button>
          <Button marginLeft={4} variantColor="teal" size="md">
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
