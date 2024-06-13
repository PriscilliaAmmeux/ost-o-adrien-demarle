interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const images = {
    src: "",
    alt: "",
  };

  return (
    <header
      className={`w-full flex flex-col md:flex-row justify-around items-center p-4 relative ${className}`}
      style={{ width: "100%", height: "300px" }}>
      <div className="absolute flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-4xl font-bold">name</h1>
        <h2 className="text-3xl">Lorem ipsum dolor.</h2>
        <p className="pt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sequi
          consequatur architecto non tempora cum necessitatibus vel eius neque
          labore quas nobis fugiat et accusantium ad, molestiae commodi beatae
          consectetur?
        </p>
      </div>
    </header>
  );
}
