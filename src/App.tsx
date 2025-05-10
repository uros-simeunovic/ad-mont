import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./layouts/Layout";
import { Gallery } from "./pages/Gallery";
import { Service1 } from "./pages/Service1";
import { Service2 } from "./pages/Service2";
import { Service3 } from "./pages/Service3";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service1" element={<Service1 />} />
        <Route path="/service2" element={<Service2 />} />
        <Route path="/service3" element={<Service3 />} />
      </Route>
    </Routes>
  );
}

export default App;
