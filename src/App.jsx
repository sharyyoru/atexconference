import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

function PublicView() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation showPricing={false} />
      <HeroNew />
      <ProfileComparison showPricing={false} />
      <SubSpeakers showPricing={false} />
      <SpecializedTopics />
      <RegionalImpact />
      <ConferenceSchedule />
      <SupportingPanels />
      <PostShowResources />
      <SpeakerRequirements />
      <FooterNew />
    </div>
  )
}

function FullView() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation showPricing={true} />
      <HeroNew />
      <ProfileComparison showPricing={true} />
      <SubSpeakers showPricing={true} />
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicView />} />
        <Route path="/main" element={<FullView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
