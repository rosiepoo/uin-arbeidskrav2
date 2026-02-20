import { useState } from 'react'
import '../style/form.scss'

export default function AddForm({ onAdd }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmedName = name.trim()
    const parsedAmount = Number(amount)

    if (!trimmedName && !amount) {
      setError('Item name and amount are missing')
      return
    }
    if (!trimmedName) {
      setError('Item name is missing')
      return
    }
    if (!amount || Number.isNaN(parsedAmount) || parsedAmount < 1) {
      setError('Amount must be a number of at least 1')
      return
    }

    onAdd({ name: trimmedName, amount: parsedAmount })
    setName('')
    setAmount('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Add item form">
      <label htmlFor="item-name">Item name</label>
      <input
        id="item-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-label="Item name"
      />

      <label htmlFor="item-amount">Amount</label>
      <input
        id="item-amount"
        type="number"
        min="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        aria-label="Amount"
      />

      <p>
        <button type="submit">Add item</button>
      </p>
      {error && (
        <p role="alert" className="form-error">{error}</p>
      )}
    </form>
  )
}
