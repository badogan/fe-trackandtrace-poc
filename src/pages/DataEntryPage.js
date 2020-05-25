import React, { useState } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Stack,
  Button
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
    props.fetchInitiateSearch({
      eMAC: "e8:93:09:1d:48:ba",
      // eMAC: uniqueId,
      eTimestamp: "2020-05-18T09:25:39.804Z",
      // eTimestamp: timestamp,
      maxDistance: 2
      // maxDistance
    });
    setUniqueId("");
    setTimestamp("");
    setMaxDistance("");
  };

  return (
    <React.Fragment>
      <Flex align="center">
        <FormControl>
          <FormLabel htmlFor="uniqueId">Unique Id:</FormLabel>
          <Stack spacing={0.5}>
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
              onChange={e => setMaxDistance(e.target.value)}
              type="maxDistance"
              id="maxDistance"
              aria-describedby="maxDistance-helper-text"
              placeholder="in meters"
            />
          </Stack>
          <Button
            onClick={() => handleOnSubmit()}
            variantColor="teal"
            variant="outline"
          >
            Find
          </Button>
        </FormControl>
      </Flex>
      {searchEverInitiated && <JobQueueConfirmation />}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({ search: state.search });

function mapDispatchToProps(dispatch) {
  return {
    fetchInitiateSearch: searchObj => dispatch(fetchInitiateSearch(searchObj))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataEntryPage);
