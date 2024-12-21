import Hero from "@/app/components/Hero";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Skills from "./components/Skills";
import Articles from "./components/Articles";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        <Articles />
        <Skills />
        <Experience />
        
        
      </main>
    </div>
  );
}
