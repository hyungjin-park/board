import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { postsState } from "../../../atoms/postsState";
import useCustomNavi from "../../../hooks/useCustomNavi";
import BoardContentBlock from "./boardContentBlock/boardContentBlock";
import SideBar from "./sidebar";

const BoardBody = () => {
  const [postsList, setPostsList] = useRecoilState(postsState);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/posts`);
        setPostsList(response.data);
        // console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchList();
  }, []);

  // useEffect(() => {
  //   const fetchList = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:8080/posts");
  //       setPostsList(response.data);
  //       // console.log(response.data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchList();
  // }, []);

  return (
    <BoardBodyArea>
      <BoardBodyWrapper>
        <BoardContentBlockWrapper>
          <BoardContentBlock />
        </BoardContentBlockWrapper>
      </BoardBodyWrapper>
    </BoardBodyArea>
  );
};

const BoardBodyArea = styled.div`
  width: 1000px;
  height: 110vh;
  background-color: #ffe5cb;
  display: flex;
  justify-content: center;
  /* margin-top: 2rem; */
  /* padding-bottom: 1.6rem; */
  margin: 40px auto;
`;

const BoardBodyWrapper = styled.div`
  /* width: 1030px; */
  display: flex;
  /* background-color: #d2ffd2; */
  background-color: #fffffe;
  /* z-index: 10; */
`;

const BoardContentBlockWrapper = styled.div`
  width: 880px;
  /* background-color: red; */
  /* background-color: white; */
  /* background-color: skyblue; */
`;
export default BoardBody;
