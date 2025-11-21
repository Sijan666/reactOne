import './App.css'
import Button from './components/Button'
import Heading from './components/Heading'
import Image from './components/Image'
import meme from './assets/meme.png'

function App () {
  return (
    <>
      <Heading className={"bg-gray-600 text-3xl text-white font-bold text-center py-5"} text = {"React 1"}/>
      <div className="flex justify-center gap-x-4 mt-4">
        <Button className={'bg-blue-400'} btnText={"View ALL"} />
        <Button className={'bg-violet-400'} btnText={"Click Here"} />
        <Button className={'bg-teal-400'} btnText={"Don't Click"} />
      </div>
      <div className="text-center mt-4">
        <Image imgSrc={meme} className="inline-block"/>
      </div>
    </>
  )
}
export default App


