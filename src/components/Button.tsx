interface Props {
  children: JSX.Element;
  padding?: string;
}

export default function Button({ children, padding }: Props) {
  return (
    <button
      type="button"
      className={`rounded-full hover:bg-gray-200 ${padding ? padding : "p-3"}`}
    >
      {children}
    </button>
  );
}
