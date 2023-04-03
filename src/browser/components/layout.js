import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <LayoutArea>
      <LayoutWrapper>
        <Header />
        <BodyArea>{children}</BodyArea>
        <Footer />
      </LayoutWrapper>
    </LayoutArea>
  );
};

const LayoutArea = styled.div`
  width: 100%;
  height: 220vh;
`;

const LayoutWrapper = styled.div`
  width: 1440px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #d2ffd2;
`;

const BodyArea = styled.div`
  flex: 1;
`;
export default Layout;
