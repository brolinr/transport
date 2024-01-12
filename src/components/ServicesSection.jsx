export default function ServicesSection() {
  return (
    <section className="py-8 bg-white">
      <h1 className="text-4xl font-semibold text-center mb-2 text-orange-500">Our services</h1>
      <hr className="ring-2 ring-orange-300 border-orange-300 w-[30%] md:w-[10%] rounded-full mx-auto" />
      <div className="grid grid-cols-12 gap-4 md:p-10 mt-14 mb-6">
        <div 
          className="
            col-span-12 md:col-span-3 p-2
            transition ease-out-in hover:-translate-y-0
            hover:scale-105 duration-300
          "
        >
          <div className="w-full p-4 bg-orange-500 rounded text-center">
            <h3 className="text-2xl text-white">
              <i className="mdi mdi-palette col-span-1 mx-2 text-5xl"></i>
              <span className="p-0 relative bottom-2">Lorem Ipsum</span>
            </h3>
          </div>
          <div className="text-left text-gray-400 my-5">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Inventore repellat dolor ab illo incidunt neque quidem.
            </p>
          </div>
        </div>

        <div 
          className="
            col-span-12 md:col-span-3 p-2
            transition ease-out-in hover:-translate-y-0
            hover:scale-105 duration-300
          "
        >
          <div className="w-full p-4 bg-orange-500 rounded text-center">
            <h3 className="text-2xl text-white">
              <i className="mdi mdi-palette-swatch col-span-1 mx-2 text-5xl"></i>
              <span className="p-0 relative bottom-2">Lorem Ipsum</span>
            </h3>
          </div>
          <div className="text-left text-gray-400 my-5">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Inventore repellat dolor ab illo incidunt neque quidem.
            </p>
          </div>
        </div>

        <div 
          className="
            col-span-12 md:col-span-3 p-2
            transition ease-out-in hover:-translate-y-0
            hover:scale-105 duration-300
          "
        >
          <div className="w-full p-4 bg-orange-500 rounded text-center">
            <h3 className="text-2xl text-white">
              <i className="mdi mdi-palette-swatch-variant col-span-1 mx-2 text-5xl"></i>
              <span className="p-0 relative bottom-2">Lorem Ipsum</span>
            </h3>
          </div>
          <div className="text-left text-gray-400 my-5">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Inventore repellat dolor ab illo incidunt neque quidem.
            </p>
          </div>
        </div>

        <div 
          className="
            col-span-12 md:col-span-3 p-2
            transition ease-out-in hover:-translate-y-0
            hover:scale-105 duration-300
          "
        >
          <div className="w-full p-4 bg-orange-500 rounded text-center">
            <h3 className="text-2xl text-white">
              <i className="mdi mdi-access-point col-span-1 mx-2 text-5xl"></i>
              <span className="p-0 relative bottom-2">Lorem Ipsum</span>
            </h3>
          </div>
          <div className="text-left text-gray-400 my-5">
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Inventore repellat dolor ab illo incidunt neque quidem.
            </p>
          </div>
        </div>
      </div>
      <h6 
        className="
          font-semibold text-center underline
          underline-offset-4 text-orange-500
          transition ease-in-out hover:-translate-y-0
          hover:scale-90 duration-300
        "
      >
        <a href="/services">
          Learn more about us
        </a>
      </h6>
    </section>
  )
}