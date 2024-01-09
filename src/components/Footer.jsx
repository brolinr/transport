export default function Footer() {
  return (
    <footer className="p-2 py-8 bg-black text-white">
      <div className="grid grid-cols-12 gap-4 md:gap-2 w-[90%] mx-auto">
        <div className="col-span-12 md:col-span-3">
          <h1 className="text-4xl font-bold text-orange-500">Company Name</h1>
          <p className="text-gray-300 my-4 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 grid grid-cols-2 justify-center px-0 md:px-8">
          <div className="col-span-1">
            <h1 className="text-2xl font-bold text-orange-500">Company</h1>
            <p className="text-gray-300">About us</p>
            <p className="text-gray-300">Our Services</p>
            <p className="text-gray-300">Pricing</p>
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl font-bold text-orange-500">Support</h1>
            <p className="text-gray-300">Contact us</p>
            <p className="text-gray-300">Our offices</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <h1 className="text-3xl font-bold text-orange-500 mb-4">Get in touch</h1>
          <p className="text-gray-300 font-semibold mb-2">
            <i className="mdi mdi-headphones mr-3 m-0 hover:text-white text-orange-500 text-2xl"></i>
            foobar@example.com 
          </p>
          <p className="text-gray-300 font-semibold mb-2">
            <i className="mdi mdi-cellphone mr-3 m-0 text-2xl hover:text-white text-orange-500"></i>
            +1 234 567 890
          </p>
          <p className="text-gray-300 font-semibold mb-2">
            <i className="mdi mdi-facebook mr-3 m-0 text-2xl hover:text-white text-orange-500"></i>
            <i className="mdi mdi-twitter mr-3 m-0 text-2xl hover:text-white text-orange-500"></i>
            <i className="mdi mdi-linkedin mr-3 m-0 text-2xl hover:text-white text-orange-500"></i>
            <i className="mdi mdi-whatsapp mr-3 m-0 text-2xl hover:text-white text-orange-500"></i>
          </p>
        </div>
      </div>
    </footer>
  )
}