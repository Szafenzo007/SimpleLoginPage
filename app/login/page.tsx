'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BeakerIcon } from '@heroicons/react/24/outline';
import { TypeAnimation } from 'react-type-animation';

// Sample user data (replace with your actual user data)
const authorizedUsers = [
  { username: 'user1', password: 'huj' },
  { username: 'user2', password: 'password2' },
];

const LoginPage: React.FC = () => {
    const router = useRouter()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const authenticate = () => {
    const user = authorizedUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      // Redirect or navigate to your main app here

      alert('Login successful! You can now access the app.');
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/');
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-200 via-red-300 to-gray-900 dark:from-gray-900 dark:via-red-700 dark:to-black">
      <div className="bg-white p-8 rounded shadow-md w-96 text-center">
        <div className='items-center flex justify-center flex-grow pb-5'>
        <Image src='/puff.png'
        width={200}
        height={200}
        className='items-center mr-5 justify-center animate-accordion-down'
        alt=""
        />
       
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm">{errorMessage}</div>
          )}
          <div className='items-center justify-center  p-2'>

         
          </div>
          <Button
            type="button"
            className="w-full h-32 text-xl bg-gradient-to-r from-red-500 to-yellow-500 text-white font-semibold py-2 rounded-full hover:from-red-600 hover:to-yellow-600 transition duration-300 transform hover:scale-105"
            onClick={authenticate}
          >
           <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Log In',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Log in',
        1000,
        'Log Now',
        1000,
        'Log in',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
