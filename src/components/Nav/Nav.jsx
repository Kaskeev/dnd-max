import React from 'react'
import style from './Nav.css'

export default function Nav() {
  return (
    <div className="nav__block">
      <ul className="nav">
        <li className="nav__list">Главная</li>
        <li className="nav__list">Сценарий</li>
        <li className="nav__list">Заказы</li>
        <li className="nav__list">Контакты</li>
        <li className="nav__list">Продукты</li>
        <li className="nav__list">Маркетинг</li>
        <li className="nav__list">Аналитика</li>
        <li className="nav__list">Другое</li>
      </ul>
      <div className="nav__account">
        <div className="nav__acc-block">В</div>
        <p className="nav__acc-text">Eldiyar's Team</p>
      </div>
    </div>
  )
}
