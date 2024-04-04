import { React } from "react";
import "../App.css";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      {/*  Main Content */}
      <main className="home">
        <h1 className="opening">HEY!</h1>
        <div className="intro">
          <h2 className="font-archivoBlack text-5xl text-[var(--coral)]">GLORIAZA Y. L. ODYARDY</h2>
          <h3 className="font-gothicA1 text-lg text-[var(--bright-coral)]">WEB DEVELOPER</h3>
        </div>
      </main>
    </>
  );
};

export default Home;
