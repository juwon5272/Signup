import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin: 20px;
`;

const StyledForm = styled.form`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 8px;
`;

const CustomButton = styled.button`
  margin-right: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

function Write() {
  return (
    <FormContainer>
      <StyledForm>
        <FormGroup>
          <FormLabel>제목</FormLabel>
          <FormInput type="text" placeholder="제목을 입력하세요" />
        </FormGroup>
        <FormGroup>
          <FormLabel>내용</FormLabel>
          <FormTextarea placeholder="내용을 입력하세요" />
        </FormGroup>
      </StyledForm>
      <CustomButton variant="info">작성완료</CustomButton>
      <CustomButton variant="secondary">취소</CustomButton>
    </FormContainer>
  );
}

export default Write;
