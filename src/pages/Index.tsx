
import { useState } from "react";
import { CafeSidebar } from "@/components/cafe-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Coffee, ArrowRight, Plus, Minus } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: "food" | "drink";
  quantity: number;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Cappuccino",
    description: "Rich espresso topped with creamy milk foam, sprinkled with cocoa powder for a perfect morning start.",
    price: 4.99,
    image: "/placeholder.svg",
    category: "drink",
    quantity: 0
  },
  {
    id: 2,
    title: "Croissant",
    description: "Buttery, flaky pastry made with premium French butter, baked fresh daily for the perfect crispy texture.",
    price: 3.99,
    image: "/placeholder.svg",
    category: "food",
    quantity: 0
  },
  {
    id: 3,
    title: "Latte",
    description: "Smooth espresso with steamed milk and a light layer of foam, perfect for a relaxing coffee experience.",
    price: 4.49,
    image: "/placeholder.svg",
    category: "drink",
    quantity: 0
  },
  {
    id: 4,
    title: "Avocado Toast",
    description: "Fresh avocado on artisanal sourdough bread, topped with cherry tomatoes and microgreens.",
    price: 8.99,
    image: "/placeholder.svg",
    category: "food",
    quantity: 0
  }
];

const Index = () => {
  const [items, setItems] = useState<MenuItem[]>(menuItems);
  const isMobile = useIsMobile();

  const updateQuantity = (id: number, increment: boolean) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + (increment ? 1 : -1)) }
          : item
      )
    );
  };

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

              {/* Food & Drinks Menu Section */}
              <section className="py-8">
                <h2 className="text-2xl font-semibold mb-6 text-cafe-800 dark:text-cafe-100">Our Menu</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <div key={item.id} className="glass dark:glass-dark p-4 space-y-4 transition-all hover:scale-[1.02]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-cafe-800 dark:text-cafe-100">{item.title}</h3>
                          <span className="text-lg font-medium text-cafe-700 dark:text-cafe-200">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-muted-foreground line-clamp-2 mb-4">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-cafe-600 dark:text-cafe-300">
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, false)}
                              disabled={item.quantity === 0}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, true)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
