import { useNavigate } from "react-router-dom";

export default function useNavi() {
  const navigate = useNavigate();
  return navigate;
}
