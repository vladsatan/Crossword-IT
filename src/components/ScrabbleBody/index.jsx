import '../ScrabbleBody/index.css'
import Cube from '../cube/Cube'

const ScrabbleBody = () => {
  return (

    <div className="scrabble_body">

 {/* слово "Форма" номер 1,2 */}

    <div className='wordForm'>
      <Cube id = {'id1'} number={1} />
      <Cube id = {'id2'} number={2}/>
      <Cube id = {'id3'} />
      <Cube id = {'id4'} />
      <Cube id = {'id5'} />
    </div>

{/* // слово "Скрипт" номер 3 */}

    <div className='wordScript'>
      <Cube id = {'id6'} number={3} />
      <Cube id = {'id7'} />
      <Cube id = {'id8'} />
      <Cube id = {'id9'} />
      <Cube id = {'id10'} />
      <Cube id = {'id11'} />
    </div>


{/* // слово "Переменная" номер 4 */}

<div className='wordVariable'>
      <Cube id = {'id12'} number={4} />
      <Cube id = {'id13'} />
      <Cube id = {'id14'} />
      <Cube id = {'id15'} />
      <Cube id = {'id16'} />
      <Cube id = {'id17'} />
      <Cube id = {'id18'} />
      <Cube id = {'id19'} />
      <Cube id = {'id20'} />
      <Cube id = {'id21'} />
    </div>

     {/* // слово "буква Й главного слова" */}

     <div className='wordMain1'>
     <Cube id = {'id22'} />
     </div>

    {/* // слово "Полиморфизм" номер 5 */}

<div className='wordPolymorphism'>
      <Cube id = {'id23'} number={5} />
      <Cube id = {'id24'} />
      <Cube id = {'id25'} />
      <Cube id = {'id26'} />
      <Cube id = {'id27'} />
      <Cube id = {'id28'} />
      <Cube id = {'id29'} />
      <Cube id = {'id30'} />
      <Cube id = {'id31'} />
      <Cube id = {'id32'} />
      <Cube id = {'id33'} />
    </div>

     {/* // слово "буква В главного слова" */}

     <div className='wordMain2'>
     <Cube id = {'id32'} />
     </div>


    {/* слово "Объект" номер 6 */}

     <div className='wordObject'>
      <Cube id = {'id33'} number={6} />
      <Cube id = {'id34'} />
      <Cube id = {'id35'} />
      <Cube id = {'id36'} />
      <Cube id = {'id37'} />
      <Cube id = {'id38'} />
    </div>

    {/* слово "Препроцессор" номер 7 */}

    <div className='wordPreprocessor'>
      <Cube id = {'id39'} number={7} />
      <Cube id = {'id40'} />
      <Cube id = {'id41'} />
      <Cube id = {'id42'} />
      <Cube id = {'id43'} />
      <Cube id = {'id44'} />
      <Cube id = {'id45'} />
      <Cube id = {'id46'} />
      <Cube id = {'id47'} />
      <Cube id = {'id48'} />
      <Cube id = {'id49'} />
      <Cube id = {'id50'} />
    </div>

{/* слово "Конкатенация" номер 8 */}

<div className='wordConcatenation'>
      <Cube id = {'id39'} number={8} />
      <Cube id = {'id40'} />
      <Cube id = {'id41'} />
      <Cube id = {'id42'} />
      <Cube id = {'id43'} />
      <Cube id = {'id44'} />
      <Cube id = {'id45'} />
      <Cube id = {'id46'} />
      <Cube id = {'id47'} />
      <Cube id = {'id48'} />
      <Cube id = {'id49'} />
      <Cube id = {'id50'} />
    </div>




    </div>
  )
}

export default ScrabbleBody


//Компонента Cube создает квадратик для кроссворда, нужно передать только id и номер слова