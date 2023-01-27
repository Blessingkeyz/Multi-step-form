import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Header, Summarycheck } from ".";

const Summary = ({ userData, nextPage, previousPage }) => {
  return (
    <Box>
      <Box
        ml={"100px"}
        mt="50px"
        width={["none", "450px"]}
        h={["300px", "550px"]}
      >
        <Header
          title={"Finishing up"}
          text="Double-check everything looks okay before confirming."
        />
        <Summarycheck
          userData={userData}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </Box>
    </Box>
  );
};

export default Summary;
