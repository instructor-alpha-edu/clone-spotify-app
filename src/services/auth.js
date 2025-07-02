export async function fetchAccessToken() {
  try {
    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "e1c7b7cfa564487e8a080395602af508",
        client_secret: "2a6cb85eb5754b35939d48813aa45daa",
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
