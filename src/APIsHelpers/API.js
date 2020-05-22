const postSimple = (url, obj) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(obj)
  });
};

// const postWithAuth = (url, obj) => {
//   return fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.token}`
//     },
//     body: JSON.stringify(obj)
//   });
// };

// const getSimple = url => {
//   return fetch(url);
// };

// const getWithAuth = url => {
//   return fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.token}`
//     }
//   });
// };

// const deleteWithAuth = url => {
//   return fetch(url, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.token}`
//     }
//   });
// };

// const patchWithAuth = (url, obj) => {
//   return fetch(url, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Bearer ${localStorage.token}`
//     },
//     body: JSON.stringify(obj)
//   });
// };

const initiateSearchRequest = (url, searchObj) => {
  return postSimple(url, searchObj);
};

const bringJobQueue = (url, jobQueueObj) => {
  return postSimple(url, jobQueueObj);
};

export default {
  initiateSearchRequest,
  bringJobQueue
};
