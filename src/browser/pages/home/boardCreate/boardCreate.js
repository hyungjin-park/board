import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { inputState } from "../../../../atoms/postsState";
import useCustomNavi from "../../../../hooks/useCustomNavi";

const BoardCreate = () => {
  const { pathName, navigate } = useCustomNavi();
  const [inputs, setInputs] = useRecoilState(inputState);

  const { title, content } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(e.target.value);
  };

  const fetchList = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/posts", {
        title,
        content,
      });
      setInputs({
        title: "",
        content: "",
      });
      navigate("/");
    } catch (e) {
      console.log(e, "실패");
    }
  };
  // fetchList();

  return (
    <CreateArea>
      <CreateAreaWrapper>
        <CreateWrapper onSubmit={fetchList}>
          <CreateTitle>
            <h3>제목</h3>
            <CreateTitleInput name="title" value={title} onChange={onChange} />
            <h4>내용</h4>
            <CreateContentInput
              placeholder="내용을 입력하세요."
              name="content"
              value={content}
              onChange={onChange}
            />
          </CreateTitle>
          <CreateDiv>
            <CreateSubmit type="submit">제출</CreateSubmit>
          </CreateDiv>
        </CreateWrapper>
      </CreateAreaWrapper>
    </CreateArea>
  );
};

const CreateArea = styled.div`
  width: 800px;
  height: 400px;
  background-color: white;
  margin: 60px auto;
`;

const CreateAreaWrapper = styled.div`
  width: 500px;
  height: 400px;
  background-color: white;
  margin: 0px auto;
  padding-top: 4rem;
`;
const CreateWrapper = styled.form``;

const CreateTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateTitleInput = styled.input`
  width: 80%;
  margin-bottom: 1.8rem;
`;

const CreateContentInput = styled.input`
  width: 300px;
  height: 120px;
  margin-bottom: 1.8rem;
`;

const CreateDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const CreateSubmit = styled.button`
  padding: 0.3rem 1.4rem 0.3rem 1.4rem;
`;
export default BoardCreate;
