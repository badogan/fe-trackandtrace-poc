import React from "react";

const JobQueueCardAtomic = props => {
  const { refId, queueData } = props.obj;
  return (
    <React.Fragment>
      <h1>JobQueue Card Atomic</h1>
      <h1>{refId}</h1>
      {queueData ? <h1>YES</h1> : <h1>NO</h1>}
    </React.Fragment>
  );
};

export default JobQueueCardAtomic;