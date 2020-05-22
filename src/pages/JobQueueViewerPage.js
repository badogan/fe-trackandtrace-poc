import React, { useState } from "react";
import { connect } from "react-redux";
import JobQueueCard from "../components/JobQueueCard";

const JobQueueViewerPage = props => {
  return (
    <React.Fragment>
      <h1>Testing JobQueueViewerPage</h1>
      {props.search.map((obj, index) => <JobQueueCard key={index} obj={obj}/>)}
    </React.Fragment>
  );
};

// const mapStateToProps = state => ({ search: state.search });

export default connect(null, null)(JobQueueViewerPage);
