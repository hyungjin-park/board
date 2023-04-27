import styled from "styled-components";
import Background from "../../components/background";
import BoardBody from "./boardBody";

const Home = () => {
  return (
    <HomeArea>
      <Background>
        <BoardBody />
      </Background>
    </HomeArea>
  );
};

const HomeArea = styled.div``;

export default Home;
