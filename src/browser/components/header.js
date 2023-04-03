import styled from "styled-components";

const Header = () => {
  return (
    <HeaderArea>
      <HeaderWrapper>
        <HeaderLogo>NoLogo</HeaderLogo>
        <HeaderListArea>
          <HeaderListLoginPage>로그인</HeaderListLoginPage>
          <HeaderListSignUpPage>회원가입</HeaderListSignUpPage>
        </HeaderListArea>
      </HeaderWrapper>
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  width: 100%;
  /* background-color: red; */
  background-color: white;
  padding: 1.5em 0 1.5em 0;
  display: flex;
  margin: 0px auto;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 1230px;
  /* background-color: pink; */
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.a`
  font-size: 17px;
`;

const HeaderListArea = styled.ul`
  display: flex;
  gap: 13px;
  font-size: 17px;
`;

const HeaderListLoginPage = styled.li``;

const HeaderListSignUpPage = styled.li``;
export default Header;
