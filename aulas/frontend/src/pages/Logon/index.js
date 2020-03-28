import React , {useState} from 'react';
import { Link, useHistory } from  'react-router-dom'
import { FiLogIn} from 'react-icons/fi'
import api from '../../services/api'
import './styles.css';
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


export default function Logon(){
    const [ id, setId ] = useState('');
    const historia = useHistory()

   async function  handleLogin (e){
        e.preventDefault();

        try{
         const response = await api.post('sessions', { id });
         localStorage.setItem('ongs', id)
         localStorage.setItem('ongsName', response.data.name);
            historia.push('/profile')

        }catch (err) {
            alert('Falha no login , tente novamente')
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="logo" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon </h1>

                    <input 
                    placeholder="Sua ID "
                    value={id}
                    onCharge={e => setId(e.targer.value)}
                    />
                    <button className="button" type="submit"> Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Nao tenho Cadastro 
                    </Link>
                </form>
            </section>
        <img src={heroesImg} alt="Heroes" />

        </div>
        
    );
}