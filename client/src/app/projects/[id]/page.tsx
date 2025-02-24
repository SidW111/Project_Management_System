import dynamic from "next/dynamic";

// Dynamically import the client component, disabling SSR for it.
const ProjectClient = dynamic(() => import("./ProjectClient"), { ssr: false });

export default function Page({ params }: { params: { id: string } }) {
  // The server component receives params as a plain object.
  return <ProjectClient id={params.id} />;
}
