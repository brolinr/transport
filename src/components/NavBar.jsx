const nav_links = [
  { name: 'Services', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' }
]

export default function NavBar() {
  return (
    <nav className="md:fixed right-0 left-0 top-0 bg-gradient-to-r from-white to-gray-200 backdrop-blur-lg p-2">
      <div className="max-w-full mx-auto grid grid-cols-12">
        <div className="md:col-span-6 col-span-12 p-1">
          <h1 
            className="
              uppercase text-center
              lg:text-start md:text-start 
              font-bold text-orange-500 text-3xl my-auto
            "
          >
            Company name
          </h1>
        </div>
        <div className="col-span-12 md:col-span-6 p-1 grid grid-cols-12">
          {
            nav_links.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="
                  text-orange-500 hover:underline mx-auto
                  hover:underline-offset-8 hover:text-orange-400 px-3 py-2
                  rounded-md text-md font-semibold col-span-3
                  transition ease-in-out hover:-translate-y-0 hover:scale-95 duration-300
                "
              >
                {item.name}
              </a>
            ))
          }
          <div className="col-span-3 py-1">
            <button 
              className="m-0
                bg-orange-500 font-bold 
                text-white px-2 py-1 my-auto 
                rounded transition ease-in-out 
                hover:-translate-y-0 hover:scale-95
                duration-300
              "
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}