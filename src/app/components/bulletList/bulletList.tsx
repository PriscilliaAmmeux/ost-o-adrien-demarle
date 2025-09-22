interface BulletListProps {
  items: { id: number; name: string }[];
}

export default function BulletList({ items }: BulletListProps) {
  return (
    <ul className="ml-5 list-disc ml-10">
      {items.map((item) => (
        <li className="mb-2" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
