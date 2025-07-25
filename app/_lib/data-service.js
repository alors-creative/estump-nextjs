export async function getJobs() {
  try {
    const res = await fetch(`http://localhost:3000/jobs`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw Error("Failed to fetch from GoinLux API");
  }
}
