import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import store from '~/store';
import { User } from '~/domain/models/User';
import { AuthUseCase } from '~/application/useCases/AuthUseCase';
import { ApiAuthRepository } from '~/infrastructure/repositories/ApiAuthRepository';

@Module({ dynamic: true, namespaced: true, name: 'auth', store })
export default class Auth extends VuexModule {
  user: User | null = null;

  get isAuthenticated(): boolean {
    return this.user !== null;
  }

  @Mutation
  setUser(user: User | null) {
    console.log('Mutación setUser ejecutada con:', user);
    this.user = user;
  }

  @Action({ rawError: true })
  async login({ username, password }: { username: string; password: string }) {
    try {
      console.log('AuthUseCase: Login iniciado con', username);
      const authUseCase = new AuthUseCase(new ApiAuthRepository());
      const user = await authUseCase.login(username, password);
      console.log('AuthUseCase: Login exitoso, usuario obtenido:', user);
      this.setUser(user);
    } catch (error) {
      console.error('AuthUseCase: Error en login:', error);
      throw new Error('Invalid credentials');
    }
  }

  @Action({ rawError: true })
  async logout() {
    try {
      console.log('AuthUseCase: Logout iniciado');
      const authUseCase = new AuthUseCase(new ApiAuthRepository());
      await authUseCase.logout();
      this.setUser(null);
      console.log('AuthUseCase: Logout exitoso, estado limpiado');
    } catch (error) {
      console.error('AuthUseCase: Error en logout:', error);
      throw new Error('Failed to log out');
    }
  }
}
