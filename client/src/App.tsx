import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Builds from "./pages/Builds";
import Toolkit from "./pages/Toolkit";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Router() { return <Switch><Route path="/" component={Home} /><Route path="/about" component={About} /><Route path="/builds" component={Builds} /><Route path="/toolkit" component={Toolkit} /><Route path="/contact" component={Contact} /><Route path="/404" component={NotFound} /><Route component={NotFound} /></Switch>; }
export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
