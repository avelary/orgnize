import { CardProvider } from "./context";
import { AuthProvider } from "./context/auth";
import { AppRouter } from "./routes";

function App() {
  return (
    <AuthProvider>
      <CardProvider>
        <AppRouter />
      </CardProvider>
    </AuthProvider>
  )
}

export default App
