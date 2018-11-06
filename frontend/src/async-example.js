export default async function getPost(postId) {
  const response = await window.fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const json = await response.json();
  return json;
}
