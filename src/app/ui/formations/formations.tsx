import DropdownList from "./../../components/dropdownList/dropdownList";
import dataFormations from "../../../../api/formations.json";

export default function Formations() {
  return <DropdownList title="Mes formations" items={dataFormations} />;
}
