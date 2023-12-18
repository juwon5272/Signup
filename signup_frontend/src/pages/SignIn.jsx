import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import userIcon from "../images/userIcon.png";
import passwordIcon from "../images/passwordIcon.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <GlobalStyle />
      <Background>
        <SignUpBox>
          <h2>로그인</h2>
          <Input
            backgroundImage={userIcon}
            placeholder="이메일을 입력해주세요"
          />
          <Input
            backgroundImage={passwordIcon}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <Button>로그인</Button>
          <input type="checkbox" />
          <p>아이디 기억하기</p>
          <Or>
            <Hr />
            <p>또는</p>
            <Hr />
          </Or>
          <Button>카카오 로그인</Button>
          <Button>네이버 로그인</Button>
          <p>회원가입</p>
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
const Input = styled.input`
  width: ${(props) => props.width || "70%"};
  height: 40px;
  margin: ${(props) => props.margin || "10px 0 10px 0"};
  padding: 0 0 0 32px;
  border: 1px solid rgba(210, 210, 210, 1);
  border-radius: 5px;
  font-color: rgba(121, 121, 121, 1);
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: 10px center;
`;

const Button = styled.button`
  width: ${(props) => props.width || "70%"};
  height: 40px;
  margin: ${(props) => props.margin || "10px 0 10px 0"};
  border: 1px solid rgba(210, 210, 210, 1);
  border-radius: 5px;
  line-height: 40px;
  color: rgba(121, 121, 121, 1);
  text-align: center;
`;

const Or = styled.div`
  width: 70%;
  margin: 20px 0;
  display: flex;
  white-space: no-wrap;
  align-items: center;
  justify-content: space-between;
`;

const Hr = styled.hr`
  width: 42%;
  height: 1px;
`;

export default SignIn;
