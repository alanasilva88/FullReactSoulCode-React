// 2. Crie um componente ConversorTemperatura, que converte o valor do input de celsius e mostra na tela a conversão para Fahrenheit. F = C x 1.8 + 32 ao clicar no botão de converter.

import './ConversorTemperatura.css';
import { useState } from "react";

const ConversorTemperatura = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const converterTemperatura = () => {
    const fahrenheitValue = (Number(celsius) * 1.8) + 32;
    setFahrenheit(fahrenheitValue);
  };

  return (
    <section className="conversor-container">
      <h1>Conversor de Temperatura</h1>
      <p>Celsius '°C' para Fahrenheit '°F'</p>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Digite a temperatura em Celsius"
      />
      <button onClick={converterTemperatura}>Converter</button>
      {fahrenheit && (
        <div className="resultado">
          <p>{celsius}°C é igual a {fahrenheit}°F</p>
        </div>
      )}
    </section>
  );
};

export default ConversorTemperatura;
