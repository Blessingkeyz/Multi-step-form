import React, { useState } from "react";
import { Flex, FormControl, Image, Input, Text } from "@chakra-ui/react";
import Eye from "../../../assets/images/eye.svg";

const InputFields = ({ inputRef }) => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      flexDirection={"column"}
      position={"absolute"}
      padding={"0px"}
      alignItems={"center"}
      width={{
        base: "327px",
        sm: "481px",
      }}
      height={{
        base: "228px",
        sm: "263px",
      }}
      top={{
        base: "72px",
        sm: "99px",
      }}
      left={{
        base: "3px",
        sm: "177px",
      }}
    >
      <Flex
        flex={"none"}
        margin={"-8px 0px"}
        width={{
          base: "327px",
          sm: "481px",
        }}
        height={{
          base: "56px",
          sm: "93px",
        }}
        order={"0"}
        flexGrow={"0"}
      >
        {/* Full Name */}
        <FormControl>
          <Input
            position={"absolute"}
            alignItems={"center"}
            gap={"8px"}
            width={{
              base: "327px",
              sm: "481px",
            }}
            height={"56px"}
            type={"text"}
            ref={(el) => (inputRef.current["fullname"] = el)}
            required
            placeholder={"Full Name"}
          />
        </FormControl>
      </Flex>

      <Flex
        flex={"none"}
        margin={"-8px 0px"}
        width={{
          base: "327px",
          sm: "481px",
        }}
        height={{
          base: "56px",
          sm: "93px",
        }}
        order={"1"}
        flexGrow={"0"}
      >
        {/* Email */}
        <FormControl>
          <Input
            position={"absolute"}
            alignItems={"center"}
            gap={"8px"}
            left={{
              base: "0.91%",
              sm: "0%",
            }}
            right={"0%"}
            top={{
              base: "42px",
              sm: "18%",
            }}
            bottom={{
              base: "63.64%",
              sm: "25.81%",
            }}
            width={{
              base: "327px",
              sm: "481px",
            }}
            height={"56px"}
            type={"email"}
            ref={(el) => (inputRef.current["email"] = el)}
            required
            placeholder={"Email Address"}
          />
        </FormControl>
      </Flex>

      <Flex
        flex={"none"}
        width={{
          base: "327px",
          sm: "481px",
        }}
        height={{
          base: "56px",
          sm: "93px",
        }}
        order={"2"}
        flexGrow={"0"}
      >
        {/* Password */}
        <FormControl>
          <Input
            alignItems={"center"}
            padding={"16px 90px 16px 16px"}
            gap={"20px"}
            position={"absolute"}
            left={{
              base: "3px",
              sm: "0%",
            }}
            right={"0%"}
            top={{
              base: "66px",
              sm: "13.98%",
            }}
            bottom={"25.81%"}
            width={{
              base: "327px",
              sm: "481px",
            }}
            height={"56px"}
            type={show ? "text" : "password"}
            ref={(el) => (inputRef.current["password"] = el)}
            required
            placeholder={"Password"}
          />
          <Image
            src={Eye}
            alt="eye"
            width={{
              base: "17px",
              sm: "28.23px",
            }}
            height={{
              base: "17px",
              sm: "24px",
            }}
            position={"absolute"}
            left={{
              base: "288px",
              sm: "434.77px",
            }}
            top={{
              base: "86px",
              sm: "32px",
            }}
            onClick={() => setShow((prev) => !prev)}
          />
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default InputFields;
