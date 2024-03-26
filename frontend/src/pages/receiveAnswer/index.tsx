import { useState } from 'react';
import axios from 'axios'; 

export const ReceiveAnswer = () => {
  const [formData, setFormData] = useState({
    questionA: '',
    questionB: '',
    questionC: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { questionA, questionB, questionC } = formData;
    const idCustomer = ''; // Seu ID de cliente aqui
    const idCompany = ''; // Seu ID de empresa aqui
    const idReport = ''; // Seu ID de relatório aqui

    try {
      await axios.post('http://localhost:3000/client/answerdReport', {
        questionA,
        questionB,
        questionC,
        idCustomer,
        idCompany,
        idReport,
      });

      setFormData({
        questionA: '',
        questionB: '',
        questionC: '',
      });

      alert('Relatório enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar o relatório:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Questão A:
          <input
            type="text"
            name="questionA"
            value={formData.questionA}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Questão B:
          <input
            type="text"
            name="questionB"
            value={formData.questionB}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Questão C:
          <input
            type="text"
            name="questionC"
            value={formData.questionC}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Enviar Relatório</button>
    </form>
  );
};