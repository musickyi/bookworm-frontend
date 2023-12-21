import axios from 'axios';
import Router from 'next/router';
import { getRefreshProps } from '../type/TokenManagerType';
import { TokenType } from '../type/TokenType';

class TokenManager {
  private _accessToken: string | null = null;
  private _refreshToken: string | null = null;
  private _accessExpiredAt: string | null = null;
  private _refreshExpiredAt: string | null = null;

  constructor() {
    this.initToken();
  }

  initToken() {
    if (typeof window === 'undefined') return;
    this._accessToken = localStorage.getItem('accessToken');
    this._refreshToken = localStorage.getItem('refreshToken');
    this._accessExpiredAt = localStorage.getItem('accessExpiredAt');
    this._refreshExpiredAt = localStorage.getItem('refreshExpiredAt')
  }

  checkToken(expiredString: string | null) {
    if (!expiredString) return false;
    const expirationTime = new Date(expiredString).getTime();
    const currentTime = new Date().getTime();
    const timeUntilExpiration = expirationTime - currentTime;
    return timeUntilExpiration >= 30000;
}


  async getRefresh({ refresh, push = false }: getRefreshProps) {
    try {
      const { data } = await axios.patch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/reissue-token`,
        {},
        {
          headers: {
            RefreshToken: `Bearer ${refresh}`,
          },
        }
      );
      this.setToken(data);
      return true;
    } catch (e) {
      this.deleteToken();
      if (push) return false;
      return Router.push('/login');
    }
  }

  skipUrl() {
    const skipUrl = ['/login', '/signUp'];

    return skipUrl.includes(Router.route);
  }

  setToken(tokens: TokenType) {
    this._accessToken = tokens.accessToken;
    this._refreshToken = tokens.refreshToken;
    this._accessExpiredAt = tokens.accessExpiredAt;
    this._refreshExpiredAt = tokens.refreshExpiredAt;

    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);
    localStorage.setItem('accessExpiredAt', tokens.accessExpiredAt);
    localStorage.setItem('refreshExpiredAt', tokens.refreshExpiredAt);
  }

  deleteToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessExpiredAt');
    localStorage.removeItem('refreshExpiredAt');
  }

  get accessToken() {
    return this._accessToken;
  }

  get refreshToken() {
    return this._refreshToken;
  }

  get accsessExpiredAt() {
    return this._accessExpiredAt;
  }

  get refreshExpiredAt() {
    return this._refreshExpiredAt;
  }
}

export default TokenManager;