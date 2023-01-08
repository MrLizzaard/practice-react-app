import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Login from "../../pages/loginPage/Login";
import userInfoAtom from "../../recoil/userInfo/atom";

const AuthInit = (props: any) => {
  const { authToken } = useRecoilValue(userInfoAtom);

  useEffect(() => {
    if (authToken) {
      // 로그인 완료
    } else {
      // 로그인 페이지로
      // props.authouized = false;
      // console.log(props);
      setShowSplashScreen(false);
    }
  }, [authToken]);
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // return showSplashScreen ? <div>로딩중</div> : <>{children}</>;
  return showSplashScreen ? <Login /> : <>{props.children}</>;
};

export default AuthInit;
