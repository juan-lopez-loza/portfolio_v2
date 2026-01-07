export default function Home() {
  return (
      <section className="fixed inset-0 bg-black flex items-center justify-center p-10">
          <div className="relative bg-red-600 w-full h-full overflow-y-scroll hide-scrollbar">
              <main>
                  <h1 className="absolute bottom-4 left-4 text-black font-black text-[20vw] leading-none tracking-tight">
                      Juan
                  </h1>
              </main>
          </div>
      </section>
  );
}
