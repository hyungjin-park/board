import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { postsState } from "../../../../atoms/postsState";
import useCustomNavi from "../../../../hooks/useCustomNavi";
import BoardList from "../boardList/boardList";

const BoardContentBlock = () => {
  const [changeColor, setChangeColor] = useState("");
  const [postsList, setPostsList] = useRecoilState(postsState);
  const { pathName, navigate } = useCustomNavi();

  const onClick = (e) => {
    setChangeColor(e.target.title);
  };
  console.log(postsList.slice(10, 20));

  let renderedBtn = 1;
  if (postsList.length < 10) {
    renderedBtn = 1;
  } else if (postsList.length % 10 === 0) {
    renderedBtn = parseInt(postsList.length / 10);
  } else if (postsList.length % 10 !== 0) {
    renderedBtn = parseInt(postsList.length / 10) + 1;
  }
  console.log(renderedBtn, postsList.length);
  const btnArr = new Array(renderedBtn).fill(0);

  return (
    <BoardContentBlockArea>
      <BoardContentBlockWrapper>
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
        {btnArr.map((btn, index) => (
          <button key={index + 1}>{index + 1}</button>
        ))}
      </BoardContentBlockWrapper>
    </BoardContentBlockArea>
  );
};

const BoardContentBlockArea = styled.div`
  padding: 1em;
`;

const BoardContentBlockWrapper = styled.div``;

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
  width: 400px;
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
