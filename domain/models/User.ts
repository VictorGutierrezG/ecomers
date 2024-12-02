export interface User {
    id: string;
    username: string;
    email: string;
    token?: string;  // Opcional si está autenticado
  }
  