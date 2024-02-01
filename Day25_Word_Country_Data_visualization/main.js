import { countries_data } from "./data.js";
const body = document.querySelector('body')
const populationBtn = document.querySelector('.population')
const languageBtn = document.querySelector('.language')
const container = document.createElement('section')
container.setAttribute('class', 'container')
const getLanguages = (data, num) => {
    let newLanguages = []
    let languages = data.map((data)=> data.languages).flat()
    let uniqueLanguages = new Set(languages)
    for(let lang of uniqueLanguages){
        let filtedLanguages = languages.filter((l)=> lang === l)
        newLanguages.push({language:lang, count:filtedLanguages.length})
    }
    return newLanguages.sort((a, b) => b.count > a.count ? 1 : b.count < a.count ? -1 : 0).slice(0, num)
}

console.log(getLanguages(countries_data, 10))

const getFirstTenPopulation = (data, num) => {
    return data.sort((a, b)=> b.population > a.population ? 1: b.population < a.population ? -1 : 0).slice(0, num)
}


populationBtn.addEventListener('click', ()=> {
    console.log(getFirstTenPopulation(countries_data, 10))
    let population = getFirstTenPopulation(countries_data, 10)
    let addPopulation = 0
    let percentage
    for(let i = 0; i < population.length; i++){
        const  graphWrapper = document.createElement('div')
        const graphContainer = document.createElement('div')
        body.appendChild(container)
        graphContainer.appendChild(graphWrapper)
        container.appendChild(graphContainer)
        graphContainer.setAttribute('class', 'graph-container')
        graphWrapper.setAttribute('class', 'graph-wrapper')
        graphContainer.style.display = 'grid'
        let name = document.createElement('p')
        let chartWrapper = document.createElement('div')
        let chart = document.createElement('div')
        let popl = document.createElement('div')
        graphWrapper.appendChild(name)
        graphWrapper.appendChild(chartWrapper)
        chartWrapper.appendChild(chart)
        graphWrapper.appendChild(popl)
        chart.setAttribute('class', 'chart')
        chartWrapper.style.flex = '1'
        name.innerHTML = `${population[i].name}`;
        popl.innerHTML = `${population[i].population}`
        addPopulation +=population[i].population
        console.log(addPopulation)
        percentage = (population[i].population / addPopulation) * 100
        console.log(percentage, population[i].population, addPopulation)
        console.log(Math.ceil(percentage))
        chart.style.width = `${percentage * 7}px`

    }
})


languageBtn.addEventListener('click', ()=> {
        
        let langs = getLanguages(countries_data, 10)
        console.log(langs)
        let addLangNum = 0
        let percentage 
        for(let i = 0; i < langs.length; i++){
            const  graphWrapper = document.createElement('div')
            const graphContainer = document.createElement('div')
            body.appendChild(container)
            graphContainer.appendChild(graphWrapper)
            container.appendChild(graphContainer)
            graphContainer.setAttribute('class', 'graph-container')
            graphWrapper.setAttribute('class', 'graph-wrapper')
            graphContainer.style.display = 'grid'
            let name = document.createElement('p')
            let chartWrapper = document.createElement('div')
            let chart = document.createElement('div')
            let number = document.createElement('div')
            graphWrapper.appendChild(name)
            graphWrapper.appendChild(chartWrapper)
            chartWrapper.appendChild(chart)
            graphWrapper.appendChild(number)
            chart.setAttribute('class', 'chart')
            console.log(graphWrapper)
            chartWrapper.style.flex = '1'
            name.innerHTML = `${langs[i].language}`;
            number.innerHTML = `${langs[i].count}`
            addLangNum +=langs[i].count
            percentage = (langs[i].count / addLangNum) * 100
            console.log(Math.ceil(percentage))
            chart.style.width = `${percentage * 7}px`
        }
    
})



