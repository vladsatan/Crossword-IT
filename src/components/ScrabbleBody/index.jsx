import '../ScrabbleBody/index.scss'
import Cube from '../cube/Cube'

const ScrabbleBody = (props) => {
  const { setCounter } = props

  return (
    <div className="scrabble_body">
      {/* слово "Форма" номер 1,2 */}

      <div className="wordForm">
        <Cube setCounter={setCounter} id={'id1'} number={1} answer={'ф'} />
        <Cube setCounter={setCounter} id={'id3'} answer={'р'} />
        <Cube setCounter={setCounter} id={'id2'} number={2} answer={'о'} />
        <Cube setCounter={setCounter} id={'id4'} answer={'м'} />
        <Cube setCounter={setCounter} id={'id5'} answer={'а'} />

      </div>

      {/* // слово "Скрипт" номер 3 */}

      <div className="wordScript">
        <Cube setCounter={setCounter} id={'id7'} answer={'к'} />
        <Cube setCounter={setCounter} id={'id6'} number={3} answer={'с'} />
        <Cube setCounter={setCounter} id={'id8'} answer={'р'} />
        <Cube setCounter={setCounter} id={'id9'} answer={'и'} />
        <Cube setCounter={setCounter} id={'id10'} answer={'п'} />
        <Cube setCounter={setCounter} id={'id11'} answer={'т'} />
      </div>

      {/* // слово "Переменная" номер 4 */}

      <div className="wordVariable">
        <Cube setCounter={setCounter} id={'id13'} answer={'е'} />
        <Cube setCounter={setCounter} id={'id12'} number={4} answer={'п'} />
        <Cube setCounter={setCounter} id={'id14'} answer={'р'} />
        <Cube setCounter={setCounter} id={'id15'} answer={'е'} />
        <Cube setCounter={setCounter} id={'id16'} answer={'м'} />
        <Cube setCounter={setCounter} id={'id17'} answer={'е'} />
        <Cube setCounter={setCounter} id={'id18'} answer={'н'} />
        <Cube setCounter={setCounter} id={'id19'} answer={'н'} />
        <Cube setCounter={setCounter} id={'id20'} answer={'а'} />
        <Cube setCounter={setCounter} id={'id21'} answer={'я'} />
      </div>

      {/* // слово "буква Й главного слова" */}

      <div className="wordMain1">
        <Cube setCounter={setCounter} id={'id22'} answer={'й'} />
      </div>

      {/* // слово "Полиморфизм" номер 5 */}

      <div className="wordPolymorphism">
        <Cube setCounter={setCounter} id={'id23'} number={5} answer={'п'} />
        <Cube setCounter={setCounter} id={'id24'} answer={'о'} />
        <Cube setCounter={setCounter} id={'id25'} answer={'л'} />
        <Cube setCounter={setCounter} id={'id26'} answer={'и'} />
        <Cube setCounter={setCounter} id={'id27'} answer={'м'} />
        <Cube setCounter={setCounter} id={'id28'} answer={'о'} />
        <Cube setCounter={setCounter} id={'id29'} answer={'р'} />
        <Cube setCounter={setCounter} id={'id30'} answer={'ф'} />
        <Cube setCounter={setCounter} id={'id31'} answer={'и'} />
        <Cube setCounter={setCounter} id={'id32'} answer={'з'} />
        <Cube setCounter={setCounter} id={'id33'} answer={'м'} />
      </div>

      {/* // слово "буква В главного слова" */}

      <div className="wordMain2">
        <Cube setCounter={setCounter} id={'id32'} answer={'в'} />
      </div>

      {/* слово "Объект" номер 6 */}

      <div className="wordObject">
        <Cube setCounter={setCounter} id={'id33'} number={6} answer={'о'} />
        <Cube setCounter={setCounter} id={'id34'} answer={'б'} />
        <Cube setCounter={setCounter} id={'id35'} answer={'ъ'} />
        <Cube setCounter={setCounter} id={'id36'} answer={'е'} />
        <Cube setCounter={setCounter} id={'id37'} answer={'к'} />
        <Cube setCounter={setCounter} id={'id38'} answer={'т'} />
      </div>

      {/* слово "Препроцессор" номер 7 */}

      <div className="wordPreprocessor">
        <Cube setCounter={setCounter} id={'id39'} number={7} answer={'п'} />
        <Cube setCounter={setCounter} id={'id40'} answer={'р'} />
        <Cube setCounter={setCounter} id={'id42'} answer={'е'} />
        <Cube setCounter={setCounter} id={'id41'} answer={'п'} />
        <Cube setCounter={setCounter} id={'id43'} answer={'р'} />
        <Cube setCounter={setCounter} id={'id44'} answer={'о'} />
        <Cube setCounter={setCounter} id={'id45'} answer={'ц'} />
        <Cube setCounter={setCounter} id={'id46'} answer={'е'} />
        <Cube setCounter={setCounter} id={'id47'} answer={'с'} />
        <Cube setCounter={setCounter} id={'id48'} answer={'с'} />
        <Cube setCounter={setCounter} id={'id49'} answer={'о'} />
        <Cube setCounter={setCounter} id={'id50'} answer={'р'} />
      </div>

      {/* слово "Конкатенация" номер 8 */}

      <div className="wordConcatenation">
        <Cube setCounter={setCounter} id={'id39'} number={8} answer={'к'} />
        <Cube setCounter={setCounter} id={'id40'} answer={'о'} />
        <Cube setCounter={setCounter} id={'id41'} answer={'н'} />
        <Cube setCounter={setCounter} id={'id42'} answer={'к'} />
        <Cube setCounter={setCounter} id={'id43'} answer={'а'} />
        <Cube setCounter={setCounter} id={'id44'} answer={'т'} />
        <Cube setCounter={setCounter} id={'id45'} answer={'е'} />
        <Cube setCounter={setCounter} id={'id46'} answer={'н'} />
        <Cube setCounter={setCounter} id={'id47'} answer={'а'} />
        <Cube setCounter={setCounter} id={'id48'} answer={'ц'} />
        <Cube setCounter={setCounter} id={'id49'} answer={'и'} />
        <Cube setCounter={setCounter} id={'id50'} answer={'я'} />
      </div>
    </div>
  )
}

export default ScrabbleBody

//Компонента Cube создает квадратик для кроссворда, нужно передать только id и номер слова
