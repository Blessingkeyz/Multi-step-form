import { Box } from "@chakra-ui/react";
import React from "react";
import { Header, PlanInputs } from ".";

const Plan = ({ userRef, nextPage, previousPage }) => {
  return (
    <Box>
      <Box
        ml={"100px"}
        mt="50px"
        width={["none", "450px"]}
        h={["300px", "550px"]}
      >
        <Header
          title={"Select Your Plan"}
          text="You have the option of monthly or yearly billing."
        />
        <PlanInputs
          userRef={userRef}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </Box>
    </Box>
  );
};

export default Plan;
