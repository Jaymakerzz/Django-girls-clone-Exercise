import { Route, Routes } from "react-router-dom";
import Community from "./component/community/community";
import Footer from "./component/footer/footer";
import Header from "./component/header/HeaderSection";
import Home from "./component/home/home";
import Schedule from "./component/schedule/schedule";
import Workshop from "./component/workshop/workshop";

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/community" Component={Community} />
        <Route path="/schedule" Component={Schedule} />
        <Route path="/workshop" Component={Workshop} />
        <Route path="/" Component={Home} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
