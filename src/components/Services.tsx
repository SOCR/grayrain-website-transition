
import { useRef, useEffect, useState } from 'react';
import { Database, Shield, BarChart4 } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Synthetic Patient Generation",
    description: "Used to generate heterogeneous simulated datasets",
    icon: <Database className="h-10 w-10 text-blue-600" />,
    delay: 100,
  },
  {
    id: 2,
    title: "Data Obfuscation",
    description: "Used to statistically obfuscate existent clinical data and balance the risk of patient de-identification",
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    delay: 200,
  }
  // Commented out service - add comma above if uncommented
  /*
  {
    id: 3,
    title: "Data Augmentation",
    description: "Used to augment and append existing data archives to increase the number of cases",
    icon: <BarChart4 className="h-10 w-10 text-blue-600" />,
    delay: 300,
  }
  */
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section 
      id="what-we-do" 
      className="py-20 md:py-28 bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={`uppercase text-sm font-bold tracking-wider text-blue-600 mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{animationDelay: '100ms'}}
          >
            WHAT WE DO
          </div>
          <h2 
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{animationDelay: '200ms'}}
          >
            Promoting a culture of safe data sharing in healthcare industry
          </h2>
          <div 
            className={`w-20 h-1 bg-blue-600 mx-auto mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{animationDelay: '300ms'}}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`glass-card p-8 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{animationDelay: `${service.delay}ms`}}
            >
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-50">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
