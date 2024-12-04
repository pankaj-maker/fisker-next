import Header from "@/components/Header";
import Preview from "@/components/Preview";
import Configurator from "@/components/Configurator";


function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col sm:flex-row justify-between md:gap-8 px-2 md:px-8 py-3 md:py-6">
        <section className="w-full md:w-3/4">
          <Preview />
        </section>
        <aside className="w-full md:w-1/4">
          <Configurator />
        </aside>
      </main>
    </>
  );
}
export default HomePage;
