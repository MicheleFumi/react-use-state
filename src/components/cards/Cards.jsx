import languages from '../../data/languages.js'
import buttons from '../buttons/Buttons.jsx'
import { useState } from 'react'

export default function Card() {

    function selected(buttons) {
        console.log(buttons);
    }
    return (
        <>
            <div className="card">
                {languages.map(language => <div key={language.id} className="card-title">{language.title}</div>)}
                {languages.map(language => <div key={language.id} className="card-description">{language.description}</div>)}
            </div>
        </>
    )
}   