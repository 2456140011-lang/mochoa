import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { ShopSection } from './components/ShopSection';
import { AboutSection } from './components/AboutSection';
import { PersonalizationSection } from './components/PersonalizationSection';
import { BusinessSection } from './components/BusinessSection';
import { JournalSection } from './components/JournalSection';
import { ContactAndFaqSection } from './components/ContactAndFaqSection';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { NAV_ITEMS, ProductItem } from './data/mocHoaData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [shopFilter, setShopFilter] = useState<
    'all' | 'clip-card' | 'chenille-flower' | 'combo-moc-yi'
  >('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0.05 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleAddToCart = (product: ProductItem, variant: string, note?: string) => {
    const key = `${product.id}::${variant}::${note || ''}`;
    setCart((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { key, product, variant, note, quantity: 1 }];
    });
  };

  const handleUpdateQty = (key: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (key: string) => {
    setCart((prev) => prev.filter((item) => item.key !== key));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EBDD] text-[#3F2E24]">
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        <HomeSection onSelectCollectionFilter={setShopFilter} />
        <ShopSection
          activeFilter={shopFilter}
          onFilterChange={setShopFilter}
          onAddToCart={handleAddToCart}
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={cartCount}
        />
        <AboutSection />
        <PersonalizationSection />
        <BusinessSection />
        <JournalSection />
        <ContactAndFaqSection />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
