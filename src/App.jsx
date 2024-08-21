
import { BrowserRouter as Router} from 'react-router-dom';
import AppContent from './components/app_content';
//context
import { AuthProvider } from './contexts/authContext/AuthContex';


function App() {

  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App
/* 
  1 = Criar um controle de usuario, onde ele contrla cadastro de ourtos user se for o adm;
  2 = Ao carregar a tela abrir o login se user não tiver logado;
  
*/