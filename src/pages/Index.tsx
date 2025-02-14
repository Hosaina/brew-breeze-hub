
import { CafeSidebar } from "@/components/cafe-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Coffee, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      <CafeSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="border-b">
          <div className="container flex h-16 items-center justify-between py-4">
            <h2 className="text-lg font-semibold text-cafe-800 dark:text-cafe-100">Welcome</h2>
            <ThemeToggle />
          </div>
        </header>
        
        <main className="flex-1 py-6">
          <div className="container">
            <div className="animate-fade-up">
              <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
                <div className="flex max-w-[980px] flex-col items-start gap-2">
                  <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                    Welcome to Brew Breeze
                  </h1>
                  <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                    Discover our carefully curated selection of premium coffees, teas, and delightful treats.
                  </p>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" className="gap-2">
                    <Coffee className="h-5 w-5" />
                    View Menu
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </section>

              <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Premium Coffee",
                    description: "Expertly roasted beans from around the world",
                  },
                  {
                    title: "Fresh Pastries",
                    description: "Baked daily for the perfect morning treat",
                  },
                  {
                    title: "Cozy Atmosphere",
                    description: "A perfect space to work or relax",
                  },
                ].map((item) => (
                  <div key={item.title} className="glass dark:glass-dark p-6 transition-all hover:scale-[1.02]">
                    <h3 className="text-xl font-semibold text-cafe-800 dark:text-cafe-100">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </main>

        <footer className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 Brew Breeze. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
