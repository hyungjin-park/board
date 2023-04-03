import styled from "styled-components";
import Layout from "./components/layout";
import Home from "./pages/home/home";

const Browser = () => {
  return (
    <BrowserArea>
      <Layout>
        <Home />
      </Layout>
    </BrowserArea>
  );
};

const BrowserArea = styled.div``;
export default Browser;
