import logo from '../../assets/logo.svg'

import useDemoQuery from './useDemoQuery'

const Home = () => {
  const { data } = useDemoQuery()
  return (
    <main className="flex flex-col items-center justify-center">
      <img src={logo} className="pointer-events-none h-32" alt="logo" />
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
        {data && data?.length > 0
          ? data?.map((v, i) => {
              return (
                <span key={i}>
                  {' | '}
                  <a
                    className="App-link"
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {v.name}
                  </a>
                </span>
              )
            })
          : false}
      </p>
    </main>
  )
}

export default Home
