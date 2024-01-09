export default function IntroSection() {
  return (
    <section className="p-10 md:py-20 bg-[url('../images/truck_3.jpg')] bg-bottom bg-no-repeat bg-cover">
      <div className="grid grid-cols-12 my-10">
        <div className="md:block lg:block hidden col-span-1"></div>
        <div className="p-10 bg-white col-span-9 md:col-span-4 rounded-s-lg my-">
          <h1 className="md:text-4xl font-bold">Lorem</h1>
          <h1 className="md:text-4xl font-bold mb-4">ipsum, dolor</h1>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
          <button 
            className="
              bg-orange-500 text-white
              px-4 py-2 rounded mt-4
              transition ease-in-out 
              hover:-translate-y-0 
              hover:scale-95 duration-300
            "
            >Learn More</button>
        </div>
        <div className="col-span-3 md:col-span-1 rounded-e-lg p-1 bg-gray-400"></div>
      </div>
    </section>
  )
}