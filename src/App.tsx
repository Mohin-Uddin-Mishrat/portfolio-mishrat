import Banner from "./component/Banner"
import EducationExperienceSection from "./component/EducationExperienceSection"
import Navbar from "./component/Navbar"
import ProjectSection from "./component/ProjectSection"
import StatsSection from "./component/StatsSection"


function App() {

  return (
    <div >
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <ProjectSection></ProjectSection>
      <EducationExperienceSection></EducationExperienceSection>
    </div>
  )
}

export default App
