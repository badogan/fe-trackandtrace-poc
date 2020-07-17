import { useState, useEffect } from "react";

const useValidation = () => {
  const [usernameToValidate, setUsernameToValidate] = useState(null);
  const [emailToValidate, setEmailToValidate] = useState(null);
  const [passwordToValidate, setPasswordToValidate] = useState(null);
  const [
    passwordConfirmationToValidate,
    setPasswordConfirmationToValidate
  ] = useState(null);
  const [errorArray, setErrorArray] = useState(null);
  const [validationTestResults, setValidationTestResults] = useState(null);

  useEffect(() => {
    runValidationRules();
  }, [
    usernameToValidate,
    passwordToValidate,
    passwordConfirmationToValidate,
    emailToValidate
  ]);

  useEffect(() => {
    setErrorArray(null)
  }, []);

  const pushValidationResultsToErrorArray = () => {
    setErrorArray(errorArray => [...errorArray].concat(validationTestResults));
  };

  const waitForAPromiseToResolve = () =>
    new Promise(resolve => setTimeout(() => resolve("RESOLVED!")), 5000);

  const runValidationRules = async () => {
    setErrorArray([]);
    setValidationTestResults([]);
    if (validationTestResults && !passwordToValidate) {
      validationTestResults.push("Password does not exist");
    }
    if (validationTestResults && !passwordConfirmationToValidate) {
      validationTestResults.push("Password confirmation does not exist");
    }
    if (validationTestResults && !usernameToValidate) {
      validationTestResults.push("Name does not exist!");
    }
    if (validationTestResults && passwordToValidate && passwordToValidate.length < 5) {
      validationTestResults.push("Password length less than 5 characters");
    }
    if (
      validationTestResults && passwordToValidate &&
      passwordConfirmationToValidate &&
      passwordToValidate !== passwordConfirmationToValidate
    ) {
      validationTestResults.push(
        "Password and password confirmation different"
      );
    }

    let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
    if (
      validationTestResults && emailToValidate &&
      (emailToValidate === "" || !re.test(emailToValidate))
    ) {
      validationTestResults.push("Email address not valid");
    }

    // await waitForAPromiseToResolve();

    pushValidationResultsToErrorArray();
  };

  const validate = (name, email, password, passwordConfirmation) => {
    setUsernameToValidate(name);
    setEmailToValidate(email);
    setPasswordToValidate(password);
    setPasswordConfirmationToValidate(passwordConfirmation);
  };

  return { validate, errorArray };
};

export default useValidation;
