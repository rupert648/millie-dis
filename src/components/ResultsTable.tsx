import { QuestionSections, Tuple7 } from "../question.types"

interface ResultsTableProps {
  questionsdata: QuestionSections;
  sectionScores: Tuple7<number>
}

export const ResultsTable = ({ questionsdata, sectionScores }: ResultsTableProps) => {
  return (
    <table className='border-collapse mx-auto md:w-2/3 w-10/12'>
      <thead>
        <tr className="bg-gray-200 font-extralight text-sm">
          <th className='border-2 border-solid border-gray-200 md:text-sm text-xs'>Ethical Principle</th>
          <th className='border-2 border-solid border-gray-200'>Rating (/5)</th>
          <th className='border-2 border-solid border-gray-200'>Action</th>
        </tr>
        </thead>
      <tbody>
      {
        questionsdata.map((questionSection, index) => {
          return (
            <tr key={index} className="even:bg-gray-200 font-extralight md:text-sm text-xs">
              <td className='border-2 border-solid border-gray-200 text-center'>{questionSection.title}</td>
              <td className='border-2 border-solid border-gray-200 text-center'>{sectionScores[index]}</td>
              <td className='border-2 border-solid border-gray-200 text-center'>{sectionScores[index] / 5.0 >= 0.8 ? '✅' : '❗'}</td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}