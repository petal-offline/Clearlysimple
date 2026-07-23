import type { Metadata } from "next";
import { BuildQuestionnaire } from "@/app/build-with-me/_components/build-questionnaire";

export const metadata: Metadata = {
  title: "Build with me",
  description: "Tell ClearlySimple about your product idea and start a focused project conversation."
};

export default function BuildWithMePage() {
  return <BuildQuestionnaire />;
}
