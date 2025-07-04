const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

export async function fetchAccessToken() {
  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });
    const data = await res.json();
    const token = data.access_token;
    const expiresIn = Date.now() + +data.expires_in * 1000; // 19:38

    localStorage.setItem("token", token);
    localStorage.setItem("expiresIn", expiresIn);
    return token;
  } catch (error) {
    console.log(error);
  }
}

export async function getAccessToken() {
  try {
    const token = localStorage.getItem("token");
    const expiresIn = localStorage.getItem("expiresIn");

    if (token && expiresIn && Date.now() < expiresIn) {
      return token;
    }

    return await fetchAccessToken();
  } catch (error) {
    console.log(error);
  }
}
