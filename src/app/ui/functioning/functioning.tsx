import { BsQuestionSquare } from "react-icons/bs";
import Title from "../title/title";
import ButtonContactMe from "../buttonContactMe/buttonContactMe";

export default function Functioning() {
  return (
    <section className="relative bg-gradient-to-b from-transparent to-pink-300 rounded p-10 space-y-4 w-f">
      <Title title={"Comment prendre rendez vous ?"} Icon={BsQuestionSquare} />
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      </p>
      <ButtonContactMe />
    </section>
  );
}
