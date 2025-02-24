// src/app/projects/[id]/page.tsx

import ProjectClient from "./ProjectClient";

type PageProps = {
  params: { id: string };
};

export default function Page({ params }: PageProps) {
  const { id } = params;
  return <ProjectClient id={id} />;
}
