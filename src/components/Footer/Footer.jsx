import React from 'react'
import { Link } from 'react-router-dom'
import f from '../Styles/Footer.module.scss'

const Footer = () => {
  return (
    <div className={f.wrapper}>
      <div className={f.powered}>
        <h2>2023</h2>
        <span>Powered by nelson</span>
      </div>
      <div className={f.client_service}>
        <h2>CLIENT SERVICES</h2>
        <Link to="/contacts">
          <span>Контакты</span>
        </Link>
        <span>Политика конфиденциальности</span>
      </div>
    </div>
  )
}

export default Footer
