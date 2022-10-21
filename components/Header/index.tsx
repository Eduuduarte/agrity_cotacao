import styles from './style.module.css';
import {BsBell} from 'react-icons/bs';

type Props = {
    click: () => void;
}

const Header = ({click}: Props) => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.menu} onClick={click}>
                        <div className={styles.menuBottom}></div>
                        <div className={styles.menuBottom}></div>
                        <div className={styles.menuBottom}></div>
                    </div>
                    <div className={styles.slug}>Agrity</div>
                </div>
                <div className={styles.right}>
                    <div className={styles.name}> Eduardo Duarte</div>
                    <div className={styles.icon}><BsBell /></div>
                </div>
            </div>
        </header>
    )
}

export default Header;