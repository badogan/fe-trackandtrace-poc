import React, { useState } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Stack,
  Button,
  Box
} from "@chakra-ui/core";
import { fetchInitiateSearch } from "../actions/fetchInitiateSearch";
import JobQueueConfirmation from "../components/JobQueueConfirmation";

const DataEntryPage = props => {
  const [uniqueId, setUniqueId] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [maxDistance, setMaxDistance] = useState("");
  const [searchEverInitiated, setSearchEverInitiated] = useState(false);

  const handleOnSubmit = () => {
    setSearchEverInitiated(true);
    props.fetchInitiateSearch(props.user._id, {
      eMAC: uniqueId || "e8:93:09:1d:48:ba",
      eTimestamp: timestamp || "2020-05-18T09:25:39.804Z",
      maxDistance: maxDistance || 2
    });
    setUniqueId("");
    setTimestamp("");
    setMaxDistance("");
  };

  return (
    <React.Fragment>
      <Flex align="center">
        <Box></Box>
        <Box marginLeft={2} p={5}>
          <FormControl>
            <FormLabel htmlFor="uniqueId">Unique Id:</FormLabel>
            <Stack spacing={0.5}>
              {/* <DatePicker onChange={onChange1} value={value1} /> */}
              <Input
                onChange={e => setUniqueId(e.target.value)}
                type="uniqueId"
                id="uniqueId"
                aria-describedby="uniqueId-helper-text"
                placeholder="MAC, id, _id"
              />
              <FormLabel htmlFor="timestamp">Timestamp:</FormLabel>
              <Input
                onChange={e => setTimestamp(e.target.value)}
                type="timestamp"
                id="timestamp"
                aria-describedby="timestamp-helper-text"
                placeholder="DD/MM/YYYY"
              />
              <FormLabel htmlFor="maxDistance">Max Distance:</FormLabel>
              <Input
                onChange={e => setMaxDistance(parseInt(e.target.value))}
                type="maxDistance"
                id="maxDistance"
                aria-describedby="maxDistance-helper-text"
                placeholder="in meters"
              />
            </Stack>
            <Box marginTop={3}>
              <Button
                onClick={() => handleOnSubmit()}
                variantColor="teal"
                variant="outline"
              >
                Initiate Search
              </Button>
            </Box>
          </FormControl>
        </Box>
      </Flex>
      <Box marginLeft={2} p={5}>
        {searchEverInitiated && <JobQueueConfirmation />}
      </Box>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({ search: state.search, user: state.user });

function mapDispatchToProps(dispatch) {
  return {
    fetchInitiateSearch: (_id, searchObj) =>
      dispatch(fetchInitiateSearch(_id, searchObj))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataEntryPage);
