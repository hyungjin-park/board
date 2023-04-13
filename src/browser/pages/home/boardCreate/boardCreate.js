import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import useCustomNavi from "../../../../hooks/useCustomNavi";

const BoardCreate = () => {
  const { pathName, navigate } = useCustomNavi();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });

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
      <CreateWrapper onSubmit={fetchList}>
        <CreateTitle>
          제목
          <CreateTitleInput name="title" value={title} onChange={onChange} />
          내용
          <CreateContentInput
            name="content"
            value={content}
            onChange={onChange}
          />
        </CreateTitle>
        <CreateDiv>
          <CreateSubmit type="submit">제출</CreateSubmit>
        </CreateDiv>
      </CreateWrapper>
    </CreateArea>
  );
};

const CreateArea = styled.div``;

const CreateWrapper = styled.form``;

const CreateTitle = styled.div``;

const CreateTitleInput = styled.input``;

const CreateContentInput = styled.input``;

const CreateDiv = styled.div``;

const CreateSubmit = styled.button``;
export default BoardCreate;
