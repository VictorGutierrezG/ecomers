import { User } from '~/domain/models/User';
import { AuthRepository } from '~/domain/repositories/AuthRepository';

export class AuthUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async login(username: string, password: string): Promise<User> {
    return await this.authRepository.login(username, password);
  }

  async logout(): Promise<void> {
    return await this.authRepository.logout();
  }
}
