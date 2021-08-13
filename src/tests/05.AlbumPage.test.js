import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as musicsAPI from '../services/musicsAPI';
import renderPath from './helpers/renderPath';
import { defaultUser, musicAPIDefaultResponse } from './mocks';

describe('5- Crie a página de listagem das músicas do álbum selecionado', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('favorite_songs', JSON.stringify([]));
  });

  afterEach(() => localStorage.clear());

  it('Será validado se a rota `/album/:id` é uma rota existente', async () => {
    jest.spyOn(musicsAPI, 'default').mockImplementation(
      () => Promise.resolve(musicAPIDefaultResponse),
    );
    renderPath('/album/123');

    await waitForElementToBeRemoved(
      () => screen.getAllByText('Carregando...'),
      { timeout: 3000 },
    );

    expect(screen.queryByText('Página não encontrada')).not.toBeInTheDocument();
    expect(window.location.pathname).toBe('/album/123');
  });

  it('Será validado se o nome da pessoa usuária está presente na tela',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );

      renderPath('/album/12');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(screen.getByTestId('header-user-name')).toBeInTheDocument();
      expect(screen.getByTestId('header-user-name').textContent).toBe('User Test');
    });

  it('Será validado se existe um link para a página de pesquisa no cabeçalho',
    async () => {
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );

      renderPath('/album/12');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      expect(screen.getByTestId('header-user-name')).toBeInTheDocument();
      expect(screen.getByTestId('link-to-search')).toBeInTheDocument();

      userEvent.click(screen.getByTestId('link-to-search'));
      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );
      expect(window.location.pathname).toBe('/search');
    });

  it('Será validado se o serviço de `musicsAPI` está sendo chamado', async () => {
    const spy = jest.spyOn(musicsAPI, 'default').mockImplementation(
      () => Promise.resolve(musicAPIDefaultResponse),
    );

    renderPath('/album/12');

    await waitForElementToBeRemoved(
      () => screen.getAllByText('Carregando...'),
      { timeout: 3000 },
    );

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('12');
  });

  it('Será validado se o nome da banda ou artista e o nome do álbum são exibidos', async () => {
    jest.spyOn(musicsAPI, 'default').mockImplementation(
      () => Promise.resolve(musicAPIDefaultResponse),
    );

    renderPath('/album/12');

    await waitForElementToBeRemoved(
      () => screen.getAllByText('Carregando...'),
      { timeout: 3000 },
    );

    const artistNameElement = screen.getByTestId('artist-name'); 
    expect(artistNameElement).toBeInTheDocument();
    expect(artistNameElement).toHaveTextContent("Artist Name");

    const albumNameElement = screen.getByTestId('album-name'); 
    expect(albumNameElement).toBeInTheDocument();
    expect(albumNameElement).toHaveTextContent("Collection Name");
  });

  it('Será validado se todas músicas retornadas pela API são listadas', async () => {
    jest.spyOn(musicsAPI, 'default').mockImplementation(
      () => Promise.resolve(musicAPIDefaultResponse),
    );

    renderPath('/album/12');

    await waitForElementToBeRemoved(
      () => screen.getAllByText('Carregando...'),
      { timeout: 3000 },
    );

    expect(screen.getByText('Track Name 1')).toBeInTheDocument();
    expect(screen.getByText('Track Name 2')).toBeInTheDocument();
    expect(screen.getByText('Track Name 3')).toBeInTheDocument();
    expect(screen.getByText('Track Name 4')).toBeInTheDocument();
    expect(screen.getAllByTestId('audio-component')).toHaveLength(4);
  });
});
