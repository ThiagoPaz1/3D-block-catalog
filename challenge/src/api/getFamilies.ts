type ResponseData = {
  id: string
  details: {
    name: string
  }
}

export async function getFamilies(skip: number, take: number): Promise<ResponseData[]> {
  const url = `https://test-candidaturas-front-end.onrender.com/families?skip=${skip}&take=${take}`
  const response = await fetch(url)
  const data = response.json()

  return data
}