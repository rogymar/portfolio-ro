import Head from "next/head";

// Components
import Layout from "../components/Inicio";
import AnimatedText from "../components/AnimatedText";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const contact = () => {
    return (
        <>
            <Head>
                <title>RogyChirinos | Contact Page</title>
                <meta name='description' content='contact description of RogyChririnos' />
            </Head>
            <NavBar />
            <main className='w-full'>
                <Layout className='pt-16'>
                    <AnimatedText text='Meet me at any time' />
                    <div>
                        <div>
                            <form>Contact</form>
                        </div>
                        <image>IAMGEN</image>
                    </div>
                </Layout>
            </main>
            <Footer />
        </>
    )
}

export default contact;