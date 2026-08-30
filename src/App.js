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
      {/* <Home /> */}
      {/* <Schedule /> */}
      {/* <Workshop /> */}
      <Community />
      <Footer />
    </div>
  );
};

export default App;
