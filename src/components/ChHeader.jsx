import React from "react";
import { connect } from "react-redux";
import { Box, Heading, Flex, Link, Button } from "@chakra-ui/core";
import { Link as ReactRouterLink } from "react-router-dom";

// const MenuItems = ({ children }) => (
//   <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
//     {children}
//   </Text>
// );

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.logoutActions();
    props.history.push("/");
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="xl">
          Track & Trace PoC
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        {props.user && (
          <Link as={ReactRouterLink} to={`/dataentry`}>
            Search
          </Link>
        )}
        {/* <MenuItems>Search</MenuItems> */}
        {/* <MenuItems>Examples</MenuItems> */}
        {/* <MenuItems>Blog</MenuItems> */}
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {props.user && (
          <Flex align="center" justifyContent="flex-start" flexDirection="row">
            <Heading as="h1" size="md">
              Welcome {props.user.name}!
            </Heading>
            <Button
              onClick={() => handleLogout()}
              bg="transparent"
              border="1px"
              marginLeft={2}
            >
              Logout
            </Button>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

const mapStateToProps = state => ({ user: state.user });

function mapDispatchToProps(dispatch) {
  return {
    logoutActions: () => dispatch({ type: "RESET_STATE" })
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
