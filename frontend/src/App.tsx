
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventDetail from "./pages/EventDetail";
import CreateEvent from "./pages/CreateEvent";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Clubs from "./pages/Clubs";
import ClubDetail from "./pages/ClubDetail";
import ClubRegistration from "./pages/ClubRegistration";
import Workshops from "./pages/Workshops";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/events/create" element={<CreateEvent />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/clubs/:id" element={<ClubDetail />} />
          <Route path="/clubs/register" element={<ClubRegistration />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
