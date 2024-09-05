import { Metadata } from "next";
import Title from "../ui/title/title";
import { GiInjustice } from "react-icons/gi";
import Layout from "../ui/layout/layout";
import legalNotices from "../../../api/legalNotices.json";

export const metadata: Metadata = {
  title:
    "Mentions légales - Adrien Demarle - Ostéopathe D.O - Comines et alentours",
};

export default function LegalNotices() {
  return (
    <Layout>
      <div className="flex justify-center items-center my-10">
        <Title
          Icon={GiInjustice}
          title="Mentions légales"
          style={{ color: "var(--blue-color)" }}
        />
      </div>

      <section className="p-4">
        <div className="space-y-8">
          {legalNotices.map((notice) => (
            <div key={notice.id} className="border-b pb-4">
              <h3 className="text-xl font-bold mb-2">{notice.title}</h3>
              {Array.isArray(notice.content) ? (
                notice.content.map((item, index) => (
                  <p key={index} className="mb-2">
                    {item.text}
                  </p>
                ))
              ) : (
                <p className="mb-2">{notice.content}</p>
              )}
              {notice.list && (
                <ul className="list-disc list-inside mb-2">
                  {notice.list.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              )}
              {notice.footer && <p className="italic">{notice.footer}</p>}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
