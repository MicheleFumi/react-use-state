import languages from '../../data/languages.js'
import style from './Buttons.module.css'
import { useState } from 'react'
export default function buttons() {
    const [selected, setSelected] = useState(0)
    function handleClick(e) {

        const newSelected = Number(e.target.getAttribute('data-index'))
        setSelected(newSelected)
    }
    function handleHover(e) {

    }

    return (


        <>
            {languages.map(language => <button onClick={handleClick}
                data-index={language.id}
                className={selected == language.id ? `${style.selected}` : `${style.button}`}

                key={language.id}


            >{language.title}

            </button >)
            }

        </>

    )
}