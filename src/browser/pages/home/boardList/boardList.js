import styled from "styled-components";

const BoardList = ({ item }) => {
  return (
    <ListArea>
      <ListWrppaer>
        <BoardContainer>
          <ListTitle>{item.title}</ListTitle>
        </BoardContainer>
      </ListWrppaer>
    </ListArea>
  );
};

const ListArea = styled.div`
  width: 100%;
  background-color: red;
`;

const ListWrppaer = styled.ul``;

const BoardContainer = styled.li`
  display: flex;
  padding: 1rem;
`;

const ListTitle = styled.div``;
export default BoardList;
