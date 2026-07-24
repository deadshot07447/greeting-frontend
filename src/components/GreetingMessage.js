export default function GreetingMessage({ message, error, loading }) {
  if (loading) {
    return <p className="status">Loading greeting...</p>;
  }

  if (error) {
    return <p className="status error">{error}</p>;
  }

  if (message) {
    return <p className="status success">{message}</p>;
  }

  return null;
}
