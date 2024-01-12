import '../styles/card.css';

const services = [
  {
    name: 'Service one', 
    icon: 'mdi-car-cog', 
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis eaque odio, architecto eveniet expedita molestiae 
                nostrum repellat qui culpa, assumenda labore laboriosam 
                error debitis similique velit placeat eius molestias suscipit.`,
    duration: '30 Mins', 
    price: '$4.00'
  },
  {
    name: 'Service two', 
    icon: 'mdi-car-cog', 
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis eaque odio, architecto eveniet expedita molestiae 
                nostrum repellat qui culpa, assumenda labore laboriosam 
                error debitis similique velit placeat eius molestias suscipit.`,
    duration: '30 Mins', 
    price: '$4.00'
  },
  {
    name: 'Service three', 
    icon: 'mdi-car-cog', 
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis eaque odio, architecto eveniet expedita molestiae 
                nostrum repellat qui culpa, assumenda labore laboriosam 
                error debitis similique velit placeat eius molestias suscipit.`,
    duration: '30 Mins', 
    price: '$4.00'
  },
  {
    name: 'Service fpur', 
    icon: 'mdi-car-cog', 
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis eaque odio, architecto eveniet expedita molestiae 
                nostrum repellat qui culpa, assumenda labore laboriosam 
                error debitis similique velit placeat eius molestias suscipit.`,
    duration: '30 Mins', 
    price: '$4.00'
  },
  {
    name: 'Service five', 
    icon: 'mdi-car-cog', 
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis eaque odio, architecto eveniet expedita molestiae 
                nostrum repellat qui culpa, assumenda labore laboriosam 
                error debitis similique velit placeat eius molestias suscipit.`,
    duration: '30 Mins', 
    price: '$4.00'
  }
];

export default function Services() {
  return (
    <section className="p-5 container mx-auto">
      <h1 className="text-4xl font-bold my-14 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">
        {
          services.map((service) => (
            <div key={service.name} className="">
              <div className="card">
                <div className="content">
                  <div className="back">
                    <div className="back-content">
                      <i className={`text-[6em] mdi ${service.icon}`}></i>                  
                      <strong className='text-2xl'>{service.name}</strong>
                    </div>
                  </div>
                  <div className="front">
                    
                    <div className="img">
                      <div className="circle">
                      </div>
                      <div className="circle" id="right">
                      </div>
                      <div className="circle" id="bottom">
                      </div>
                    </div>

                    <div className="front-content">
                      <small className="badge">{service.name}</small>
                      <div className="description">
                        <div className="w-full">
                          <p className="text-sm">
                            <strong>{service.description}</strong>
                          </p>
                        </div>
                        <p className="card-footer">
                          30 Mins &nbsp; | &nbsp; {service.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}