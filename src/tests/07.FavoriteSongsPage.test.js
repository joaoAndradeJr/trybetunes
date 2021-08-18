import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as favoriteSongsAPI from '../services/favoriteSongsAPI';
import renderPath from './helpers/renderPath';
import { defaultUser } from './mocks';

describe('7- Crie a página de listagem de músicas favoritas', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('favorite_songs', JSON.stringify([]));
  });

  afterEach(() => localStorage.clear());

  it('Será validado se a rota `/favorites` é uma rota existente', async () => {
    renderPath('/favorites');

    await waitForElementToBeRemoved(
      () => screen.getAllByText('Carregando...'),
      { timeout: 3000 },
    );

    expect(screen.queryByText('Página não encontrada')).not.toBeInTheDocument();
    expect(window.location.pathname).toBe('/favorites');
  });

  it('Será validado se o nome da pessoa usuária e o link para página de pesquisa são exibidos na tela',
    async () => {
      renderPath('/favorites');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(screen.getByTestId('header-user-name')).toBeInTheDocument();
      expect(screen.getByTestId('header-user-name').textContent).toBe('User Test');

      expect(screen.getByTestId('link-to-search')).toBeInTheDocument();
    });

  it('Será validado se exite um link para a página de músicas favoritas no cabeçalho',
    async () => {
      renderPath('/favorites');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(screen.getByTestId('header-user-name')).toBeInTheDocument();
      expect(screen.getByTestId('link-to-search')).toBeInTheDocument();
      expect(screen.getByTestId('link-to-favorites')).toBeInTheDocument();
    });

  it('Será validado se a requisição para `getFavoriteSongs` é feita para  recuperar as músicas favoritas',
    async () => {
      const spy = jest.spyOn(favoriteSongsAPI, 'getFavoriteSongs');

      renderPath('/favorites');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(spy).toBeCalled();
    });

  it('Será validado se é exibida a lista de músicas favoritas',
    async () => {
      const favoriteSongs = [
        {
          trackId: '12',
          trackName: 'Track Name 1',
          previewUrl: 'preview-url-1',
        },
        {
          trackId: '21',
          trackName: 'Track Name 2',
          previewUrl: 'preview-url-2',
        },
      ];
      localStorage.setItem('favorite_songs', JSON.stringify(favoriteSongs));

      renderPath('/favorites');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(screen.getByText('Track Name 1')).toBeInTheDocument();
      expect(screen.getByText('Track Name 2')).toBeInTheDocument();
      expect(screen.getAllByTestId('audio-component')).toHaveLength(2);
    });

  it('Será validado se a lista de músicas favoritas é atualizada ao remover uma música da lista',
    async () => {
      const favoriteSongs = [
        {
          trackId: 12,
          trackName: 'Track Name 1',
          previewUrl: 'preview-url-1',
        },
        {
          trackId: 21,
          trackName: 'Track Name 2',
          previewUrl: 'preview-url-2',
        },
        {
          trackId: 30,
          trackName: 'Track Name 3',
          previewUrl: 'preview-url-3',
        },
      ];
      localStorage.setItem('favorite_songs', JSON.stringify(favoriteSongs));

      renderPath('/favorites');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },

      );

      const checkboxes = screen.getAllByLabelText('Favorita');

      expect(screen.getByText('Track Name 1')).toBeInTheDocument();
      expect(screen.getByText('Track Name 2')).toBeInTheDocument();
      expect(screen.getByText('Track Name 3')).toBeInTheDocument();
      expect(screen.getAllByTestId('audio-component')).toHaveLength(3);
      expect(checkboxes).toHaveLength(3);

      userEvent.click(checkboxes[0]);

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(screen.queryByText('Track Name 1')).not.toBeInTheDocument();
      expect(screen.getByText('Track Name 2')).toBeInTheDocument();
      expect(screen.getByText('Track Name 3')).toBeInTheDocument();
      expect(screen.getAllByTestId('audio-component')).toHaveLength(2);
      expect(screen.getAllByLabelText('Favorita')).toHaveLength(2);
    });
});
