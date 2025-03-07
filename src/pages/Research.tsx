
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  FileText, 
  Database, 
  Microscope, 
  ChevronRight 
} from "lucide-react";

const Research = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-research py-16">
        <div className="container-content text-center">
          <h1 className="text-white mb-4">Our Research</h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Exploring the frontiers of gray matter analysis and neuroimaging technologies
            through innovative statistical methodologies and collaborative research.
          </p>
        </div>
      </section>

      {/* Research Overview */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4">Research Overview</h2>
            <p className="text-gray-600 mb-4">
              The GRAY-RAIN research initiative focuses on developing advanced methodologies 
              for analyzing gray matter structures in the human brain. Our interdisciplinary 
              approach combines statistical modeling, data science, and neuroimaging technologies 
              to advance our understanding of brain structure and function.
            </p>
            <p className="text-gray-600">
              Our research aims to contribute to the fields of neuroscience, medical imaging, 
              and statistical methodology, with potential applications in clinical diagnosis, 
              treatment planning, and basic science research.
            </p>
          </div>

          <Tabs defaultValue="areas" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="areas">Research Areas</TabsTrigger>
              <TabsTrigger value="methods">Methodologies</TabsTrigger>
              <TabsTrigger value="projects">Current Projects</TabsTrigger>
            </TabsList>

            <TabsContent value="areas" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="research-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center shrink-0">
                        <Brain className="h-6 w-6 text-research" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Gray Matter Analysis</h3>
                        <p className="text-gray-600">
                          We study the structure, function, and connectivity of gray matter in the human brain, 
                          developing new approaches to quantify and characterize gray matter features across 
                          different populations and conditions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="research-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center shrink-0">
                        <Microscope className="h-6 w-6 text-research" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Neuroimaging Technologies</h3>
                        <p className="text-gray-600">
                          We develop and refine advanced neuroimaging techniques, focusing on improving 
                          resolution, accuracy, and interpretability of brain imaging data, particularly 
                          for studying gray matter structures.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="research-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center shrink-0">
                        <FileText className="h-6 w-6 text-research" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Statistical Methodologies</h3>
                        <p className="text-gray-600">
                          We pioneer statistical approaches for analyzing complex neuroimaging data, 
                          developing robust methods for quantification, classification, and pattern 
                          recognition in gray matter imaging.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="research-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 w-12 h-12 bg-research-light rounded-full flex items-center justify-center shrink-0">
                        <Database className="h-6 w-6 text-research" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Data Science Integration</h3>
                        <p className="text-gray-600">
                          We leverage advanced data science techniques, including machine learning and 
                          artificial intelligence, to extract meaningful patterns and insights from large 
                          neuroimaging datasets.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="methods">
              <div className="grid grid-cols-1 gap-6">
                <Card className="research-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Advanced Statistical Methods</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-research mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">
                          <strong>Bayesian Modeling:</strong> Applying Bayesian statistical frameworks to neuroimaging data analysis, allowing for incorporation of prior knowledge and uncertainty quantification.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-research mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">
                          <strong>Multivariate Analysis:</strong> Developing multivariate statistical methods to analyze relationships between multiple brain regions and their functional connections.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-research mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">
                          <strong>Pattern Recognition:</strong> Creating statistical approaches to identify patterns and signatures in gray matter structures that correlate with specific conditions or traits.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="research-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Imaging Techniques</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-research mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">
                          <strong>High-Resolution MRI:</strong> Developing protocols for high-resolution magnetic resonance imaging specifically optimized for gray matter visualization and analysis.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-research mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">
                          <strong>Multimodal Integration:</strong> Combining multiple imaging modalities (e.g., structural MRI, functional MRI, diffusion imaging) to provide comprehensive assessment of gray matter.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-research mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">
                          <strong>Quantitative Imaging:</strong> Advancing quantitative imaging methods that provide objective measures of gray matter properties such as volume, thickness, and density.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="research-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Computational Approaches</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-research mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">
                          <strong>Machine Learning:</strong> Applying supervised and unsupervised machine learning algorithms to identify patterns, classify images, and predict outcomes based on gray matter features.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-research mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">
                          <strong>Deep Learning:</strong> Developing deep neural networks specifically designed for neuroimaging analysis, capable of extracting complex features from gray matter images.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-research mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">
                          <strong>High-Performance Computing:</strong> Utilizing advanced computing resources to process and analyze large-scale neuroimaging datasets efficiently.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="research-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Gray Matter Atlas Project</h3>
                    <p className="text-gray-500 text-sm mb-4">2022 - Present</p>
                    <p className="text-gray-600 mb-4">
                      Developing a comprehensive atlas of gray matter structures across different 
                      populations, ages, and conditions, providing a reference standard for research 
                      and clinical applications.
                    </p>
                    <p className="text-gray-600">
                      <strong>Key Investigators:</strong> Dr. J. Smith, Dr. R. Johnson, Dr. K. Williams
                    </p>
                  </CardContent>
                </Card>

                <Card className="research-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Statistical Modeling of Gray Matter Changes</h3>
                    <p className="text-gray-500 text-sm mb-4">2021 - Present</p>
                    <p className="text-gray-600 mb-4">
                      Creating advanced statistical models to characterize and predict changes in 
                      gray matter over time, with applications in aging research and neurological disorders.
                    </p>
                    <p className="text-gray-600">
                      <strong>Key Investigators:</strong> Dr. P. Parker, Dr. M. Davis, Dr. S. Chen
                    </p>
                  </CardContent>
                </Card>

                <Card className="research-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">AI-Enhanced Neuroimaging</h3>
                    <p className="text-gray-500 text-sm mb-4">2023 - Present</p>
                    <p className="text-gray-600 mb-4">
                      Developing artificial intelligence approaches to enhance the resolution, 
                      quality, and interpretability of gray matter imaging, with a focus on 
                      clinical applications.
                    </p>
                    <p className="text-gray-600">
                      <strong>Key Investigators:</strong> Dr. L. Taylor, Dr. A. Rodriguez, Dr. B. Wilson
                    </p>
                  </CardContent>
                </Card>

                <Card className="research-card">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">Cross-Disciplinary Data Integration</h3>
                    <p className="text-gray-500 text-sm mb-4">2022 - Present</p>
                    <p className="text-gray-600 mb-4">
                      Creating frameworks for integrating gray matter imaging data with other 
                      biological, genetic, and clinical data to provide comprehensive insights 
                      into brain structure and function.
                    </p>
                    <p className="text-gray-600">
                      <strong>Key Investigators:</strong> Dr. H. Garcia, Dr. E. Kim, Dr. T. Patel
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Research;
