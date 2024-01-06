import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

<script type='text/javascript'>
	function initEmbeddedMessaging() {
		try {
			embeddedservice_bootstrap.settings.language = 'es_MX'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00DO1000000XAvE',
				'Mensajeria_Web',
				'https://socovesa--devmsys.sandbox.my.site.com/ESWMensajeriaWeb1701890481828',
				{
					scrt2URL: 'https://socovesa--devmsys.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
	};
</script>
<script type='text/javascript' src='https://socovesa--devmsys.sandbox.my.site.com/ESWMensajeriaWeb1701890481828/assets/js/bootstrap.min.js' onload='initEmbeddedMessaging()'></script>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">

    
      </main>

      <Footer />
    </div>
  )
}
