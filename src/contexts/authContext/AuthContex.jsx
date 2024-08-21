import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../servece/firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Spinner } from "../../components/loading_custom";
import { useNavigate } from "react-router-dom";

// Cria o contexto de autenticação
const AuthContext = createContext();

// Provedor do contexto de autenticação
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //const navigate = useNavigate();

  // Função para registrar um novo usuário
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Função para atualizar os dados do usuário logado
  const updateUserEmailandPassword = async (newEmail, newPassword) => {
    const updateUserEmail = async (newEmail) => {
        try {
          // compara senha atual com email atual se é valido
          await updateEmail(currentUser, newEmail);  
          return 'Sucesso'
        } catch (error) {
          console.error("Erro ao atualizar o usuário no contexto email: ", error);
          return error.message
        }
    }
    const updateUserPassword  = async (newPassword) => {
        try {
          // compara senha atual com email atual se é valido
          await updatePassword(currentUser, newPassword);  
          return 'Sucesso'
        } catch (error) {
          console.error("Erro ao atualizar o usuário no contexto senha: ", error);
          return error.message
        }
    }
    
    if (currentUser) {
      try {
        const resultEmail = await updateUserEmail(newEmail)
        if (resultEmail.includes('Sucesso')){
            const resultPassword = await updateUserPassword(newPassword)
            if (resultPassword.includes('Sucesso')){
              return 'Sucesso' 
            }else{
              return `Error: ${resultPassword} `
            }
        }else{
            return resultEmail;
        }


      } catch (error) {
        console.error("Erro ao atualizar o usuário no contexto: ", error);
        
      }finally {
        // setLoading(false);
      }
    }else {
      console.log('Não encontrado users no contexto');
      // setLoading(false);
      return;
    }
  };

  // Função para fazer login
  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    setCurrentUser(userCredential.user);
    
    // Função para buscar os dados do usuário logado na coleção "users"
    const fetchUserData = async (uid)  => {
      const userDocRef = doc(db, "users", uid); // Referência ao documento do usuário
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = { id: userDoc.id, ...userDoc.data() };
        // Armazenar os dados no localStorage
        localStorage.setItem("userLogged", JSON.stringify(userData));
      } else {
        console.log("Usuário não encontrado!");
        //navigate('/users/form/form_create');
      }
    };

    // Buscar dados do usuário logado
    await fetchUserData(uid);
    return userCredential
  };

  // Função para fazer logout
  const logout = () => {
    return signOut(auth);
  };

  // Monitora o estado de autenticação do usuário
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);
    // Forçar logout na inicialização do sistema
    // useEffect(() => {
    //   signOut(auth).then(() => {
    //     setCurrentUser(null);
    //     setLoading(false);
    //   });
    // }, []);

  // Valores expostos pelo contexto
  const value = {
    currentUser,
    login,
    signUp,
    updateUserEmailandPassword,
    logout,
  };

    // Renderização condicional baseada no estado de loading
    if (loading) {
      return <Spinner />; // Você pode personalizar esta mensagem de carregamento
    }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook para usar o AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

//verifica como fica quando faz o login e a pagina é recaregada se o user vai ser desconectado e se volta
//para o login, o login somente quando sair do sistema, ao entra fazer login;
