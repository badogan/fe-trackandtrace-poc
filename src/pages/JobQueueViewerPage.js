import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { fetchBringJobQueue } from "../actions/fetchBringJobQueue";
import JobQueueCard from "../components/JobQueueCard";

const JobQueueViewerPage = props => {
  const { fetchBringJobQueue } = props;

  const [jobQueueId, setJobQueueId] = useState(null);

  useEffect(() => {
    setJobQueueId(queryString.parse(props.location.search).jobqueue);
  }, [props.location.search]);
  useEffect(() => {
    jobQueueId && fetchBringJobQueue(jobQueueId);
  }, [jobQueueId, fetchBringJobQueue]);

  return (
    <React.Fragment>
      {jobQueueId &&
      <JobQueueCard
        jobQueueId={jobQueueId}
        jobQueueObj={props.search.find(obj => obj.refId === jobQueueId)}
      />}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({ search: state.search });

function mapDispatchToProps(dispatch) {
  return {
    fetchBringJobQueue: jobQueueId => dispatch(fetchBringJobQueue(jobQueueId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JobQueueViewerPage);
