import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "@chakra-ui/core";
import { fetchBringJobQueue } from "../actions/fetchBringJobQueue";
import JobQueueCardAtomic from './JobQueueCardAtomic'

const JobQueueCard = props => {
  return (
    <React.Fragment>
      <h1>JobQueue Card</h1>
      <h1>{props.obj.refId}</h1>
      <JobQueueCardAtomic obj={props.obj}/>
      <Button onClick={() => props.fetchBringJobQueue(props.obj.refId)}>
        Bring!
      </Button>
    </React.Fragment>
  );
};

// const mapStateToProps = state => ({ search: state.search });

function mapDispatchToProps(dispatch) {
  return {
    fetchBringJobQueue: jobQueueId => dispatch(fetchBringJobQueue(jobQueueId))
  };
}

export default connect(null, mapDispatchToProps)(JobQueueCard);
