import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as userAPI from '../services/userAPI';
import renderPath from './helpers/renderPath';
import { defaultUser } from './mocks';

describe('8- Crie a página de exibição de perfil', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    localStorage.setItem('user', JSON.stringify(defaultUser));
  });

  afterEach(() => localStorage.clear());

  it('Será validado se a rota `/profile` é uma rota existente', async () => {
    renderPath('/profile');

    await waitForElementToBeRemoved(
      () => screen.getAllByText('Carregando...'),
      { timeout: 3000 },
    );

    expect(screen.queryByText('Página não encontrada')).not.toBeInTheDocument();
    expect(window.location.pathname).toBe('/profile');
  });

  it('Será validado se o nome da pessoa usuária, o link para página de pesquisa e o link para a página de músicas favoritas são exibidos na tela',
    async () => {
      renderPath('/profile');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(screen.getByTestId('header-user-name')).toBeInTheDocument();
      expect(screen.getByTestId('header-user-name').textContent).toBe('User Test');
      expect(screen.getByTestId('link-to-search')).toBeInTheDocument();
      expect(screen.getByTestId('link-to-favorites')).toBeInTheDocument();
    });

  it('Será validado se existe um link para a página de perfil no cabeçalho',
    async () => {
      renderPath('/search');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(screen.getByTestId('link-to-profile')).toBeInTheDocument();
      userEvent.click(screen.getByTestId('link-to-profile'));

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );
      expect(window.location.pathname).toBe('/profile');
    });

  it('Será validado se é feita a requisição `getUser` para recuperar e exibir informações do usuário',
    async () => {
      const spy = jest.spyOn(userAPI, 'getUser');

      renderPath('/profile');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(spy).toBeCalled();
      expect(screen.getAllByText('User Test')).toHaveLength(2);
      expect(screen.getByText('email@test.com')).toBeInTheDocument();
      expect(screen.getByText('Lorem ipsum')).toBeInTheDocument();
      expect(screen.getByTestId('profile-image')).toHaveAttribute('src', 'url-to-image');
    });
});
