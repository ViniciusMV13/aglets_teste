import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { OrderList } from './components/order_list';
import { Detail } from './components/order_detail';

export function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrderList />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<h1>Pagina não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


