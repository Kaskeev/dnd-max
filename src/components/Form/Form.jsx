import React from 'react'
import styles from './Form.css'
import quo from '../../assets/quo.svg'
import Input from '../Input/Input'
import Example from '../Example/Example'

export default function Form() {
  return (
    <div className="form">
      <div className="form-top">
        <div className="form-top-left">
          <img className="quo" src={quo} />
          <span className="quo-span">Все сообщения</span>
        </div>
        <div className="form-top-right">
          <button className="form-top-btn">Сохранить</button>
          <button className="form-top-btn form-top-btn-1">Действия</button>
        </div>
      </div>
      <Input />
      <Example />
    </div>
  )
}
