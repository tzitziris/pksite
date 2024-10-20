// function App() {

//   return (
//     <div>
//       App
//     </div>
//   )
// }

// export default App
// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the routed components */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
