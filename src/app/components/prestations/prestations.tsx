import Card from "@/app/components/card/card";
import prestations from "../../../../api/prestations.json";

export default function Prestations() {
  return (
    <section className=" pt-10 pb-10" id="prestations">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4 pr-4">
        {prestations.map((prestation) => (
          <Card key={prestation.id} {...prestation} />
        ))}
      </div>
    </section>
  );
}
