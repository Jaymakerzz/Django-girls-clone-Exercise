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
      <Workshop />
      <Footer />
    </div>
  );
};

export default App;
