import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Counter from './Components/Counter';

function App() {
  return (
    <div>
    <Header />
    <main>
      <Counter />
    </main>
    <Footer />
    </div>
  );
}

export default App;
