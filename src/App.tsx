import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./layouts/Layout";
import { MetalniNamestaj } from "./pages/MetalniNamestaj";
import { CelicneKonstrukcije } from "./pages/CelicneKonstrukcije";
import { TIGZavarivanje } from "./pages/TIGZavarivanje";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/metalni-namestaj" element={<MetalniNamestaj />} />
        <Route path="/celicne-konstrukcije" element={<CelicneKonstrukcije />} />
        <Route path="/tig-zavarivanje" element={<TIGZavarivanje />} />
      </Route>
    </Routes>
  );
}

export default App;
