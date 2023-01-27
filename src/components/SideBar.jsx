import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
// import SideimgM from "../assets/images/bg-sidebar-mobile.svg";
import SideimgD from "../assets/images/bg-sidebar-desktop.svg";

const SideBar = () => {
  return (
    <Box display={"flex"} pos="relative">
      <Image src={SideimgD} m="15px" />
      <Box
        pos={"absolute"}
        ml={"35px"}
        mt="50px"
        width={["none", "200px"]}
        h={["300px", "500px"]}
        border="2px red solid"
      >
        <Text
          fontFamily={"Satoshi"}
          fontWeight={"500"}
          fontSize={"30px"}
          lineHeight={"23px"}
          color={"#373636"}
        >
          hi
        </Text>
      </Box>
    </Box>
  );
};

export default SideBar;
