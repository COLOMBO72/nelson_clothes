import React from 'react';
import SL from '../Styles/Auth.module.scss';
import { useNavigate } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '@/redux/store';
// import { fetchLog, fetchReg, selectAuth } from '@/redux/slices/authSlice';
// import { redirect } from 'next/navigation';

export const AuthModal = ({ login }) => {
  // const dispatch = useAppDispatch();
  // const { user } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const [passwordright, setPasswordRight] = React.useState(false);
  const [pass, setPass] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState(false);

  const CheckPass = () => {
    const agpass = document.getElementsByTagName('input')[3].value;
    agpass == pass ? setPasswordRight(true) : setPasswordRight(false);
  };

  const onSubmitReg = (e) => {
    e.preventDefault();
    if (name.length >= 3 && email.length >= 3 && pass.length >= 6 && passwordright) {
      const obj = {
        username: name,
        email: email,
        password: pass,
      };
      setError(false);
      // dispatch(fetchReg(obj));
      navigate('/');
    } else {
      setError(true);
    }
  };
  const onSubmitLog = (e) => {
    e.preventDefault();
    const obj = {
      email: email,
      password: pass,
    };
    setError(false);
    // dispatch(fetchLog(obj));
    // console.log(user);
    navigate('/dashboard/catalog');
  };
  return (
    <div className={login ? SL.modal_wrapper_login : SL.modal_wrapper_register}>
      {login ? (
        <form onSubmit={onSubmitLog}>
          <h3>Вход</h3>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <input onChange={(e) => setPass(e.target.value)} type="password" placeholder="Пароль" />
          {error && <span className={SL.error}>Проверьте введённые данные!</span>}
          <button>Войти</button>
        </form>
      ) : (
        <form onSubmit={onSubmitReg}>
          <h3>Регистрация</h3>
          <div className={SL.input_wrapper}>
            <input onChange={(e) => setName(e.target.value)} type="name" placeholder="Имя" />
            <img src="/icon-profile.png" width={30} height={30} alt="" />
          </div>
          <div className={SL.input_wrapper}>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
            <img src="/icon-messages.png" width={30} height={30} alt="" />
          </div>
          <div className={SL.input_wrapper}>
            <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Пароль" />
            <img src="/icon-password.png" width={30} height={30} alt="" />
          </div>
          <div className={SL.input_wrapper}>
            <input
              onChange={CheckPass}
              id="agpass"
              type="password"
              placeholder="Подтвердите пароль"
            />
            {passwordright ? (
              <img src="/icon-success.png" width={30} height={30} alt="" />
            ) : (
              <img src="/icon-defined.png" width={30} height={30} alt="" />
            )}
          </div>
          {error && <span className={SL.error}>Проверьте введённые данные!</span>}
          <button>Создать аккаунт</button>
        </form>
      )}
    </div>
  );
};

const Auth = () => {
  // const { user } = useAppSelector(selectAuth);
  const [login, setLogin] = React.useState(true);
  const [register, setRegister] = React.useState(false);
  const handleLogin = () => {
    if (register) {
      setRegister(false);
      setLogin(true);
    } else {
      setLogin(true);
    }
  };
  const handleRegister = () => {
    if (login) {
      setLogin(false);
      setRegister(true);
    } else {
      setRegister(true);
    }
  };

  return (
    <div className={SL.auth_page}>
      <div className={SL.auth_wrapper}>
        <div className={SL.auth_register}>
          {register ? (
            <AuthModal login={login} />
          ) : (
            <div>
              <h3>Нет аккаунта?</h3>
              <span>Зарегистрируйтесь и найдите ту самую вещицу которая вам нужна...</span>
              <button className={SL.wrapper_button} onClick={handleRegister}>
                СОЗДАТЬ АККАУНТ
              </button>
            </div>
          )}
        </div>
        <div className={SL.auth_login}>
          {login ? (
            <AuthModal login={login} />
          ) : (
            <div>
              <h3>Уже есть аккаунт?</h3>
              <span>Давайте зайдём и прикупим пару вещей...</span>
              <button className={SL.wrapper_button} onClick={handleLogin}>
                ВОЙТИ
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
