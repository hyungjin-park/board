// Toast 에디터
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import axios from "axios";
import useCustomNavi from "../../../../hooks/useCustomNavi";
import styled from "styled-components";
import { inputState } from "../../../../atoms/postsState";
import { useRecoilState } from "recoil";
import { useRef } from "react";

export default function BoardCreate2() {
  const [inputs, setInputs] = useRecoilState(inputState);
  // Editor DOM 선택용
  const editorRef = useRef();

  //   const onChange = (e) => {
  //     const data = editorRef.current?.getInstance().getHTML();
  //     console.log(data);
  //     setInputs(data);
  //   };

  //   등록 버튼 핸들러
  //   const handleRegisterButton = (e) => {
  //     e.preventDefault();
  //     console.log("test");
  //     const data = editorRef.current?.getInstance().getHTML();
  //     console.log(data, "data");
  //     // 입력창에 입력한 내용을 HTML 태그 형태로 취득
  //     console.log(editorRef.current?.getInstance().getHTML());
  //     // 입력창에 입력한 내용을 MarkDown 형태로 취득
  //     console.log(editorRef.current?.getInstance().getMarkdown());
  //     setInputs({ content: data });
  //     localStorage.setItem("test", data);
  //     console.log(inputs, "inputs");
  //   };

  const { pathName, navigate } = useCustomNavi();
  const { title, content } = inputs;

  const onChange = () => {
    const data = editorRef.current?.getInstance().getHTML();
    setInputs((prev) => ({ ...prev, content: data }));
  };

  const onChangeTitle = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(e.target.value);
  };
  console.log(inputs);

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
      navigate(`/`);
    } catch (e) {
      console.log(e, "실패");
    }
  };
  return (
    <CreateArea>
      <form onSubmit={fetchList}>
        <TitleWrapper>
          <TitleInput
            placeholder="제목을 입력해주세요."
            onChange={onChangeTitle}
            name="title"
            value={title}
          />
        </TitleWrapper>
        <Editor
          ref={editorRef} // DOM 선택용 useRef
          placeholder="내용을 입력해주세요."
          previewStyle="vertical" // 미리보기 스타일 지정
          height="300px" // 에디터 창 높이
          initialEditType="wysiwyg" //
          toolbarItems={[
            // 툴바 옵션 설정
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["table", "link"],
            ["code", "codeblock"],
          ]}
          events=""
          useCommandShortcut={false} // 키보드 입력 컨트롤 방지
          //   name="content"
          //   value={content}
          onChange={onChange}
        ></Editor>

        <button type="submit">등록</button>
      </form>
    </CreateArea>
  );
}

const CreateArea = styled.div`
  width: 800px;
  height: 400px;
  background-color: white;
  margin: 60px auto;
`;

const TitleWrapper = styled.div`
  background-color: #fff;
  width: 800px;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  margin-bottom: 0.6rem;
`;

const TitleInput = styled.input`
  /* width: 800px;
  height: 30px;
  border: none; */
  width: 100%;
  border: 0;
  background: none;
  :focus {
    outline: none;
  }
`;
