import axios from "axios";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { inputState, postsState } from "../../../../atoms/postsState";
import useCustomNavi from "../../../../hooks/useCustomNavi";

const BoardDetailContent = () => {
  const { id } = useParams();
  const { pathName, navigate } = useCustomNavi();
  const [postsList, setPostsList] = useRecoilState(postsState);
  const [inputs, setInputs] = useRecoilState(inputState);

  const { title, content } = inputs;

  const fetchList = async (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      try {
        const response = await axios.delete(
          `http://localhost:8080/posts/${id}`
        );
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const fetchList2 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:8080/posts/${id}`, {
        // title,
        content,
      });
      setInputs({
        // title: "",
        content: "",
      });
      // navigate("/board/create");
    } catch (e) {
      console.log(e, "실패");
    }
  };

  return (
    <BoardContentBlockArea>
      <button onClick={fetchList}>삭제</button>
      <button onClick={fetchList2}>수정</button>
      <BoardContentBlockWrapper>
        {postsList?.map((item) => {
          if (id === `${item.id}`) {
            return (
              <BoardDetailWrapper>
                <BoardTitle>{item.title}</BoardTitle>
                <BoardContentWrapper>
                  <BoardContent
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </BoardContentWrapper>
              </BoardDetailWrapper>
            );
          }
        })}
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

const BoardContentWrapper = styled.div`
  width: 100%;
  background-color: red;
`;

const BoardDetailWrapper = styled.div``;

const BoardContent = styled.p``;
export default BoardDetailContent;
