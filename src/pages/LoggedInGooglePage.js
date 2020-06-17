import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import queryString from "query-string";

const LoggedInGooglePage = props => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    userId && userName && props.doUpdateUser(userId, userName);
    props.user && props.history.push("/dataentry");
  }, [props.user, props.history, userId, userName]);

  useEffect(() => {
    props.doResetState();
    localStorage.token = queryString.parse(props.location.search).token;
    setUserId(queryString.parse(props.location.search).userid);
    // console.log("userId:", userId);
    setUserName(queryString.parse(props.location.search).username);
    // console.log("userName:", userName);
  }, [props.history]);

  return <React.Fragment></React.Fragment>;
};

const mapStateToProps = state => ({ user: state.user });

function mapDispatchToProps(dispatch) {
  return {
    doUpdateUser: (userId, userName) =>
      dispatch({
        type: "UPDATE_USER",
        userObj: { _id: userId, name: userName }
      }),
    doResetState: () => dispatch({ type: "RESET_STATE" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInGooglePage);
