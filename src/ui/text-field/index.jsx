export default function TextField({
  type = "text",
  value,
  placeholder,
  onChange = () => {},
}) {
  return (
    <input
      type={type}
      className="block w-full border-gray-200 border-2 p-3 focus:outline-none focus:ring"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
