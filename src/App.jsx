import React, { useState } from 'react';

export default function App() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

return (  {/* HEADER */}      Grantino Farms Poultry Farming & Agribusiness  

      <nav className="hidden xl:flex items-center gap-4 flex-1 justify-center">
        <a href="#hero" className="py-1 px-2 transition-colors bg-[#163324] text-white font-bold rounded-lg text-sm">Home</a>
        <a href="#about" className="text-sm font-semibold text-[#424843] hover:text-[#1c1c17] py-1 px-2 rounded transition-colors">About Us</a>
        <a href="#products" className="text-sm font-semibold text-[#424843] hover:text-[#1c1c17] py-1 px-2 rounded transition-colors">Products</a>
        <a href="#why-us" className="text-sm font-semibold text-[#424843] hover:text-[#1c1c17] py-1 px-2 rounded transition-colors">Why Choose Us</a>
        <a href="#customers" className="text-sm font-semibold text-[#424843] hover:text-[#1c1c17] py-1 px-2 rounded transition-colors">Customers We Serve</a>
        <a href="#ordering" className="text-sm font-semibold text-[#424843] hover:text-[#1c1c17] py-1 px-2 rounded transition-colors">Ordering & Delivery</a>
        <a href="#locations" className="text-sm font-semibold text-[#424843] hover:text-[#1c1c17] py-1 px-2 rounded transition-colors">Locations</a>
        <a href="#contact" className="text-sm font-semibold text-[#424843] hover:text-[#1c1c17] py-1 px-2 rounded transition-colors">Contact</a>
      </nav>

      <div className="flex items-center gap-2 flex-shrink-0">
        <a href="tel:08064233230" className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#f7f3eb] text-[#1c1c17] font-semibold text-xs hover:bg-[#ece8e0] transition-colors">
          <span className="material-symbols-outlined text-[16px] text-[#7f5700]">call</span>
          <span>08064233230 / 08034158711</span>
        </a>
        <a href="https://wa.me/2348064233230" rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-[#7f5700] text-white font-semibold text-sm shadow hover:bg-[#604100] transition-colors">
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>WhatsApp Enquiry</span>
        </a>
        <div className="w-8 h-8 rounded-full bg-[#011e10] flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-white text-[18px]">person</span>
        </div>
      </div>
    </div>
  </header>

  {/* MAIN CONTENT */}
  <main className="w-full pt-20 bg-[#fdf9f1]">
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section id="hero" className="relative w-full overflow-hidden bg-[#fdf9f1] py-10 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-4 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdba45]/20 text-[#6f4b00]">
                <span className="w-2 h-2 rounded-full bg-[#7f5700] animate-pulse"></span>
                <span className="text-[11px] tracking-wider uppercase font-bold">ESTABLISHED 2015 • PORT HARCOURT, RIVERS STATE</span>
              </div>
              <h1 className="text-[40px] lg:text-[56px] leading-[1.1] font-headline text-[#011e10] tracking-tight font-bold">
                Quality Poultry Products. <br />
                <span className="text-[#7f5700] italic font-normal">Reliable Supply.</span> <br />
                Trusted Service.
              </h1>
              <p className="text-[18px] leading-relaxed text-[#424843] max-w-xl">
                Grantino Farms supplies fresh eggs, healthy livestock, chicks, and agricultural inputs to households, retailers, poultry farmers, and commercial bulk buyers across Port Harcourt and its environs.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
                <a href="#products" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#163324] text-white font-semibold text-sm shadow-sm hover:bg-[#011e10] transition-all">
                  <span>Explore Products</span>
                  <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-[#ece8e0] text-[#1c1c17] font-semibold text-sm hover:bg-[#e6e2da] transition-colors">
                  <span>Contact Us</span>
                </a>
                <a href="https://wa.me/2348064233230?text=Hello%20Grantino%20Farms,%20I%20would%20like%20to%20place%20an%20order" rel="noopener noreferrer" target="_blank" className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-[#7f5700] text-white font-semibold text-sm shadow-sm hover:bg-[#604100] transition-colors">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp: 08064233230</span>
                </a>
              </div>

              {/* Trust credentials bar */}
              <div className="grid grid-cols-3 gap-3 w-full pt-4">
                <div className="flex flex-col p-3 rounded-lg bg-[#f7f3eb]">
                  <span className="text-[11px] text-[#7f5700] font-bold uppercase">Heritage</span>
                  <span className="text-lg text-[#011e10] font-bold mt-1">Est. 2015</span>
                  <span className="text-xs text-[#424843] mt-0.5">Port Harcourt</span>
                </div>
                <div className="flex flex-col p-3 rounded-lg bg-[#f7f3eb]">
                  <span className="text-[11px] text-[#7f5700] font-bold uppercase">Standards</span>
                  <span className="text-lg text-[#011e10] font-bold mt-1">Grade-A</span>
                  <span className="text-xs text-[#424843] mt-0.5">Bio-Secure Husbandry</span>
                </div>
                <div className="flex flex-col p-3 rounded-lg bg-[#f7f3eb]">
                  <span className="text-[11px] text-[#7f5700] font-bold uppercase">Dispatch</span>
                  <span className="text-lg text-[#011e10] font-bold mt-1">Daily</span>
                  <span className="text-xs text-[#424843] mt-0.5">Bulk & Retail Orders</span>
                </div>
              </div>
            </div>

            {/* Right Column / Visual Mosaic */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-xl bg-[#ece8e0] aspect-[4/3] lg:aspect-[5/4]">
                <img 
                  alt="Grantino Farms Free-Range Husbandry and Farm Pasture" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4KLSC1ZjsZ3gkmtxXQdMNBIF53OZQqEiFvgz6ZacZJrqcg-2sqlhcndOL2-weeW5pOShW8iMPIqbFHvGtqFhkjCDsAz_odQb3cpygYDkVqxG1VgwHf0YeVcOi3bJCLm2bgohuFCfvtnu9ytSFapdWPrS1B0lso-7jAaaZI3XpUFwOfoTeOHYLoKgLorkClwqUatO9UEhkrNS3BeKu70x3DdYLMXLmM7upDGN5vF0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011e10]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#fdf9f1]/95 backdrop-blur-md shadow-md flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#163324] flex items-center justify-center flex-shrink-0 text-white">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                    <div>
                      <h2 className="text-base text-[#011e10] font-bold leading-tight">Registered Farm-Direct</h2>
                      <p className="text-xs text-[#424843]">Daily farm egg sorting & rigorous flock breeding</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] px-2.5 py-1 rounded bg-[#fdba45]/30 text-[#6f4b00] uppercase font-bold">Verified</span>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 p-3 rounded-lg bg-[#fdf9f1] shadow-md">
                <span className="material-symbols-outlined text-[#7f5700] text-[20px]">local_shipping</span>
                <span className="text-sm text-[#011e10] font-bold">Fast Port Harcourt Dispatch</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full py-16 bg-[#f7f3eb]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#7f5700]"></span>
              <span className="text-xs text-[#7f5700] uppercase font-bold tracking-widest">ABOUT GRANTINO FARMS</span>
            </div>
            <h2 className="text-[32px] lg:text-[40px] text-[#011e10] font-bold tracking-tight font-headline">
              A Unified Agribusiness with Dedicated Production & Retail Operations
            </h2>
            <p className="text-lg text-[#424843] mt-4">
              Founded in 2015 by Mr Nathan Ekwere, Grantino Farms (widely known across Port Harcourt as Grantino Egg Depot) has evolved into a reputable indigenous agricultural institution. We operate two complementary arms to bridge production efficiency with convenient local access.
            </p>
          </div>

          {/* Dual Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col p-6 rounded-xl bg-[#fdf9f1] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#163324] text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">agriculture</span>
                </div>
                <span className="text-xs px-3 py-1 rounded bg-[#ece8e0] text-[#424843] uppercase font-bold">Iriebe Production Axis</span>
              </div>
              <h3 className="text-xl text-[#011e10] font-bold mb-2 font-headline">The Commercial Poultry Farm</h3>
              <p className="text-sm text-[#424843] mb-4">
                Our intensive rearing center is equipped for bio-secure laying flock management, broiler fattening, and disciplined disease control. Every bird receives optimal nutrition, fresh deep-well water, and veterinarian oversight.
              </p>
              <ul className="space-y-2 text-sm text-[#1c1c17] mb-4">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#7f5700]">check_circle</span>
                  <span>Commercial table egg laying suites & bulk packing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#7f5700]">check_circle</span>
                  <span>Broiler fattening pens & live weight monitoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#7f5700]">check_circle</span>
                  <span>Organic poultry manure collection for state crop growers</span>
                </li>
              </ul>
              <div className="mt-auto pt-4 flex items-center text-[#011e10] text-sm font-semibold gap-1">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span>Iriebe Axis • Wholesale & Bulk Collections</span>
              </div>
            </div>

            <div className="flex flex-col p-6 rounded-xl bg-[#fdf9f1] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#fdba45]/30 text-[#6f4b00] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">storefront</span>
                </div>
                <span className="text-xs px-3 py-1 rounded bg-[#ece8e0] text-[#424843] uppercase font-bold">Old Aba Road Hub</span>
              </div>
              <h3 className="text-xl text-[#011e10] font-bold mb-2 font-headline">The Retail Depot & City Outlet</h3>
              <p className="text-sm text-[#424843] mb-4">
                Centrally situated for fast, everyday walk-in access. Households, neighborhood egg resellers, and local chefs can pick up crates of freshly sorted table eggs, dressed poultry cuts, and feed rations without driving to the outer farm.
              </p>
              <ul className="space-y-2 text-sm text-[#1c1c17] mb-4">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#7f5700]">check_circle</span>
                  <span>Daily arrivals of freshly sorted Grade-A table eggs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#7f5700]">check_circle</span>
                  <span>Dressed chicken portions & whole broilers on order</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#7f5700]">check_circle</span>
                  <span>Commercial formulated poultry feeds & supplements</span>
                </li>
              </ul>
              <div className="mt-auto pt-4 flex items-center text-[#011e10] text-sm font-semibold gap-1">
                <span className="material-symbols-outlined text-[18px]">location_on</span>
                <span>Old Aba Road • Convenient Walk-in Pickup</span>
              </div>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="p-8 rounded-xl bg-[#011e10] text-white shadow-md">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs text-[#7f5700] uppercase font-bold tracking-widest">OUR COMMITMENT</span>
              <h3 className="text-2xl text-white font-bold mt-1 font-headline">The Three Operational Pillars</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-[#163324]">
                <span className="material-symbols-outlined text-[36px] text-[#7f5700] mb-3">verified_user</span>
                <h4 className="text-lg text-white font-bold mb-1">Quality Poultry Products</h4>
                <p className="text-xs text-[#7d9c88]">Strict sanitary inspection, hygienic grading, and robust livestock health protocols ensure prime quality on every batch.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-[#163324]">
                <span className="material-symbols-outlined text-[36px] text-[#7f5700] mb-3">payments</span>
                <h4 className="text-lg text-white font-bold mb-1">Moderate & Fair Pricing</h4>
                <p className="text-xs text-[#7d9c88]">Direct farm gate rates designed to keep household dining economical and allow downstream egg resellers to maintain healthy margins.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-[#163324]">
                <span className="material-symbols-outlined text-[36px] text-[#7f5700] mb-3">support_agent</span>
                <h4 className="text-lg text-white font-bold mb-1">Customer-Friendly Service</h4>
                <p className="text-xs text-[#7d9c88]">Accessible management, direct phone ordering lines, quick WhatsApp dispatch updates, and dependable fulfillment.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="w-full py-16 bg-[#fdf9f1]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-8 h-[2px] bg-[#7f5700]"></span>
                <span className="text-xs text-[#7f5700] uppercase font-bold tracking-widest">PRODUCT CATALOG</span>
              </div>
              <h2 className="text-[32px] lg:text-[40px] text-[#011e10] font-bold tracking-tight font-headline">
                Our Products & Agricultural Offerings
              </h2>
              <p className="text-lg text-[#424843] mt-2">
                Fresh, healthy, and reliably supplied for retail buyers, caterers, and wholesale distributors. Contact our sales desk for current market prices and batch availability.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ece8e0] text-xs font-semibold text-[#424843]">
                <span className="material-symbols-outlined text-[16px] text-[#7f5700]">update</span>
                Daily Batch Verification
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Product 1 */}
            <div className="flex flex-col rounded-xl overflow-hidden bg-[#f7f3eb] shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 w-full overflow-hidden bg-[#e6e2da]">
                <img alt="Table Eggs" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-ggIHYmxHX2OCEzThIfRpX0oVrcOmyppqT0JToJ9JXYiv6v-z_rWKOKZkM7X23fxrd1bSi2IVpbYioRhwW9uV2GjOnlJRG6h1l37P2OUUgDiwwH3dTgBm24mLBB9EoOltPyfFfVKsLBiwy8BN9gOP_04Gz10jbvgjAriR7mdTuZlyrySaDn7MgGNFrx1xt_5oawDxF_fX6qcub8oZG8dtbh0y5gOL-klnBpm6PY4" />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#163324] text-white text-[11px] font-bold">Top Seller</span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[11px] text-[#7f5700] font-bold uppercase">Daily Collection</span>
                <h3 className="text-base text-[#011e10] font-bold mt-1">Table Eggs</h3>
                <p className="text-xs text-[#424843] mt-1.5 flex-1">
                  Freshly collected, cleanly sorted, and packed in durable 30-egg paper crates and wholesale master cartons. Perfect for households and bakeries.
                </p>
                <div className="mt-4 px-3 py-2 rounded-lg bg-[#f1ede5] flex items-center justify-between">
                  <span className="text-[11px] text-[#424843] uppercase">Pricing</span>
                  <span className="text-xs text-[#011e10] font-bold">Current Daily Rate</span>
                </div>
                <a href="https://wa.me/2348064233230?text=Hello%20Grantino%20Farms,%20I%20am%20enquiring%20about%20Table%20Eggs%20crates%20pricing" rel="noopener noreferrer" target="_blank" className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded bg-[#7f5700] text-white text-xs font-semibold hover:bg-[#604100] transition-colors">
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col rounded-xl overflow-hidden bg-[#f7f3eb] shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 w-full overflow-hidden bg-[#e6e2da]">
                <img alt="Live Broilers" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQehj09BI7nbdf4IdTIFljiiMb22B2ceJRt11KKXXMcb8RKDxRmm0ymTfcPQQ7adph-ect7qWgU2DqelA8krsrk3CLVZso9gdNFBAOhkdpckrM6e7RN_BIBOYWVffV0Q-nyIyAupbPB36FFBddVlYHLwfWxAXvI4Wq8dfaGhbN7QSgVPeWaLoKrgbPQLt_MzwUzsg4ePV90PWLyBJKO3jomUB3ct8GcGcz7l4CxQ0" />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#ece8e0] text-[#1c1c17] text-[11px] font-bold">Heavy Weight</span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[11px] text-[#7f5700] font-bold uppercase">Meat Stock</span>
                <h3 className="text-base text-[#011e10] font-bold mt-1">Live Broilers</h3>
                <p className="text-xs text-[#424843] mt-1.5 flex-1">
                  Robust, healthy, farm-raised meat birds with excellent carcass yield and vigor. Grown on nutritious balanced feeds for tender, flavorful meat.
                </p>
                <div className="mt-4 px-3 py-2 rounded-lg bg-[#f1ede5] flex items-center justify-between">
                  <span className="text-[11px] text-[#424843] uppercase">Collection</span>
                  <span className="text-xs text-[#011e10] font-bold">Farm / Dispatch</span>
                </div>
                <a href="https://wa.me/2348064233230?text=Hello%20Grantino%20Farms,%20I%20am%20enquiring%20about%20Live%20Broilers%20availability" rel="noopener noreferrer" target="_blank" className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded bg-[#7f5700] text-white text-xs font-semibold hover:bg-[#604100] transition-colors">
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col rounded-xl overflow-hidden bg-[#f7f3eb] shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 w-full overflow-hidden bg-[#e6e2da] flex items-center justify-center">
                <div className="w-full h-full bg-[#ece8e0] flex flex-col items-center justify-center p-4 text-center">
                  <span className="material-symbols-outlined text-[48px] text-[#011e10]">restaurant</span>
                  <span className="text-[11px] text-[#424843] mt-2">Hygienic Processing</span>
                </div>
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#163324] text-white text-[11px] font-bold">Kitchen Ready</span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[11px] text-[#7f5700] font-bold uppercase">Ready-to-Cook</span>
                <h3 className="text-base text-[#011e10] font-bold mt-1">Dressed Broilers</h3>
                <p className="text-xs text-[#424843] mt-1.5 flex-1">
                  Freshly processed, carefully descaled and dressed chicken portions ready for restaurants, hotels, catering events, and household kitchens.
                </p>
                <div className="mt-4 px-3 py-2 rounded-lg bg-[#f1ede5] flex items-center justify-between">
                  <span className="text-[11px] text-[#424843] uppercase">Packing</span>
                  <span className="text-xs text-[#011e10] font-bold">Chilled / Frozen</span>
                </div>
                <a href="https://wa.me/2348064233230?text=Hello%20Grantino%20Farms,%20I%20am%20interested%20in%20ordering%20Dressed%20Broilers" rel="noopener noreferrer" target="_blank" className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded bg-[#7f5700] text-white text-xs font-semibold hover:bg-[#604100] transition-colors">
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Product 4 */}
            <div className="flex flex-col rounded-xl overflow-hidden bg-[#f7f3eb] shadow-sm hover:shadow-md transition-all">
              <div className="relative h-48 w-full overflow-hidden bg-[#e6e2da] flex items-center justify-center">
                <div className="w-full h-full bg-[#ece8e0] flex flex-col items-center justify-center p-4 text-center">
                  <span className="material-symbols-outlined text-[48px] text-[#7f5700]">egg</span>
                  <span className="text-[11px] text-[#424843] mt-2">Flock Cycling</span>
                </div>
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#e6e2da] text-[#1c1c17] text-[11px] font-bold">Dual Purpose</span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[11px] text-[#7f5700] font-bold uppercase">Poultry Livestock</span>
                <h3 className="text-base text-[#011e10] font-bold mt-1">Mature Layers</h3>
                <p className="text-xs text-[#424843] mt-1.5 flex-1">
                  Well-conditioned mature laying hens with firm meat and rich flavor, ideal for festive stews, local pepper soup eateries, or commercial meat traders.
                </p>
                <div className="mt-4 px-3 py-2 rounded-lg bg-[#f1ede5] flex items-center justify-between">
                  <span className="text-[11px] text-[#424843] uppercase">Avail</span>
                  <span className="text-xs text-[#011e10] font-bold">Periodic Batches</span>
                </div>
                <a href="https://wa.me/2348064233230?text=Hello%20Grantino%20Farms,%20Please%20let%20me%20know%20availability%20for%20Mature%20Layers" rel="noopener noreferrer" target="_blank" className="mt-3 inline-flex items-center justify-center gap-1.5 w-full py-2 rounded bg-[#7f5700] text-white text-xs font-semibold hover:bg-[#604100] transition-colors">
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER SECTION */}
      <footer id="contact" className="w-full bg-[#011e10] text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 font-headline text-white">Grantino Farms</h3>
              <p className="text-sm text-[#7d9c88] mb-4">
                Your reliable partner for fresh table eggs, healthy livestock, and expert poultry supply in Port Harcourt, Rivers State.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#7d9c88]">
                <span className="material-symbols-outlined text-[18px] text-[#7f5700]">location_on</span>
                <span>Iriebe Commercial Farm & Old Aba Road Depot, Port Harcourt</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase font-bold text-[#7f5700] tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-[#7d9c88]">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Our Products</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors">Store Locations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase font-bold text-[#7f5700] tracking-wider mb-4">Direct Contact</h4>
              <p className="text-sm text-[#7d9c88] mb-2">Phone Lines: 08064233230 / 08034158711</p>
              <p className="text-sm text-[#7d9c88] mb-4">Founder: Mr Nathan Ekwere</p>
              <a href="https://wa.me/2348064233230" rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#7f5700] text-white text-sm font-semibold hover:bg-[#604100] transition-colors">
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-[#163324] text-center text-xs text-[#7d9c88]">
            &copy; {new Date().getFullYear()} Grantino Farms. All rights reserved. Established in Port Harcourt, Rivers State.
          </div>
        </div>
      </footer>

    </div>
  </main>
</div>


); }