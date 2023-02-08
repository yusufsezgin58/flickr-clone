import styles from './styles.module.css';
import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
