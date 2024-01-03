import { Container, Grid } from "@mui/material";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs style={{ backgroundColor: "red" }}>
            <Header />
            <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/" element={<Resume />} />
            </Routes>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
