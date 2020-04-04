import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css'

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

const ongId = localStorage.getItem('ongId');

export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

   async function handleNewIncident(e){
        e.preventDefault();
        const data ={
            title,
            description, 
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch (err){
            alert("Erro ao cadastrar caso");
        }
    }

    return (

        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={ logoImg } alt="Be the Hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                placeholder="Ttulo do caso" 
                value={title} onChange={e => setTitle(e.target.value)}/>
                <textarea 
                placeholder="Descricao" 
                value={description} onChange={e => setDescription(e.target.value)}/>
                <input 
                placeholder="valor em reais" 
                value={value} onChange={e => setValue(e.target.value)}/>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
        </div>

    )
}