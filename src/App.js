import { AuthenticationContextProvider } from "../src/services/User.Context";
import { Navigation } from "../src/utils/Navigation";
function App() {
  return (
    <AuthenticationContextProvider>
      <Navigation />
    </AuthenticationContextProvider>
  );
}

export default App;
