import { QuestionSections, Tuple7 } from "../question.types"

interface ResultsTableProps {
  questionsdata: QuestionSections;
  sectionScores: Tuple7<number>
}

export const ResultsTable = ({ questionsdata, sectionScores }: ResultsTableProps) => {
  return (
    <table className='border-collapse mx-auto w-4/5'>
      <tr>
        <th className='border-2 border-solid border-gray-200'>Ethical Principle</th>
        <th className='border-2 border-solid border-gray-200'>Rating (/5)</th>
        <th className='border-2 border-solid border-gray-200'>Action</th>
      </tr>
      {
        questionsdata.map((questionSection, index) => {
          return (
            <tr key={index} className="even:bg-gray-200 font-extralight">
              <td className='border-2 border-solid border-gray-200'>{questionSection.title}</td>
              <td className='border-2 border-solid border-gray-200'>{sectionScores[index]}</td>
              <td className='border-2 border-solid border-gray-200'>{sectionScores[index] / 5.0 >= 0.8 ? '✅' : '❗'}</td>
            </tr>
          )
        })
      }
    </table>
  )
}