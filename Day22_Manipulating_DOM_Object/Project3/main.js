const randomColorGenerator = () => Math.random().toString(16).slice(2,8)
import { asabenehChallenges2020 } from "./Challenge.info.js"
const body = document.body
const container = document.createElement('div')
const heading = document.createElement('h3')
const year = document.getElementsByClassName('.year')
const subHeading = document.createElement('p')
const dateTimeWrapper = document.createElement('div')
const date_time = document.createElement('p') 
const challengeContainer = document.createElement('div')
const bottomName = document.createElement ('h2')
const svgWrapper = document.createElement('div')
const svg1 = document.createElement('img')
const svg2 = document.createElement('img')
const svg3 = document.createElement('img')
const educatorWrapper = document.createElement('div')
const educator = document.createElement('p')
const section1 = document.createElement('div')
const section2 = document.createElement('div')
const section3 = document.createElement('div')
const sectionWrapper = document.createElement('div')
const keyWordTitle = document.createElement('h3')
const keyWordDescWrapper = document.createElement('div')


let eachChallengeRow 
let name_e
let topics_s
let status_s
let skill
let skillsWrapper
let title 
let titleWraper
let qualification
let qualificationWrapper
let keywordDesc 

//logic
const now = new Date() 
setInterval(() => {
heading.innerHTML =`${asabenehChallenges2020.challengeTitle} <span class='year' style = 'color:#${randomColorGenerator()}; font-size:3rem;'>2024</span>`
}, 1000);
setInterval(() => {
date_time.style.backgroundColor = `#${randomColorGenerator()}`
    
}, 2000);

asabenehChallenges2020.challenges.forEach(({name, topics, status }, index) => {
    eachChallengeRow = document.createElement('div')
    name_e = document.createElement(`p`)
    topics_s = document.createElement('details')
    status_s = document.createElement('p')
    challengeContainer.appendChild(eachChallengeRow)
    eachChallengeRow.appendChild(name_e)
    eachChallengeRow.appendChild(topics_s)
    eachChallengeRow.appendChild(status_s)
     name_e.innerHTML = `${name}`
     status_s.innerHTML = `${status}`
     name_e.style.fontSize = '14px'
     name_e.style.textDecoration = 'underline'
     eachChallengeRow.style.display = 'grid'
     eachChallengeRow.style.gridTemplateColumns = '1.3fr 1fr 0.5fr'
     eachChallengeRow.style.justifyContent = 'space-between'
     eachChallengeRow.style.alignItems = 'center'
     eachChallengeRow.style.backgroundColor = `${index === 0 ? '#24bf73': index === 1 ? '#fddb3a': '#fd5e53'}`
     eachChallengeRow.style.margin = '4px'
     eachChallengeRow.style.paddingLeft = '12px'
     eachChallengeRow.style.padding = '1rem'
     topics_s.innerHTML = `<summary>${name.substr(10)}</summary>`

     topics.forEach((topic)=> {
        let p = document.createElement('p')
        p.innerHTML = `${topic}`
        topics_s.appendChild(p)
     })

});

asabenehChallenges2020.author.titles.forEach((t, index)=> {
    titleWraper = document.createElement('div')
    title = document.createElement('p')
    title.style.fontWeight = `${index == 0 ? 'bold': 'normal'}`
    titleWraper.appendChild(title)
    title.innerHTML = `${t}`
    section1.appendChild(titleWraper)
})

asabenehChallenges2020.author.skills.forEach((s, index)=> {
    skillsWrapper = document.createElement('div')
    skill = document.createElement('p')
    skill.style.fontWeight = `${index == 0 ? 'bold': 'normal'}`
    skillsWrapper.appendChild(skill)
    skill.innerHTML = `${index === 0 ? s : `✅ ${s}`}`
    section2.appendChild(skillsWrapper)
    })

    asabenehChallenges2020.author.qualifications.forEach((Q, index)=>{
        
        qualificationWrapper = document.createElement('div')
        qualification = document.createElement('p')
        qualification.style.fontWeight = `${index == 0 ? 'bold': 'normal'}`
        qualificationWrapper.appendChild(qualification)
        qualification.innerHTML = `${index === 0 ? `${Q}`: index === 1 ?  `📖 ${Q}`: `👩‍🎓 ${Q}`}`
        qualificationWrapper.appendChild(qualification)
        section3.appendChild(qualificationWrapper)
    })
    
asabenehChallenges2020.keywords.forEach((key, index)=> {
    keywordDesc= document.createElement('p')
    keywordDesc.innerHTML = `${key}`
    keywordDesc.style.margin = '0'
    keywordDesc.style.width = 'fit-content'
    keywordDesc.style.backgroundColor = `#${randomColorGenerator()}`
    keywordDesc.style.fontSize = '12px'
    keywordDesc.style.textDecoration ='italic'
    keywordDesc.style.borderRadius = '30px'
    keywordDesc.style.padding = '4px 1.5rem 4px 4px '
    keyWordDescWrapper.appendChild(keywordDesc)

})

// work it other method too

//style
body.style.height = '100vh'
body.style.margin = '0'
body.style.padding = '0'
body.style.fontFamily = 'monospace, sans-serif'
container.style.width = '80%'
container.style.margin = 'auto'
container.style.marginTop = '3rem'
container.style.marginBottom = '3rem'
container.style.paddingBottom = '4rem'
heading.style.margin = '0'
heading.style.letterSpacing = '2px'
heading.style.textAlign = 'center'
subHeading.style.textAlign = 'center'
subHeading.style.textDecoration = 'underline'
subHeading.style.fontWeight = '200'
subHeading.style.margin = '0'
dateTimeWrapper.style.display = 'flex'
dateTimeWrapper.style.justifyContent = 'center'
date_time.style.fontSize = '12px'
date_time.style.padding = '8px'
date_time.style.width = 'fit-content'
date_time.style.backgroundColor = `#e2e2e2`
date_time.style.textAlign = 'center'
date_time.style.marginTop = '1.5rem'
challengeContainer.style.marginTop = '2rem'
bottomName.style.textAlign = 'center'
bottomName.style.fontWeight = 'bold'
svgWrapper.style.display = 'flex'
svgWrapper.style.justifyContent = 'center'
svgWrapper.style.alignItems = 'center'
svg1.style.height ='2rem'
svg2.style.height = '2rem'
svg3.style.height = '2rem'
svg1.style.cursor = 'pointer'
svg2.style.cursor = 'pointer'
svg3.style.cursor = 'pointer'
svg1.style.pointerEvents = 'auto'
educatorWrapper.style.display = 'flex'
educatorWrapper.style.justifyContent = 'center'
educator.style.maxWidth = '70%'
educator.style.fontSize = '12px'
educator.style.textAlign = 'center'
sectionWrapper.style.display = 'flex'
sectionWrapper.style.gap = '5rem'
sectionWrapper.style.marginTop = '1rem'
keyWordDescWrapper.style.display = 'flex'
keyWordDescWrapper.style.justifyContent = 'center'
keyWordDescWrapper.style.flexWrap = 'wrap' 
keyWordDescWrapper.style.margin = 'auto'
keyWordDescWrapper.style.gap = '0.5rem'
keyWordDescWrapper.style.maxWidth = '64%'





svg1.src = './vectors/twitter.svg'
svg2.src = './vectors/github.svg'
svg3.src = "./vectors/linkedIn.svg"


//setting attribute

//appending
body.appendChild(container)
container.appendChild(heading)
container.appendChild(subHeading)
container.appendChild(date_time)
container.appendChild(dateTimeWrapper)
container.appendChild(challengeContainer)
container.appendChild(bottomName)
container.appendChild(svgWrapper)
container.appendChild(educatorWrapper)
container.appendChild(sectionWrapper)
container.appendChild(keyWordTitle)
container.appendChild(keyWordDescWrapper)
sectionWrapper.appendChild(section1)
sectionWrapper.appendChild(section2)
sectionWrapper.appendChild(section3)
educatorWrapper.appendChild(educator)

// console.log(section)

svgWrapper.append(svg1)
svgWrapper.append(svg2)
svgWrapper.append(svg3)
dateTimeWrapper.appendChild(date_time)
heading.innerHTML =`${asabenehChallenges2020.challengeTitle} <span class='year' style = 'color:#000000; font-size:3rem;'>2024</span>`
subHeading.innerText = '30DaysOfJavascript Challenge'
date_time.innerHTML = `${now.toUTCString()}`
bottomName.innerHTML = `${asabenehChallenges2020.author.firstName}${asabenehChallenges2020.author.lastName}`
educator.innerText = asabenehChallenges2020.author.bio


