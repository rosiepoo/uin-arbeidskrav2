import '../style/shoppingItem.scss'

export default function ShoppingItem({ item, onToggle, onAmountChange }) {
  function handleAmountChange(e) {
    const val = Number(e.target.value)
    if (Number.isNaN(val)) return
    if (val < 1) return
    onAmountChange(item.id, val)
  }

  return (
    <li className={item.bought ? 'bought' : ''}>
        <input
          type="checkbox"
          checked={item.bought}
          onChange={() => onToggle(item.id)}
          aria-label={`Bought: ${item.name}`}
        />
        <label className="item-label">
        <span className="item-name">{item.name}</span>
        </label>
        <input
          type="number"
          min="1"
          value={item.amount}
          onChange={handleAmountChange}
          aria-label={`Amount for ${item.name}`}
        />
    </li>
  )
}
