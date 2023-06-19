import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import MainSection from '../MainSection';
import Footer from '../Footer';
import PlaceHolder from '../PlaceHolder';

function Home() {
  return (
    <>
      <MainSection />
      <PlaceHolder/>
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
