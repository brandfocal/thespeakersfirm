export async function fetchAPI(query: string, variables: Record<string, any> = {}) {
  const endpoint = process.env.WORDPRESS_API_URL;
  if (!endpoint) {
    console.warn("WORDPRESS_API_URL environment variable is not defined.");
    return null;
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 10 }, // Short revalidation time of 10s for interactive testing
    });

    const json = await res.json();
    if (json.errors) {
      console.error("GraphQL errors returned from CMS:", json.errors);
      return null;
    }
    return json.data;
  } catch (error) {
    console.error("Network or connection error fetching from CMS:", error);
    return null;
  }
}
