import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import rainbow from "../../assets/img/rainbow.png";

const Typing = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = "나만의 일기를 작성해보세요!!";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle("");
        }

        return result;
      });
    }, 350);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <TypingArea>
      <TypingWrapper>
        <TypingWorld>
          <RainbowImg src={rainbow} />
          {blogTitle}
          <RainbowImg src={rainbow} />
        </TypingWorld>
      </TypingWrapper>
    </TypingArea>
  );
};

const TypingArea = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2.5em;
`;

const TypingWrapper = styled.div`
  color: #50d6ff;
`;

const TypingWorld = styled.span`
  font-size: 28px;
`;

const RainbowImg = styled.img`
  margin: 0 1em 0 1em;
`;
export default Typing;
