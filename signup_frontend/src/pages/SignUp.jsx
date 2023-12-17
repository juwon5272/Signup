import React, { useState, useRef } from "react";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";

function SignUp() {
  const [tokenNumer, setTokenNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [certificationNumber, setCertificationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [checkPasswordError, setCheckPasswordError] = useState(false);

  const randomNumber = () => {
    const number = Math.random();
    setTokenNumber(String(Math.floor(number * 1000000)).padStart(6, "0"));
    setCertificationNumber(tokenNumer);
  };
  const isNameFilled = (event) => {
    setName(event.target.value);
    setNameError(false);
  };
  const isEmailFilled = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };
  const isPasswordFilled = (event) => {
    setPassword(event.target.value);
    setPasswordError(false);
  };
  //   const isSamePassword = (event) => {
  //     setCheckPassword(event.target.value);
  //     if (password === checkPassword) {
  //       setPasswordError(false);
  //     }
  //   };
  const handleSubmit = () => {
    if (name === "") {
      setNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
    if (password !== checkPassword) {
      setCheckPasswordError(true);
    }
  };

  const changeFocus1 = () => {
    const phone1 = document.getElementById("phonenumber1").value;
    if (phone1.length === 3) {
      document.getElementById("phonenumber2").focus();
    }
  };

  const changeFocus2 = () => {
    const phone2 = document.getElementById("phonenumber2").value;
    if (phone2.length === 4) {
      document.getElementById("phonenumber3").focus();
    }
  };
  return (
    <>
      <GlobalStyle />
      <Background>
        <SignUpBox>
          <h2>회원가입</h2>
          <Input
            value={name}
            onChange={isNameFilled}
            placeholder="이름을 입력해주세요"
          />
          {nameError && (
            <ErrorMessage>이름이 입력되지 않았습니다.</ErrorMessage>
          )}
          <EmailBox>
            <Input
              value={email}
              onChange={isEmailFilled}
              placeholder="이메일을 입력해주세요"
              width="73%"
              margin="20px 2% 5px 0"
            />

            <Button onClick={randomNumber}>인증번호 전송</Button>
            {emailError && (
              <ErrorMessage>이메일이 입력되지 않았습니다.</ErrorMessage>
            )}
            <Input
              placeholder="인증번호 입력"
              width="73%"
              margin="20px 2% 5px 0"
              value={certificationNumber}
            />
            <Button>인증 완료</Button>
          </EmailBox>
          <Input
            value={password}
            onChange={isPasswordFilled}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 입력되지 않았습니다.</ErrorMessage>
          )}
          <Input type="password" placeholder="비밀번호를 다시 입력해주세요" />
          {checkPasswordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
          <PhonenumberInputBox>
            <Input
              id="phonenumber1"
              onInput={changeFocus1}
              placeholder="010"
              width="30%"
              margin="0px"
            />

            <P>-</P>
            <Input
              id="phonenumber2"
              onInput={changeFocus2}
              width="30%"
              margin="0px"
            />
            <P>-</P>
            <Input id="phonenumber3" width="30%" margin="0px" />
          </PhonenumberInputBox>
          <Button onClick={handleSubmit} width="70%">
            {" "}
            가입하기{" "}
          </Button>
        </SignUpBox>
      </Background>
    </>
  );
}

const Background = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(153, 102, 204, 0.2);
`;

const SignUpBox = styled.div`
  width: 500px;
  height: 80%;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(153, 102, 204, 0.6);
`;
const EmailBox = styled.div`
  width: 70%;
`;
const Input = styled.input`
  width: ${(props) => props.width || "70%"};
  height: 40px;
  margin: ${(props) => props.margin || "20px 0 5px 0"};
  padding: 0 0 0 8px;
  border: 1px solid rgba(210, 210, 210, 1);
  border-radius: 5px;
  font-color: rgba(121, 121, 121, 1);
`;

const PhonenumberInputBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  margin-bottom: 40px;
`;

const ErrorMessage = styled.div`
  width: 70%;
  color: red;
  font-size: 10px;
`;

const Button = styled.button`
  width: ${(props) => props.width || "25%"};
  height: 40px;
  border: 1px solid rgba(210, 210, 210, 1);
  border-radius: 5px;
  line-height: 40px;
  color: rgba(121, 121, 121, 1);
  text-align: center;
`;

const P = styled.p`
  line-height: 40px;
`;

export default SignUp;
