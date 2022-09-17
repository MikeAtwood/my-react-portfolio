import React, { useState } from 'react';

import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
const [currentTab, setCurrentTab] = useState("About");

  const renderTab = () => {
    if (currentTab === "About") {
      return <About></About>;
    } else if (currentTab === "Portfolio") {
      return <Portfolio></Portfolio>
    } else if (currentTab === "Contact") {
      return <Contact></Contact>
    } else {
      return <Resume></Resume>
    }
  };

  return (
    <div>
      <Header>
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      </Header>
      <main>
        {renderTab()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
