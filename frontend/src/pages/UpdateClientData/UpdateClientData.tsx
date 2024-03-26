import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateUserForm: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/employer/customer');
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar os usuários.", error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  useEffect(() => {
    const user = users.find(u => u.id === selectedUser);
    if (user) {
      setName(user.name);
      setPhoneNumber(user.phoneNumber);
      setAge(user.age.toString());
      setEmail(user.email);
    } else {
      setName('');
      setPhoneNumber('');
      setAge('');
      setEmail('');
    }
  }, [selectedUser, users]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      await axios.put('http://localhost:3000/employer/updateEmployer', {
        id: selectedUser,
        name,
        phoneNumber,
        age,
        email,
      });
      alert('Usuário atualizado com sucesso!');
      fetchAllUsers();
    } catch (error) {
      alert('Erro ao atualizar o usuário.');
    }
  };

  return (
    <div>
      <select data-cy="user-select" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Selecione um usuário</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>{user.name}</option>
        ))}
      </select>

      <form onSubmit={handleSubmit}>
        <input
          data-cy="input-name"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          data-cy="input-phoneNumber"
          type="text"
          placeholder="Telefone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          data-cy="input-age"
          type="text"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          data-cy="input-email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button data-cy="submit-button" type="submit">Atualizar Usuário</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
