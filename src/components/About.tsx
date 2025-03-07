
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <section 
      id="about" 
      className="py-20 md:py-28"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '200ms'}}>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
              <img
                ref={imageRef}
                src="https://uploads-ssl.webflow.com/603d59c1d67e74ad89682439/603d64eb2ed8054c8e37ba6b_pexels-thirdman-5327921.jpg"
                alt="Healthcare professionals working with data"
                className={`w-full h-auto object-cover transition-all duration-1000 ${imageLoaded ? 'img-loaded filter-none' : 'img-loading filter blur-sm'}`}
                onLoad={handleImageLoaded}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-blue-200 rounded-xl z-0 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50 rounded-xl z-0 animate-float" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          {/* Text Column */}
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '400ms'}}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-6">
              About us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Striving to make data more accessible for everyone
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              GrayRain strives to make data more accessible for everyone.
              We want to cultivate an ecosystem that accelerates research and innovation to save lives.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Since our founding in 2021 at the University of Michigan, we have hit the ground running.
            </p>
            <a 
              href="#what-we-do" 
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 btn-hover-effect"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
