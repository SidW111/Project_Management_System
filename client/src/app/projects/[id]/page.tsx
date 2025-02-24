// app/projects/[id]/page.tsx (Server Component)
import dynamic from "next/dynamic";

// Dynamically import the client component so it’s rendered on the client side.
const ProjectClient = dynamic(() => import("./ProjectClient"), { ssr: false });

export default function Page({ params }: { params: { id: string } }) {
  return <ProjectClient id={params.id} />;
}
