import React from 'react';
import Header from '../../components/Header';
import Img2 from '../../assets/imagens-svg/undraw_heartbroken_cble.svg';
import './styles.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className="page-home-container">

        <main className="corpo">
          
           <img src={Img2} alt="text"/>
         
          <p className="text">Cyan, o tempo todo inovando e gerando novas ferramentas para você. </p>
          
         

        </main>

      </div>
    </>
  )
}

export default Home;