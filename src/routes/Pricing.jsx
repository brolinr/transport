const subscriptions = [
  { name: 'Starter', description: 'Suitable to grow steadily.', price: 45, duration: '/mo' },
  { name: 'Intermediate', description: 'Suitable to grow faster.',price: 145, duration: '/yr' },
  { name: 'Advanced', description: 'Suitable to grow slower.', duration: '/hr', price: 45 }
]
export default function Pricing() {
  return (
    <section className="px-4 pb-14 md:pb-24 w-full md:w-3/5 mx-auto">
      <h1 className="text-4xl font-bold my-14 text-center">Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          subscriptions. map((subscription) => (
            
            <div key={subscription.name} className="flex flex-col bg-indigo-100 rounded-3xl">
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                  <div>
                    <h2
                      className="md:text-lg text-4xl font-medium tracking-tighter text-gray-600 lg:text-3xl"
                    >
                      {subscription.name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">{subscription.description}</p>
                  </div>
                  <div className="mt-6">
                    <p>
                      <span className="text-5xl font-light tracking-tight text-black">
                        ${subscription.price}
                      </span>
                      <span className="text-base font-medium text-gray-500">{subscription.duration}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex px-6 pb-8 sm:px-8">
                <a
                  aria-describedby="tier-company"
                  className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                  href="#"
                >
                  Get started
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}