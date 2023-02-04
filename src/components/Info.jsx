import { Box } from "@chakra-ui/react";
import React from "react";
import { Header, Inputs } from ".";

const Personal = ({ userRef, nextPage }) => {
  return (
    <Box>
      <Box
        ml={["16px", "100px"]}
        mt={["40px", "50px"]}
        width={["300px", "450px"]}
        h={["300px", "550px"]}
      >
        <Header
          title={"Personal info"}
          text="Please provide your name, email adress and phone number."
        />

        <Inputs
          userRef={userRef}
          inp1={"Name"}
          inp1P="e.g. Stephen King"
          inp2={"Email Adress"}
          inp2P="e.g. stephenking@lorem.com"
          inp3={"Phone Number"}
          inp3P="e.g. +1 234 567 890"
          button="Next Step"
          nextPage={nextPage}
        />
      </Box>
    </Box>
  );
};

export default Personal;
