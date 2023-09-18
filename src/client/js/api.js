async function postData(url, data) {
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

async function deleteData(url, data) {
  const response = await fetch(url, {
    method: "DELETE",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}

async function getAllTrips() {
  return fetch("http://localhost:8080/trips", {
    method: "GET",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

export { postData, deleteData, getAllTrips };
