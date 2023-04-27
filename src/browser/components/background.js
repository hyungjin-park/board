import cloud1 from "../../assets/img/cloud1.png";
import cloud2 from "../../assets/img/cloud2.png";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const Background = ({ children }) => {
  const [fadeOut, setFadeOut] = useState(true);
  // const [fadeIn, setFadein] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(false);
      // setFadein(true);
    }, 3000);

    return () => {
      setFadeOut(true);
      // setFadein(false);
    };
  }, []);

  return (
    <>
      <ImgBoxArea>
        <div>
          {fadeOut && (
            <CloudDiv>
              <CloudImg top="-8%" left="4%" src={cloud2} />
              <CloudImg top="21%" left="24%" src={cloud2} />
              <CloudImg top="53%" left="44%" src={cloud2} />
              <CloudImg top="1%" right="64%" src={cloud2} />
              <CloudImg top="29%" right="42%" src={cloud2} />
              <CloudImg top="43%" right="32%" src={cloud2} />
              <CloudImg top="68%" left="2%" src={cloud2} />
              <CloudImg top="43%" right="2%" src={cloud2} />
              <CloudImg top="73%" right="15%" src={cloud2} />
              <CloudImg top="-8%" right="40%" src={cloud2} />
              <CloudImg top="5%" right="32%" src={cloud2} />
              <CloudImg top="-8%" right="4%" src={cloud2} />
              <CloudImg top="21%" right="24%" src={cloud2} />
              <CloudImg top="53%" right="44%" src={cloud2} />
              <CloudImg top="1%" left="64%" src={cloud2} />
              <CloudImg top="29%" left="42%" src={cloud2} />
              <CloudImg top="43%" left="32%" src={cloud2} />
              <CloudImg top="68%" right="2%" src={cloud2} />
              <CloudImg top="43%" left="2%" src={cloud2} />
              <CloudImg top="73%" left="15%" src={cloud2} />
            </CloudDiv>
          )}
          {children}
        </div>
      </ImgBoxArea>
    </>
  );
};
const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const Fade2 = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
  }
`;

const ChildWrapper = styled.div`
  animation: ${Fade2} 3s linear;
`;

const ImgBoxArea = styled.div`
  width: 100%;
  position: relative;
`;
const CloudDiv = styled.div`
  animation: ${FadeOut} 3s linear;
`;

const CloudImg = styled.img`
  /* transform: translateX(${(props) => props.position}px); */
  position: absolute;
  transition: opacity 1s ease-in-out;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  &:hover {
    opacity: 0;
  }
`;

export default Background;
