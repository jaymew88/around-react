import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div>
    <Header />
    <Main />
    <Footer />
    <PopupWithForm />
    {/* Cards Template */}
    <template className="template-card" />
  </div>        
  );
}

export default App;
