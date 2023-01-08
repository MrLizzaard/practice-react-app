import React, { useEffect } from "react";

const Routes = (props: any) => {
  useEffect(() => {
    console.log("routes", props);
  }, [props]);
  return <div>Routes</div>;
};

export default Routes;
