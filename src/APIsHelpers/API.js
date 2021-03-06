import { conditionalExpression } from "@babel/types";

const URL_userSignup = `${process.env.REACT_APP_BE_API_URL}/api/v1/users/signup`;
const URL_userLogin = `${process.env.REACT_APP_BE_API_URL}/api/v1/users/login`;
const URL_PART1 = `${process.env.REACT_APP_BE_API_URL}/api/v1/users/`;
const URL_LoginGoogle = `${process.env.REACT_APP_BE_API_URL}/api/v1/users/loginGoogle`;
const URL_isEmailAvailable = `${process.env.REACT_APP_BE_API_URL}/api/v1/users/isemailavailable`;

const postSimple = (url, obj) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(obj)
  });
};

const postWithAuth = (url, obj) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(obj)
  });
};

const getSimple = url => {
  return fetch(url);
};

const initiateSearchRequest = (_id, searchObj) => {
  const urlToHit = URL_PART1 + `${_id}/q1results/`;
  return postWithAuth(urlToHit, searchObj);
};

const bringJobQueue = (_id, jobQueueObj) => {
  const urlToHit = URL_PART1 + `${_id}/jobqueue/`;
  return postWithAuth(urlToHit, jobQueueObj).then(response => response.json());
};

const UserSignup = userSignupObject => {
  return postSimple(URL_userSignup, userSignupObject).then(response =>
    response.json()
  );
};

const UserLogin = userLoginObject => {
  return postSimple(URL_userLogin, userLoginObject).then(response =>
    response.json()
  );
};

const LoginGoogleURL = () => {
  return URL_LoginGoogle;
};

const checkIfEmailIsAvailable = email => {
  return postSimple(URL_isEmailAvailable, { email })
    .then(res => res.json())
    .then(result => result.data.emailAvailable);
};

export default {
  checkIfEmailIsAvailable,
  initiateSearchRequest,
  bringJobQueue,
  UserSignup,
  UserLogin,
  LoginGoogleURL
};

//APPENDIX-START===============
// const getWithAuth = url => {
//   return fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.token}`
//     }
//   });
// };

// const deleteWithAuth = url => {
//   return fetch(url, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.token}`
//     }
//   });
// };

// const patchWithAuth = (url, obj) => {
//   return fetch(url, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.token}`
//     },
//     body: JSON.stringify(obj)
//   });
// };
//APPENDIX-END=====================================
