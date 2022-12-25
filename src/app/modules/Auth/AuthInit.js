import React, { useState } from "react";

const AuthInit = ({ children }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  return showSplashScreen ? <div>로딩중</div> : <>{children}</>;
};

export default AuthInit;
