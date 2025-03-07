
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Database, Microscope, Users } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-research-light to-white py-20">
        <div className="container-content">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h1 className="text-gray-900 mb-4 font-bold animate-fade-up">
                GRAY-RAIN Research Initiative
              </h1>
              <p className="text-gray-700 text-lg mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Advancing research in gray matter analysis, statistical methodologies, and neuroimaging technologies.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <Button asChild className="bg-research hover:bg-research-dark">
                  <Link to="/research">Explore Research</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" 
                  alt="Brain research illustration" 
                  className="rounded-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Research Areas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The GRAY-RAIN initiative focuses on developing advanced methodologies for analyzing gray matter, integrating statistical approaches with neuroimaging technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="research-card">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center">
                  <Brain className="h-6 w-6 text-research" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gray Matter Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Investigating the structure and function of gray matter in the human brain.
                </p>
                <Link to="/research" className="text-research flex items-center hover:underline">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="research-card">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center">
                  <Microscope className="h-6 w-6 text-research" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Neuroimaging</h3>
                <p className="text-gray-600 mb-4">
                  Developing advanced neuroimaging technologies and methodologies.
                </p>
                <Link to="/research" className="text-research flex items-center hover:underline">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="research-card">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center">
                  <Database className="h-6 w-6 text-research" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                <p className="text-gray-600 mb-4">
                  Applying statistical and computational methods to large neuroimaging datasets.
                </p>
                <Link to="/research" className="text-research flex items-center hover:underline">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="research-card">
              <CardContent className="pt-6">
                <div className="mb-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-research" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Research</h3>
                <p className="text-gray-600 mb-4">
                  Building partnerships across disciplines to accelerate scientific discovery.
                </p>
                <Link to="/research" className="text-research flex items-center hover:underline">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Publications Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-content">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
            <h2 className="text-gray-900">Latest Publications</h2>
            <Link to="/publications" className="text-research flex items-center hover:underline mt-2 md:mt-0">
              View all publications <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="research-card">
              <CardContent className="pt-6">
                <p className="text-sm text-gray-500 mb-2">April 2023</p>
                <h3 className="text-lg font-semibold mb-2">
                  Advanced Statistical Methods for Gray Matter Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Authors: J. Smith, R. Johnson, K. Williams
                </p>
                <a href="#" className="text-research flex items-center hover:underline">
                  Read paper <ArrowRight size={16} className="ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="research-card">
              <CardContent className="pt-6">
                <p className="text-sm text-gray-500 mb-2">February 2023</p>
                <h3 className="text-lg font-semibold mb-2">
                  Neuroimaging Applications in Clinical Settings
                </h3>
                <p className="text-gray-600 mb-4">
                  Authors: P. Parker, M. Davis, S. Chen
                </p>
                <a href="#" className="text-research flex items-center hover:underline">
                  Read paper <ArrowRight size={16} className="ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="research-card">
              <CardContent className="pt-6">
                <p className="text-sm text-gray-500 mb-2">January 2023</p>
                <h3 className="text-lg font-semibold mb-2">
                  Integrating AI with Neurological Data Analysis
                </h3>
                <p className="text-gray-600 mb-4">
                  Authors: L. Taylor, A. Rodriguez, B. Wilson
                </p>
                <a href="#" className="text-research flex items-center hover:underline">
                  Read paper <ArrowRight size={16} className="ml-1" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-research-dark to-research">
        <div className="container-content text-center">
          <h2 className="text-white mb-6">Join Our Research Community</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            We're looking for collaborators, researchers, and partners interested in advancing 
            gray matter research and neuroimaging technologies.
          </p>
          <Button asChild size="lg" className="bg-white text-research-dark hover:bg-gray-100">
            <Link to="/contact">Get Involved</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
