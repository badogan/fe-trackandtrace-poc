import React, { useState, useEffect } from "react";
import useValidationLogin from "../hooks/useValidationLogin";
import ListErrors from "../components/ListErrors";
import { connect } from "react-redux";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Stack,
  Button,
  Box
} from "@chakra-ui/core";
import { fetchUserLogin } from "../actions/fetchUserLogin";

const LoginPage = props => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { validate, errorArray } = useValidationLogin();

  const handleValidationLogin = () => {
    validate(email, password);
  };

  const doLogin = () => {
    if (errorArray && errorArray.length === 0) {
      props.fetchUserLogin({ email, password });
    }
  };

  useEffect(() => {
    props.user && props.history.push("/dataentry");
  }, [props.user, props.history]);

  useEffect(() => {
    errorArray && errorArray.length === 0 && doLogin();
  }, [errorArray]);

  return (
    <React.Fragment>
      <Flex align="center">
        <Box marginLeft={2} p={5}>
          <FormControl>
            <Stack spacing={0.5}>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                onChange={e => setEmail(e.target.value)}
                type="email"
                id="email"
                aria-describedby="email-helper-text"
                placeholder="john@domain.com"
              />
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="password"
                aria-describedby="password-helper-text"
                placeholder="******"
              />
            </Stack>
            <Box marginTop={3}>
              <Button
                onClick={() => {
                  handleValidationLogin();
                }}
                variantColor="teal"
                variant="outline"
              >
                Login
              </Button>
            </Box>
          </FormControl>
        </Box>
        <Flex justifyContent="flex-start" flexDirection="column">
          {errorArray ? <ListErrors errorArray={errorArray} /> : null}
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({ user: state.user });

function mapDispatchToProps(dispatch) {
  return {
    fetchUserLogin: userObj => dispatch(fetchUserLogin(userObj))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
