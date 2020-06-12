import { useState, useEffect } from "react";

const useValidationLogin = () => {
  const [emailToValidate, setEmailToValidate] = useState(null);
  const [passwordToValidate, setPasswordToValidate] = useState(null);
  const [errorArray, setErrorArray] = useState(null);

  useEffect(() => {
    runValidationRules();
  }, [passwordToValidate, emailToValidate]);

  useEffect(() => {
    setErrorArray(null);
  }, []);

  const pushValidationResultsToErrorArray = validationTestResults => {
    setErrorArray(errorArray => [...errorArray].concat(validationTestResults));
  };

  const runValidationRules = () => {
    setErrorArray([]);
    let validationTestResults = [];
    if (!passwordToValidate) {
      validationTestResults.push("Password does not exist");
    }
    if (passwordToValidate && passwordToValidate.length < 5) {
      validationTestResults.push("Password length less than 5 characters");
    }

    let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;
    if (
      emailToValidate &&
      (emailToValidate === "" || !re.test(emailToValidate))
    ) {
      validationTestResults.push("Email address not valid");
    }

    pushValidationResultsToErrorArray(validationTestResults);
  };

  const validate = (email, password) => {
    setEmailToValidate(email);
    setPasswordToValidate(password);
  };

  return { validate, errorArray };
};

export default useValidationLogin;
