import { AuthRepository } from '~/domain/repositories/AuthRepository';
import { User } from '~/domain/models/User';

export class AuthUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly authRepository: AuthRepository) {}

  async login(username: string, password: string): Promise<User> {
    return await this.authRepository.login(username, password);
  }

  async logout(): Promise<void> {
    return await this.authRepository.logout();
  }
}
