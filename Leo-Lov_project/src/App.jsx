import './App.scss'
import { Nav } from './components/Nav/Nav'
import { Header } from './components/Header/Header'
import { Section } from './components/Section/Section'
import { Card } from './components/Card/Card'
import { CardHeader } from './components/Card/CardHeader/CardHeader'
import { CardBody } from './components/Card/CardBody/CardBody'
import { About } from './components/About/About'
import { AboutHeader } from './components/About/AboutHeader/AboutHeader'
import { AboutText } from './components/About/AboutBody/AboutBody'
import { Team } from './components/Team/Team'
// import { Team}

const cardsArray = [
  {
    'Title': 'Familieret',
    'TextContent': 'Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig.',
  },
  {
    'Title': 'Ejendomsret',
    'TextContent': 'Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det',
  },
  {
    'Title': 'Konkurs',
    'TextContent': 'Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp',
  },
  {
    'Title': 'Selskabsret',
    'TextContent': 'Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag',
  },
]

const aboutArray = [
  {
    'Title1': 'INTET PROBLEM',
    'TextContent1': 'Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.',
    'TextContent2': 'Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!',
    'Title2': 'EVIG GARANTI',
  },
  
]

function App() {

  return (
    <>
      <Nav />
      <Header />
      <Section layout='sectionCards'>
      {cardsArray.map((item) => (
          <Card key={item.Title}>
            <CardHeader title={item.Title}></CardHeader>
            <CardBody bodyText={item.TextContent}></CardBody>
          </Card>
      ))}
      </Section>
      <Section layout='sectionAbout'>
      {aboutArray.map((item) => (
          <About key={item.Title1}>
            <AboutHeader title={item.Title1}></AboutHeader>
            <AboutText bodyText={item.TextContent1}></AboutText>
            <AboutText bodyText={item.TextContent2}></AboutText>
          </About>
      ))}
      {aboutArray.map((item) => (
          <About layout='reverseFlex' key={item.Title2}>
            <AboutHeader title={item.Title2}></AboutHeader>
            <AboutText bodyText={item.TextContent1}></AboutText>
            <AboutText bodyText={item.TextContent2}></AboutText>
          </About>
      ))}
      </Section>
      <Section layout='sectionTeam'>
        <Team>

        </Team>
      </Section>
    </>
  )
}

export default App
