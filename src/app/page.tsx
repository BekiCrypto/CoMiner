import { siteData } from '@/lib/data';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Products from '@/components/products';
import Partnerships from '@/components/partnerships';
import Team from '@/components/team';
import Sustainability from '@/components/sustainability';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import AIContentEditor from '@/components/ai-content-editor';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header
        brand={siteData.brand}
        navigation={siteData.navigation}
        logoImage={getImage('brand-logo')}
      />
      <main className="flex-1">
        <Hero data={siteData.hero} image={getImage('hero-background')} />
        <About data={siteData.about} image={getImage('about-image')} />
        <Services data={siteData.services} />
        <Products data={siteData.products} images={
          {
            gold: getImage('product-gold'),
            copper: getImage('product-copper'),
            lithium: getImage('product-lithium'),
            diamonds: getImage('product-diamonds'),
          }
        } />
        <Partnerships data={siteData.partnerships} images={
          siteData.partnerships.partners.map(p => getImage(`partner-${p.name.toLowerCase().replace(/ /g, '-')}`))
        } />
        <Team data={siteData.team} images={
          siteData.team.members.map(m => getImage(`team-${m.name.toLowerCase().replace(/ /g, '-')}`))
        } />
        <Sustainability data={siteData.sustainability} image={getImage('sustainability-image')} />
        <Projects data={siteData.projects} images={
          siteData.projects.items.map(p => getImage(`project-${p.title.toLowerCase().replace(/ /g, '-')}`))
        } />
        <Contact data={siteData.contact} />
      </main>
      <Footer data={siteData.footer} />
      <AIContentEditor siteData={siteData} />
    </div>
  );
}
