import FormContainer from "../components/form-container";
import styles from "./index.module.css";

const NgNhp = () => {
  return (
    <div className={styles.ngNhp}>
      <div className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-2@2x.png" />
        <div className={styles.phongCchL}>
          Phong cách là cách bạn thể hiện bản thân
        </div>
      </div>
      <FormContainer />
    </div>
  );
};

export default NgNhp;
