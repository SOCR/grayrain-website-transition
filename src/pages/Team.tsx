
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Mail, Globe, Twitter } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  socials?: {
    email?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}

const TeamMember = ({ name, role, bio, imageSrc, socials }: TeamMemberProps) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <Card className="research-card overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={imageSrc} alt={name} />
              <AvatarFallback className="bg-research text-white text-xl">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-600 mb-2">{role}</p>
              {socials && (
                <div className="flex space-x-3">
                  {socials.email && (
                    <a 
                      href={`mailto:${socials.email}`} 
                      aria-label={`Email ${name}`}
                      className="text-gray-500 hover:text-research"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                  {socials.twitter && (
                    <a 
                      href={socials.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`${name}'s Twitter`}
                      className="text-gray-500 hover:text-research"
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  {socials.github && (
                    <a 
                      href={socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`${name}'s GitHub`}
                      className="text-gray-500 hover:text-research"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {socials.website && (
                    <a 
                      href={socials.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`${name}'s Website`}
                      className="text-gray-500 hover:text-research"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
          <p className="text-gray-600">{bio}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Team = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-research py-16">
        <div className="container-content text-center">
          <h1 className="text-white mb-4">Our Team</h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Meet the dedicated researchers and scientists working on the GRAY-RAIN initiative
          </p>
        </div>
      </section>

      {/* Team Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4">Research Team</h2>
            <p className="text-gray-600">
              Our team brings together experts from various disciplines including neuroscience, 
              statistics, computer science, and medical imaging. This interdisciplinary approach 
              allows us to tackle complex problems in gray matter research from multiple perspectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <TeamMember
              name="Dr. Jane Smith"
              role="Principal Investigator"
              bio="Dr. Smith leads the GRAY-RAIN initiative, bringing over 15 years of experience in neuroimaging and statistical methodology. Her research focuses on developing novel approaches to analyze gray matter structures in the human brain."
              imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              socials={{
                email: "jane.smith@example.org",
                twitter: "https://twitter.com",
                github: "https://github.com",
                website: "https://example.org"
              }}
            />
            
            <TeamMember
              name="Dr. Robert Johnson"
              role="Statistical Methodologist"
              bio="Dr. Johnson specializes in advanced statistical methods for neuroimaging data analysis. His current work focuses on developing Bayesian models for characterizing gray matter changes over time and across populations."
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              socials={{
                email: "robert.johnson@example.org",
                github: "https://github.com",
                website: "https://example.org"
              }}
            />

            <TeamMember
              name="Dr. Karen Williams"
              role="Neuroimaging Specialist"
              bio="Dr. Williams is an expert in advanced neuroimaging techniques. Her research focuses on developing and optimizing imaging protocols specifically for detailed visualization and analysis of gray matter structures."
              imageSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              socials={{
                email: "karen.williams@example.org",
                twitter: "https://twitter.com",
                website: "https://example.org"
              }}
            />

            <TeamMember
              name="Dr. Peter Parker"
              role="Data Science Lead"
              bio="Dr. Parker specializes in applying machine learning and AI techniques to neuroimaging data. He leads the development of computational approaches for automatic detection and characterization of gray matter features."
              imageSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              socials={{
                email: "peter.parker@example.org",
                github: "https://github.com",
                website: "https://example.org"
              }}
            />
          </div>

          <div className="mb-12">
            <h2 className="mb-4">Research Associates and Fellows</h2>
            <p className="text-gray-600 mb-8">
              Our team includes talented early-career researchers who contribute significantly to our research efforts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TeamMember
              name="Dr. Maria Davis"
              role="Postdoctoral Fellow"
              bio="Dr. Davis focuses on multimodal integration of neuroimaging data for comprehensive assessment of gray matter properties."
              socials={{
                email: "maria.davis@example.org",
                github: "https://github.com"
              }}
            />

            <TeamMember
              name="Dr. Sam Chen"
              role="Research Associate"
              bio="Dr. Chen specializes in statistical modeling of longitudinal changes in gray matter across different populations."
              socials={{
                email: "sam.chen@example.org",
                twitter: "https://twitter.com"
              }}
            />

            <TeamMember
              name="Dr. Lisa Taylor"
              role="AI Research Fellow"
              bio="Dr. Taylor develops deep learning approaches for enhancing gray matter imaging resolution and analysis."
              socials={{
                email: "lisa.taylor@example.org",
                github: "https://github.com"
              }}
            />

            <TeamMember
              name="Dr. Alex Rodriguez"
              role="Postdoctoral Fellow"
              bio="Dr. Rodriguez works on cross-disciplinary data integration, combining neuroimaging with genetic and clinical data."
              socials={{
                email: "alex.rodriguez@example.org"
              }}
            />

            <TeamMember
              name="Dr. Brian Wilson"
              role="Research Associate"
              bio="Dr. Wilson specializes in quantitative imaging methods for objective measurement of gray matter properties."
              socials={{
                email: "brian.wilson@example.org",
                website: "https://example.org"
              }}
            />

            <TeamMember
              name="Dr. Helena Garcia"
              role="Computational Neuroscientist"
              bio="Dr. Garcia develops computational models to understand structural and functional relationships in gray matter."
              socials={{
                email: "helena.garcia@example.org",
                github: "https://github.com"
              }}
            />
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-content">
          <div className="mb-12">
            <h2 className="mb-4">Collaborating Institutions</h2>
            <p className="text-gray-600">
              Our research is strengthened through collaborations with leading institutions worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="research-card text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">University of Example</h3>
                <p className="text-gray-600">
                  Department of Neuroscience
                </p>
              </CardContent>
            </Card>

            <Card className="research-card text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Research Institute of Technology</h3>
                <p className="text-gray-600">
                  Advanced Imaging Laboratory
                </p>
              </CardContent>
            </Card>

            <Card className="research-card text-center">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">National Neurological Institute</h3>
                <p className="text-gray-600">
                  Division of Brain Research
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
