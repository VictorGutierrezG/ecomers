import { AuthRepository } from '~/domain/repositories/AuthRepository';
import { ApiAuthRepository } from '~/infrastructure/repositories/ApiAuthRepository';
import { User } from '~/domain/models/User';

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new ApiAuthRepository();
  }

  async login(username: string, password: string): Promise<User> {
    return await this.authRepository.login(username, password);
  }

  async logout(): Promise<void> {
    return await this.authRepository.logout();
  }
}
