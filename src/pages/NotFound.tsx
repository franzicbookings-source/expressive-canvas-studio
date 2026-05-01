import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center container-tight">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-4xl md:text-5xl lg:text-6xl">
        Page not <span className="serif text-accent">found.</span>
      </h1>
      <p className="mt-6 text-muted-foreground max-w-md">
        The page you're looking for moved or never existed. Let's get you back on track.
      </p>
      <Link to="/" className="mt-8 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium">
        Back home
      </Link>
    </section>
  );
};

export default NotFound;
