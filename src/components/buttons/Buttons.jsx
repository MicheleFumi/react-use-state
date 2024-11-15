import languages from '../../data/languages.js'
import style from './Buttons.module.css'
import { useState } from 'react'
export default function Buttons() {
    const [selected, setSelected] = useState(null)
    function handleClick(e) {

        const newSelected = Number(e.target.getAttribute('data-index'))
        setSelected(newSelected)


    }


    return (


        <>
            <div className="container">
                {languages.map(language =>

                    <button onClick={handleClick}
                        data-index={language.id}
                        className={selected == language.id ? `${style.selected}` : `${style.button} ${style[language.title]}`}

                        key={language.id}


                    >{language.title}

                    </button >




                )}

                <div className={style.card}>
                    <div className={selected == null ? '' : `${style.hide}`}>nessun linguaggio selezionato</div>
                    {languages.map(language => <h2 key={language.id} className={selected == language.id ? `${style.cardTitle}` : `${style.hide}`}>{language.title}</h2>)}
                    {languages.map(language => <div key={language.id} className={selected == language.id ? `${style.cardDescription}` : `${style.hide}`}>{language.description}</div>)}
                </div>
            </div>


        </>

    )
}