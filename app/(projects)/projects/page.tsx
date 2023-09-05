import Maintenance from "@/components/maintenance";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Maintenance
        title="Under maintenance"
        description="I am currently updating my portfolio page. Please check back again by September 11th. In the meantime, if you have an interesting project and you'd like to see some of my previous work, please contact me. I'd be more than happy to send some case studies your way!"
      />
    </main>
  );
}
