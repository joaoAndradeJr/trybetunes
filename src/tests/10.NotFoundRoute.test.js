import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import renderPath from './helpers/renderPath';
import { defaultUser } from './mocks';

describe('10- Crie uma rota de "Página não encontrada" e valide o acesso das rotas para pessoas logadas', () => {
  beforeEach(() => localStorage.setItem('user', JSON.stringify(defaultUser)));

  afterEach(() => localStorage.clear());

  it('Será validado se existe uma página para rotas não mapeadas e que o texto "Página não encontrada" é exibido', () => {
    renderPath('/not-found');

    expect(screen.getByText('Página não encontrada')).toBeInTheDocument();
  });

  it('Será validado se quando a pessoa logada acessa a rota "/" ela é redirecionada para a rota "/search"',
    async () => {
      renderPath('/');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 4500 },
      );

      expect(screen.getByTestId('search-artist-input')).toBeInTheDocument();
      expect(screen.queryByText('Entrar')).not.toBeInTheDocument();
      expect(window.location.pathname).toBe('/search');
    });

  it('Será validado se a pessoa é redirecionada para a rota "/" se ela não estiver logada e tentar acessar outra rota válida',
    async () => {
      localStorage.clear();
      renderPath('/profile');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3500 },
      );

      expect(screen.getByTestId('login-name-input')).toBeInTheDocument();
      expect(screen.queryByText('Editar perfil')).not.toBeInTheDocument();

      expect(window.location.pathname).toBe('/');
    });
});
