import getMusics from '../services/musicsAPI';

import { 
  iTunesLookupAlbumResponse, 
  musicAPIDefaultResponse 
} from './mocks';

describe('4- Crie a requisição que busca as músicas do álbum', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('Será validado se a função recebe o id do álbum e chama a API do iTunes', async () => {
    const spy = jest.spyOn(global, 'fetch').mockImplementation(
      () => Promise.resolve({ json: () => Promise.resolve(iTunesLookupAlbumResponse) }),
    );

    const albumId = 123;
    await getMusics(albumId);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('https://itunes.apple.com/lookup?id=123&entity=song');
  });

  it('Será validado se a função retorna o valor recebido pela API do iTunes', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(
      () => Promise.resolve({ json: () => Promise.resolve(iTunesLookupAlbumResponse) }),
    );

    const albumId = 123;
    const response = await getMusics(albumId);

    expect(response).toEqual(musicAPIDefaultResponse);
  });
});
