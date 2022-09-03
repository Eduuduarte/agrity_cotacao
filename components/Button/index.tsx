import style from './style.module.css';

type Props = {
    color: string;
    title: string;
}

const Button = ({color, title}: Props) => {
    return (
        <div className={style.container} style={{backgroundColor: color}}>{title}</div>
    );
}

export default Button;