import HeroSection from './components/HeroSection'
import AnimatedCounters from './components/AnimatedCounters'
import ComparisonMatrix from './components/ComparisonMatrix'
import CostCalculator from './components/CostCalculator'
import InfluenceMap from './components/InfluenceMap'
import FrameworkCards from './components/FrameworkCards'
import DelegateSentimentChart from './components/DelegateSentimentChart'
import ContentPreviewer from './components/ContentPreviewer'
import LocalImpactTicker from './components/LocalImpactTicker'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <LocalImpactTicker />
      <AnimatedCounters />
      <ComparisonMatrix />
      <CostCalculator />
      <InfluenceMap />
      <FrameworkCards />
      <DelegateSentimentChart />
      <ContentPreviewer />
      <Footer />
    </div>
  )
}

export default App
