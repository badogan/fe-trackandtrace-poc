import React, { useState, useEffect } from "react";
import useValidation from "../hooks/useValidation";
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
import { fetchUserSignup } from "../actions/fetchUserSignup";

const SignupPage = props => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const { validate, errorArray } = useValidation();

  const handleValidation = () => {
    validate(name, email, password, passwordConfirm);
  };

  const doSignup = () => {
    if (errorArray && errorArray.length === 0) {
      props.fetchUserSignup({ name, email, password, passwordConfirm });
    }
  };

  useEffect(() => {
    errorArray && errorArray.length === 0 && doSignup();
  }, [errorArray]);

  return (
    <React.Fragment>
      <Flex align="center">
        <Box marginLeft={2} p={5}>
          <FormControl>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <Stack spacing={0.5}>
              <Input
                onChange={e => setName(e.target.value)}
                type="name"
                id="name"
                aria-describedby="name-helper-text"
                placeholder="John Black"
              />
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
              <FormLabel htmlFor="passwordConfirm">Confirm Password:</FormLabel>
              <Input
                onChange={e => setPasswordConfirm(e.target.value)}
                type="password"
                id="passwordConfirm"
                aria-describedby="passwordConfirm-helper-text"
                placeholder="******"
              />
            </Stack>
            <Box marginTop={3}>
              <Button
                onClick={() => {
                  handleValidation();
                }}
                variantColor="teal"
                variant="outline"
              >
                Signup
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
    fetchUserSignup: newUserObj => dispatch(fetchUserSignup(newUserObj))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
