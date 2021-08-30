import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import renderPath from './helpers/renderPath';
import { defaultUser } from './mocks';

describe('14 - Crie uma validação de acesso na rota raíz', () => {
  beforeEach(() => localStorage.setItem('user', JSON.stringify(defaultUser)));

  afterEach(() => localStorage.clear());

  it('Será validado se quando a pessoa logada acessa a rota / ela é redirecionada para a rota /search',
    async () => {
      renderPath("/");

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 4500 },
      );

      expect(screen.getByTestId('search-artist-input')).toBeInTheDocument();
      expect(screen.queryByText('Entrar')).not.toBeInTheDocument();
      expect(window.location.pathname).toBe('/search');
    });


  it('Será validado se quando a pessoa não logada acessa a rota / ela não é redirecionada',
    async () => {
      localStorage.setItem('user', JSON.stringify({}))
      renderPath("/");

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 4500 },
      );

      expect(screen.queryByText('Entrar')).toBeInTheDocument();
      expect(window.location.pathname).toBe("/");
    });
});