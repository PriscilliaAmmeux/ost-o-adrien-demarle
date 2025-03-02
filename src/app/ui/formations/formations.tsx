import DropdownList from "@/app/components/dropdownList/DropdownList";
import dataFormations from "../../../../api/formations.json";

export default function Formations() {
  return <DropdownList title="Mes formations" items={dataFormations} />;
}
