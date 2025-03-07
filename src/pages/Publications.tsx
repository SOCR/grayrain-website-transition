
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Search,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample publication data
const publications = [
  {
    id: 1,
    title: "Advanced Statistical Methods for Gray Matter Analysis",
    authors: "Smith J, Johnson R, Williams K",
    journal: "Journal of Neuroimaging",
    year: 2023,
    month: "April",
    abstract: "This paper introduces novel statistical approaches for analyzing gray matter structures in the human brain, focusing on Bayesian modeling and multivariate analysis techniques.",
    type: "article",
    link: "#",
    pdfLink: "#"
  },
  {
    id: 2,
    title: "Neuroimaging Applications in Clinical Settings",
    authors: "Parker P, Davis M, Chen S",
    journal: "Clinical Brain Research",
    year: 2023,
    month: "February",
    abstract: "This study explores the application of advanced neuroimaging techniques in clinical settings, with a focus on gray matter analysis for diagnostic and prognostic purposes.",
    type: "article",
    link: "#",
    pdfLink: "#"
  },
  {
    id: 3,
    title: "Integrating AI with Neurological Data Analysis",
    authors: "Taylor L, Rodriguez A, Wilson B",
    journal: "Artificial Intelligence in Medicine",
    year: 2023,
    month: "January",
    abstract: "This paper presents a framework for integrating artificial intelligence approaches with neurological data analysis, demonstrating improvements in gray matter feature extraction and classification.",
    type: "article",
    link: "#",
    pdfLink: "#"
  },
  {
    id: 4,
    title: "Statistical Modeling of Gray Matter Changes in Aging",
    authors: "Johnson R, Garcia H, Smith J",
    journal: "Aging and Brain Function",
    year: 2022,
    month: "December",
    abstract: "This research develops statistical models to characterize changes in gray matter structures associated with normal aging, providing a foundation for distinguishing pathological from normal age-related changes.",
    type: "article",
    link: "#",
    pdfLink: "#"
  },
  {
    id: 5,
    title: "Multimodal Imaging for Comprehensive Gray Matter Assessment",
    authors: "Williams K, Davis M, Kim E",
    journal: "Multimodal Neuroimaging",
    year: 2022,
    month: "October",
    abstract: "This paper describes a multimodal imaging approach that combines structural MRI, functional MRI, and diffusion imaging for comprehensive assessment of gray matter properties.",
    type: "article",
    link: "#",
    pdfLink: "#"
  },
  {
    id: 6,
    title: "Deep Learning Approaches for Gray Matter Segmentation",
    authors: "Parker P, Taylor L, Patel T",
    journal: "Computational Neuroimaging",
    year: 2022,
    month: "August",
    abstract: "This research presents novel deep learning architectures specifically designed for accurate segmentation of gray matter structures in neuroimaging data.",
    type: "article",
    link: "#",
    pdfLink: "#"
  },
  {
    id: 7,
    title: "Proceedings of the International Conference on Brain Mapping",
    authors: "Various Authors",
    journal: "Conference Proceedings",
    year: 2022,
    month: "July",
    abstract: "Collection of papers presented at the International Conference on Brain Mapping, including several contributions from the GRAY-RAIN research initiative.",
    type: "conference",
    link: "#",
    pdfLink: "#"
  },
  {
    id: 8,
    title: "Quantitative Assessment of Gray Matter Density: Technical Report",
    authors: "Technical Team, GRAY-RAIN Initiative",
    journal: "Technical Reports Series",
    year: 2022,
    month: "May",
    abstract: "Technical report detailing methodologies for quantitative assessment of gray matter density using advanced imaging and computational techniques.",
    type: "report",
    link: "#",
    pdfLink: "#"
  },
];

const PublicationCard = ({ publication }: { publication: typeof publications[0] }) => {
  return (
    <Card className="research-card">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-research-light rounded-full flex items-center justify-center shrink-0">
            <FileText className="h-5 w-5 text-research" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">{publication.month} {publication.year}</p>
            <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
            <p className="text-gray-600 mb-2">
              <strong>Authors:</strong> {publication.authors}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Published in:</strong> {publication.journal}
            </p>
            <p className="text-gray-600 mb-4">{publication.abstract}</p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="flex items-center" asChild>
                <a href={publication.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-1" /> View
                </a>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center" asChild>
                <a href={publication.pdfLink} target="_blank" rel="noopener noreferrer">
                  <Download size={16} className="mr-1" /> PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  // Filter publications based on search term and filters
  const filteredPublications = publications.filter((pub) => {
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = yearFilter ? pub.year.toString() === yearFilter : true;
    const matchesType = typeFilter ? pub.type === typeFilter : true;
    
    return matchesSearch && matchesYear && matchesType;
  });

  // Get unique years for filter
  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-research py-16">
        <div className="container-content text-center">
          <h1 className="text-white mb-4">Publications</h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Research papers, articles, and reports from the GRAY-RAIN initiative
          </p>
        </div>
      </section>

      {/* Publications List */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="md:flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    className="pl-10"
                    placeholder="Search publications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-40">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                  <Select value={yearFilter} onValueChange={setYearFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Years</SelectItem>
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full sm:w-40">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Types</SelectItem>
                      <SelectItem value="article">Articles</SelectItem>
                      <SelectItem value="conference">Conference Papers</SelectItem>
                      <SelectItem value="report">Reports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      setSearchTerm("");
                      setYearFilter("");
                      setTypeFilter("");
                    }}
                    className="h-10"
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {filteredPublications.length > 0 ? (
            <div className="space-y-6">
              {filteredPublications.map((publication) => (
                <PublicationCard key={publication.id} publication={publication} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No publications match your search criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setYearFilter("");
                  setTypeFilter("");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Publications;
