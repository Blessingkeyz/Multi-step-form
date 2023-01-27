import { Box } from "@chakra-ui/react";
import React from "react";
import { AddonInputs, Header } from ".";

const AddOn = ({ userRef, nextPage, previousPage }) => {
  return (
    <Box>
      <Box
        ml={"100px"}
        mt="50px"
        width={["none", "450px"]}
        h={["300px", "550px"]}
      >
        <Header
          title={"Pick add-ons"}
          text="Add-ons help enhance your gaming experience."
        />
        <AddonInputs
          userRef={userRef}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </Box>
    </Box>
  );
};

export default AddOn;
