import { FC } from 'react';
import { NotificationType } from '../layout/NotificationsProvider';
import {
  FaCircleCheck,
  FaCircleInfo,
  FaTriangleExclamation,
  FaX,
} from 'react-icons/fa6';
import styles from '@/app/styles/notification.module.css';

interface NotificationProps {
  notification: NotificationType;
  onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ notification, onClose }) => {
  let color;
  let Icon;

  switch (notification.status) {
    case 'info':
      color = '#0075ff';
      Icon = FaCircleInfo;
      break;
    case 'error':
      color = '#e92626';
      Icon = FaTriangleExclamation;
      break;
    case 'success':
      color = '#04a004';
      Icon = FaCircleCheck;
      break;
  }

  return (
    <div className={styles.notification}>
      <button aria-label="close" onClick={onClose}>
        <FaX />
      </button>
      <p>{notification.message}</p>
      <span>
        <Icon color={color} size="3rem" />
      </span>
    </div>
  );
};
export default Notification;
