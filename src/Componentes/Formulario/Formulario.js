import './Formulario.css'
import Campotexto from '../Campotexto/Campotexto'
import Botao from '../Botao/Botao'
import api from '../Cep/api'
import React, { useState } from 'react'

const Formulario = () => {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');


    function buscarEndereco(cep) {
        // Verificar se o CEP não está vazio antes de fazer a chamada à API
        if (cep.trim() === '') {
          // Lida com o caso em que o CEP está vazio, se necessário
          return;
        }
      
        // Fazer solicitação à API ViaCEP usando o valor atualizado do CEP
        api.get(`${cep}/json/`)
          .then(response => {
            const dados = response.data;
            setEndereco(dados.logradouro);
            setBairro(dados.bairro);
            setCidade(dados.localidade);
          })
          .catch(error => {
            console.error('Erro ao buscar endereço:', error.message);
            // Lida com o erro, se necessário
          });
      }
      


    return (
        <section className="Formulario">
              <form >
                <h2>Digite os seus dados:</h2>
                <Campotexto label="Nome" placeholder="Digite seu nome" />
                <Campotexto label="CPF" placeholder="Digite seu CPF" />
                <Campotexto
                    label="CEP"
                    placeholder="Digite seu CEP"
                    type="text"
                    value={cep}
                    onInput={(e) => {
                        const novoCep = e.target.value;
                        setCep(novoCep);
                        buscarEndereco(novoCep);
                    }}
                />
                <Campotexto label="Endereço" placeholder="Digite seu endereço" value={endereco} />
                <Campotexto label="Bairro" placeholder="Digite seu Bairro" value={bairro} />
                <Campotexto label="Cidade" placeholder="Digite sua cidade" value={cidade} />
              </form>
        </section>
    )
}

export default Formulario