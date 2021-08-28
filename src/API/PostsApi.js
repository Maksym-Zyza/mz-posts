export default async function getAll() {
  // try {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    redirect: "follow",
  })
    .then((response) => response.text())
    .then((result) => JSON.parse(result));
  return response;
  // } catch (error) {
  //   alert("Error. Please try again later.", error);
  //   return [];
  // }
}
