import type { Metadata } from "next";
import { BuildQuestionnaire } from "@/app/build-with-me/_components/build-questionnaire";

export const metadata: Metadata = {
  title: "Build with me",
  description:
    "Tell ClearlySimple about your product idea and receive a preliminary planning range for your project."
};

export default function BuildWithMePage() {
  return <BuildQuestionnaire />;
}
