import React, { useState } from "react";
import "@fontsource/ubuntu";
import {
  Box,
  Button,
  Checkbox,
  Circle,
  Flex,
  FormControl,
  Image,
  Input,
  Link,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import ArcadeImg from "../assets/images/icon-arcade.svg";
import AdvancedImg from "../assets/images/icon-advanced.svg";
import ProImg from "../assets/images/icon-pro.svg";

export const SideCompoM = ({ circlebgcolor, numcolor, step }) => (
  <Flex mr={"15px"}>
    <Circle
      h="32px"
      w="32px"
      border="1px hsl(206, 94%, 87%) solid"
      bgColor={circlebgcolor}
    >
      <Text
        fontFamily={"Ubuntu"}
        fontWeight={"600"}
        fontSize={"15px"}
        lineHeight={"13px"}
        color={numcolor}
      >
        {step}
      </Text>
    </Circle>
  </Flex>
);
export const SideCompo = ({ circlebgcolor, numcolor, step, details }) => (
  <Flex mb={"33px"}>
    <Circle
      h="32px"
      w="32px"
      border="1px hsl(206, 94%, 87%) solid"
      bgColor={circlebgcolor}
    >
      <Text
        // pos={"absolute"}
        // ml="10px"
        fontFamily={"Ubuntu"}
        fontWeight={"600"}
        fontSize={"15px"}
        lineHeight={"13px"}
        color={numcolor}
      >
        {step}
      </Text>
    </Circle>
    <Box pos={"relative"} display="flex-column">
      <Text
        // pos={"absolute"}
        ml="15px"
        fontFamily={"Ubuntu"}
        fontWeight={"500"}
        fontSize={"12px"}
        lineHeight={"13px"}
        color={"white"}
        opacity=".5"
      >
        STEP {step}
      </Text>
      <Text
        // pos={"relative"}
        ml="15px"
        mt={"5px"}
        fontFamily={"Ubuntu"}
        fontWeight={"600"}
        fontSize={"14px"}
        lineHeight={"15px"}
        color={"hsl(0, 0%, 100%)"}
      >
        {details}
      </Text>
    </Box>
  </Flex>
);

export const Header = ({ text, title }) => (
  <VStack position={"relative"} alignItems="flex-start" right={"0px"}>
    <Text
      width={["290px", "300px", "350px", "500px"]}
      fontFamily={"Ubuntu"}
      fontWeight={"700"}
      fontSize={["26px", "32px"]}
      lineHeight={"43.2px"}
      color={"#153460"}
    >
      {title}
    </Text>

    <Text
      width={["290px", "300px", "450px", "450px"]}
      fontFamily={"Ubuntu"}
      fontWeight={"500"}
      fontSize={["15", "16.5px"]}
      lineHeight={"25px"}
      color={"#9A9BA0"}
    >
      {text}
    </Text>
  </VStack>
);

export const Inputs = ({
  userRef,
  formValid,
  nextPage,
  inp1,
  inp2,
  inp3,
  button,
  inp1P,
  inp2P,
  inp3P,
}) => (
  <Flex w={["290px", "450px"]} flexDirection={"column"} position={"absolute"}>
    {/* Input 1*/}
    <FormControl margin={"30px 0px"}>
      <Text
        margin={["0px 0px 10px 0px", "13px 0px"]}
        width="100px"
        fontFamily={"Ubuntu"}
        fontWeight={"500"}
        fontSize={"16px"}
        lineHeight={"10px"}
        color=" hsl(213, 96%, 18%) "
      >
        {inp1}
      </Text>
      <Input
        position={"absolute"}
        alignItems={"center"}
        fontWeight={"700"}
        fontSize={["15px", "16px"]}
        color=" hsl(213, 96%, 18%) "
        fontFamily={"Ubuntu"}
        gap={"8px"}
        width={["290px", "445px"]}
        height={"45px"}
        type={"text"}
        ref={(el) => (userRef.current["fullname"] = el)}
        required
        placeholder={inp1P}
      />
    </FormControl>

    {/* Input 2 */}
    <FormControl margin={"30px 0px"}>
      <Text
        margin={["0px 0px 10px 0px", "13px 0px"]}
        width="150px"
        fontFamily={"Ubuntu"}
        fontWeight={"500"}
        fontSize={"16px"}
        lineHeight={"10px"}
        color=" hsl(213, 96%, 18%) "
      >
        {inp2}
      </Text>
      <Input
        position={"absolute"}
        alignItems={"center"}
        fontWeight={"700"}
        fontSize={["15px", "16px"]}
        color=" hsl(213, 96%, 18%) "
        fontFamily={"Ubuntu"}
        gap={"8px"}
        width={["290px", "445px"]}
        height={"45px"}
        type={"email"}
        ref={(el) => (userRef.current["email"] = el)}
        required
        placeholder={inp2P}
      />
    </FormControl>

    {/* Input 3*/}
    <FormControl margin={"30px 0px"}>
      <Text
        margin={["0px 0px 10px 0px", "13px 0px"]}
        width="150px"
        fontFamily={"Ubuntu"}
        fontWeight={"500"}
        fontSize={"16px"}
        lineHeight={"10px"}
        color=" hsl(213, 96%, 18%) "
      >
        {inp3}
      </Text>
      <Input
        position={"absolute"}
        alignItems={"center"}
        fontWeight={"700"}
        color=" hsl(213, 96%, 18%) "
        fontFamily={"Ubuntu"}
        fontSize={["15px", "16px"]}
        gap={"8px"}
        width={["290px", "445px"]}
        height={"45px"}
        type={"phone"}
        ref={(el) => (userRef.current["phone"] = el)}
        required
        placeholder={inp3P}
      />
    </FormControl>

    {/* Submit */}
    <FormControl w={["290px", "450px"]}>
      <Button
        width={["100px", "120px"]}
        height={["40px", "50px"]}
        mt={["135px", "102px"]}
        mb={["10px", "0px"]}
        ml={["200px", "325px"]}
        // margin={"102px 0px 0px 325px"}
        borderRadius={"10px"}
        color={"white"}
        // _hover="none"
        fontFamily={"Ubuntu"}
        fontStyle={"normal"}
        fontWeight={"500"}
        fontSize={"16px"}
        lineHeight={"36px"}
        // bgColor={formValid ? "#440376" : "rgba(68, 3, 118, 0.6)"}
        bgColor={"#174A8B"}
        type={"submit"}
        onClick={nextPage}
      >
        {button}
      </Button>
    </FormControl>
  </Flex>
);

export const PlanInputs = ({
  nextPage,
  previousPage,
  userRef,
  userData,
  isYearly,
  handleChange,
}) => {
  const handleClick1 = () => {
    userRef.current["plan"].value = "Arcade";
    document
      .getElementById("arcade")
      .setAttribute(
        "style",
        "border : 1px solid #174A8B; background-color : hsl(217, 100%, 97%)"
      );
    document
      .getElementById("advanced")
      .setAttribute(
        "style",
        "border : 1px solid #D9D9DB; background-color : white"
      );
    document
      .getElementById("pro")
      .setAttribute(
        "style",
        "border : 1px solid #D9D9DB; background-color : white"
      );
  };
  const handleClick2 = () => {
    userRef.current["plan"].value = "Advanced";
    document
      .getElementById("advanced")
      .setAttribute(
        "style",
        "border : 1px solid #174A8B; background-color : hsl(217, 100%, 97%)"
      );
    document
      .getElementById("arcade")
      .setAttribute(
        "style",
        "border : 1px solid #D9D9DB; background-color : white"
      );
    document
      .getElementById("pro")
      .setAttribute(
        "style",
        "border : 1px solid #D9D9DB; background-color : white"
      );
  };
  const handleClick3 = () => {
    userRef.current["plan"].value = "Pro";
    document
      .getElementById("pro")
      .setAttribute(
        "style",
        "border : 1px solid #174A8B; background-color : hsl(217, 100%, 97%)"
      );
    document
      .getElementById("arcade")
      .setAttribute(
        "style",
        "border : 1px solid #D9D9DB; background-color : white"
      );
    document
      .getElementById("advanced")
      .setAttribute(
        "style",
        "border : 1px solid #D9D9DB; background-color : white"
      );
  };

  // const isYearly = userRef.current["duration"].checked == true;
  console.log("is yearly is " + isYearly);
  console.log(userData.duration);
  return (
    <Box>
      <Flex
        w={["290px", "450px"]}
        position={"relative"}
        flexDir={["column", "row"]}
      >
        {/* Arcade*/}
        <FormControl>
          <Box
            id="arcade"
            w={["290px", "140px"]}
            height={isYearly ? ["100px", "180px"] : ["75px", "160px"]}
            display="flex"
            mt={["25px", "40px"]}
            mb={["5px", "40px"]}
            borderRadius={"10px"}
            color={"blue"}
            onClick={handleClick1}
            fontFamily={"Ubuntu"}
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"36px"}
            _hover={{ border: "1px solid #174A8B" }}
            border="1px solid #D9D9DB"
            ref={(el) => (userRef.current["plan"] = el)}
            pos="relative"
          >
            <Image
              pos={"absolute"}
              src={ArcadeImg}
              mt={["15px", "20px"]}
              ml="15px"
            />
            <Text
              pos={"absolute"}
              margin={["20px 70px", "105px 15px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"10px"}
              color=" hsl(213, 96%, 18%) "
            >
              Arcade
            </Text>
            <Text
              pos={"absolute"}
              margin={["42px 70px", "125px 15px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              fontSize={"14px"}
              lineHeight={"15px"}
              color={"#9A9BA0"}
            >
              ${isYearly ? "90/yr" : "9/mo"}
            </Text>
            <Text
              display={isYearly ? "yes" : "none"}
              pos={"absolute"}
              margin={["65px 70px", "150px 15px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              fontSize={"14px"}
              lineHeight={"15px"}
              color="hsl(213, 96%, 18%)"
            >
              2 months free
            </Text>
          </Box>
        </FormControl>

        {/* Advanced*/}
        <FormControl>
          <Box
            id="advanced"
            w={["290px", "140px"]}
            height={isYearly ? ["100px", "180px"] : ["75px", "160px"]}
            display="flex"
            my={["5px", "40px"]}
            borderRadius={"10px"}
            color={"blue"}
            _hover={{ border: "1px solid #174A8B" }}
            fontFamily={"Ubuntu"}
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"36px"}
            border="1px solid #D9D9DB"
            onClick={handleClick2}
            pos="relative"
          >
            <Image
              pos={"absolute"}
              src={AdvancedImg}
              mt={["15px", "20px"]}
              ml="15px"
            />
            <Text
              pos={"absolute"}
              margin={["20px 70px", "105px 15px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"10px"}
              color=" hsl(213, 96%, 18%) "
            >
              Advanced
            </Text>
            <Text
              pos={"absolute"}
              margin={["42px 70px", "125px 15px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              fontSize={"14px"}
              lineHeight={"15px"}
              color={"#9A9BA0"}
            >
              ${isYearly ? "120/yr" : "12/mo"}
            </Text>
            <Text
              display={isYearly ? "yes" : "none"}
              pos={"absolute"}
              margin={["65px 70px", "150px 15px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              fontSize={"14px"}
              lineHeight={"15px"}
              color="hsl(213, 96%, 18%)"
            >
              2 months free
            </Text>
          </Box>
        </FormControl>

        {/* Pro*/}
        <FormControl>
          <Box
            id="pro"
            w={["290px", "140px"]}
            height={isYearly ? ["100px", "180px"] : ["75px", "160px"]}
            display="flex"
            mt={["5px", "40px"]}
            mb={["25px", "40px"]}
            borderRadius={"10px"}
            color={"blue"}
            _hover={{ border: "1px solid #174A8B" }}
            fontFamily={"Ubuntu"}
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"36px"}
            border="1px solid #D9D9DB"
            onClick={handleClick3}
            type={"submit"}
            pos="relative"
          >
            <Image
              pos={"absolute"}
              src={ProImg}
              mt={["15px", "20px"]}
              ml="15px"
            />
            <Text
              pos={"absolute"}
              margin={["20px 70px", "105px 15px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"10px"}
              color=" hsl(213, 96%, 18%) "
            >
              Pro
            </Text>
            <Text
              pos={"absolute"}
              margin={["42px 70px", "125px 15px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              fontSize={"14px"}
              lineHeight={"15px"}
              color={"#9A9BA0"}
            >
              ${isYearly ? "150/yr" : "15/mo"}
            </Text>
            <Text
              display={isYearly ? "yes" : "none"}
              pos={"absolute"}
              margin={["65px 70px", "150px 15px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              fontSize={"14px"}
              lineHeight={"15px"}
              color="hsl(213, 96%, 18%)"
            >
              2 months free
            </Text>
          </Box>
        </FormControl>
      </Flex>

      {/* Monthly or yearly*/}
      <FormControl>
        <Box
          w={["290px", "405px"]}
          h={["45px", "60px"]}
          display="flex"
          background={"hsl(217, 100%, 97%)"}
          alignItems="center"
          justifyContent="space-evenly"
          borderRadius={"10px"}
          color={"blue"}
          // _hover="none"
          fontFamily={"Ubuntu"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"36px"}
          type={"submit"}
          pos="relative"
        >
          <Box h={"40px"}>
            <Text
              ml={["-15px", "15px"]}
              pos={"absolute"}
              my="15px"
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              fontSize={"15px"}
              textAlign="center"
              lineHeight={"10px"}
              color={!isYearly ? "hsl(213, 96%, 18%)" : "#9A9BA0"}
            >
              Monthly
            </Text>
          </Box>

          <Box h="40px">
            <Switch
              size={["md", "lg"]}
              // colorScheme="facebook.200"
              colorScheme="gray"
              onChange={handleChange}
              ref={(el) => (userRef.current["duration"] = el)}
            />
          </Box>

          <Box h="40px">
            <Text
              ml={["-43px", "-73px"]}
              pos={"absolute"}
              my="15px"
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              fontSize={"15px"}
              lineHeight={"10px"}
              color={isYearly ? "hsl(213, 96%, 18%)" : "#9A9BA0"}
            >
              Yearly
            </Text>
          </Box>
        </Box>
      </FormControl>

      {/* Submit */}
      <FormControl>
        <Text
          pos={"absolute"}
          mt={[isYearly ? "60px" : "135px", "105px"]}
          fontFamily={"Ubuntu"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"15px"}
          color={"#9A9BA0"}
          onClick={previousPage}
        >
          <Link>Go Back</Link>
        </Text>
        <Button
          width={["100px", "120px"]}
          height={["40px", "50px"]}
          mt={[isYearly ? "50px" : "125px", "90px"]}
          mb={["10px", "0px"]}
          ml={["200px", "325px"]}
          borderRadius={"10px"}
          color={"white"}
          // _hover="none"
          fontFamily={"Ubuntu"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"36px"}
          bgColor={"#174A8B"}
          onClick={nextPage}
        >
          Next Step
        </Button>
      </FormControl>
    </Box>
  );
};

export const AddonInputs = ({ userRef, nextPage, previousPage, isYearly }) => {
  const handleClick1 = () => {
    userRef.current["tick1"].checked == true
      ? document
          .getElementById("tick1")
          .setAttribute(
            "style",
            "border : 1px solid #174A8B; background-color : hsl(217, 100%, 97%)"
          )
      : document
          .getElementById("tick1")
          .setAttribute(
            "style",
            "border : 1px solid #D9D9DB; background-color : white"
          );
  };
  const handleClick2 = () => {
    userRef.current["tick2"].checked == true
      ? document
          .getElementById("tick2")
          .setAttribute(
            "style",
            "border : 1px solid #174A8B; background-color : hsl(217, 100%, 97%)"
          )
      : document
          .getElementById("tick2")
          .setAttribute(
            "style",
            "border : 1px solid #D9D9DB; background-color : white"
          );
  };
  const handleClick3 = () => {
    userRef.current["tick3"].checked == true
      ? document
          .getElementById("tick3")
          .setAttribute(
            "style",
            "border : 1px solid #174A8B; background-color : hsl(217, 100%, 97%)"
          )
      : document
          .getElementById("tick3")
          .setAttribute(
            "style",
            "border : 1px solid #D9D9DB; background-color : white"
          );
  };

  return (
    <Box>
      <Flex
        w={["290px", "450px"]}
        flexDirection={"column"}
        position={"relative"}
      >
        {/* Online Service*/}
        <FormControl mr={"10px"}>
          <Box
            id="tick1"
            width={["290px", "450px"]}
            height={["60px", "80px"]}
            display="flex"
            mt={["25px", "40px"]}
            borderRadius={"10px"}
            border="1px solid #D9D9DB"
            _hover={{ border: "1px solid #174A8B" }}
            pos="relative"
          >
            <Checkbox
              size="lg"
              ml={["15px", "30px"]}
              type="checkbox"
              colorScheme={"purple"}
              required
              onChange={handleClick1}
              ref={(el) => (userRef.current["tick1"] = el)}
            ></Checkbox>

            <Text
              pos={"absolute"}
              margin={["15px 50px", "20px 97px"]}
              fontSize={["14px", "16px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              lineHeight={"10px"}
              color=" hsl(213, 96%, 18%) "
            >
              Online Services
            </Text>
            <Text
              pos={"absolute"}
              margin={["30px 50px", "40px 97px"]}
              fontSize={["12px", "14px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              lineHeight={"15px"}
              color={"#9A9BA0"}
            >
              Access to multiplayer games
            </Text>
            <Text
              pos={"absolute"}
              margin={["20px 240px", "35px 370px"]}
              fontSize={["12px", "13px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              lineHeight={"15px"}
              color={"hsl(213, 96%, 18%)"}
            >
              ${isYearly ? "10/yr" : "1/mo"}
            </Text>
          </Box>
        </FormControl>

        {/* Larger Storage*/}
        <FormControl mr={"10px"}>
          <Box
            id="tick2"
            width={["290px", "450px"]}
            height={["60px", "80px"]}
            display="flex"
            my={["15px", "20px"]}
            borderRadius={"10px"}
            _hover={{ border: "1px solid #174A8B" }}
            border="1px solid #D9D9DB"
            pos="relative"
          >
            <Checkbox
              size="lg"
              ml={["15px", "30px"]}
              type={"checkbox"}
              colorScheme={"purple"}
              onChange={handleClick2}
              ref={(el) => (userRef.current["tick2"] = el)}
            ></Checkbox>
            <Text
              pos={"absolute"}
              margin={["15px 50px", "20px 97px"]}
              fontSize={["14px", "16px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              lineHeight={"10px"}
              color=" hsl(213, 96%, 18%) "
            >
              Larger Storage
            </Text>
            <Text
              pos={"absolute"}
              margin={["30px 50px", "40px 97px"]}
              fontSize={["12px", "14px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              lineHeight={"15px"}
              color={"#9A9BA0"}
            >
              Extra 1TB of cloud save
            </Text>
            <Text
              pos={"absolute"}
              margin={["20px 240px", "35px 370px"]}
              fontSize={["12px", "13px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              lineHeight={"15px"}
              color={"hsl(213, 96%, 18%)"}
            >
              ${isYearly ? "20/yr" : "2/mo"}
            </Text>
          </Box>
        </FormControl>

        {/* Customizable Profile*/}
        <FormControl mr={"10px"}>
          <Box
            id="tick3"
            width={["290px", "450px"]}
            height={["60px", "80px"]}
            display="flex"
            mt={["0px", "0px"]}
            borderRadius={"10px"}
            _hover={{ border: "1px solid #174A8B" }}
            border="1px solid #D9D9DB"
            pos="relative"
          >
            <Checkbox
              size="lg"
              ml={["15px", "30px"]}
              type={"checkbox"}
              colorScheme={"purple"}
              onChange={handleClick3}
              ref={(el) => (userRef.current["tick3"] = el)}
            ></Checkbox>
            <Text
              pos={"absolute"}
              margin={["15px 50px", "20px 97px"]}
              fontSize={["14px", "16px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              lineHeight={"10px"}
              color=" hsl(213, 96%, 18%) "
            >
              Customizable Profile
            </Text>
            <Text
              pos={"absolute"}
              margin={["30px 50px", "40px 97px"]}
              fontSize={["12px", "14px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              lineHeight={"15px"}
              color={"#9A9BA0"}
            >
              Custom theme on your profile
            </Text>
            <Text
              pos={"absolute"}
              margin={["20px 240px", "35px 370px"]}
              fontSize={["12px", "13px"]}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              lineHeight={"15px"}
              color={"hsl(213, 96%, 18%)"}
            >
              ${isYearly ? "20/yr" : "2/mo"}
            </Text>
          </Box>
        </FormControl>
      </Flex>

      {/* Submit */}
      <FormControl>
        <Text
          pos={"absolute"}
          mt={["150px", "85px"]}
          mb={["10px", "0px"]}
          fontFamily={"Ubuntu"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"15px"}
          color={"#9A9BA0"}
          onClick={previousPage}
        >
          <Link>Go Back</Link>
        </Text>
        <Button
          width={["100px", "120px"]}
          height={["40px", "50px"]}
          mt={["140px", "70px"]}
          mb={["10px", "0px"]}
          ml={["200px", "325px"]}
          borderRadius={"10px"}
          color={"white"}
          // _hover="none"
          fontFamily={"Ubuntu"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"36px"}
          bgColor={"#174A8B"}
          onClick={nextPage}
        >
          Next Step
        </Button>
      </FormControl>
    </Box>
  );
};

export const Summarycheck = ({
  userData,
  nextPage,
  previousPage,
  isYearly,
}) => {
  let planprice = "";
  userData.plan == "Pro"
    ? isYearly
      ? (planprice = 150)
      : (planprice = 15)
    : userData.plan == "Advanced"
    ? isYearly
      ? (planprice = 120)
      : (planprice = 12)
    : isYearly
    ? (planprice = 90)
    : (planprice = 9);

  //number of selected addons
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  userData.tick1 == true ? (p1 = 1) : 0;
  userData.tick2 == true ? (p2 = 1) : 0;
  userData.tick3 == true ? (p3 = 1) : 0;
  const addonSelected = p1 + p2 + p3;

  let summaryheight = "";
  addonSelected == 2
    ? (summaryheight = "190px")
    : addonSelected == 3
    ? (summaryheight = ["210px", "250px"])
    : (summaryheight = "150px");

  console.log(addonSelected);
  const addonprice = {
    online: userData.tick1 === true ? (isYearly ? 10 : 1) : 0,
    storage: userData.tick2 === true ? (isYearly ? 20 : 2) : 0,
    profile: userData.tick3 === true ? (isYearly ? 20 : 2) : 0,
  };
  const total =
    planprice + addonprice.online + addonprice.storage + addonprice.profile;
  console.log(total);

  return (
    <Box>
      <Flex
        w={["290px", "450px"]}
        flexDirection={"column"}
        position={"relative"}
      >
        {/* Online Service*/}
        <FormControl mr={"10px"}>
          <Box
            width={["290px", "450px"]}
            height={summaryheight}
            display="grid"
            mt={"40px"}
            borderRadius={"10px"}
            bgColor={"#F8F9FE"}
            type={"submit"}
            pos="relative"
          >
            <Box pos={"relative"}>
              <Text
                pos={"relative"}
                margin={["20px 0px 0px 20px", "20px 0px 0px 25px"]}
                fontSize={["15px", "18px"]}
                w="200px"
                fontFamily={"Ubuntu"}
                fontWeight={"700"}
                lineHeight={"10px"}
                color=" hsl(213, 96%, 18%) "
              >
                {userData.plan} ({userData.duration})
              </Text>
              <Text
                pos={"relative"}
                margin={["10px 0px 0px 20px", "20px 0px 0px 25px"]}
                fontSize={"15px"}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                lineHeight={"15px"}
                color={"#6153C4"}
                onClick={previousPage}
              >
                <Link>Change</Link>
              </Text>
              <Text
                pos={"relative"}
                margin={["-25px 0px 0px 227px", "-25px 0px 0px 370px"]}
                fontSize={["15px", "17px"]}
                fontFamily={"Ubuntu"}
                fontWeight={"700"}
                lineHeight={"15px"}
                color={"hsl(213, 96%, 18%)"}
              >
                ${planprice}/{isYearly ? "yr" : "mo"}
              </Text>
            </Box>

            {/* line */}
            <Box
              pos={"relative"}
              bg={"hsl(213, 96%, 18%)"}
              h="0.1px"
              opacity={"0.09"}
              w={["260px", "420px"]}
              m={"10px 0px 0px 15px"}
            ></Box>

            {/* Add ons */}
            <Box
              display={userData.tick1 == true ? "yes" : "none"}
              pos={"relative"}
            >
              <Text
                pos={"relative"}
                margin={["0px 0px 0px 20px", "15px 0px 0px 25px"]}
                fontSize="15px"
                fontFamily={"Ubuntu"}
                w="100px"
                fontWeight={"500"}
                lineHeight={"15px"}
                color={"#9A9BA0"}
              >
                Online service
              </Text>
              <Text
                pos={"relative"}
                margin={["0px 0px 0px 100px", "15px 0px 0px 240px"]}
                fontSize={["15px", "16px"]}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                lineHeight={"15px"}
                color={"hsl(213, 96%, 18%)"}
              >
                +${isYearly ? "10/yr" : "1/mo"}
              </Text>
            </Box>

            <Box
              pos={"relative"}
              display={userData.tick2 == true ? "yes" : "none"}
            >
              <Text
                pos={"relative"}
                margin={["0px 0px 0px 20px", "15px 0px 0px 25px"]}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                fontSize={"15px"}
                lineHeight={"15px"}
                color={"#9A9BA0"}
              >
                Larger Storage
              </Text>
              <Text
                pos={"relative"}
                margin={["0px 0px 0px 100px", "15px 0px 0px 240px"]}
                fontSize={["15px", "16px"]}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                lineHeight={"15px"}
                color={"hsl(213, 96%, 18%)"}
              >
                +${isYearly ? "20/yr" : "2/mo"}
              </Text>
            </Box>

            <Box
              display={userData.tick3 == true ? "yes" : "none"}
              pos={"relative"}
            >
              <Text
                pos={"relative"}
                margin={["0px 0px 0px 20px", "15px 0px 15px 25px"]}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                fontSize={"15px"}
                lineHeight={"15px"}
                color={"#9A9BA0"}
              >
                Customizable Profile
              </Text>
              <Text
                pos={"relative"}
                margin={["0px 0px 0px 60px", "15px 0px 15px 200px"]}
                fontSize={["15px", "16px"]}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                lineHeight={"15px"}
                color={"hsl(213, 96%, 18%)"}
              >
                +${isYearly ? "20/yr" : "2/mo"}
              </Text>
            </Box>
          </Box>

          {/* total */}

          <Text
            pos={"absolute"}
            margin={["30px 0px 0px 20px", "30px 0px 0px 25px"]}
            fontSize={["15px", "16px"]}
            fontFamily={"Ubuntu"}
            fontWeight={"500"}
            lineHeight={"15px"}
            color={"#9A9BA0"}
          >
            Total (per month)
          </Text>
          <Text
            pos={"absolute"}
            margin={["30px 0px 0px 210px", "30px 0px 0px 360px"]}
            fontSize={["17px", "20px"]}
            fontFamily={"Ubuntu"}
            fontWeight={"700"}
            lineHeight={"15px"}
            color={"#6153C4"}
          >
            ${total}/{isYearly ? "yr" : "mo"}
          </Text>
        </FormControl>
      </Flex>

      {/* Submit */}
      <FormControl>
        <Text
          pos={"absolute"}
          mt={[
            addonSelected == 2
              ? "153px"
              : addonSelected == 3
              ? "133px"
              : "195px",
            addonSelected == 2
              ? "175px"
              : addonSelected == 3
              ? "115px"
              : "215px",
          ]}
          fontFamily={"Ubuntu"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"15px"}
          color={"#9A9BA0"}
          onClick={previousPage}
        >
          <Link>Go Back</Link>
        </Text>
        <Button
          width={["100px", "120px"]}
          height={["40px", "50px"]}
          mt={[
            addonSelected == 2
              ? "143px"
              : addonSelected == 3
              ? "123px"
              : "185px",

            addonSelected == 2
              ? "163px"
              : addonSelected == 3
              ? "100px"
              : "200px",
          ]}
          mb={["10px", "0px"]}
          ml={["200px", "325px"]}
          borderRadius={"10px"}
          color={"white"}
          // _hover="#938CFE"
          fontFamily={"Ubuntu"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"36px"}
          // bgColor={formValid ? "#440376" : "rgba(68, 3, 118, 0.6)"}
          bgColor={"#483EFF"}
          onClick={nextPage}
        >
          Confirm
        </Button>
      </FormControl>
    </Box>
  );
};
