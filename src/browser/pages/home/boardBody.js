import styled from "styled-components";
import BoardContentBlock from "./boardContentBlock/boardContentBlock";
import SideBar from "./sidebar";

const BoardBody = () => {
  return (
    <BoardBodyArea>
      <BoardBodyWrapper>
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
        <BoardContentBlockWrapper>
          <BoardContentBlock />
        </BoardContentBlockWrapper>
      </BoardBodyWrapper>
    </BoardBodyArea>
  );
};

const BoardBodyArea = styled.div`
  width: 100%;
  height: 180vh;
  background-color: #d2ffd2;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const BoardBodyWrapper = styled.div`
  width: 1230px;
  display: flex;
  background-color: #d2ffd2;
  /* background-color: white; */
`;

const SideBarWrapper = styled.div`
  width: 200px;
  /* background-color: red; */
  background-color: #d2ffd2;
  margin-right: 40px;
`;

const BoardContentBlockWrapper = styled.div`
  width: 990px;
  /* background-color: red; */
  background-color: white;
`;
export default BoardBody;
