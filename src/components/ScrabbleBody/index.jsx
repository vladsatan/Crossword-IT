import '../ScrabbleBody/index.scss'
import Cube from '../cube/Cube'

const ScrabbleBody = () => {

  return (
    <div className="scrabble_body">
      {/* слово "Форма" номер 1,2 */}

      <div className="wordForm">
        <Cube id={'id1'} number={1} answer={'f'}  />
        <Cube id={'id2'} number={2} answer={'f'} />
        <Cube id={'id3'} answer={'f'} />
        <Cube id={'id4'} answer={'f'} />
        <Cube id={'id5'} answer={'f'} />
      </div>

      {/* // слово "Скрипт" номер 3 */}

      <div className="wordScript">
        <Cube id={'id6'} number={3}  answer={'f'} />
        <Cube id={'id7'} answer={'f'} />
        <Cube id={'id8'} answer={'f'} />
        <Cube id={'id9'}  answer={'f'}/>
        <Cube id={'id10'} answer={'f'} />
        <Cube id={'id11'}  answer={'f'}/>
      </div>

      {/* // слово "Переменная" номер 4 */}

      <div className="wordVariable">
        <Cube id={'id12'} number={4} answer={'f'} />
        <Cube id={'id13'} answer={'f'} />
        <Cube id={'id14'} answer={'f'} />
        <Cube id={'id15'} answer={'f'} />
        <Cube id={'id16'} answer={'f'} />
        <Cube id={'id17'} answer={'f'} />
        <Cube id={'id18'} answer={'f'} />
        <Cube id={'id19'} answer={'f'} />
        <Cube id={'id20'} answer={'f'} />
        <Cube id={'id21'} answer={'f'} />
      </div>

      {/* // слово "буква Й главного слова" */}

      <div className="wordMain1">
        <Cube id={'id22'} answer={'f'} />
      </div>

      {/* // слово "Полиморфизм" номер 5 */}

      <div className="wordPolymorphism">
        <Cube id={'id23'} number={5} answer={'f'} />
        <Cube id={'id24'} answer={'f'} />
        <Cube id={'id25'} answer={'f'} />
        <Cube id={'id26'} answer={'f'} />
        <Cube id={'id27'} answer={'f'} />
        <Cube id={'id28'} answer={'f'} />
        <Cube id={'id29'} answer={'f'} />
        <Cube id={'id30'} answer={'f'} />
        <Cube id={'id31'} answer={'f'} />
        <Cube id={'id32'} answer={'f'} />
        <Cube id={'id33'} answer={'f'} />
      </div>

      {/* // слово "буква В главного слова" */}

      <div className="wordMain2">
        <Cube id={'id32'} answer={'f'} />
      </div>

      {/* слово "Объект" номер 6 */}

      <div className="wordObject">
        <Cube id={'id33'} number={6} answer={'f'} />
        <Cube id={'id34'} answer={'f'} />
        <Cube id={'id35'} answer={'f'} />
        <Cube id={'id36'} answer={'f'} />
        <Cube id={'id37'} answer={'f'} />
        <Cube id={'id38'} answer={'f'} />
      </div>

      {/* слово "Препроцессор" номер 7 */}

      <div className="wordPreprocessor">
        <Cube id={'id39'} number={7}  answer={'f'} />
        <Cube id={'id40'} answer={'f'} />
        <Cube id={'id41'} answer={'f'} />
        <Cube id={'id42'} answer={'f'} />
        <Cube id={'id43'} answer={'f'} />
        <Cube id={'id44'} answer={'f'} />
        <Cube id={'id45'} answer={'f'} />
        <Cube id={'id46'} answer={'f'} />
        <Cube id={'id47'} answer={'f'} />
        <Cube id={'id48'} answer={'f'} />
        <Cube id={'id49'} answer={'f'} />
        <Cube id={'id50'} answer={'f'} />
      </div>

      {/* слово "Конкатенация" номер 8 */}

      <div className="wordConcatenation">
        <Cube id={'id39'} number={8}  answer={'f'} />
        <Cube id={'id40'} answer={'f'} />
        <Cube id={'id41'} answer={'f'} />
        <Cube id={'id42'} answer={'f'} />
        <Cube id={'id43'} answer={'f'} />
        <Cube id={'id44'} answer={'f'} />
        <Cube id={'id45'} answer={'f'} />
        <Cube id={'id46'} answer={'f'} />
        <Cube id={'id47'} answer={'f'} />
        <Cube id={'id48'} answer={'f'} />
        <Cube id={'id49'} answer={'f'} />
        <Cube id={'id50'} answer={'f'} />
      </div>
    </div>
  )
}


export default ScrabbleBody

//Компонента Cube создает квадратик для кроссворда, нужно передать только id и номер слова
