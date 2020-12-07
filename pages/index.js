import Head from 'next/head'

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>untitled</title>
      </Head>

      <main>
        <div className="title">무제</div>
        <input className='main-input' />
      </main>

      <style jsx>{`
        main {
          height:100vh;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title{
          margin-top: 30vh;
          font-size:3rem;
          font-weight:700;
        }

        .main-input {
          width: 80vw;
          height: 45px;
          max-width: 424px;
          margin-top: 3rem;
          padding: 0 0.6rem;
          font-size: 1.6rem;

          background: #FFFFFF;
          -webkit-box-shadow: 0px 40px 30px rgba(0, 0, 0, 0.03), 0px 25px 20px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 1px 5px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 40px 30px rgba(0, 0, 0, 0.03), 0px 25px 20px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.1), 0px 1px 5px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          border: none;
        }

        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        
        input:focus,
        select:focus,
        textarea:focus,
        button:focus {
            outline: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
