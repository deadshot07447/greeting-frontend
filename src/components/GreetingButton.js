export default function GreetingButton({ onClick, loading }) {
  return (
    <button onClick={onClick} disabled={loading} className="button">
      {loading ? 'Loading...' : 'Fetch Greeting'}
    </button>
  );
}
