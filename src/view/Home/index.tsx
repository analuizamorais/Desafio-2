import React, { useState, useEffect } from 'react';
import { Container } from './style';
import api from '../../services/api'

interface IProduct {
    id: number;
    name: string;
    photo: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    });

    const handleCart = ( index: string ) => {
        //const productStore = JSON.stringify(data[index]); 
        //localStorage.setItem(`@Produto-${index}`, productStore);
        localStorage.setItem(`@Produto-${index}`, index);
    }

    return (
        <Container>
            <section>
                <div className="product-content" key="0">
                    <img src="https://m.media-amazon.com/images/I/71-bUmSzbrL._AC_UL320_.jpg" alt="iphone" width="70%" height="auto"/>
                     <h4>Café Baggio Caramelo</h4>
                    <span>Café torrado e moído aroma de caramelo Baggio, 250g</span>
                    <h6>R$ 19.90</h6>
                    <button onClick={() => handleCart("0")}>Adicionar ao carrinho</button>
                </div>
            </section>
            <section>
                <div className="product-content" key="1">
                    <img src="https://m.media-amazon.com/images/I/616tIxobFwS._AC_UL320_.jpg" alt="iphone" width="70%" height="auto"/>
                     <h4>Café Santo Grão</h4>
                    <span>Café especial Santo Grão, Sul de Minas Gerais, 250g</span>
                    <h6>R$ 16.65 </h6>
                    <button onClick={() => handleCart("1")}>Adicionar ao carrinho</button>
                </div>
            </section>
            <section>
                <div className="product-content" key="2">
                    <img src="https://m.media-amazon.com/images/I/71va47Jb7iL._AC_UL320_.jpg" alt="iphone" width="70%" height="auto"/>
                     <h4>Café Pronova</h4>
                    <span>Café gourmet especial Arábica moído Montanhas do Espírito Santo, 500g</span>
                    <h6>R$ 21.06</h6>
                    <button onClick={() => handleCart("2")}>Adicionar ao carrinho</button>
                </div>
            </section>
            <section>
                <div className="product-content" key="3">
                    <img src="https://m.media-amazon.com/images/I/710liXyayoS._AC_UL320_.jpg" alt="iphone" width="70%" height="auto"/>
                     <h4>Café Santa Mônica</h4>
                    <span>Café gourmet moído válvula tin tie, 250g</span>
                    <h6>R$ 15.80</h6>
                    <button onClick={() => handleCart("3")}>Adicionar ao carrinho</button>
                </div>
            </section>
        </Container>
    );
}

export default Home;

/*{data.map((prod, index) => (
    <div className="product-content" key={prod.id}>
        <img src={prod.photo} alt="iphone" width="70%" height="auto"/>
        <h4>{prod.name}</h4>
        <span>{prod.description}</span>
        <h6>R$ {prod.price}</h6>
        <button onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
    </div>
))}*/