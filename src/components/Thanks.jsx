import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Thankyou from "../assets/images/icon-thank-you.svg";

const Thanks = () => {
  return (
    <Box>
      <Box
        ml={["7px", "100px"]}
        mt={["90px", "190px"]}
        width={["300px", "450px"]}
        h={["200px", "550px"]}
      >
        <VStack
          position={"relative"}
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={Thankyou}
            w={["50px", "80px"]}
            h={["50px", "80px"]}
            mb={["13px", "20px"]}
          />
          <Text
            // width={["290px", "300px", "350px", "500px"]}
            fontFamily={"Ubuntu"}
            fontWeight={"700"}
            fontSize={["24px", "32px"]}
            lineHeight={"32px"}
            color={"#153460"}
          >
            Thank you!
          </Text>

          <Text
            // width={["290px", "290px", "420px", "450px"]}
            fontFamily={"Ubuntu"}
            fontWeight={"500"}
            textAlign="center"
            fontSize={["16.5px", "16.5px"]}
            lineHeight={"25px"}
            color={"#9A9BA0"}
          >
            Thanks for confirming your subscription! We hope you had fun using
            our platform. If you ever need support, please feel free to mail us
            at support@loremgaming.com.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Thanks;
