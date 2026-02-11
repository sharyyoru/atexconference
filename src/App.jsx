import Navigation from './components/Navigation'
import HeroNew from './components/HeroNew'
import ProfileComparison from './components/ProfileComparison'
import SpecializedTopics from './components/SpecializedTopics'
import SupportingPanels from './components/SupportingPanels'
import InvestmentSection from './components/InvestmentSection'
import FooterNew from './components/FooterNew'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroNew />
      <ProfileComparison />
      <SpecializedTopics />
      <SupportingPanels />
      <InvestmentSection />
      <FooterNew />
    </div>
  )
}

export default App
