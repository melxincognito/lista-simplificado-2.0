import Layout from "./components/layout/Layout.component";
import AddTodosPage from "./pages/AddTodo.component";
import { Route, Routes } from 'react-router-dom';
import ImportantTodosPage from "./pages/ImportantTodos.component";
import AllTodosPage from './pages/AllTodos.component';
 

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllTodosPage />} />
        <Route path='/tareasImportantes' element={<ImportantTodosPage />} />
        <Route path='/anadirTarea' element={<AddTodosPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
