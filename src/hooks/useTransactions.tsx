import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

/*
interface TransactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
}
*/

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //forçar o javascript, dizendo que esse valor padrão é sim o que a gente quer. E não tem problema porque esse valor nunca vai ser usado
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {

    //esse post retorna o dado inserido no banco. Seria uma boa ideia implementar isso nas nossas próprias apis também?
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date() //gambiarra pq não temos api de verdade
    });
    const { transaction } = response.data;

    //conceito de imutabilidade no react:
    setTransactions([
      ...transactions, //primeiro eu copio o array que já existia
      transaction //depois eu insiro o novo registro
    ])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      { children }
    </TransactionsContext.Provider>
  )

}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context;
}