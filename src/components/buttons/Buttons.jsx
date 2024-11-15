import languages from '../../data/languages.js'
import style from './Buttons.module.css'
export default function buttons() {

    function handleClick(e) {
        console.log(e.target);

    }
    function handleHover(e) {

    }

    return (

        <>
            {languages.map((language, index) => <button onClick={handleClick} data-index={index} className={style.button} key={index}>{language.title}</button>)}

        </>

    )
}