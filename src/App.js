
import './App.css';
import Preview from './components/Preview/Preview';
import MainLayout from './layout';

function App() {
  const { pathname } = window.location;
  console.log('pathname', pathname)
  return (
    <div className="App">
      {pathname === '/preview' ?
      <Preview />
      : <MainLayout />}
    </div>
  );
}

export default App;
