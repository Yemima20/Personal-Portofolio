import React from 'react';
import { BrowserRouter, Route, Routes, NavLink  } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* HEADER */}
        <header>
          <svg className="logo" width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.1315 43.768C22.2675 43.768 18.0435 42.872 14.4595 41.08C10.8755 39.2453 8.1235 36.7707 6.2035 33.656C4.2835 30.5413 3.3235 27.0853 3.3235 23.288C3.3235 19.2347 4.39017 15.608 6.5235 12.408C8.6995 9.208 11.6862 6.73333 15.4835 4.984C19.2808 3.192 23.5475 2.296 28.2835 2.296C30.3315 2.296 32.3795 2.46666 34.4275 2.808C36.4755 3.10666 38.1182 3.512 39.3555 4.024C39.8248 4.19467 40.0808 4.344 40.1235 4.472C40.2088 4.55733 40.2728 4.89867 40.3155 5.496L41.1475 14.392C41.1475 14.52 41.0195 14.6053 40.7635 14.648C40.5502 14.6907 40.4222 14.6267 40.3795 14.456C39.8248 13.048 38.9288 11.512 37.6915 9.848C36.4542 8.184 34.8328 6.73333 32.8275 5.496C30.8222 4.25867 28.4968 3.64 25.8515 3.64C23.1208 3.64 20.6248 4.38667 18.3635 5.88C16.1022 7.37333 14.3102 9.50667 12.9875 12.28C11.7075 15.0533 11.0675 18.2747 11.0675 21.944C11.0675 25.9547 11.8142 29.5387 13.3075 32.696C14.8435 35.8533 16.9555 38.3067 19.6435 40.056C22.3315 41.8053 25.3608 42.68 28.7315 42.68C30.4808 42.68 31.8248 42.488 32.7635 42.104C33.7022 41.72 34.3848 40.9733 34.8115 39.864C35.2382 38.7547 35.4515 37.112 35.4515 34.936C35.4515 32.7173 35.3235 31.1813 35.0675 30.328C34.8115 29.432 34.2568 28.8347 33.4035 28.536C32.5928 28.2373 31.1422 28.088 29.0515 28.088C28.7955 28.088 28.6675 27.9173 28.6675 27.576C28.6675 27.448 28.6888 27.3413 28.7315 27.256C28.8168 27.128 28.9022 27.064 28.9875 27.064C32.6142 27.2773 35.5582 27.384 37.8195 27.384C39.9955 27.384 42.2568 27.32 44.6035 27.192C44.7742 27.192 44.8595 27.3413 44.8595 27.64C44.9022 27.9387 44.8168 28.088 44.6035 28.088C43.8355 28.0453 43.2808 28.1947 42.9395 28.536C42.6408 28.8347 42.4488 29.4747 42.3635 30.456C42.2782 31.4373 42.2355 33.144 42.2355 35.576C42.2355 37.496 42.2995 38.8613 42.4275 39.672C42.5982 40.4827 42.6835 40.9947 42.6835 41.208C42.6835 41.464 42.6408 41.6347 42.5555 41.72C42.4702 41.8053 42.2782 41.8907 41.9795 41.976C36.4755 43.1707 31.5262 43.768 27.1315 43.768Z" fill="#E4B61A"/>
            <path d="M11.384 37.4373C11.384 37.4799 11.32 37.5013 11.192 37.5013C11.064 37.5013 11 37.4799 11 37.4373C11 36.7119 11.0107 36.1359 11.032 35.7093L11.064 33.3413L11.032 30.9413C11.0107 30.5359 11 29.9813 11 29.2773C11 29.2133 11.064 29.1813 11.192 29.1813C11.32 29.1813 11.384 29.2133 11.384 29.2773C11.384 30.1733 11.4907 30.7813 11.704 31.1013C11.9173 31.4213 12.3653 31.5813 13.048 31.5813L13.592 31.5493L26.68 30.8773L11.224 24.2853C11.1387 24.2426 11.096 24.1573 11.096 24.0293C11.096 23.9013 11.1387 23.8159 11.224 23.7733L26.616 15.6773L15.064 15.4213C13.912 15.3999 13.0053 15.6239 12.344 16.0933C11.704 16.5839 11.384 17.2666 11.384 18.1413C11.384 18.2053 11.32 18.2373 11.192 18.2373C11.064 18.2373 11 18.2053 11 18.1413C11 17.5653 11.0107 17.1173 11.032 16.7973L11.064 15.0373L11.032 13.0213C11.0107 12.6799 11 12.2213 11 11.6453C11 11.5813 11.064 11.5493 11.192 11.5493C11.32 11.5493 11.384 11.5813 11.384 11.6453C11.384 12.5199 11.7147 13.2133 12.376 13.7253C13.0373 14.2373 13.9333 14.5039 15.064 14.5253L28.312 14.8133L28.344 14.7812C29.1333 14.3546 29.7093 13.9066 30.072 13.4373C30.4347 12.9893 30.616 12.4666 30.616 11.8693C30.616 11.8053 30.68 11.7733 30.808 11.7733C30.936 11.7733 31 11.8053 31 11.8693L30.968 13.3733C30.9467 13.6719 30.936 14.0559 30.936 14.5253L30.968 16.2213C30.9893 16.4133 31 16.6586 31 16.9573C31 17.2346 30.904 17.4479 30.712 17.5973C30.52 17.7466 30.0613 18.0239 29.336 18.4293L16.248 25.4053L30.2 31.4853C30.4987 31.6133 30.7013 31.7413 30.808 31.8693C30.936 32.0186 31 32.2106 31 32.4453C31 32.6373 30.9893 32.8506 30.968 33.0853C30.9467 33.3413 30.936 33.6293 30.936 33.9493L30.968 35.8373C30.9893 36.1359 31 36.5626 31 37.1173C31 37.1813 30.936 37.2133 30.808 37.2133C30.68 37.2133 30.616 37.1813 30.616 37.1173C30.616 36.1146 30.4133 35.3893 30.008 34.9413C29.6027 34.4933 28.9733 34.2906 28.12 34.3333L13.592 35.1013C12.9307 35.1439 12.4507 35.2186 12.152 35.3253C11.8533 35.4533 11.6507 35.6666 11.544 35.9653C11.4373 36.2853 11.384 36.7759 11.384 37.4373Z" fill="#E4B61A"/>
            <circle cx="39" cy="21" r="3" fill="#E4B61A"/>
          </svg>
          {/* NAVIGATION BAR */}
          <nav>
            <ul className="navbar" role="navigation">
              <NavLink to="/"><li className='nav-item'>Home</li></NavLink>
              <NavLink to="/about"><li className='nav-item'>About</li></NavLink>
              <NavLink to="/projects"><li className='nav-item'>Projects</li></NavLink>
              <NavLink to="/contact"><li className='nav-item'>Contact</li></NavLink>
            </ul>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </nav>
        </header>
      </BrowserRouter>
    </>
  );
}

export default App;