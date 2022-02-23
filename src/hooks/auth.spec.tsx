import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './auth';

jest.mock('expo-google-app-auth', () => {
  return {
    logInAsync: () => {
      return {
        type: 'success',
        user: {
          id: 'any_id',
          email: 'lucas.hgs03@gmail.com',
          name: 'Lucas Henrique',
          photo: 'any_photo.png'
        }
      }
    }
  }
});

describe('Auth Hook', () => {
  it('should be able to sign in with Google Account existing', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user.email).toBe('lucas.hgs03@gmail.com');
  });
});