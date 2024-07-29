import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { Home } from './ component/Carousel/home';
import { ContactUs } from "./component/ContactUs";
import { Navbar } from "./component/Navbar";
// import { AllBlog } from "./component/Timer";
// import { AllButton } from "./component/AllButton";
// import { Carousel } from "./component/Carousel";
import { BasicLayout } from "./LayOut/BasicLayOut";
// import { Content } from "./component/Content";
import { Home } from "./component/Home";

const App = () => { 
  return (
    <BasicLayout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Navbar />} />
        <Route path="Con" element={<ContactUs />} />
        {/* <Route path="Blog" element={<AllBlog />} /> */}
        {/* <Route path="*" element={<AllButton />} /> */}
      </Routes>
    </BasicLayout>
  );
};

export default App;
