import { TODO_FILTERS_OPTIONS } from "../utils/constants";

export default function TodoFilter({ filter, setFilter }) {
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      {TODO_FILTERS_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
