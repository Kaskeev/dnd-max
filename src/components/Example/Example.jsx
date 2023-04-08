import React, { useId, useState } from 'react'
import './example.css'
import upDown from '../../assets/up-down.svg'
import plus from '../../assets/plus.svg'

const Example = () => {
  const [todos, setTodos] = useState([
    [
      { id: 1, text: 'React', completed: false },
      { id: 2, text: 'Vue', completed: false },
    ],
    [
      { id: 4, text: 'Angular', completed: false },
      { id: 5, text: 'Svelte', completed: false },
    ],
  ])

  const [modalShow, setModalShow] = useState(false)
  const [draggingTodo, setDraggingTodo] = useState(null)
  const [draggingRow, setdraggingRow] = useState(null)
  const [input, setInput] = useState('')

  const [rowIndex, setRowIndex] = useState(null)
  const [itemIndex, setItemIndex] = useState(null)

  const [isEdit, setIsEdit] = useState(false)

  const handleDragStart = (e, todo, index) => {
    setDraggingTodo(todo)
    setdraggingRow(index)
  }

  const handleDragOver = (e, todo, rowIndex, dragRow = false) => {
    e.preventDefault()
    const overTodo = todo

    if (
      Array.isArray(overTodo) !== Array.isArray(draggingTodo) ||
      overTodo === draggingTodo
    ) {
      return
    }
    const newTodos = [...todos]
    if (dragRow) {
      const oldRowIndex = todos.indexOf(draggingTodo)
      const newRowIndex = todos.indexOf(overTodo)
      newTodos.splice(oldRowIndex, 1)
      newTodos.splice(newRowIndex, 0, draggingTodo)
    } else {
      const oldIndex = todos[draggingRow].indexOf(draggingTodo)
      const newIndex = todos[rowIndex].indexOf(overTodo)

      if (draggingRow !== rowIndex) {
        newTodos[draggingRow].splice(oldIndex, 1)
        newTodos[rowIndex].splice(newIndex, 0, draggingTodo)
        setdraggingRow(rowIndex)
      } else {
        newTodos[rowIndex].splice(oldIndex, 1)
        newTodos[rowIndex].splice(newIndex, 0, draggingTodo)
      }
    }

    setTodos(newTodos)
  }

  const handleDragEnd = (e, todo) => {
    setDraggingTodo(null)
  }

  const openModalAdd = (index) => {
    setModalShow(true)
    setRowIndex(index)
    setIsEdit(false)
  }

  const openModalEdit = (text, rowIndex, indexItem) => {
    setInput(text)
    setModalShow(true)
    setRowIndex(rowIndex)
    setItemIndex(indexItem)
    setIsEdit(true)
  }

  const changeInput = (e) => {
    setInput(e.target.value)
  }

  const addNewTodo = () => {
    const newTodos = [...todos]
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    }

    newTodos[rowIndex].push(newTodo)
    setTodos(newTodos)
    setModalShow(false)
    setInput('')
  }

  const editTodo = () => {
    const newTodos = [...todos]
    newTodos[rowIndex][itemIndex].text = input
    setTodos(newTodos)
    setModalShow(false)
    setInput('')
  }

  const deleteTodo = () => {
    const newTodos = [...todos]
    newTodos[rowIndex].splice(itemIndex, 1)
    setModalShow(false)
    setInput('')
  }

  const addNewRow = () => {
    setModalShow(true)
    setIsEdit(false)
    const newIndex = todos.length
    setRowIndex(newIndex)
    const newTodos = [...todos, []]
    setTodos(newTodos)
  }

  return (
    <div className="dnd">
      <h1 className="dnd-title">Кнопки</h1>
      {todos.map((row, index) => (
        <div className="dnd-row">
          <div className="todos">
            {row.map((todo, indexItem) => (
              <div
                key={todo.id}
                draggable
                onDragStart={(e) => handleDragStart(e, todo, index)}
                onDragOver={(e) => handleDragOver(e, todo, index)}
                onDragEnd={(e) => handleDragEnd(e, todo)}
                className="dnd-item"
                onClick={() => openModalEdit(todo.text, index, indexItem)}
              >
                <span>{todo.text}</span>
              </div>
            ))}
          </div>
          <div className="add-btn" onClick={() => openModalAdd(index)}>
            <img className="plus" src={plus} />
          </div>
          <div
            className="row-drug"
            draggable
            onDragStart={(e) => handleDragStart(e, row)}
            onDragOver={(e) => handleDragOver(e, row, index, true)}
            onDragEnd={(e) => handleDragEnd(e, row)}
          >
            <img className="upDown" src={upDown} />
          </div>
        </div>
      ))}

      <div className="add-new-row" onClick={addNewRow}>
        <img className="add-row-plus" src={plus} /> Добавить ряд
      </div>

      {modalShow && (
        <div className="modal-container">
          <div className="modal-content">
            <h4 className="modal-title">Редактирование</h4>
            <div className="modal-block">
              <p className="modal-text">Название</p>
              <input
                type="text"
                value={input}
                onChange={(e) => changeInput(e)}
                className="input-todo"
              />
            </div>
            <div className="modal-block">
              <p className="modal-text">Значение</p>
              <input type="text" className="input-todo" />
            </div>
            <div className="btn-block-modal">
              {!isEdit && (
                <button className="save" onClick={addNewTodo}>
                  Сохранить
                </button>
              )}
              {isEdit && (
                <button className="save delete" onClick={deleteTodo}>
                  Delete
                </button>
              )}
              {isEdit && (
                <button className="save edit" onClick={editTodo}>
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Example
