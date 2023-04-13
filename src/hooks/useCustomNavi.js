import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { pathNameState } from "../atoms/pathNameState";
import useNavi from "./useNavi";

export default function useCustomNavi() {
  const [pathName, setPathName] = useRecoilState(pathNameState);
  let windowPath = window.location.pathname;
  const navigate = useNavi();

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [windowPath, setPathName]);
  return {
    pathName,
    navigate,
  };
}
