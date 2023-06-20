import React from 'react';
import SCon from '../../Styles/Contacts.module.scss';
import { Link } from 'react-router-dom';
import { Instagram, Telegram, Twitter } from '@mui/icons-material';

const Contacts = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  return (
    <div className={SCon.contacts_page}>
      <div className={SCon.contacts_wrapper}>
        <div className={SCon.urls}>
          <Link href={'https://instagram.com/1'}>
            <Instagram />
          </Link>
          <Link href={'https://twitter.com/1'}>
            <Twitter />
          </Link>
          <Link href={'https://telegram.com/1'}>
            <Telegram />
          </Link>
        </div>
        <div className={SCon.send_message_wrapper}>
          <h2>Отправить нам сообщение?</h2>
          <div className={SCon.input_wrapper}>
            <input onChange={(e) => setName(e.target.value)} type="name" placeholder="Имя" />
            {name.length >= 3 ? (
              <img src="/icon_success.png" width={30} height={30} alt="" />
            ) : (
              <img src="/icon-done.png" width={30} height={30} alt="" />
            )}
          </div>
          <div className={SCon.input_wrapper}>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            {email.length >= 3 ? (
              <img src="/icon_success.png" width={30} height={30} alt="" />
            ) : (
              <img src="/icon-done.png" width={30} height={30} alt="" />
            )}
          </div>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            maxLength={300}
            minLength={10}
            placeholder="Сообщение"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
