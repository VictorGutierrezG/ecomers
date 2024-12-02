import { AuthRepository } from '~/domain/repositories/AuthRepository';
import { User } from '~/domain/models/User';
import { CustomError } from '~/infrastructure/errors/CustomError';

const useMockData: boolean = true;

export class ApiAuthRepository implements AuthRepository {
  async login(username: string, password: string): Promise<User> {
    if (useMockData) {
      const validUsername: string = 'testuser';
      const validPassword: string = 'password123';

      if (username === validUsername && password === validPassword) {
        const user: User = {
          id: '1',
          username: 'testuser',
          email: 'testuser@example.com',
          token: 'fake-jwt-token',
        };
        return user;
      } else {
        throw new CustomError('Invalid credentials');
      }
    } else {
      try {
        const response: Response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new CustomError('Login failed due to bad response');
        }

        const user: User = await response.json();
        return user;
      } catch (error) {
        if (error instanceof Error) {
          throw new CustomError(`Login failed: ${error.message}`);
        } else {
          throw new CustomError('Login failed: Unknown error occurred');
        }
      }
    }
  }

  async logout(): Promise<void> {
    if (useMockData) {
      return Promise.resolve();
    } else {
      try {
        const response: Response = await fetch('/api/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new CustomError('Logout failed due to bad response');
        }
      } catch (error) {
        if (error instanceof Error) {
          throw new CustomError(`Logout failed: ${error.message}`);
        } else {
          throw new CustomError('Logout failed: Unknown error occurred');
        }
      }
    }
  }
}
