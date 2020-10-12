// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://nextjs.org/docs/basic-features/data-fetching

// This gets called on every request
export async function tokenRequest() {
  const res = await fetch(
    `https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials&client_id=VKZZGEiNa0K4Ap9xV3wWP8UCpWYXyKUGO40UJU7yv9fij5BShI&client_secret=aFFRR9PHQjlWC4BME9T9cCBXZ4JxSFkU9iye7VyS`
  );
  const data: Object = await res.json();
  return data;
}
