import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/layout";
import BoardCreate from "./pages/home/boardCreate/boardCreate";
import Home from "./pages/home/home";

const Browser = () => {
  return (
    <BrowserArea>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/create" element={<BoardCreate />} />
        </Routes>
      </Layout>
    </BrowserArea>
  );
};

const BrowserArea = styled.div``;
export default Browser;
