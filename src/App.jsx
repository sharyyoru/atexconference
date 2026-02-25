import Navigation from './components/Navigation'
import HeroNew from './components/HeroNew'
import ProfileComparison from './components/ProfileComparison'
import SubSpeakers from './components/SubSpeakers'
import SpecializedTopics from './components/SpecializedTopics'
import RegionalImpact from './components/RegionalImpact'
import ConferenceSchedule from './components/ConferenceSchedule'
import SupportingPanels from './components/SupportingPanels'
import PostShowResources from './components/PostShowResources'
import SpeakerRequirements from './components/SpeakerRequirements'
import InvestmentSection from './components/InvestmentSection'
import FooterNew from './components/FooterNew'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroNew />
      <ProfileComparison />
      <SubSpeakers />
      <SpecializedTopics />
      <RegionalImpact />
      <ConferenceSchedule />
      <SupportingPanels />
      <PostShowResources />
      <SpeakerRequirements />
      <InvestmentSection />
      <FooterNew />
    </div>
  )
}

export default App
