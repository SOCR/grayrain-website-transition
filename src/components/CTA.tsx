
import { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
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
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '100ms'}}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Putting more safely masked, integrally sound data in the hands of those who can make it <em>speak.</em>
            </h2>
            <a 
              href="https://rcompute.nursing.umich.edu/VH_24/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 btn-hover-effect"
            >
              GET STARTED
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
