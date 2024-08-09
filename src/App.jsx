
import { BrowserRouter as Router} from 'react-router-dom';
import AppContent from './components/app_content';

function App() {

  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  )
}

export default App
/* 
  1 = Criar um controle de usuario, onde ele contrla cadastro de ourtos user se for o adm;
  2 = Ao carregar a tela abrir o login se user não tiver logado;
  
*/