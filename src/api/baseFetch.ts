import queryString from "query-string";

export const baseFetch = async (
  url: string,
  method: string = "GET",
  params: any,
) => {
  const headers = new Headers();

  headers.set("Content-Type", "application/json");

  let resultUrl = url;

  if (method === "GET") {
    resultUrl += queryString.stringify(params);
  }

  const res = await fetch(resultUrl, {
    headers,
    method,
    credentials: "include",
    body: method === "GET" ? null : JSON.stringify(params),
  });

  const parsedResponse = await res.json();

  if (res.status >= 400) {
    if (parsedResponse.error?.name) {
      alert(`Status = ${res.status}, Message = ${parsedResponse.error?.name}`);
    }

    return Promise.reject(new Error(parsedResponse.error?.name));
  } else {
    return parsedResponse;
  }
};
