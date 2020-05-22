import React from "react";
import { connect } from "react-redux";



const DataEntryPage = props => {
  return (
    <React.Fragment>
        <h1>Data entry page</h1>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({ users: state.users });

const mapDispatchToProps = dispatch => ({
  addUser: name => dispatch({ type: "ADD_USER",name}),
  deleteUser: id => dispatch({ type: "DELETE_USER", id }),
  updateUser: (id,updatedName) => {
      dispatch({type: "UPDATE_USER",id,updatedName})}
});

export default connect(mapStateToProps, mapDispatchToProps)(DataEntryPage);
