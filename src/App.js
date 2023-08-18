import UserInfo from "./component/UserInfo/UserInfo";
import Header from "./component/Header/header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
       <Header/>
      <UserInfo />
   </BrowserRouter>
     
    
  );
}

export default App;
