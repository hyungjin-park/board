import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useCustomNavi from "../../../hooks/useCustomNavi";
import BoardContentBlock from "./boardContentBlock/boardContentBlock";
import SideBar from "./sidebar";

const BoardBody = () => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/posts");
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
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
        <BoardContentBlockWrapper>
          <BoardContentBlock
            setPostsList={setPostsList}
            postsList={postsList}
          />
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
