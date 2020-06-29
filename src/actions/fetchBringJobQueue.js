import API from "../APIsHelpers/API";

export function fetchBringJobQueue(_id, jobQueueId) {
  return dispatch => {
    API.bringJobQueue(_id, { jobQueueId }).then(data => {
      dispatch({ type: "UPDATE_JOBQUEUE", jobQueueId, jobQueueData: data });
    });
  };
}
