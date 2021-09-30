import "./App.css";
import AddTransaction from "./components/UI/AddTransaction";
import Balance from "./components/UI/Balance";
import Header from "./components/UI/Header";
import IncomeExpenses from "./components/UI/IncomeExpenses";
import TransactionList from "./components/UI/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
