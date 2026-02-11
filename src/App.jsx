import Navigation from './components/Navigation'
import HeroNew from './components/HeroNew'
import ProfileComparison from './components/ProfileComparison'
import SpecializedTopics from './components/SpecializedTopics'
import RegionalImpact from './components/RegionalImpact'
import SupportingPanels from './components/SupportingPanels'
import PostShowResources from './components/PostShowResources'
import InvestmentSection from './components/InvestmentSection'
import FooterNew from './components/FooterNew'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroNew />
      <ProfileComparison />
      <SpecializedTopics />
      <RegionalImpact />
      <SupportingPanels />
      <PostShowResources />
      <InvestmentSection />
      <FooterNew />
    </div>
  )
}

export default App
