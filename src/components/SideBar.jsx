import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { SideCompo } from ".";
import SideimgD from "../assets/images/bg-sidebar-desktop.svg";

const SideBar = ({ page }) => {
  return (
    <Box display={["none", "yes"]} pos="relative">
      <Image src={SideimgD} m="15px" />
      <Flex
        pos={"absolute"}
        ml={"45px"}
        mt="55px"
        width={["none", "200px"]}
        flexDirection="column"
        h={["300px", "500px"]}
      >
        <SideCompo
          step={"1"}
          details={"YOUR INFO"}
          numcolor={page == 0 ? "none" : "white"}
          circlebgcolor={page == 0 ? "hsl(206, 94%, 87%)" : "none"}
        />
        <SideCompo
          step={"2"}
          details={"SELECT PLAN"}
          numcolor={page == 1 ? "none" : "white"}
          circlebgcolor={page == 1 ? "hsl(206, 94%, 87%)" : "none"}
        />
        <SideCompo
          step={"3"}
          details={"ADD - ONS"}
          numcolor={page == 2 ? "none" : "white"}
          circlebgcolor={page == 2 ? "hsl(206, 94%, 87%)" : "none"}
        />
        <SideCompo
          step={"4"}
          details={"SUMMARY"}
          numcolor={page == 3 ? "none" : "white"}
          circlebgcolor={page == 3 ? "hsl(206, 94%, 87%)" : "none"}
        />
      </Flex>
    </Box>
  );
};

export default SideBar;
