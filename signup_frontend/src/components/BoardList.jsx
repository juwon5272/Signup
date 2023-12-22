import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const CustomButton = styled.button`
  margin-right: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

function BoardList() {
  return (
    <div>
      <StyledTable>
        <thead>
          <tr>
            <TableHeader>선택</TableHeader>
            <TableHeader>번호</TableHeader>
            <TableHeader>제목</TableHeader>
            <TableHeader>작성자</TableHeader>
            <TableHeader>작성일</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>
              <input type="checkbox" />
            </TableCell>
            <TableCell>1</TableCell>
            <TableCell>게시글1</TableCell>
            <TableCell>artistJay</TableCell>
            <TableCell>2022-03-19</TableCell>
          </tr>
          <tr>
            <TableCell>
              <input type="checkbox" />
            </TableCell>
            <TableCell>2</TableCell>
            <TableCell>게시글2</TableCell>
            <TableCell>artistJay</TableCell>
            <TableCell>2022-03-19</TableCell>
          </tr>
          <tr>
            <TableCell>
              <input type="checkbox" />
            </TableCell>
            <TableCell>3</TableCell>
            <TableCell>게시글2</TableCell>
            <TableCell>artistJay</TableCell>
            <TableCell>2022-03-19</TableCell>
          </tr>
        </tbody>
      </StyledTable>
      <ButtonContainer>
        <CustomButton>글쓰기</CustomButton>
        <CustomButton>수정하기</CustomButton>
        <CustomButton>삭제하기</CustomButton>
      </ButtonContainer>
    </div>
  );
}

export default BoardList;
