import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";

function SignUp() {
  const [tokenNumer, setTokenNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function randomNumber() {
    const number = Math.random();
    setTokenNumber(String(Math.floor(number * 1000000)).padStart(6, "0"));
    console.log(tokenNumer);
  }
  function isNameFilled(event) {
    setName(event.target.value);
    setNameError(false);
  }
  function isEmailFilled(event) {
    setEmail(event.target.value);
    setEmailError(false);
  }
  function isPasswordFilled(event) {
    setPassword(event.target.value);
    setPasswordError(false);
  }
  function handleSubmit() {
    if (name === "") {
      setNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }
  }

  function moveFocus() {}
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
              width="60%"
            />

            <Button onClick={randomNumber}>인증번호 전송</Button>
            {emailError && (
              <ErrorMessage>이메일이 입력되지 않았습니다.</ErrorMessage>
            )}
            <Input placeholder="인증번호 입력" />
            {tokenNumer}
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
          <PhonenumberInputBox>
            <Input id="phonenumber1" width="20%" />
            <p>-</p>
            <Input id="phonenumber2" width="20%" />
            <p>-</p>
            <Input id="phonenumber3" width="20%" />
          </PhonenumberInputBox>
          <Button onClick={handleSubmit}> 가입하기 </Button>
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
  background-color: rgba(153, 102, 204, 0.2);
`;

const SignUpBox = styled.div`
  width: 540px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(153, 102, 204, 0.6);
`;
const EmailBox = styled.div`
  width: 80%;
`;
const Input = styled.input`
  width: ${(props) => props.width || "80%"};
  height: 36px;
  margin: 20px 0 5px 0;
  padding 0px;
  border: 1px solid rgba(210, 210, 210, 1);
  border-radius: 5px;
  font-color: rgba(121, 121, 121, 1);
`;

const PhonenumberInputBox = styled.div`
  display: flex;
`;

const ErrorMessage = styled.div`
  width: 80%;
  color: red;
  font-size: 10px;
`;

const Button = styled.button`
  width: ${(props) => props.width || "120px"};
  height: 40px;
  border: 1px solid rgba(210, 210, 210, 1);
  border-radius: 5px;
  line-height: 40px;
  text-align: center;
`;
export default SignUp;
