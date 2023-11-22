import React from 'react';
import './Campotexto.css';

const Campotexto = (props) => {
  const { label, placeholder, value, onInput } = props;
  const placeholdermodificado = `${placeholder}...`;

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholdermodificado}
        value={value}
        onInput={onInput}
      />
    </div>
  );
}

export default Campotexto;
