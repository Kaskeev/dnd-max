import React from 'react'
import style from './Input.css'

export default function Input() {
  return (
    <div className="inp__wrapper">
      <div className="input__block">
        <div className="form__input">
          <p className="input__text">Команда</p>
          <input className="input" placeholder="add_channel_success" />
        </div>
        <div className="form__input">
          <p className="input__text">Следующая команда</p>
          <input className="input" placeholder="-" />
        </div>
      </div>
      <div className="input__block">
        <div className="form__input">
          <p className="input__text">Задержка</p>
          <input className="input" placeholder="-" />
        </div>
        <div className="form__input">
          <p className="input__text">Вопрос</p>
          <input className="input" placeholder="" />
        </div>
      </div>
      <div className="form__inp-big">
        <p className="input__text">Текст сообщения</p>
        <input className="input__big" placeholder="Ресурс добавлен в список!" />
      </div>
    </div>
  )
}
