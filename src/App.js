import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light');  
  return (
    <> 
    <Header Mode={Mode} setMode={setMode} />  
    <Container Mode={Mode} setMode={setMode}/>
    <Footer />
    </>
  )
}

export default App
