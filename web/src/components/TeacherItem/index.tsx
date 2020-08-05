import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/49599535?s=460&u=3c645edcebc1b3ffaaa66ecc841a4b0cf755582a&v=4" alt="Lucas Del Puerto"/>
                <div>
                    <strong>Lucas Del Puerto Garcia</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Fanático por programação backend e teste de algoritmos!
                <br/><br/>
                Não é dificil ver fumaça saindo de sua cabeça enquanto soluciona problemas.
            </p>

            <footer>
                <p>Preco/hora 
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;