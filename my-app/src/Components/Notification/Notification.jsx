import style from './Notification.module.css';

const Notification = ({ message }) => <p className ={style.Notification}>{message}</p>;

export default Notification;