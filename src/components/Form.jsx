import { Box, Button, HStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddOn from "./AddOn";
import Personal from "./Info";
import Plan from "./Plan";
import SideBar from "./SideBar";
import Summary from "./Summary";

const Form = () => {
  //hooks
  const navigate = useNavigate();
  const userRef = useRef({});

  //states
  const [page, setPage] = useState(0);
  const [userData, setUserData] = useState({});

  console.log(userData);

  //initial values

  const nextPage = (e) => {
    e.preventDefault();
    setPage(page + 1);
    const values = {
      fullname: userRef.current["fullname"].value,
      email: userRef.current["email"].value,
      phone: userRef.current["phone"].value,
      plan: userRef.current["plan"].value,
      duration:
        userRef.current["duration"].checked === true ? "Yearly" : "Monthly",
      tick1: userRef.current["tick1"].checked,
      tick2: userRef.current["tick2"].checked,
      tick3: userRef.current["tick3"].checked,
    };
    setUserData(values);
  };

  const previousPage = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };
  console.log(page);

  return (
    <Box
      w={"100%"}
      h={"100vh"}
      background={"hsl(217, 100%, 97%)"}
      alignItems="center"
      justifyContent={"center"}
      display={"flex"}
    >
      <HStack
        pos={"relative"}
        bg={"hsl(0, 0%, 100%)"}
        w={["375px", "940px"]}
        h={["600px"]}
        borderRadius="20px"
        as={"form"}
      >
        <SideBar />

        <>
          <Box display={page == 0 ? "yes" : "none"}>
            <Personal nextPage={nextPage} userRef={userRef} />
          </Box>

          <Box display={page == 1 ? "yes" : "none"}>
            <Plan
              nextPage={nextPage}
              previousPage={previousPage}
              userRef={userRef}
            />
          </Box>
          <Box display={page == 2 ? "yes" : "none"}>
            <AddOn
              nextPage={nextPage}
              previousPage={previousPage}
              userRef={userRef}
            />
          </Box>
          <Box display={page == 3 ? "yes" : "none"}>
            <Summary previousPage={previousPage} userData={userData} />
          </Box>
        </>
      </HStack>
    </Box>
  );
};

export default Form;
