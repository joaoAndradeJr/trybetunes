import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderPath from './helpers/renderPath';
import { defaultUser } from './mocks';

describe('2- Crie uma página para pesquisar artistas', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(defaultUser));
    jest.restoreAllMocks();
  });

  afterEach(() => localStorage.clear());
  
  it('Será validado se ao navegar para a rota "/search", o nome da pessoa usuária está presente na tela',
    async () => {
      renderPath('/search');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      const headerUserName = screen.getByTestId('header-user-name');
      expect(headerUserName).toBeInTheDocument();

      expect(headerUserName.textContent).toContain('User Test');
    });

  it('Será validado se ao navegar para a rota "/search", o input e o botão estão presentes na tela',
    async () => {
      renderPath('/search');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(screen.getByTestId('search-artist-input')).toBeInTheDocument();
      expect(screen.getByTestId('search-artist-button')).toBeInTheDocument();
    });

  it('Será validado se o botão está habilitado somente se o input de nome tiver 2 ou mais caracteres',
    async () => {
      renderPath('/search');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      const searchArtistInput = screen.getByTestId('search-artist-input');
      expect(searchArtistInput).toBeInTheDocument();
      expect(searchArtistInput.value).toBe('');

      const searchArtistButton = screen.getByTestId('search-artist-button');
      expect(searchArtistButton).toBeInTheDocument();
      expect(searchArtistButton).toBeDisabled();

      userEvent.type(searchArtistInput, 'U');
      expect(searchArtistInput.value).toBe('U');
      expect(searchArtistButton).toBeDisabled();

      userEvent.type(searchArtistInput, '2');
      expect(searchArtistInput.value).toBe('U2');
      expect(searchArtistButton).toBeEnabled();
    });
});
