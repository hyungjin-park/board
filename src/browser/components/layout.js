import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";
import Typing from "./typing";

const Layout = ({ children }) => {
  return (
    <LayoutArea>
      <LayoutWrapper>
        <Header />
        <Typing />
        <BodyArea>{children} </BodyArea>
        <Footer />
      </LayoutWrapper>
    </LayoutArea>
  );
};

const LayoutArea = styled.div`
  width: 100%;
`;

const LayoutWrapper = styled.div`
  width: 100%
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: #d2ffd2; */
  /* background-color: white; */
  background-color: #FFE5CB;
`;

const BodyArea = styled.div`
  flex: 1;
`;
export default Layout;
