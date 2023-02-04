import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Header, Summarycheck } from ".";

const Summary = ({ userData, nextPage, previousPage, isYearly }) => {
  return (
    <Box>
      <Box
        ml={["16px", "100px"]}
        mt={["40px", "50px"]}
        width={["300px", "450px"]}
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
          isYearly={isYearly}
        />
      </Box>
    </Box>
  );
};

export default Summary;
