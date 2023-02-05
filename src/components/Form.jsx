import { Box, Flex, HStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import AddOn from "./AddOn";
import Personal from "./Info";
import Plan from "./Plan";
import SideBar from "./SideBar";
import SideBarMobile from "./SideBarMobile";
import Summary from "./Summary";
import Thanks from "./Thanks";

const Form = () => {
  //hooks
  const userRef = useRef({});

  //states
  const [page, setPage] = useState(0);
  const [userData, setUserData] = useState({});
  const [isYearly, setIsYearly] = useState(false);
  const [formValid, setFormValid] = useState(false);

  console.log(userData);
  const handleChange = () => {
    setIsYearly((prev) => !prev);
  };

  //initial values

  const nextPage = (e) => {
    e.preventDefault();
    setPage(page + 1);
    const values = {
      fullname: userRef.current["fullname"].value,
      email: userRef.current["email"].value,
      phone: userRef.current["phone"].value,
      plan:
        userRef.current["plan"].value == undefined
          ? "Arcade"
          : userRef.current["plan"].value,
      duration:
        userRef.current["duration"].checked === true ? "Yearly" : "Monthly",
      tick1: userRef.current["tick1"].checked,
      tick2: userRef.current["tick2"].checked,
      tick3: userRef.current["tick3"].checked,
    };
    setUserData(values);
  };

  //useEffect for focus
  useEffect(() => {
    userRef.current["fullname"].focus();
  }, []);
  //useEffect for validation
  useEffect(() => {
    if (!userData.fullname && !userData.email && !userData.phone) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userData.fullname]);
  console.log(formValid + "is true");

  const previousPage = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };
  console.log(page);

  let pageheight = "";
  page == 1
    ? isYearly
      ? (pageheight = "580px")
      : (pageheight = "510px")
    : page == 2
    ? (pageheight = "410px")
    : page == 3
    ? (pageheight = "460px")
    : page == 4
    ? (pageheight = "400px")
    : (pageheight = "440px");

  return (
    <Box
      w={"100%"}
      h={[page == 1 ? "690px" : "600px", "100vh"]}
      background={"hsl(217, 100%, 97%)"}
      alignItems="center"
      justifyContent={["none", "center"]}
      display={"flex"}
      flexDir={["column", "row"]}
    >
      <SideBarMobile page={page} />
      <Flex
        pos={"relative"}
        bg={"hsl(0, 0%, 100%)"}
        w={["320px", "940px"]}
        mt={["-74px", "0px"]}
        h={[pageheight, "600px"]}
        flexDir={["column", "row"]}
        borderRadius="20px"
        as={"form"}
      >
        <SideBar page={page} setPage={setPage} />

        <>
          <Box display={page == 0 ? "yes" : "none"}>
            <Personal
              nextPage={nextPage}
              formValid={formValid}
              userRef={userRef}
            />
          </Box>

          <Box display={page == 1 ? "yes" : "none"}>
            <Plan
              nextPage={nextPage}
              previousPage={previousPage}
              userRef={userRef}
              userData={userData}
              isYearly={isYearly}
              handleChange={handleChange}
            />
          </Box>
          <Box display={page == 2 ? "yes" : "none"}>
            <AddOn
              nextPage={nextPage}
              previousPage={previousPage}
              userRef={userRef}
              userData={userData}
              isYearly={isYearly}
            />
          </Box>
          <Box display={page == 3 ? "yes" : "none"}>
            <Summary
              nextPage={nextPage}
              previousPage={previousPage}
              userData={userData}
              isYearly={isYearly}
            />
          </Box>
          <Box display={page == 4 ? "yes" : "none"}>
            <Thanks />
          </Box>
        </>
      </Flex>
    </Box>
  );
};

export default Form;
