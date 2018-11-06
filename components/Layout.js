import Head from 'next/head'
import "../styles/style.css"

const Layout = (props) => (
  <div>
    <Head>
      <title>Base Structure</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {props.children}

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </div>

)

export default Layout