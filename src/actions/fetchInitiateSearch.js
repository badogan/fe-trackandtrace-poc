import API from "../APIsHelpers/API";

export function fetchInitiateSearch(_id,searchObj) {
  return dispatch => {
    dispatch({ type: "START_INITIATE_SEARCH_REQUEST" });
    API.initiateSearchRequest(_id,searchObj)
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
