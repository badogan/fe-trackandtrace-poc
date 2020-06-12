import API from "../APIsHelpers/API";

export function fetchBringJobQueue(_id, jobQueueId) {
  return dispatch => {
    // dispatch({ type: "START_INITIATE_SEARCH_REQUEST" }); START HERE!!!
    // const url = "http://localhost:5001/api/v1/existence/jobqueue/";
    API.bringJobQueue(_id, { jobQueueId }).then(data => {
      // console.log("INSIDE fetchBringJobQueue - jobQueueData:", data);
      // console.log("INSIDE fetchBringJobQueue - jobQueueId:", jobQueueId);
      dispatch({ type: "UPDATE_JOBQUEUE", jobQueueId, jobQueueData: data });
    });
  };
}