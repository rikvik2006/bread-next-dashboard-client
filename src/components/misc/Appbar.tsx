import styles from "./index.module.scss";
import { RiMenu3Line } from "react-icons/ri";

export const Appbar = () => {
    return (
        <div className={styles.appbar}>
            <div className={styles.menu}>
                <RiMenu3Line size={65} />
                <p>Menu</p>
            </div>
            <div>
                <p>{"Bread's Server"} </p>
            </div>
        </div>
    )
}