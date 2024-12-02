// import axios from 'axios';
// import { AuthRepository } from '~/domain/repositories/AuthRepository';
// import { User } from '~/domain/models/User';

// export class ApiAuthRepository implements AuthRepository {
//   async login(username: string, password: string): Promise<User> {
//     const response = await axios.post('/api/login', { username, password });
//     return response.data as User;
//   }

//   async logout(): Promise<void> {
//     await axios.post('/api/logout');
//   }
// }

import { AuthRepository } from '~/domain/repositories/AuthRepository';
import { User } from '~/domain/models/User';

export class ApiAuthRepository implements AuthRepository {
  async login(username: string, password: string): Promise<User> {
    // Datos ficticios para autenticación
    const validUsername = 'testuser';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      // Simulamos una respuesta de usuario con token y datos básicos
      const user: User = {
        id: '1',
        username: 'testuser',
        email: 'testuser@example.com',
        token: 'fake-jwt-token',
      };
      return await user; // Aquí devolvemos el objeto de tipo User
    } else {
      throw new Error('Invalid credentials');
    }
  }

  async logout(): Promise<void> {
    // Simulación de logout, aquí simplemente resolvemos la promesa sin hacer nada.
    return await Promise.resolve();
  }
}
