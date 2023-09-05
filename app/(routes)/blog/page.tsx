import Maintenance from "@/components/maintenance";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Maintenance
        title="Coming soon"
        description="I am currently updating my blog posts to include some of my more recent learnings. Please check back again by September 11th. In the meantime, check out some of my blog posts over at Bakklog.com"
      />
    </main>
  );
}
