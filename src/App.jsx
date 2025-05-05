import React, { useState } from 'react';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import HomePage from './components/HomePage'; 
import DetailsPage from './components/DetailsPage'; 

const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);

  const goToPage2 = () => {
      setIsHomePage(false);
  };

  const goToPage1 = () => {
      setIsHomePage(true);
  };

  const handleGoToHome = () => {
      setIsHomePage(true);
  };

    const handleGoToAbout = () => {
      setIsHomePage(false); // Navigate to About page
  };

  const handleGoToContact = () => {
      setIsHomePage(true); // For now, go to home.  You might have a separate ContactPage later
  };

  return (
      <div className="flex flex-col min-h-screen bg-gray-100">
          <Navbar
              onGoToPage2={isHomePage ? goToPage2 : undefined}
              onGoToHome={handleGoToHome}
              onGoToAbout={handleGoToAbout}
              onGoToContact={handleGoToContact}
          />
          <main className="flex-grow">
              {isHomePage ? (
                  <HomePage
                      onGoToPage2={goToPage2}
                      onGoToAbout={handleGoToAbout}
                      onGoToContact={handleGoToContact}
                  />
              ) : (
                  <DetailsPage onGoToHome={handleGoToHome} />
              )}
          </main>
          <Footer />
      </div>
  );
};

export default App;
