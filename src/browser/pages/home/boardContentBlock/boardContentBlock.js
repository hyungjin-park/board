import { useState } from "react";
import styled from "styled-components";

const BoardContentBlock = () => {
  const [changeColor, setChangeColor] = useState("");

  const onClick = (e) => {
    setChangeColor(e.target.title);
  };
  return (
    <BoardContentBlockArea>
      <BoardContentBlockWrapper>
        <BoardTitle>게시판 이름</BoardTitle>
        <BoardSearchFilter>
          <BoardSelectFilter>
            <BoardSelectFilterList>
              <BoardSelectFilterListButton
                onClick={onClick}
                value={changeColor}
                title="최신순"
              >
                최신순
              </BoardSelectFilterListButton>
            </BoardSelectFilterList>
            <BoardSelectFilterList>
              <BoardSelectFilterListButton
                onClick={onClick}
                value={changeColor}
                title="조회순"
              >
                조회순
              </BoardSelectFilterListButton>
            </BoardSelectFilterList>
          </BoardSelectFilter>

          <BoardSearchForm onSubmit={""}>
            <BoardSearchWrapper>
              <BoardSearchInputWrapper>
                <BoardSearchItemInput placeholder="질문을 검색해보세요!" />
              </BoardSearchInputWrapper>
              <BoardSearchButton>검색</BoardSearchButton>
            </BoardSearchWrapper>
          </BoardSearchForm>
        </BoardSearchFilter>
      </BoardContentBlockWrapper>
    </BoardContentBlockArea>
  );
};

const BoardContentBlockArea = styled.div`
  padding: 1em;
`;

const BoardContentBlockWrapper = styled.div``;

const BoardTitle = styled.h5`
  font-size: 20px;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #dddeee;
  margin-left: 5px;
`;

const BoardSearchFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #dddeee;
`;

const BoardSelectFilter = styled.ul`
  display: flex;
`;

const BoardSelectFilterList = styled.li``;

const BoardSelectFilterListButton = styled.button`
  border: unset;
  background-color: unset;
  font-size: 16px;
  color: ${({ value, title }) => (value === title ? "yellowgreen" : "black")};
`;
const BoardSearchForm = styled.form``;

const BoardSearchWrapper = styled.div`
  display: flex;
`;

const BoardSearchInputWrapper = styled.div`
  background-color: #fff;
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
`;

const BoardSearchItemInput = styled.input`
  width: 100%;
  border: 0;
  background: none;
  font-size: 14px;
  :focus {
    outline: none;
  }
`;

const BoardSearchButton = styled.button`
  padding: 0.2rem 1.3rem;
  /* border-color: #d2ffd2; */

  border: none;
  background-color: #d2ffd2;
`;
export default BoardContentBlock;
