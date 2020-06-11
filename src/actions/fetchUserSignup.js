import API from "../APIsHelpers/API";

export function fetchUserSignup(newUserObj) {
  return dispatch => {
    API.UserSignup(newUserObj)
      .then(res => {
        console.log(res);
        return res;
      })
      .then(data => {
        localStorage.token = data.token;
        dispatch({ type: "UPDATE_USER", userObj: data.data });
      });
  };
}
