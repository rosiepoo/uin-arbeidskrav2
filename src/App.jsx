import './App.css'
import { useState } from 'react'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'

// AI usage: assistant helped generate component code and translations.
// Chat log: https://chat.openai.com/ (include full submission chat link when submitting)

function App() {
  const initial = [
    { id: 2, name: 'Bread', amount: 2, bought: true },
    { id: 1, name: 'Milk', amount: 1, bought: false },
  ]

  const [items, setItems] = useState(initial)

  function addItem({ name, amount }) {
    const newItem = {
      id: Date.now() + Math.random(),
      name,
      amount,
      bought: false,
    }
    setItems((prev) => [newItem, ...prev])
  }

  function toggleBought(id) {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, bought: !it.bought } : it)))
  }

  function updateAmount(id, newAmount) {
    if (newAmount < 1) return
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, amount: newAmount } : it)))
  }

  return (
    <main>
      <header>
        <h1>Shopping List</h1>
      </header>
      <AddForm onAdd={addItem} />
      <ShoppingList items={items} onToggle={toggleBought} onAmountChange={updateAmount} />
    </main>
  )
}

export default App
