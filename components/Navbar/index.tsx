import Styles from './style.module.css';
import { MdMapsHomeWork } from 'react-icons/md';
import {RiCloseCircleLine} from 'react-icons/ri';
import {BsCashCoin} from 'react-icons/bs';

type Props = {
    click: () => void;
}

export const Navbar = ({click}: Props) => {
    return(
        <div className={Styles.Container}>
            <RiCloseCircleLine className={Styles.close} onClick={click}/>
            <div className={Styles.slug}>Agrity</div>
            <div className={Styles.area}>
                <div className={Styles.item}>
                    <MdMapsHomeWork className={Styles.icon}/>
                    <p>Home</p>
                </div>
                <div className={Styles.item}>
                    <BsCashCoin className={Styles.icon}/>
                    <p>Orçamento</p>
                </div>
            </div>
        </div>
    );
}