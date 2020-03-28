import React, {useState} from 'react' ;
import { Link ,useHistory} from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';

import api from "../../services/api"
import logoImg from '../../assets/logo.svg';

import './styles.css'

export default function NewIncidents(){
const [ title , setTitle] = useState('')
const [ description , setDescription] = useState('')
const [ value , setValeu] = useState('')
const ongId = localStorage.getItem('ongId')
const history = useHistory();

async function handNewIncident (e){
    e.preventDefault();
    const data = {
        title,
        description,
        value,
    };

    try{ 
       await api.post('incidents',  data , {
           headers: {
               Authorization:ongId ,
           }
       })
       history.push('/profile')
    }catch (err) {
        alert('erro ao cadastrar caso , tente novamente')
    }
}

    return (
        <div className="new-incidents-container">
            <div className="content">
               <section>
               <img src={logoImg} alt="BE The Hero" />
               <h1>Cadastrar novo  caso </h1>
               <p>Faça seu cadastro, entre na plataforma e 
                    ajude pessoas a encontrarem os casos da sua ONG
               </p>
               <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para Home 
                    </Link>

                </section> 
                <form onSubmit={handNewIncident} >
                    <input 
                    placeholder="Titulo do caso"
                    value={title}
                    onChange={ e => setTitle(e.target.value)}
                    />
                    <textarea 
                    placeholder="Descrição"
                    value={description}
                     onChange={ e => setDescription(e.target.value)}
                    />
  
  
                    <input 
                    placeholder="Valor em reais"
                    value={value}
                    onChange={ e => setValeu(e.target.value)}
                    />
                    
                      
                    
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}