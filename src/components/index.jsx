import React from "react";
import "@fontsource/ubuntu";

import {
  Box,
  Button,
  Checkbox,
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

export const Header = ({ text, title }) => (
  <VStack position={"relative"} alignItems="flex-start" right={"0px"}>
    <Text
      width={["none", "none", "350px", "500px"]}
      fontFamily={"Ubuntu"}
      fontWeight={"700"}
      fontSize={"32px"}
      lineHeight={"43.2px"}
      color={"#153460"}
    >
      {title}
    </Text>

    <Text
      width={["none", "none", "450px", "450px"]}
      fontFamily={"Ubuntu"}
      fontWeight={"500"}
      fontSize={"16.5px"}
      lineHeight={"25px"}
      color={"#9A9BA0"}
    >
      {text}
    </Text>
  </VStack>
);

export const Inputs = ({
  userRef,

  nextPage,
  inp1,
  inp2,
  inp3,
  button,
  inp1P,
  inp2P,
  inp3P,
}) => (
  <Flex w="450px" flexDirection={"column"} position={"absolute"}>
    {/* Input 1*/}
    <FormControl margin={"30px 0px"}>
      <Text
        margin={"13px 0px"}
        width={["none", "none", "450px", "450px"]}
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
        color=" hsl(213, 96%, 18%) "
        fontFamily={"Ubuntu"}
        gap={"8px"}
        width={["327px", "445px"]}
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
        margin={"13px 0px"}
        width={["none", "none", "450px", "450px"]}
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
        color=" hsl(213, 96%, 18%) "
        fontFamily={"Ubuntu"}
        gap={"8px"}
        width={["327px", "445px"]}
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
        margin={"13px 0px"}
        width={["none", "none", "450px", "450px"]}
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
        gap={"8px"}
        width={["327px", "445px"]}
        height={"45px"}
        type={"phone"}
        ref={(el) => (userRef.current["phone"] = el)}
        required
        placeholder={inp3P}
      />
    </FormControl>

    {/* Submit */}
    <FormControl w="450px">
      <Button
        width={"120px"}
        height={"50px"}
        margin={"100px 0px 0px 325px"}
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

export const PlanInputs = ({ nextPage, previousPage, userRef }) => {
  const handleClick1 = () => {
    userRef.current["plan"].value = "Arcade";

    document.getElementById(arcade).style.border = "1px solid #AA00FF";
  };
  const handleClick2 = () => {
    userRef.current["plan"].value = "Advanced";
  };
  const handleClick3 = () => {
    userRef.current["plan"].value = "Pro";
  };
  return (
    <Box>
      <Flex w="450px" position={"relative"}>
        {/* Arcade*/}
        <FormControl mr={"10px"}>
          <Box
            id="arcade"
            width={"140px"}
            height={"160px"}
            display="flex"
            margin={"40px 0px"}
            borderRadius={"10px"}
            color={"blue"}
            onClick={handleClick1}
            // _hover="none"
            fontFamily={"Ubuntu"}
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"36px"}
            _active={{ border: "1px solid red" }}
            border="1px solid #D9D9DB"
            bgColor={"white"}
            ref={(el) => (userRef.current["plan"] = el)}
            pos="relative"
          >
            <Image pos={"absolute"} src={ArcadeImg} mt="20px" ml="15px" />
            <Text
              pos={"absolute"}
              margin={"105px 15px"}
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"10px"}
              color=" hsl(213, 96%, 18%) "
            >
              Arcade
            </Text>
            <Text
              value="me"
              pos={"absolute"}
              margin={"125px 15px"}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              fontSize={"16px"}
              lineHeight={"15px"}
              color={"#9A9BA0"}
            >
              $9/mo
            </Text>
          </Box>
        </FormControl>

        {/* Advanced*/}
        <FormControl mr={"10px"}>
          <Box
            width={"140px"}
            height={"160px"}
            display="flex"
            margin={"40px 0px"}
            borderRadius={"10px"}
            color={"blue"}
            // _hover="none"
            fontFamily={"Ubuntu"}
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"36px"}
            border="1px solid #D9D9DB"
            onClick={handleClick2}
            bgColor={"white"}
            pos="relative"
          >
            <Image pos={"absolute"} src={AdvancedImg} mt="20px" ml="15px" />
            <Text
              pos={"absolute"}
              margin={"105px 15px"}
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
              margin={"125px 15px"}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              fontSize={"16px"}
              lineHeight={"15px"}
              color={"#9A9BA0"}
            >
              $12/mo
            </Text>
          </Box>
        </FormControl>

        {/* Pro*/}
        <FormControl>
          <Box
            width={"140px"}
            height={"160px"}
            display="flex"
            margin={"40px 0px"}
            borderRadius={"10px"}
            color={"blue"}
            // _hover="none"
            fontFamily={"Ubuntu"}
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"36px"}
            border="1px solid #D9D9DB"
            onClick={handleClick3}
            bgColor={"white"}
            type={"submit"}
            pos="relative"
          >
            <Image pos={"absolute"} src={ProImg} mt="20px" ml="15px" />
            <Text
              pos={"absolute"}
              margin={"105px 15px"}
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
              margin={"125px 15px"}
              fontFamily={"Ubuntu"}
              fontWeight={"500"}
              fontSize={"16px"}
              lineHeight={"15px"}
              color={"#9A9BA0"}
            >
              $15/mo
            </Text>
          </Box>
        </FormControl>
      </Flex>

      {/* Monthly or yearly*/}
      <FormControl>
        <Box
          width={"450px"}
          height={"60px"}
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
          <Box h="40px">
            <Text
              ml="15px"
              pos={"absolute"}
              my="15px"
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              fontSize={"16px"}
              textAlign="center"
              lineHeight={"10px"}
              color=" hsl(213, 96%, 18%) "
            >
              Monthly
            </Text>
          </Box>

          <Box h="40px">
            <Switch
              size={"lg"}
              colorScheme="red"
              ref={(el) => (userRef.current["duration"] = el)}
            />
          </Box>

          <Box h="40px">
            <Text
              ml={"-73px"}
              pos={"absolute"}
              my="15px"
              fontFamily={"Ubuntu"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"10px"}
              color={"#9A9BA0"}
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
          margin={"70px 0px"}
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
          width={"120px"}
          height={"50px"}
          margin={"90px 0px 0px 325px"}
          borderRadius={"10px"}
          color={"white"}
          // _hover="none"sssss
          fontFamily={"Ubuntu"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"36px"}
          // bgColor={formValid ? "#440376" : "rgba(68, 3, 118, 0.6)"}
          bgColor={"#174A8B"}
          // type={"submit"}
          onClick={nextPage}
        >
          Next Step
        </Button>
      </FormControl>
    </Box>
  );
};

export const AddonInputs = ({ userRef, nextPage, previousPage }) => (
  <Box>
    <Flex w="450px" flexDirection={"column"} position={"relative"}>
      {/* Online Service*/}
      <FormControl mr={"10px"}>
        <Box
          width={"450px"}
          height={"80px"}
          display="flex"
          mt={"40px"}
          borderRadius={"10px"}
          color={"blue"}
          fontFamily={"Ubuntu"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"36px"}
          border="1px solid #D9D9DB"
          // onClick={{ border: "1px solid red" }}
          bgColor={"white"}
          pos="relative"
        >
          <Checkbox
            size={"lg"}
            ml="30px"
            type="checkbox"
            required
            ref={(el) => (userRef.current["tick1"] = el)}
          ></Checkbox>

          <Text
            pos={"absolute"}
            margin={"20px 97px"}
            fontFamily={"Ubuntu"}
            fontWeight={"700"}
            fontSize={"16px"}
            lineHeight={"10px"}
            color=" hsl(213, 96%, 18%) "
          >
            Online Services
          </Text>
          <Text
            pos={"absolute"}
            margin={"40px 97px"}
            fontFamily={"Ubuntu"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"15px"}
            color={"#9A9BA0"}
          >
            Access to multiplayer games
          </Text>
          <Text
            pos={"absolute"}
            margin={"35px 370px"}
            fontFamily={"Ubuntu"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"15px"}
            color={"hsl(213, 96%, 18%)"}
          >
            $1/mo
          </Text>
        </Box>
      </FormControl>

      {/* Larger Storage*/}
      <FormControl mr={"10px"}>
        <Box
          width={"450px"}
          height={"80px"}
          display="flex"
          margin={"20px 0px"}
          borderRadius={"10px"}
          color={"blue"}
          // _hover="none"
          fontFamily={"Ubuntu"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"36px"}
          border="1px solid #D9D9DB"
          // onClick={{ border: "1px solid red" }}
          bgColor={"white"}
          pos="relative"
        >
          <Checkbox
            size={"lg"}
            ml="30px"
            type={"checkbox"}
            ref={(el) => (userRef.current["tick2"] = el)}
          ></Checkbox>
          <Text
            pos={"absolute"}
            margin={"20px 97px"}
            fontFamily={"Ubuntu"}
            fontWeight={"700"}
            fontSize={"16px"}
            lineHeight={"10px"}
            color=" hsl(213, 96%, 18%) "
          >
            Larger Storage
          </Text>
          <Text
            pos={"absolute"}
            margin={"40px 97px"}
            fontFamily={"Ubuntu"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"15px"}
            color={"#9A9BA0"}
          >
            Extra 1TB of cloud save
          </Text>
          <Text
            pos={"absolute"}
            margin={"35px 370px"}
            fontFamily={"Ubuntu"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"15px"}
            color={"hsl(213, 96%, 18%)"}
          >
            $2/mo
          </Text>
        </Box>
      </FormControl>

      {/* Customizable Profile*/}
      <FormControl mr={"10px"}>
        <Box
          width={"450px"}
          height={"80px"}
          display="flex"
          margin={"0px 0px"}
          borderRadius={"10px"}
          color={"blue"}
          // _hover="none"
          fontFamily={"Ubuntu"}
          fontStyle={"normal"}
          fontWeight={"500"}
          fontSize={"16px"}
          lineHeight={"36px"}
          border="1px solid #D9D9DB"
          // onClick={{ border: "1px solid red" }}
          bgColor={"white"}
          pos="relative"
        >
          <Checkbox
            size={"lg"}
            ml="30px"
            type={"checkbox"}
            ref={(el) => (userRef.current["tick3"] = el)}
          ></Checkbox>
          <Text
            pos={"absolute"}
            margin={"20px 97px"}
            fontFamily={"Ubuntu"}
            fontWeight={"700"}
            fontSize={"16px"}
            lineHeight={"10px"}
            color=" hsl(213, 96%, 18%) "
          >
            Customizable Profile
          </Text>
          <Text
            pos={"absolute"}
            margin={"40px 97px"}
            fontFamily={"Ubuntu"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"15px"}
            color={"#9A9BA0"}
          >
            Custom theme on your profile
          </Text>
          <Text
            pos={"absolute"}
            margin={"35px 370px"}
            fontFamily={"Ubuntu"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"15px"}
            color={"hsl(213, 96%, 18%)"}
          >
            $2/mo
          </Text>
        </Box>
      </FormControl>
    </Flex>

    {/* Submit */}
    <FormControl>
      <Text
        pos={"absolute"}
        margin={"100px 0px"}
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
        width={"120px"}
        height={"50px"}
        margin={"80px 0px 0px 325px"}
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
        onClick={nextPage}
      >
        Next Step
      </Button>
    </FormControl>
  </Box>
);

export const Summarycheck = ({ userData, nextPage, previousPage, userRef }) => {
  let planprice = "";
  userData.plan == "Arcade"
    ? (planprice = 9)
    : userData.plan == "Advanced"
    ? (planprice = 12)
    : (planprice = 15);
  const addonprice = {
    online: userData.tick1 === true ? 1 : 0,
    storage: userData.tick2 === true ? 2 : 0,
    profile: userData.tick3 === true ? 2 : 0,
  };
  const total =
    planprice + addonprice.online + addonprice.storage + addonprice.profile;
  console.log(total);

  return (
    <Box>
      <Flex w="450px" flexDirection={"column"} position={"relative"}>
        {/* Online Service*/}
        <FormControl mr={"10px"}>
          <Box
            width={"450px"}
            height={total - planprice < 3 ? "190px" : "250px"}
            display="grid"
            mt={"40px"}
            borderRadius={"10px"}
            color={"blue"}
            // _hover="none"
            fontFamily={"Ubuntu"}
            fontStyle={"normal"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"36px"}
            bgColor={"#F8F9FE"}
            type={"submit"}
            pos="relative"
          >
            <Box pos={"relative"}>
              <Text
                pos={"relative"}
                margin={"20px 0px 0px 25px"}
                w="200px"
                fontFamily={"Ubuntu"}
                fontWeight={"700"}
                fontSize={"18px"}
                lineHeight={"10px"}
                color=" hsl(213, 96%, 18%) "
              >
                {userData.plan} ({userData.duration})
              </Text>
              <Text
                pos={"relative"}
                margin={"20px 0px 0px 25px"}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                fontSize={"15px"}
                lineHeight={"15px"}
                color={"#6153C4"}
                onClick={previousPage}
              >
                <Link>Change</Link>
              </Text>
              <Text
                pos={"relative"}
                margin={"-25px 0px 0px 365px"}
                fontFamily={"Ubuntu"}
                fontWeight={"700"}
                fontSize={"17px"}
                lineHeight={"15px"}
                color={"hsl(213, 96%, 18%)"}
              >
                ${planprice}/mo
              </Text>
            </Box>

            {/* line */}
            <Box
              pos={"relative"}
              bg={"hsl(213, 96%, 18%)"}
              h="0.1px"
              opacity={"0.09"}
              w="420px"
              m={"10px 0px 0px 15px"}
            ></Box>

            {/* Add ons */}
            <Box
              display={userData.tick1 == true ? "yes" : "none"}
              pos={"relative"}
            >
              <Text
                pos={"relative"}
                margin={"15px 0px 0px 25px"}
                fontFamily={"Ubuntu"}
                w="100px"
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"15px"}
                color={"#9A9BA0"}
              >
                Online service
              </Text>
              <Text
                pos={"relative"}
                margin={"15px  0px 0px 240px"}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"15px"}
                color={"hsl(213, 96%, 18%)"}
              >
                +$1/mo
              </Text>
            </Box>

            <Box
              pos={"relative"}
              display={userData.tick2 == true ? "yes" : "none"}
            >
              <Text
                pos={"relative"}
                margin={"15px 0px 0px 25px"}
                fontFamily={"Ubuntu"}
                w="100px"
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"15px"}
                color={"#9A9BA0"}
              >
                Larger Storage
              </Text>
              <Text
                pos={"relative"}
                margin={"15px 0px 0px 240px"}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"15px"}
                color={"hsl(213, 96%, 18%)"}
              >
                +$2/mo
              </Text>
            </Box>

            <Box
              display={userData.tick3 == true ? "yes" : "none"}
              pos={"relative"}
            >
              <Text
                pos={"relative"}
                margin={"15px 0px 15px 25px"}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"15px"}
                color={"#9A9BA0"}
              >
                Customizable Profile
              </Text>
              <Text
                pos={"relative"}
                margin={"15px 0px 15px 205px"}
                fontFamily={"Ubuntu"}
                fontWeight={"500"}
                fontSize={"16px"}
                lineHeight={"15px"}
                color={"hsl(213, 96%, 18%)"}
              >
                +$2/mo
              </Text>
            </Box>
          </Box>

          {/* total */}

          <Text
            pos={"absolute"}
            margin={userData.tick3 == true ? "70px 25px" : "30px 0px 0px 25px"}
            fontFamily={"Ubuntu"}
            fontWeight={"500"}
            fontSize={"16px"}
            lineHeight={"15px"}
            color={"#9A9BA0"}
          >
            Total (per month)
          </Text>
          <Text
            pos={"absolute"}
            margin={
              userData.tick3 == true ? "70px 350px" : "30px 0px 0px 350px"
            }
            // margin={"30px 350px"}
            fontFamily={"Ubuntu"}
            fontWeight={"700"}
            fontSize={"20px"}
            lineHeight={"15px"}
            color={"#6153C4"}
          >
            ${total}/mo
          </Text>
        </FormControl>
      </Flex>

      {/* Submit */}
      <FormControl>
        <Text
          pos={"absolute"}
          margin={"180px 0px"}
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
          width={"120px"}
          height={"50px"}
          margin={"160px 0px 0px 325px"}
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
          type={"submit"}
          onClick={nextPage}
        >
          Confirm
        </Button>
      </FormControl>
    </Box>
  );
};
