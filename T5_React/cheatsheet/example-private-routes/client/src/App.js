import AuthContext from "./context/AuthContext";
import Router from "./routers/Router";

function App() {
  return (
    <div className="vh-100">
      <AuthContext>
        <Router />
      </AuthContext>
    </div>
  );
}

export default App;
