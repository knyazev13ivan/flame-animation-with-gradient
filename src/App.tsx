import Flame from './core/Flame'
import GradientBar from './core/GradientBar'
import Contacts from './contacts/Contacts'
import './styles/app.scss'

const App = () => {
  return (
    <>
      <header>
        <h1>
          Flame 🔥
        </h1>
      </header>

      <main>

        <section className='gradient-description'>
          <div className='color-change'>
            <p>
              Изменить цвет можно нажав: <span className="example-color"></span>
            </p>
          </div>
          <div className='position-change'>
            <p>
              Для перемещения цвета:  <span className="example-position"></span>
            </p>
          </div>
        </section>

        <section className="animatioin">
          <GradientBar />
          <Flame />
        </section>

        <section className='flame-description'>
          <p>
            Здесь реализован алгоритм рисования простейшего пламени
            с изпользованием <strong>React</strong>, <strong>TS</strong>, <strong>Canvas API</strong> и <strong>requestAnimationFrame</strong>.
          </p>
          <p>
            Алгоритм построен на принципе вычисления среднего цвета точек.
            Придуман он довольно давно и использовался в огромном количестве демо и игр.
          </p>
          <p>
            Пламя генерируется случайно на основе заранее просчитанной цветовой палитры.
          </p>
          <p>
            Источник вдохновления: <a href="https://habr.com/ru/post/656541/">habr</a>
          </p>
        </section>

      </main>

      <footer>
        <Contacts />
        <span className='source'>source by <br /><a href="https://github.com/knyazev13ivan/flame-animation-with-gradient">Github</a></span>
      </footer>
    </>
  )
}

export default App