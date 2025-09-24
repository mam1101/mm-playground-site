import { useHeaderContents } from "~/hooks/displayHooks";
import type { Route } from "./+types/home";
import { Container } from "@mui/material";
import { Header } from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Max Miller" },
    { name: "description", content: "Playground Site" },
  ];
}

export default function Home() {
  const headerContents = useHeaderContents();
  return <>
    <Container>
      <Header title={headerContents.title} body={headerContents.body} backgroundImage={headerContents.backgroundImage} />
    </Container>
  </>;
}
