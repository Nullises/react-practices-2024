import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import GuitarsMemo from "@/components/guitars";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "yellow" })}>My Dream Guitars</h1>
        <h2 className={subtitle({ class: "mt-4" })}>Collection</h2>
      </div>
      <div className="justify-center">
        <GuitarsMemo />
      </div>
    </section>
  );
}
