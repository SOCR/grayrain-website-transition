
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold text-research mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Page Not Found</p>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          We're sorry, but the page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-research hover:bg-research-dark">
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-4 w-4" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
