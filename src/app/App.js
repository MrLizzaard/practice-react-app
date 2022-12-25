import AuthInit from "../modules/Auth/AuthInit";
import Routes from "./Routes";

function App() {
  return (
    <AuthInit>
      <Routes />
    </AuthInit>
  );
}

export default App;
