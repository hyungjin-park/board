import styled from "styled-components";
import moment from "moment";
import useCustomNavi from "../../../../hooks/useCustomNavi";

const BoardList = ({ item, position }) => {
  const { pathName, navigate } = useCustomNavi();

  return (
    <ListArea posiiton={position}>
      <ListWrppaer>
        <BoardContainer>
          <ListLike>{item.like}</ListLike>
          <ListTitle
            pathName={pathName}
            path="/board/detail"
            onClick={() => navigate(`/board/detail/${item.id}`)}
          >
            {item.title}
          </ListTitle>
          <ListViewCount>{item.viewCount}</ListViewCount>
          <ListDate>{moment(item.createdDate).format("YYYY-MM-DD")}</ListDate>
        </BoardContainer>
      </ListWrppaer>
    </ListArea>
  );
};

const ListArea = styled.div`
  width: 100%;

  /* background-color: red; */
`;

const ListWrppaer = styled.ul``;

const BoardContainer = styled.li`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #d2d2d2;
  background-color: white;
  align-items: center;
  &:hover {
    background-color: #e2e2e2;
  }
`;
const ListLike = styled.div`
  width: 50px;
  text-align: center;
`;

const ListTitle = styled.div`
  width: 400px;
  text-align: center;
  &:hover {
    color: orange;
  }
`;

const ListViewCount = styled.div`
  width: 40px;
  text-align: center;
`;

const ListDate = styled.div`
  width: 200px;
  text-align: center;
`;
export default BoardList;
