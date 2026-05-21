import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/site/Layout";
import Index from "./pages/Index.tsx";

const Services = lazy(() => import("./pages/Services.tsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.tsx"));
const Work = lazy(() => import("./pages/Work.tsx"));
const Pricing = lazy(() => import("./pages/Pricing.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const Areas = lazy(() => import("./pages/Areas.tsx"));
const LocationPage = lazy(() => import("./pages/LocationPage.tsx"));
const LocationServicePage = lazy(() => import("./pages/LocationServicePage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/work" element={<Work />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/areas" element={<Areas />} />
              <Route path="/areas/:town" element={<LocationPage />} />
              <Route path="/graphic-design-:town" element={<LocationServicePage serviceKey="graphic-design" />} />
              <Route path="/printing-services-:town" element={<LocationServicePage serviceKey="printing-services" />} />
              <Route path="/branding-:town" element={<LocationServicePage serviceKey="branding" />} />
              <Route path="/ink-toner-:town" element={<LocationServicePage serviceKey="ink-toner" />} />
              <Route path="/signage-:town" element={<LocationServicePage serviceKey="signage" />} />
              <Route path="/corporate-gifts-:town" element={<LocationServicePage serviceKey="corporate-gifts" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
