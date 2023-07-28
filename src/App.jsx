import AppNavigator from "./AppNavigator";
import { AppProvider } from "./contexts/AppContext";

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
