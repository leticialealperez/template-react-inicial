import React from 'react';
import './SectionFeliz.css';

interface SectionFelizProps {
    titulo: string;
    primeiroTexto: string;
    segundoTexto?: string;
    imagem: string;
    invertido?: boolean;
}

const SectionFeliz: React.FC<SectionFelizProps> = ({titulo, imagem, primeiroTexto, segundoTexto, invertido }) => {
    return (
        <section className='section' style={invertido ? { flexDirection: 'row-reverse'} : { flexDirection: 'row'} }>
            <div>
                <h2 className='titulo'>{titulo}</h2>
                <p className='paragrafo'>{primeiroTexto}</p>
                <p className='paragrafo'>{segundoTexto}</p>
            </div>
            <img src={imagem} alt="Uma imagem feliz" className='imagem' />
        </section>
    )
}

export default SectionFeliz;