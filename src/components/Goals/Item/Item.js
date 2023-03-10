import './Item.css'

const Item = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id)
  }

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  )
}

export default Item
