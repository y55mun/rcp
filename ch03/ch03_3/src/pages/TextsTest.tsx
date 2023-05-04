import * as D from '../data'
import {Title, Subtitle, Summary, Paragraph} from '../components'

const paragraphs = D.makeArray(2).map(D.randomParagraphs).join('\n\n')
const summery = D.makeArray(3).map(D.randomSentence).join('\n')

export default function TextsTest() {
  return (
    <div>
      <Title>TextsTest</Title>
      <div>
        <Title className="text-blue-600">{D.randomTitleText()}</Title>
        <Subtitle className="text-blue-400">{D.randomSentence()}</Subtitle>
      </div>
    </div>
  )
}
