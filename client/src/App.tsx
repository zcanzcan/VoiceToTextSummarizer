import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import RecordingsPage from "@/pages/recordings";
import RecordingDetailPage from "@/pages/recording-detail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/recordings" component={RecordingsPage} />
      <Route path="/recording/:id" component={RecordingDetailPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
