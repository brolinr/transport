export default function Location() {
  return (
    <section className="p-10 md:py-20 bg-[url('../images/bg-2.jpg')] bg-bottom bg-no-repeat bg-cover">
      <div className="grid grid-cols-12 my-10">
        <div className="md:block lg:block hidden col-span-1"></div>
        <div className="p-10 bg-white col-span-10 md:col-span-5 rounded">
          <h1 className="md:text-4xl font-bold">Our office:</h1>
          <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
          <button 
            className="
              bg-orange-500 text-white
              px-4 py-2 rounded mt-4
              transition ease-in-out 
              hover:-translate-y-0 
              hover:scale-95 duration-300
            "
            >
              Use map
            </button>
        </div>
      </div>
    </section>
  )
}