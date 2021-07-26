import * as S from './style';
import React, { useState, useEffect, useRef } from 'react';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const container = useRef(null);
  

    function enviarEmail() {
        localStorage.setItem("email", email);
        localStorage.setItem("nome", nome);
    };

    useEffect(() => {
    }, [])

    return (
        <S.FooterStyle role="contentinfo">
            <S.Content ref={container}>
            <S.FormContainer>
                <h2>Ei, CoffeeLover! Receba as novidades diretamente no seu e-mail!</h2>
                <h3>Como podemos te chamar?</h3>
                <S.Input className="nome" placeholder="Seu nome ou apelido" value={nome} onChange={e => setNome(e.target.value)} />
                <h3>Insira o seu melhor e-mail!</h3>
                <S.Input className="email" placeholder="exemplo@provedor.com" value={email} onChange={e => setEmail(e.target.value)} />
                <p></p><S.Button type="button" onClick={enviarEmail}> Enviar </S.Button>
            </S.FormContainer>
        
        </S.Content>
           <h6> &copy; Ana Luiza Morais | Hiring Coders </h6>
        </S.FooterStyle>
    );
}

export default Footer;