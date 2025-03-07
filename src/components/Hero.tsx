
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate image loading delay for smoother animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`max-w-2xl ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium mb-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
              Healthcare Data Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Data generation and <br/>
              <span className="relative">
                <span className="relative z-10">de-identification services</span>
                <span className="absolute bottom-2 md:bottom-3 left-0 w-full h-3 bg-blue-100 -z-1"></span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              GrayRain designs innovative tools, builds effective AI services and promotes large-scale data-driven health analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://vh-authentication.auth.us-east-1.amazoncognito.com/login?client_id=56q33gpcadjk1lk5iv17htnplr&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Frcompute.nursing.umich.edu%2FVH_24%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 btn-hover-effect"
              >
                Login / Sign Up
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://rcompute.nursing.umich.edu/VH_24/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-md border border-blue-100 hover:bg-blue-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Try VH Now
              </a>
              <a 
                href="#what-we-do"
                className="inline-flex items-center rounded-md bg-blue-50 px-6 py-3 text-base font-medium text-blue-800 shadow-sm hover:bg-blue-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                What We Do
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className={`relative ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://uploads-ssl.webflow.com/603d59c1d67e74ad89682439/603d5ac1d5c5fdd321dae4f3_pexels-evg-culture-1170979.jpg" 
                alt="Healthcare data visualization" 
                className={`w-full h-auto object-cover transition-all duration-1000 ${isLoaded ? 'img-loaded' : 'img-loading'}`}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-multiply"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-blue-200 rounded-lg z-0 animate-float" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
