export default function manageSearch(
  state = {
    search: [],
    requesting: false
  },
  action
) {
  switch (action.type) {
    case "START_INITIATE_SEARCH_REQUEST":
      return {
        ...state,
        requesting: true
      };

    case "ADD_JOBQUEUE":
      const newJobQueueObj = { refId: action.refId };
      return {
        ...state,
        search: [...state.search, newJobQueueObj],
        requesting: false
      };

    case "UPDATE_JOBQUEUE":
      const targetJobQueueId = action.jobQueueId;
      const jobQueueData = action.jobQueueData;
      const targetObject = state.search.find(
        obj => obj.refId === targetJobQueueId
      );
      const targetIndex = state.search.indexOf(targetObject);
      let objectsPart1 = state.search.slice(0, targetIndex);
      let objectsPart2 = state.search.slice(targetIndex + 1);
      targetObject.queueData = jobQueueData;
      console.log('PART 1: ',objectsPart1)
      console.log('UPDATING!!!!: ',targetObject)
      console.log('PART 2: ',objectsPart2)
      objectsPart1.push(targetObject);
      const updatedSearch = objectsPart1.concat(objectsPart2);
      return {
        ...state,
        search: updatedSearch
      };

    default:
      return state;
  }
}
