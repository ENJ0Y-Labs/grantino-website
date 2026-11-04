import { useState } from 'react';
import img1 from './assert/img1.jpg';
import img2 from './assert/img2.jpg';
import img3 from './assert/img3.jpg';
import img4 from './assert/img4.jpg';
import img5 from './assert/img5.jpg';
import img6 from './assert/img6.jpg';
import img7 from './assert/img7.jpg';
import img8 from './assert/img8.jpg';
import img9 from './assert/img9.jpg';
import img10 from './assert/img10.jpg';

const WHATSAPP_NUMBER = '2348064233230';
const PHONE_NUMBERS = ['08064233230', '08034158711'];

const products = [
  { name: 'Table eggs', category: 'Eggs', description: 'Table eggs packed in standard 30-egg crates. Available by the crate and for bulk enquiries.', image: img2 },
  { name: 'Live broilers', category: 'Broiler chickens', description: 'Live broiler chickens for households, retailers, food businesses and bulk buyers.', image: img3 },
  { name: 'Dressed broilers', category: 'Processed poultry', description: 'Dressed broilers for customers who prefer poultry prepared before collection.', image: img4 },
  { name: 'Mature layers', category: 'Poultry livestock', description: 'Mature laying birds available for buyers who enquire about current batches.', image: img5 },
  { name: 'Point-of-lay pullets', category: 'Young birds', description: 'Point-of-lay pullets for poultry farmers planning or expanding a laying flock.', image: img6 },
  { name: 'Day-old chicks', category: 'Chicks', description: 'Day-old chicks for poultry farmers. Ask about availability before making plans.', image: img7 },
  { name: 'Poultry manure', category: 'Farm input', description: 'Poultry manure for agricultural and soil-improvement use.', image: img8 },
  { name: 'Other poultry products', category: 'Poultry products', description: 'Ask our team about other poultry products currently available from the farm.', image: img9 },
  { name: 'Poultry farm supplies', category: 'Farm supplies', description: 'Contact us to enquire about poultry farm supplies and current availability.', image: img10 },
];

const customerTypes = [
  'Poultry farmers',
  'Households',
  'Egg and chicken retailers',
  'Restaurants and eateries',
  'Hotels and caterers',
  'Market traders',
  'Bulk buyers',
];

function whatsappLink(message = 'Hello Grantino Farms, I would like to make an enquiry.') {
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'section-heading section-heading--center' : 'section-heading'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <p>Fresh poultry products and supplies in Port Harcourt</p>
          <a href={whatsappLink('Hello Grantino Farms, I would like to make an enquiry.')}>
            Chat with our team <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" onClick={closeMobileMenu} aria-label="Grantino Farms home">
            <span className="brand-mark" aria-hidden="true">G</span>
            <span className="brand-copy">
              <strong>Grantino Farms</strong>
              <small>POULTRY & AGRIBUSINESS</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="primary-navigation"
            className={mobileMenuOpen ? 'primary-nav primary-nav--open' : 'primary-nav'}
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMobileMenu}>Home</a>
            <a href="#about" onClick={closeMobileMenu}>About</a>
            <a href="#products" onClick={closeMobileMenu}>Products</a>
            <a href="#why-grantino" onClick={closeMobileMenu}>Why Grantino</a>
            <a href="#ordering" onClick={closeMobileMenu}>How to order</a>
            <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            <a className="nav-cta" href={whatsappLink()} target="_blank" rel="noreferrer">
              WhatsApp enquiry <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> Poultry products. Practical service.</p>
              <h1>Good food starts with <span>good farming.</span></h1>
              <p className="hero-description">
                Grantino Farms supplies table eggs, poultry birds, chicks and other poultry products
                to households, retailers, food businesses and poultry farmers.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#products">Explore our products <span aria-hidden="true">→</span></a>
                <a className="button button-secondary" href={whatsappLink()} target="_blank" rel="noreferrer">Make an enquiry</a>
              </div>
              <div className="hero-notes">
                <span><b>01</b> Retail and bulk enquiries</span>
                <span><b>02</b> Phone and WhatsApp orders</span>
              </div>
            </div>

            <div className="hero-art">
              <img className="hero-image" src={img1} alt="Poultry farming at Grantino Farms" />
              <div className="art-label">
                <span className="art-label-icon" aria-hidden="true">✳</span>
                <span><strong>From farm to customer</strong><small>Products for everyday needs</small></span>
              </div>
            </div>
          </div>
          <div className="hero-bottom-line" />
        </section>

        <section className="intro-strip" aria-label="Our business">
          <div className="container intro-strip-inner">
            <p>Serving different needs across the poultry value chain</p>
            <div><span>Households</span><i /> <span>Retailers</span><i /> <span>Farmers</span><i /> <span>Bulk buyers</span></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div>
              <SectionHeading
                eyebrow="About Grantino Farms"
                title="One poultry business, serving different customer needs."
              />
            </div>
            <div className="about-copy">
              <p>
                Grantino Farms is a poultry and agribusiness serving customers in Port Harcourt
                and surrounding areas. Our business connects customers with poultry products
                for home use, resale, food service and farm operations.
              </p>
              <p>
                Whether you need eggs for your shop, birds for your business or poultry supplies
                for your farm, contact our team to confirm current availability and pricing.
              </p>
              <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <SectionHeading
              eyebrow="What we supply"
              title="Poultry products for different needs."
              description="Browse our main product categories. Availability and prices can change, so contact us before placing an order."
            />
            <div className="product-grid">
              {products.map((product, index) => (
                <article className="product-card" key={product.name}>
                  <div className={'product-art product-art-' + ((index % 4) + 1)}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <small>{String(index + 1).padStart(2, '0')}</small>
                  </div>
                  <div className="product-card-copy">
                    <p className="product-category">{product.category}</p>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <a href={whatsappLink('Hello Grantino Farms, I would like to enquire about ' + product.name + '. Please share current availability and pricing.')} target="_blank" rel="noreferrer">
                      Ask about this product <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="catalog-note">Looking for something specific? Contact us to confirm availability.</p>
          </div>
        </section>

        <section className="section why-section" id="why-grantino">
          <div className="container why-grid">
            <div className="why-copy">
              <SectionHeading
                eyebrow="Why customers contact us"
                title="A straightforward way to source poultry products."
                description="We focus on product quality, fair pricing and helpful customer service."
              />
              <a className="button button-light" href={whatsappLink()} target="_blank" rel="noreferrer">Talk to our team <span aria-hidden="true">→</span></a>
            </div>
            <div className="value-list">
              <article><span>01</span><div><h3>Product quality</h3><p>We understand that customers need products that meet their intended use and expectations.</p></div></article>
              <article><span>02</span><div><h3>Moderate pricing</h3><p>Contact us for current prices and options for retail or bulk enquiries.</p></div></article>
              <article><span>03</span><div><h3>Customer-friendly service</h3><p>Reach us by phone or WhatsApp to discuss what you need before ordering.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section customers-section" id="customers">
          <div className="container customers-grid">
            <SectionHeading
              eyebrow="Who we serve"
              title="For homes, businesses and poultry farms."
              description="Our products serve customers with different purchasing needs."
            />
            <div className="customer-tags">
              {customerTypes.map((customer) => <span key={customer}>{customer}</span>)}
            </div>
          </div>
        </section>

        <section className="section ordering-section" id="ordering">
          <div className="container ordering-grid">
            <div>
              <SectionHeading
                eyebrow="Ordering and delivery"
                title="Ask. Confirm. Place your order."
                description="We handle enquiries directly so you can confirm the details before making payment or arranging collection."
              />
            </div>
            <div className="ordering-steps">
              <article><span>1</span><div><h3>Contact us</h3><p>Call or send a WhatsApp message with the product and quantity you need.</p></div></article>
              <article><span>2</span><div><h3>Confirm details</h3><p>Our team can confirm current availability, pricing and collection or delivery arrangements.</p></div></article>
              <article><span>3</span><div><h3>Arrange payment and fulfilment</h3><p>Payment options include cash, bank transfer and POS. Delivery can be discussed when you enquire.</p></div></article>
            </div>
          </div>
        </section>

        <section className="locations-section" id="locations">
          <div className="container locations-inner">
            <div>
              <p className="eyebrow">Find Grantino Farms</p>
              <h2>Serving Port Harcourt and its environs.</h2>
              <p>Our farm and retail outlet operate from separate locations. Contact us to confirm the right location for your order before travelling.</p>
            </div>
            <a className="button button-light" href={whatsappLink('Hello Grantino Farms, please confirm the correct address for visiting or collecting an order.') } target="_blank" rel="noreferrer">Confirm our location <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2>Let’s talk about what you need.</h2>
              <p className="contact-description">For current prices, product availability, bulk enquiries and collection or delivery details, contact Grantino Farms directly.</p>
            </div>
            <div className="contact-panel">
              <p className="contact-panel-label">Call our team</p>
              {PHONE_NUMBERS.map((phone) => (
                <a className="phone-link" href={'tel:' + phone.replace(/\s/g, '')} key={phone}>{phone}</a>
              ))}
              <a className="button button-primary contact-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">
                Message us on WhatsApp <span aria-hidden="true">↗</span>
              </a>
              <small>WhatsApp enquiries: 08064233230</small>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand brand-footer" href="#home">
            <span className="brand-mark" aria-hidden="true">G</span>
            <span className="brand-copy"><strong>Grantino Farms</strong><small>POULTRY & AGRIBUSINESS</small></span>
          </a>
          <p>Quality poultry products. Helpful service. Direct enquiries.</p>
          <a href="#home">Back to top ↑</a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Grantino Farms. All rights reserved.</span>
          <span>Port Harcourt, Rivers State, Nigeria</span>
        </div>
      </footer>
    </div>
  );
}
