export async function useFile(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("go to ass");
  }
  return response;
}
