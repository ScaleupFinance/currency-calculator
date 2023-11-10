export const rates = {
  DKK: {
    DKK: 1,
    GBP: 0.11673411164863415,
  },
  GBP: {
    DKK: 8.56747833295657,
    GBP: 1,
  },
};

export async function GET() {
  return Response.json(rates);
}
