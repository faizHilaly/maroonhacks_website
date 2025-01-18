export async function GET(request) {
  const contactMediums = [
    {
      medium: "GitHub",
      username: "Maroon-Hacks",
      link: "https://github.com/Maroon-Hacks",
    },
    {
      medium: "Email",
      username: "team@maroonhacks.com",
      link: "mailto:team@maroonhacks.com",
    },
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
