export default function manageUsers(
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

    default:
      return state;
  }
}
