
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Headers from "./components/Headers";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div> 
      <Headers />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
    </div>
  );
}

export default App;
