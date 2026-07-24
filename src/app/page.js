'use client';

import { useState } from 'react';
import GreetingButton from '../components/GreetingButton';
import GreetingMessage from '../components/GreetingMessage';
import { fetchGreetingMessage } from '../services/greetingService';

export default function HomePage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchGreeting = async () => {
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const greeting = await fetchGreetingMessage();
      setMessage(greeting);
    } catch (err) {
      setError(err.message || 'Unable to load the greeting right now.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <div className="card">
        <h1>Greeting App</h1>
        <GreetingButton onClick={handleFetchGreeting} loading={loading} />
        <GreetingMessage message={message} error={error} loading={loading} />
      </div>
    </main>
  );
}
