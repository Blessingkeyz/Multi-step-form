import { Box } from "@chakra-ui/react";
import React from "react";
import { AddonInputs, Header } from ".";

const AddOn = ({ userRef, nextPage, previousPage, userData, isYearly }) => {
  return (
    <Box>
      <Box
        ml={["16px", "100px"]}
        mt={["40px", "50px"]}
        width={["300px", "450px"]}
        h={["300px", "550px"]}
      >
        <Header
          title={"Pick add-ons"}
          text="Add-ons help enhance your gaming experience."
        />
        <AddonInputs
          userRef={userRef}
          userData={userData}
          isYearly={isYearly}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </Box>
    </Box>
  );
};

export default AddOn;
