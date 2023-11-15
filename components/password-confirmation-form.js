import styles from "./password-confirmation-form.module.css";

const PasswordConfirmationForm = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.nhpLiMt}>Nhập lại mật khẩu</div>
      <img className={styles.removeRedEye} alt="" src="/remove-red-eye.svg" />
      <div className={styles.mtKhu}>{`Mật khẩu `}</div>
      <img className={styles.removeRedEye1} alt="" src="/remove-red-eye.svg" />
    </div>
  );
};

export default PasswordConfirmationForm;
