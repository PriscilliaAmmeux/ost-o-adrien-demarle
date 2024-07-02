import Title from "../title/title";
import { IconType } from "react-icons";

interface ItemsContactProps {
  title: string;
  info: { title: string; text: string }[];
  children?: React.ReactNode;
  Icon?: IconType;
}

export default function ItemsContact({
  title,
  info,
  children,
  Icon,
}: ItemsContactProps) {
  return (
    <section className="flex-1 p-4 md:p-8 mr-4">
      <Title
        title={title}
        Icon={Icon}
        style={{ color: "var(--white-color)" }}
      />
      {children}
      <ul>
        {info.map((item) => (
          <li key={item.title} className="mb-2">
            <strong>{item.title}:</strong> {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
