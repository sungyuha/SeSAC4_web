import style from './CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={`${style.box1} ${style.center}`}>
            <h2>Css module</h2>
        </div>
    )
}
// classNames 라이브러리
// npm i classnams
// import Names from 'classnams';
// <div className = {name(style.box1, style.center)} />

export default CSSModule;