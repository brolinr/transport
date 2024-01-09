export default function WhyUs() {
  return(
    <section className="mt-8">
      <div className="w-full grid grid-cols-2">
        <div className="col-span-2 md:col-span-1 p-4 md:p-14 bg-red-600 text-white">
          <h1 className="text-4xl my-14 md:text-5xl font-semibold object-contain">
            Lorem ipsum dolor sit amet consectetur elit.
          </h1>
          <div className="w-full grid grid-cols-2 mt-8 gap-2 md:gap-0">
            <div className="col-span-2 md:col-span-1 gap-2 p-2 md:border-e md:border-white">
              <h4 className="text-3xl font-semibold leading-10 mb-4">Lorem ipsum dolor sit?</h4>
              <p className="text-base mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque
                provident laborum iste dolore! Maiores, nobis ducimus.
              </p>
              <p 
                className="
                  underline underline-offset-4
                  hover:text-orange-500 transition
                  ease-in-out hover:-translate-y-0
                  hover:scale-95 duration-300
                ">
                  Read more →
                </p>
            </div>
            <div className="col-span-2 md:col-span-1 md:px-6">
              <h4 className="text-3xl font-semibold leading-10 mb-4">Lorem ipsum dolor sit?</h4>
              <p className="text-base mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque
                provident laborum iste dolore! Maiores, nobis ducimus.
              </p>
              <p 
                className="
                  underline underline-offset-4
                  hover:text-orange-500 transition
                  ease-in-out hover:-translate-y-0
                  hover:scale-95 duration-300
                "
              >
                  Read more →
                </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block col-span-2 md:col-span-1 p-3 bg-gray-600 bg-no-repeat bg-cover bg-[url('../images/man_on_truck.jpg')] bg-top"></div>
      </div>
    </section>
  )
}