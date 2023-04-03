import styled from "styled-components";

const SideBar = () => {
  return (
    <SideBarArea>
      <SideBarMenu>
        <SideBarMenuListWrapper>
          <SideBarMenuList>질문 & 답변</SideBarMenuList>
        </SideBarMenuListWrapper>
        <SideBarMenuListWrapper>
          <SideBarMenuList>자유게시판</SideBarMenuList>
        </SideBarMenuListWrapper>
      </SideBarMenu>
    </SideBarArea>
  );
};

const SideBarArea = styled.div`
  width: 200px;
`;

const SideBarMenu = styled.ul``;

const SideBarMenuListWrapper = styled.li`
  /* background-color: pink; */
  background-color: white;
  padding: 0.75em 0.75em;
`;

const SideBarMenuList = styled.span`
  font-size: 18px;
`;
export default SideBar;
