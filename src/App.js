import logo from './logo.svg';
import './App.css';
import Quiz from './Components/Quiz/quiz';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Score from './Components/Quiz/score';
import Login from './login';

function App() {
  return (
    <div >
      <BrowserRouter >
      <Routes>

        <Route path='/' element={<Login />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/score' element={<Score />}></Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
