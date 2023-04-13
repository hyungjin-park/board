import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useCustomNavi from "../../../../hooks/useCustomNavi";
import BoardList from "../boardList/boardList";

const BoardContentBlock = ({ postsList, setPostsList }) => {
  const [changeColor, setChangeColor] = useState("");
  const { pathName, navigate } = useCustomNavi();
  // const [body1, setBody1] = useState("");
  const [body1, setBody1] = useState({
    title: "",
    content: "",
  });
  const onClick = (e) => {
    setChangeColor(e.target.title);
  };

  // const onClickPost = (e) => {
  //   e.preventDefault();
  //   setBody1(e.target.value);
  // };

  // useEffect(() => {
  //   const fetchList = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:8080/posts");
  //       setBody1(response.data);
  //       console.log(response.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchList();
  // }, []);

  // const onClickHandle = (e) => {
  //   // e.preventDefault();
  //   fetch("http://localhost:8080/posts", {
  //     // method 옵션 POST 지정
  //     method: "POST",
  //     // JSON 포맷 (JSON으로 보낼거야~)
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // body안에 payload 넣기
  //     body: JSON.stringify({
  //       title: "Test",
  //       content: "Test",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };

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

        <BoardCreateWrapper>
          <BoardCreateBtn
            pathName={pathName}
            path="/board/create"
            onClick={() => navigate("/board/create")}
            // onClick={onClickHandle}
          >
            글쓰기
          </BoardCreateBtn>
        </BoardCreateWrapper>
        <BoardListCategory>
          <ListLike>
            <ListSpan>추천</ListSpan>
          </ListLike>
          <ListTitle>
            <ListSpan>제목</ListSpan>
          </ListTitle>
          <ListView>
            <ListSpan>조회</ListSpan>
          </ListView>
          <ListDate>
            <ListSpan>날짜</ListSpan>
          </ListDate>
        </BoardListCategory>
        <BoardListArea>
          {postsList.map((item) => {
            return <BoardList item={item} />;
          })}
        </BoardListArea>
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

const BoardCreateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 1rem;
`;

const BoardCreateBtn = styled.button`
  padding: 0.5rem 1.3rem;
  /* border-color: #d2ffd2; */

  border: none;
  background-color: #d2d2d2;
`;

const BoardListCategory = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  /* border: 1px solid #dddeee; */
  background-color: #d2d2d2;
  align-items: center;
`;

const ListLike = styled.div`
  width: 50px;
  text-align: center;
`;

const ListTitle = styled.div`
  width: 500px;
  text-align: center;
`;

const ListView = styled.div`
  width: 40px;
  text-align: center;
`;

const ListDate = styled.div`
  width: 200px;
  text-align: center;
`;

const ListSpan = styled.span``;

const BoardListArea = styled.div`
  width: 100%;
  background-color: red;
`;
export default BoardContentBlock;
