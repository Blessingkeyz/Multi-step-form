import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { SideCompoM } from ".";
import SideimgM from "../assets/images/bg-sidebar-mobile.svg";

const SideBarMobile = ({ page }) => {
  return (
    <Box display={["yes", "none"]} pos="relative">
      <Image src={SideimgM} />
      <Box
        pos={"absolute"}
        w={"100%"}
        h="169px"
        justifyContent="center"
        display={"flex"}
        flexDir="row"
      >
        <Flex pos={"absolute"} mt="30px">
          <SideCompoM
            step={"1"}
            numcolor={page == 0 ? "none" : "white"}
            circlebgcolor={page == 0 ? "hsl(206, 94%, 87%)" : "none"}
          />
          <SideCompoM
            step={"2"}
            numcolor={page == 1 ? "none" : "white"}
            circlebgcolor={page == 1 ? "hsl(206, 94%, 87%)" : "none"}
          />
          <SideCompoM
            step={"3"}
            numcolor={page == 2 ? "none" : "white"}
            circlebgcolor={page == 2 ? "hsl(206, 94%, 87%)" : "none"}
          />
          <SideCompoM
            step={"4"}
            numcolor={page == 3 || page == 4 ? "none" : "white"}
            circlebgcolor={
              page == 3 || page == 4 ? "hsl(206, 94%, 87%)" : "none"
            }
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default SideBarMobile;
