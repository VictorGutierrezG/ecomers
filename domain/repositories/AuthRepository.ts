import { User } from '~/domain/models/User';

export interface AuthRepository {
  login(username: string, password: string): Promise<User>;
  logout(): Promise<void>;
}
