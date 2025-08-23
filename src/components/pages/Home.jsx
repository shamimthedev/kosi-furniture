// src/components/pages/Home.jsx
import Hero from "../layouts/Hero";
import TopPicks from "../layouts/TopPicks";
import NewArrival from "../layouts/NewArrival";
import Feature from "../layouts/Feature";
import ImageGallery from "../layouts/ImageGallery";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <TopPicks />
      <NewArrival />
      <Feature />
      <ImageGallery />
      <Footer />
    </>
  );
};

export default Home;
