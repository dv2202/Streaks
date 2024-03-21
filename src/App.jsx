import Container from '../src/components/Container';
function App() {

  return (
    <div className=' h-[100vh] w-[100vw] bg-[#f1f1f1] overflow-x-hidden'>
    <div className='p-3'>
      <h2 className="text-2xl">Nifty 50 trading <span class="border-b-[2px] border-blue-500 ">below</span> its</h2>

      <h1 className='text-3xl font-medium'>50-day moving average</h1>
    </div>
    <Container/>
    </div>
  )
}

export default App
