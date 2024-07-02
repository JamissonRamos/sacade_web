import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Componentes
import MainHeaderPanel from './components/main_header_panel';
//Pages
import { Pages } from './pages'
import MainNavigation from './components/main_navigation';

function App() {

  return (
    <>

      <Router>
        <MainHeaderPanel />
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Pages.Home />} />
            <Route path="/alunos" element={<Pages.Alunos />} />
            <Route path="/pagamentos" element={<Pages.Pagamentos />} />
            <Route path="/users" element={<Pages.Users />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
