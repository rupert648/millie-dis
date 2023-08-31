

import { QuestionSectionType, Tuple5, Tuple7 } from "../question.types"

interface QuestionSectionProps {
  questionSection: QuestionSectionType;
  pos: number;
  setScoreMatrix: React.Dispatch<React.SetStateAction<Tuple7<Tuple5<boolean>>>>;
  scoreMatrix: Tuple7<Tuple5<boolean>>;
  sectionScore: number;
}

export const QuestionSection = ({ questionSection, pos, setScoreMatrix, scoreMatrix, sectionScore }: QuestionSectionProps) => {
  const handleOnChange = (index: number) => {
    const sectionScoreCopy: Tuple7<Tuple5<boolean>> = [...scoreMatrix]
    sectionScoreCopy[pos][index] = !sectionScoreCopy[pos][index]
    setScoreMatrix(sectionScoreCopy)
  }

  return (
    <div className="py-2">
      <div className="flex">
        <h1 className='text-md font-bold pl-2'>{questionSection.title}</h1>
        <p className="text-sm ml-auto font-bold pr-2 pt-1">{sectionScore}/5</p>
      </div>
      {
        questionSection.questions.map((question, index) => {
          return (
            <div key={index} className="flex pr-2 p-2 even:bg-gray-200">
              <p className="font-extralight flex-initial text-sm">{question.question}</p>
              <input className="flex-inital right-0 ml-auto accent-orange-500" type="checkbox" name="question" checked={scoreMatrix[pos][index]} onChange={() => handleOnChange(index)} />
            </div>
          )
        })
      }
    </div>
  )
}