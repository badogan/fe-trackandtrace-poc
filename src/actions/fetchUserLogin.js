import API from "../APIsHelpers/API";

export function fetchUserLogin(userObj) {
  return dispatch => {
    API.UserLogin(userObj)
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
