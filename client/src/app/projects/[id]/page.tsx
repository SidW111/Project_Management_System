// src/app/projects/[id]/page.tsx
import ProjectClient from "./ProjectClient";

export default function Page({ params }: { params: { id: string } }) {
  return <ProjectClient id={params.id} />;
}
