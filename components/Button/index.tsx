import style from './style.module.css';

type Props = {
    color: string;
    title: string;
    type?: "submit" | "button";
    click?: () => void;
}

const Button = ({ color, title, type, click }: Props) => {
    return (
        <div className={style.container}>
            <button type={type} className={style.button} style={{ backgroundColor: color }}>{title}</button>
        </div>
    );
}

export default Button;