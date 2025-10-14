import Title from "@/app/ui/title/title";

interface LegalBlockProps {
  icon: React.ElementType;
  title: string;
  data: { id: number; title: string; content: string | { text: string }[] }[];
  iconColor?: string;
}

export default function LegalBlock({
  icon: Icon,
  title,
  data,
  iconColor = "text-blue-400",
}: LegalBlockProps) {
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <Title
          Icon={Icon}
          title={title}
          style={{ color: "var(--blue-color)" }}
        />
      </div>
      <section className="relative w-full px-0 md:px-0">
        {/* Background image flou sur toute la largeur */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-30 blur-sm"
          style={{ backgroundImage: "url('/bg-justice.webp')" }}
          aria-hidden="true"
        />
        <div className="max-w-3xl mx-auto bg-white/80 border border-blue-100 rounded-xl shadow-md p-8 space-y-8 relative">
          {data.map((notice) => (
            <div key={notice.id}>
              <h3 className="text-xl font-bold mb-2 text-blue-900 flex items-center gap-2">
                <Icon className={iconColor} size={20} />
                {notice.title}
              </h3>
              {Array.isArray(notice.content) ? (
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {(notice.content as { text: string }[]).map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">{notice.content}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
