import styled from "styled-components";
import useCustomNavi from "../../hooks/useCustomNavi";
import sun from "../../assets/sun.png";

const Header = () => {
  const { pathName, navigate } = useCustomNavi();
  return (
    <HeaderArea>
      <HeaderWrapper>
        <HeaderLogo pathName={pathName} path="/" onClick={() => navigate("/")}>
          <SunLogo src={sun} alt="태양" />
        </HeaderLogo>
        <HeaderListArea>
          {/* <HeaderListLoginPage>로그인</HeaderListLoginPage>
          <HeaderListSignUpPage>회원가입</HeaderListSignUpPage> */}
        </HeaderListArea>
      </HeaderWrapper>
    </HeaderArea>
  );
};

const HeaderArea = styled.div`
  width: 100%;
  /* background-color: red; */
  background-color: white;
  padding: 0.6em 0 0.6em 0;
  display: flex;
  margin: 0px auto;
  justify-content: center;
  /* border-bottom: 2px solid skyblue; */
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

const SunLogo = styled.img`
  width: 44px;
`;

const HeaderListArea = styled.ul`
  display: flex;
  gap: 13px;
  font-size: 17px;
`;

const HeaderListLoginPage = styled.li``;

const HeaderListSignUpPage = styled.li``;
export default Header;
