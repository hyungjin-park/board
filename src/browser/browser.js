import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/layout";
import BoardCreate from "./pages/home/boardCreate/boardCreate";
import BoardCreate2 from "./pages/home/boardCreate/boardCreate2";
import BoardDetail from "./pages/home/boardDetail/boardDetail";
import Home from "./pages/home/home";

const Browser = () => {
  return (
    <BrowserArea>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/create" element={<BoardCreate2 />} />
          <Route path="/board/detail/:id" element={<BoardDetail />} />
        </Routes>
      </Layout>
    </BrowserArea>
  );
};

const BrowserArea = styled.div``;
export default Browser;
