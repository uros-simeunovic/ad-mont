import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./layouts/Layout";
import { Gallery } from "./pages/Gallery";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
