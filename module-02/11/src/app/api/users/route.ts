export async function GET() {
  return Response.json({ message: "Ini Users GET Method" });
}

export async function POST(req: Request) {
  const data = await req.json();

  return Response.json({ message: data.message });
}

export async function PATCH(req: Request) {
  const data = await req.json();

  return Response.json({ message: data.message });
}
