import { Box } from "@chakra-ui/react";
import React from "react";
import { Header, PlanInputs } from ".";

const Plan = ({
  userRef,
  nextPage,
  previousPage,
  userData,
  isYearly,
  handleChange,
}) => {
  return (
    <Box>
      <Box
        ml={["16px", "100px"]}
        mt={["40px", "50px"]}
        width={["300px", "450px"]}
        h={["300px", "550px"]}
      >
        <Header
          title={"Select Your Plan"}
          text="You have the option of monthly or yearly billing."
        />
        <PlanInputs
          userRef={userRef}
          userData={userData}
          nextPage={nextPage}
          previousPage={previousPage}
          isYearly={isYearly}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default Plan;
