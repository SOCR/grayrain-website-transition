
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-research py-16">
        <div className="container-content text-center">
          <h1 className="text-white mb-4">Contact Us</h1>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Get in touch with the GRAY-RAIN research team
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="mb-6">Send us a message</h2>
              <Card>
                <CardContent className="pt-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-gray-600 text-center">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label 
                            htmlFor="name" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label 
                            htmlFor="email" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label 
                          htmlFor="subject" 
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="Research Collaboration"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label 
                          htmlFor="message" 
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Your message here..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full sm:w-auto bg-research hover:bg-research-dark"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg 
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24"
                            >
                              <circle 
                                className="opacity-25" 
                                cx="12" 
                                cy="12" 
                                r="10" 
                                stroke="currentColor" 
                                strokeWidth="4"
                              ></circle>
                              <path 
                                className="opacity-75" 
                                fill="currentColor" 
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send size={16} className="mr-2" />
                            Send Message
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="mb-6">Contact Information</h2>
              <Card className="research-card mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Mail className="h-5 w-5 text-research mr-3 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600 mb-1">General Inquiries:</p>
                      <a href="mailto:info@gray-rain.org" className="text-research hover:underline">
                        info@gray-rain.org
                      </a>
                      <p className="text-gray-600 mt-2 mb-1">Research Collaborations:</p>
                      <a href="mailto:research@gray-rain.org" className="text-research hover:underline">
                        research@gray-rain.org
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="research-card mb-6">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <Phone className="h-5 w-5 text-research mr-3 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600 mb-1">Main Office:</p>
                      <a href="tel:+11234567890" className="text-research hover:underline">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="research-card">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-research mr-3 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-600">
                        GRAY-RAIN Research Initiative<br />
                        123 University Avenue<br />
                        Research Building, Suite 456<br />
                        Example City, EX 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-content">
          <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="research-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">How can I collaborate with the GRAY-RAIN initiative?</h3>
                <p className="text-gray-600">
                  We welcome collaboration opportunities with researchers, institutions, and industry partners. 
                  Please contact us through the form above or email us directly at research@gray-rain.org to 
                  discuss potential collaboration opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="research-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Are there opportunities for students and postdocs?</h3>
                <p className="text-gray-600">
                  Yes, we regularly have openings for graduate students, postdoctoral fellows, and research 
                  associates. Please check our website for current opportunities or contact us directly.
                </p>
              </CardContent>
            </Card>

            <Card className="research-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">How can I access your research data and tools?</h3>
                <p className="text-gray-600">
                  Many of our research tools and datasets are available through our GitHub repository. 
                  For specific requests or access to restricted datasets, please contact us directly.
                </p>
              </CardContent>
            </Card>

            <Card className="research-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer consulting services?</h3>
                <p className="text-gray-600">
                  Yes, our team can provide consulting services on neuroimaging analysis, statistical 
                  methodology, and research design. Please contact us with details about your project 
                  for more information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
