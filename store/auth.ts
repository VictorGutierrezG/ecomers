import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { User } from '~/domain/models/User';
import { AuthUseCase } from '~/application/useCases/AuthUseCase';
import { ApiAuthRepository } from '~/infrastructure/repositories/ApiAuthRepository';

@Module({ namespaced: true, name: 'auth' })
export default class Auth extends VuexModule {
  user: User | null = null;

  get isAuthenticated(): boolean {
    return this.user !== null;
  }

  @Mutation
  setUser(user: User | null) {
    this.user = user;
  }

  @Action({ rawError: true })
  async login({ username, password }: { username: string; password: string }) {
    const authUseCase = new AuthUseCase(new ApiAuthRepository());
    const user = await authUseCase.login(username, password);
    this.setUser(user);
  }

  @Action({ rawError: true })
  async logout() {
    const authUseCase = new AuthUseCase(new ApiAuthRepository());
    await authUseCase.logout();
    this.setUser(null);
  }
}
