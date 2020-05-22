import API from "../APIsHelpers/API";

export function fetchInitiateSearch(searchObj) {
  return dispatch => {
    dispatch({ type: "START_INITIATE_SEARCH_REQUEST" });
    const url = "http://localhost:5001/api/v1/existence/q1results/";
    API.initiateSearchRequest(url, searchObj)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        return res;
      })
      .then(jobqueue =>
        dispatch({ type: "ADD_JOBQUEUE", refId: jobqueue.data.refId })
      );
  };
}
