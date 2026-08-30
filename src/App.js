import Footer from "./component/footer/footer";
import Header from "./component/header/HeaderSection";
import Home from "./component/home/home";
import Schedule from "./component/schedule/schedule";

const App = () => {
  return (
    <div className="container">
      <Header />
      {/* <Home /> */}
      <Schedule />
      <Footer />
    </div>
  );
};

export default App;
