async function postData(url, data) {
  console.log("URL: ", url);
  console.log("Payload: ", data);

  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}

export { postData };
