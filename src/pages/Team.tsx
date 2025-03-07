
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Linkedin } from 'lucide-react';

// Team member type
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  linkedin?: string;
}

// Sample team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Simeone Marino",
    role: "Co-Founder & CTO",
    bio: "Dr. Marino leads our technology initiatives, focusing on developing innovative algorithms for synthetic data generation and privacy-preserving techniques. He co-founded GrayRain in 2022 at the University of Michigan.",
    imageSrc: "https://raw.githubusercontent.com/SOCR/gray-rain/refs/heads/main/public/Simeone-Screenshot.png",
    linkedin: "https://www.linkedin.com/company/34612225/",
  },
  {
    id: 2,
    name: "Dr. Ivo Dinov",
    role: "C0-Founder",
    bio: "Dr. Dinov is a specialist in healthcare data analytics with over 15 years of experience in the field. He co-founded GrayRain in 2022 at the University of Michigan.",
    imageSrc: "https://raw.githubusercontent.com/SOCR/gray-rain/refs/heads/main/public/Ivo-Screenshot.png",
    linkedin: "https://www.linkedin.com/company/34612225/",
  },
  {
    id: 3,
    name: "Dr. Johnny Liu",
    role: "CO-Founder",
    bio: "Dr. Liu co-founded GrayRain in 2022 at the University of Michigan.",
    imageSrc: "https://raw.githubusercontent.com/SOCR/gray-rain/refs/heads/main/public/Johnny-Screenshot.png",
    linkedin: "https://www.linkedin.com/company/34612225/",
  },
  {
    id: 4,
    name: "Dr. Ronak Shetty",
    role: "Co-Founder and CEO",
    bio: "Dr. Shetty co-founded GrayRain in 2022 at the University of Michigan.",
    imageSrc: "https://raw.githubusercontent.com/SOCR/gray-rain/refs/heads/main/public/Ronak-Screenshot.png",
    linkedin: "https://www.linkedin.com/company/34612225/",
  },
];

const Team = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleImageLoaded = (id: number) => {
    setLoadedImages(prev => [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
              Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-slide-up" style={{animationDelay: '200ms'}}>
              Meet the dedicated professionals behind GrayRain's innovative healthcare data solutions.
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto animate-slide-up" style={{animationDelay: '400ms'}}></div>
          </div>
        </section>
        
        {/* Team Members Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id}
                  className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl animate-slide-up"
                  style={{animationDelay: `${index * 100 + 200}ms`}}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={member.imageSrc} 
                      alt={member.name}
                      className={`w-full h-full object-cover transition-all duration-1000 ${
                        loadedImages.includes(member.id) ? 'img-loaded filter-none' : 'img-loading filter blur-sm'
                      }`}
                      onLoad={() => handleImageLoaded(member.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors"
                          aria-label={`LinkedIn profile of ${member.name}`}
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Join Us Banner */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Interested in working with us? We're always looking for talented individuals passionate about healthcare data innovation.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 btn-hover-effect"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
