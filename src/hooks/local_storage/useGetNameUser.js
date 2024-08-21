
export  function useGetUserName() {
    // Obtém o item "userLogged" do localStorage
    const userLogged = localStorage.getItem("userLogged");
    
    // Verifica se existe algo armazenado em "userLogged"
    if (userLogged) {
        try {
            // Converte o JSON armazenado em um objeto JavaScript
            const user = JSON.parse(userLogged);
        
            // Retorna o nome do usuário, se existir
            return user.name || null;
        } catch (error) {
            console.error("Erro ao fazer o parse do userLogged:", error);
            return null;
        }
    }
    
    // Retorna null se o "userLogged" não estiver no localStorage
    return null;
}
// Exemplo de uso:
//      const userName = useGetUserName();
//   console.log(userName);
