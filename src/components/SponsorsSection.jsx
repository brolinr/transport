export default function Sponsors() {
  return (
    <section className="p-2.5">
      <h1 className="text-4xl font-semibold text-center mb-2 text-orange-500">Our Sponsors</h1>
      <hr className="ring-2 ring-orange-300 border-orange-300 w-[30%] md:w-[10%] rounded-full mx-auto" />

      <div className="grid grid-cols-12 gap-5 my-8">
        <div className="col-span-6 md:col-span-2 p-10 bg-orange-500 rounded-lg"></div>
        <div className="col-span-6 md:col-span-3 p-10 bg-orange-500 rounded-lg"></div>
        <div className="col-span-6 md:col-span-2 p-10 bg-orange-500 rounded-lg"></div>
        <div className="col-span-6 md:col-span-3 p-10 bg-orange-500 rounded-lg"></div>
        <div className="col-span-6 md:col-span-2 p-10 bg-orange-500 rounded-lg"></div>
      </div>
    </section>
  )
}
