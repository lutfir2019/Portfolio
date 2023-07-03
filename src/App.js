import React, { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './componen/ContactForm';
import Footer from './componen/Footer';
import Loading from './componen/Loading';
import PortfolioItem from './componen/PortfolioItem';

const portfolioData = [
  {
    title: 'Project 1',
    image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    description: 'This is the first project.'
  },
  {
    title: 'Project 2',
    image: 'https://plus.unsplash.com/premium_photo-1661897207286-048ad6edac6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    description: 'This is the second project.'
  },
  // Tambahkan data proyek lainnya sesuai kebutuhan
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Portofolio</h1>
      </header>
      <div className="portfolio">
        {portfolioData.map((item, index) => (
          <PortfolioItem
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
