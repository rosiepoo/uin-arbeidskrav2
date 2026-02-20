import ShoppingItem from './ShoppingItem'
import '../style/shoppingList.scss'

export default function ShoppingList({ items, onToggle, onAmountChange }) {
  return (
    <section aria-labelledby="list-heading">
      <ul>
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={onToggle}
            onAmountChange={onAmountChange}
          />
        ))}
      </ul>
    </section>
  )
}
