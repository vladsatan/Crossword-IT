import '../ScrabbleBody/index.scss'
import Cube from '../cube/Cube'

const ScrabbleBody = () => {

  return (
    <div className="scrabble_body">
      {/* слово "Форма" номер 1,2 */}

      <div className="wordForm">
        <Cube id={'id1'} number={1} answer={'ф'}  />
        <Cube id={'id2'} number={2} answer={'о'} />
        <Cube id={'id3'} answer={'р'} />
        <Cube id={'id4'} answer={'м'} />
        <Cube id={'id5'} answer={'а'} />
      </div>

      {/* // слово "Скрипт" номер 3 */}

      <div className="wordScript">
        <Cube id={'id6'} number={3}  answer={'с'} />
        <Cube id={'id7'} answer={'к'} />
        <Cube id={'id8'} answer={'р'} />
        <Cube id={'id9'}  answer={'и'}/>
        <Cube id={'id10'} answer={'п'} />
        <Cube id={'id11'}  answer={'т'}/>
      </div>

      {/* // слово "Переменная" номер 4 */}

      <div className="wordVariable">
        <Cube id={'id12'} number={4} answer={'п'} />
        <Cube id={'id13'} answer={'е'} />
        <Cube id={'id14'} answer={'р'} />
        <Cube id={'id15'} answer={'е'} />
        <Cube id={'id16'} answer={'м'} />
        <Cube id={'id17'} answer={'е'} />
        <Cube id={'id18'} answer={'н'} />
        <Cube id={'id19'} answer={'н'} />
        <Cube id={'id20'} answer={'а'} />
        <Cube id={'id21'} answer={'я'} />
      </div>

      {/* // слово "буква Й главного слова" */}

      <div className="wordMain1">
        <Cube id={'id22'} answer={'й'} />
      </div>

      {/* // слово "Полиморфизм" номер 5 */}

      <div className="wordPolymorphism">
        <Cube id={'id23'} number={5} answer={'п'} />
        <Cube id={'id24'} answer={'о'} />
        <Cube id={'id25'} answer={'л'} />
        <Cube id={'id26'} answer={'и'} />
        <Cube id={'id27'} answer={'м'} />
        <Cube id={'id28'} answer={'о'} />
        <Cube id={'id29'} answer={'р'} />
        <Cube id={'id30'} answer={'ф'} />
        <Cube id={'id31'} answer={'и'} />
        <Cube id={'id32'} answer={'з'} />
        <Cube id={'id33'} answer={'м'} />
      </div>

      {/* // слово "буква В главного слова" */}

      <div className="wordMain2">
        <Cube id={'id32'} answer={'в'} />
      </div>

      {/* слово "Объект" номер 6 */}

      <div className="wordObject">
        <Cube id={'id33'} number={6} answer={'о'} />
        <Cube id={'id34'} answer={'б'} />
        <Cube id={'id35'} answer={'ъ'} />
        <Cube id={'id36'} answer={'е'} />
        <Cube id={'id37'} answer={'к'} />
        <Cube id={'id38'} answer={'т'} />
      </div>

      {/* слово "Препроцессор" номер 7 */}

      <div className="wordPreprocessor">
        <Cube id={'id39'} number={7}  answer={'п'} />
        <Cube id={'id40'} answer={'р'} />
        <Cube id={'id42'} answer={'е'} />
        <Cube id={'id41'} answer={'п'} />
        <Cube id={'id43'} answer={'р'} />
        <Cube id={'id44'} answer={'о'} />
        <Cube id={'id45'} answer={'ц'} />
        <Cube id={'id46'} answer={'е'} />
        <Cube id={'id47'} answer={'с'} />
        <Cube id={'id48'} answer={'с'} />
        <Cube id={'id49'} answer={'о'} />
        <Cube id={'id50'} answer={'р'} />
      </div>

      {/* слово "Конкатенация" номер 8 */}

      <div className="wordConcatenation">
        <Cube id={'id39'} number={8}  answer={'к'} />
        <Cube id={'id40'} answer={'о'} />
        <Cube id={'id41'} answer={'н'} />
        <Cube id={'id42'} answer={'к'} />
        <Cube id={'id43'} answer={'а'} />
        <Cube id={'id44'} answer={'т'} />
        <Cube id={'id45'} answer={'е'} />
        <Cube id={'id46'} answer={'н'} />
        <Cube id={'id47'} answer={'а'} />
        <Cube id={'id48'} answer={'ц'} />
        <Cube id={'id49'} answer={'и'} />
        <Cube id={'id50'} answer={'я'} />
      </div>
    </div>
  )
}


export default ScrabbleBody

//Компонента Cube создает квадратик для кроссворда, нужно передать только id и номер слова
