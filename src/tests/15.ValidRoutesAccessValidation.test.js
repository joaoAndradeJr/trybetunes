import { screen,
  waitFor,
  waitForElementToBeRemoved 
} from '@testing-library/react';

import renderPath from './helpers/renderPath';
import { defaultUser, musicAPIDefaultResponse } from './mocks';

import * as musicsAPI from '../services/musicsAPI';

describe('15 - Crie uma validação de acesso nas rotas válidas', () => {
  beforeEach(() => localStorage.setItem('favorite_songs', JSON.stringify([])));

  afterEach(() => localStorage.clear());

  // Search Page 
  it('Será validado se quando a pessoa não logada acessa a rota /search, ela é redirecionada para a rota /',
    async () => {
      localStorage.setItem('user', JSON.stringify({}))
      renderPath("/search");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(window.location.pathname).toBe('/');
      
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(screen.queryByTestId('page-search')).not.toBeInTheDocument();
      expect(screen.getByTestId('page-login')).toBeInTheDocument();
    });

  it('Será validado se quando a pessoa logada acessa a rota /search, ela não é redirecionada',
    async () => {
      localStorage.setItem('user', JSON.stringify(defaultUser))
      renderPath("/search");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(window.location.pathname).toBe("/search");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(screen.getByTestId('page-search')).toBeInTheDocument();
      expect(screen.queryByTestId('page-login')).not.toBeInTheDocument();
    });

  // Album page
  it('Será validado se quando a pessoa não logada acessa a rota /album/:id, ela é redirecionada para a rota /',
    async () => {
      localStorage.setItem('user', JSON.stringify({}))
      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );
      renderPath("/album/12");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(window.location.pathname).toBe('/');
      
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(screen.queryByTestId('page-album')).not.toBeInTheDocument();
      expect(screen.getByTestId('page-login')).toBeInTheDocument();
    });

  it('Será validado se quando a pessoa logada acessa a rota /album/:id, ela não é redirecionada',
    async () => {
      localStorage.setItem('user', JSON.stringify(defaultUser))

      jest.spyOn(musicsAPI, 'default').mockImplementation(
        () => Promise.resolve(musicAPIDefaultResponse),
      );

      renderPath("/album/12");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(window.location.pathname).toBe("/album/12");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(screen.getByTestId('page-album')).toBeInTheDocument();
      expect(screen.queryByTestId('page-login')).not.toBeInTheDocument();
    });

  // Favorites page
  it('Será validado se quando a pessoa não logada acessa a rota /favorites, ela é redirecionada para a rota /',
    async () => {
      localStorage.setItem('user', JSON.stringify({}))
      renderPath("/favorites");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(window.location.pathname).toBe('/');
      
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(screen.queryByTestId('page-favorites')).not.toBeInTheDocument();
      expect(screen.getByTestId('page-login')).toBeInTheDocument();
    });

  it('Será validado se quando a pessoa logada acessa a rota /favorites, ela não é redirecionada',
    async () => {
      localStorage.setItem('user', JSON.stringify(defaultUser))
      renderPath("/favorites");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(window.location.pathname).toBe("/favorites");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(screen.getByTestId('page-favorites')).toBeInTheDocument();
      expect(screen.queryByTestId('page-login')).not.toBeInTheDocument();
    });

  // Profile page
  it('Será validado se quando a pessoa não logada acessa a rota /profile, ela é redirecionada para a rota /',
    async () => {
      localStorage.setItem('user', JSON.stringify({}))
      renderPath("/profile");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(window.location.pathname).toBe('/');
      
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(screen.queryByTestId('page-profile')).not.toBeInTheDocument();
      expect(screen.getByTestId('page-login')).toBeInTheDocument();
    });

  it('Será validado se quando a pessoa logada acessa a rota /profile, ela não é redirecionada',
    async () => {
      localStorage.setItem('user', JSON.stringify(defaultUser))
      renderPath("/profile");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(window.location.pathname).toBe("/profile");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(screen.getByTestId('page-profile')).toBeInTheDocument();
      expect(screen.queryByTestId('page-login')).not.toBeInTheDocument();
    });

  // Edit profile page
  it('Será validado se quando a pessoa não logada acessa a rota /profile/edit, ela é redirecionada para a rota /',
    async () => {
      localStorage.setItem('user', JSON.stringify({}))
      renderPath("/profile/edit");

      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(window.location.pathname).toBe('/');
      
      await waitFor(
        () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
        { timeout: 3500 }
      );
      expect(screen.queryByTestId('page-profile-edit')).not.toBeInTheDocument();
      expect(screen.getByTestId('page-login')).toBeInTheDocument();
    });

  it('Será validado se quando a pessoa logada acessa a rota /profile/edit, ela',
  async () => {
    localStorage.setItem('user', JSON.stringify(defaultUser))
    renderPath("/profile/edit");

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3500 }
    );
    expect(window.location.pathname).toBe("/profile/edit");

    await waitFor(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 3500 }
    );
    expect(screen.getByTestId('page-profile-edit')).toBeInTheDocument();
    expect(screen.queryByTestId('page-login')).not.toBeInTheDocument();
  });
});