import { RecoilRoot } from "recoil";
import AuthInit from "../modules/Auth/AuthInit";
import Routes from "./Routes";

function App() {
  return (
    <RecoilRoot>
      <AuthInit>
        <Routes />
      </AuthInit>
    </RecoilRoot>
  );
}

export default App;
