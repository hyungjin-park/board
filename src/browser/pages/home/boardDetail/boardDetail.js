import styled from "styled-components";
import SideBar from "../sidebar";
import BoardDetailContent from "./boardDetailContent";

const BoardDetail = () => {
  return (
    <DetailArea>
      <DetailWrapper>
        <BoardDetailContentWrapper>
          <BoardDetailContent />
        </BoardDetailContentWrapper>
      </DetailWrapper>
    </DetailArea>
  );
};

const DetailArea = styled.div`
  width: 1000px;
  height: 110vh;
  /* background-color: #d2ffd2; */
  display: flex;
  justify-content: center;
  /* margin-top: 2rem; */
  /* padding-bottom: 1.6rem; */
  margin: 40px auto;
`;

const DetailWrapper = styled.div`
  /* width: 1230px; */
  display: flex;
  /* background-color: #d2ffd2; */
  /* background-color: white; */
`;

const BoardDetailContentWrapper = styled.div`
  width: 880px;
  /* background-color: red; */
  background-color: white;
`;
export default BoardDetail;
