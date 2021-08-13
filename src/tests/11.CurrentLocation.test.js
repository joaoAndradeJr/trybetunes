import { screen, waitForElementToBeRemoved } from '@testing-library/react';

import renderPath from './helpers/renderPath';
import { defaultUser } from './mocks';

describe('11- Destaque a página atual nos links de navegação', () => {
  beforeEach(() => localStorage.setItem('user', JSON.stringify(defaultUser)));

  afterEach(() => localStorage.clear());

  it('Será validado se o link para página de músicas favoritas é destacado na rota "/favorites"',
    async () => {
      renderPath('/favorites');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      const searchLink = screen.getByTestId('link-to-search');
      const favoritesLink = screen.getByTestId('link-to-favorites');
      const profileLink = screen.getByTestId('link-to-profile');

      expect(searchLink).toBeInTheDocument();
      expect(searchLink).not.toHaveClass('active');

      expect(favoritesLink).toBeInTheDocument();
      expect(favoritesLink).toHaveClass('active');

      expect(profileLink).toBeInTheDocument();
      expect(profileLink).not.toHaveClass('active');
    });

  it('Será validado se o link para página de pesquisar é destacado na rota "/search"',
    async () => {
      renderPath('/search');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );

      const searchLink = screen.getByTestId('link-to-search');
      const favoritesLink = screen.getByTestId('link-to-favorites');
      const profileLink = screen.getByTestId('link-to-profile');

      expect(searchLink).toBeInTheDocument();
      expect(searchLink).toHaveClass('active');

      expect(favoritesLink).toBeInTheDocument();
      expect(favoritesLink).not.toHaveClass('active');

      expect(profileLink).toBeInTheDocument();
      expect(profileLink).not.toHaveClass('active');
    });

  it('Será validado se o link para página de perfil é destacado na rota "/profile"',
    async () => {
      renderPath('/profile');

      await waitForElementToBeRemoved(
        () => screen.getAllByText('Carregando...'),
        { timeout: 3000 },
      );
      const searchLink = screen.getByTestId('link-to-search');
      const favoritesLink = screen.getByTestId('link-to-favorites');
      const profileLink = screen.getByTestId('link-to-profile');

      expect(searchLink).toBeInTheDocument();
      expect(searchLink).not.toHaveClass('active');

      expect(favoritesLink).toBeInTheDocument();
      expect(favoritesLink).not.toHaveClass('active');

      expect(profileLink).toBeInTheDocument();
      expect(profileLink).toHaveClass('active');
    });
});
