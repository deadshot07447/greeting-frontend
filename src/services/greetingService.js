export async function fetchGreetingMessage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/greeting`);

  if (!response.ok) {
    throw new Error('Failed to fetch greeting from the backend.');
  }

  const data = await response.json();
  return data.message;
}
