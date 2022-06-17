import { Router, useRouter } from 'next/router';
import { useContext } from 'react';
import { Login } from '../src/components/Login';
import { AuthContext } from '../src/contexts/AuthContext';

export default function LoginScreen() {
  const {user} = useContext<any>(AuthContext)

  const router = useRouter();

  if (user) {
    router.push('/home');
  }

  return <Login />;
}
