export default function TodoItem({ createdAt, id, title }) {
  const date = new Date(createdAt).toLocaleString();

  return (
    <div style={{ border: "solid white" }}>
      <p>{date}</p>
      <p>{id}</p>
      <h1>{title}</h1>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
