import { useState } from 'react';
import { Tuple5, Tuple7 } from './question.types';
import { questionsdata, pageData } from './question.data';
import { QuestionSection } from './components/QuestionSection';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { ResultsTable } from './components/ResultsTable';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const sectionScoreInitial: Tuple7<Tuple5<boolean>> = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false]
]

const Title = () => (
  <div className='text-center mx-auto'>
    <h1 className='text-xl font-bold'>{pageData.pageTitle}</h1>
    <p className='font-extralight text-base italic md:px-72 px-6'>{pageData.pageDescription}</p>
  </div>
)

function App() {
  const [showResults, setShowResults] = useState<boolean>(false);
  const [scoreMatrix, setScoreMatrix] = useState<Tuple7<Tuple5<boolean>>>(sectionScoreInitial);

  const calcSectionScore = (scoreMatrix: Tuple7<Tuple5<boolean>>): Tuple7<number> => {
    return scoreMatrix.map((scoreArr) => {
      return scoreArr.reduce((acc, curr) => {
        return acc + (curr ? 1 : 0)
      }, 0)
    }) as Tuple7<number>
  }

  const data: ChartData<"radar", (number | null)[], unknown> = {
    labels: questionsdata.map((questionSection) => questionSection.title),
    datasets: [
      {
        label: 'Score',
        data: calcSectionScore(scoreMatrix),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  }

  const questionsSection = questionsdata.map((questionSection, index) => {
    return (
      <QuestionSection questionSection={questionSection} key={index} pos={index} setScoreMatrix={setScoreMatrix} scoreMatrix={scoreMatrix} sectionScore={calcSectionScore(scoreMatrix)[index]} />
    )
  })

  if (!showResults) {
    return (
      <>
        <Title />
        <div className="w-9/10 md:w-1/2 mx-auto p-2">
          <h1 className='text-lg font-bold text-center'>Questions</h1>
          <hr className='mt-2' />
          {
            questionsSection
          }
          <button type="button" className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded" onClick={() => setShowResults(true)}>Submit</button>
        </div>
      </>
    )
  }

  return (
    <>
      <Title />
      <hr />
      <div className="md:flex">
        <div className="hidden md:block md:flex-initial w-1/3 max-h-[90vh] px-2 overflow-scroll">
          <h1 className='text-lg font-bold text-center'>Questions</h1>
          <hr className='mt-2' />
          {
            questionsSection
          }
        </div>
        <div className='flex-initial md:w-2/3 max-h-[90vh] screen p-4 py-0 overflow-scroll'>
          <h1 className='text-lg font-bold text-center'>Results</h1>
          <hr className='my-2' />
          <div>
            <ResultsTable questionsdata={questionsdata} sectionScores={calcSectionScore(scoreMatrix)} />
          </div>
          <div className='mx-auto'>
            <Radar data={data} options={{
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                r: {
                  min: 0,
                  max: 5,
                  beginAtZero: true,
                }
              }
            }} />
          </div>
          <button type="button" className="bg-orange-500 block md:hidden hover:bg-orange-700 text-white py-2 px-4 rounded" onClick={() => setShowResults(false)}>Back</button>
        </div>
      </div>
    </>
  )
}

export default App
