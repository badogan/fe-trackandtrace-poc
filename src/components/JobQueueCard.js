import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  List,
  ListItem,
  ListIcon,
  Skeleton,
  Box,
  Heading
} from "@chakra-ui/core";
import { fetchBringJobQueue } from "../actions/fetchBringJobQueue";
import delay from "delay";

const JobQueueCard = props => {
  const { jobQueueId, jobQueueObj, fetchBringJobQueue } = props;

  const [processComplete, setProcessComplete] = useState(false);
  const [continuePolling, setContinuePolling] = useState(0);

  useEffect(() => {
    pollJobQueue();
  }, [continuePolling]);

  async function pollJobQueue() {
    fetchBringJobQueue(jobQueueId);
    await delay(3000);
    if (jobQueueObj.jobQueueData.data.uniqueList === undefined) {
      setContinuePolling(continuePolling + 1);
    } else {
      setProcessComplete(true);
    }
  }
  return (
    <React.Fragment>
      {processComplete ? null : (
        <Box p={3}>
          <Heading as="h5" size="lg">
            Getting Unique Id List...
          </Heading>
          <Skeleton height="20px" my="10px" />
        </Box>
      )}
      {processComplete ? (
        <Box p={3} maxW="sm" borderWidth="0px" rounded="lg" overflow="hidden">
          <Heading as="h3" size="lg">
            List of Unique Ids
          </Heading>
          <List spacing={3}>
            {jobQueueObj.jobQueueData.data.uniqueList.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem key={index}>
                  <ListIcon key={index} icon="check-circle" color="green.500" />
                  {item}
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Box>
      ) : null}
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
