import { SafeAreaView } from "react-native";
import PetsPage from "./components/PetsPage";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <SafeAreaView>
      <Sidebar />
      <PetsPage />
    </SafeAreaView>
  );
}
