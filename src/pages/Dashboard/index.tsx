import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/31030647?s=460&u=3b11bf3d8cae5af0fb50a4f8d78d76fb5374fdbf&v=4"
            alt="Leonardo Lavigne"
          />
          <div>
            <strong>devleolavigne/primeiro-projeto-react</strong>
            <p>Primeiro projeto React para o bootcamp GoStack</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/31030647?s=460&u=3b11bf3d8cae5af0fb50a4f8d78d76fb5374fdbf&v=4"
            alt="Leonardo Lavigne"
          />
          <div>
            <strong>devleolavigne/primeiro-projeto-react</strong>
            <p>Primeiro projeto React para o bootcamp GoStack</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/31030647?s=460&u=3b11bf3d8cae5af0fb50a4f8d78d76fb5374fdbf&v=4"
            alt="Leonardo Lavigne"
          />
          <div>
            <strong>devleolavigne/primeiro-projeto-react</strong>
            <p>Primeiro projeto React para o bootcamp GoStack</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
export default Dashboard;
