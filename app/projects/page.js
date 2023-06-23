import Head from "next/head";

// Componentes
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Layout from "../components/Inicio";
import AnimatedText from "../components/AnimatedText";

const projects = () => {
    return (
        <>
            <Head>
                <title>RogyChirinos | Projects Page</title>
                <meta name='description' content='projects description of RogyChririnos' />
            </Head>
            <NavBar />
            <main className='w-full'>
                <Layout className='pt-16'>
                    <AnimatedText text='Some of my work..' />
                    <section>
                        <div>
                            <img />
                            <description />
                            <h2>Trabajo 1</h2>
                        </div>
                        <div>
                            <img />
                            <description />
                            <h2>Trabajo 1</h2>
                        </div>
                        <div>
                            <img />
                            <description />
                            <h2>Trabajo 3</h2>
                        </div>
                        <div>
                            <img />
                            <description />
                            <h2>Trabajo 4</h2>
                        </div>
                        <div>
                            <img />
                            <description />
                            <h2>Trabajo 5</h2>
                        </div>
                    </section>
                </Layout>
            </main>
            <Footer />
        </>
    )
}

export default projects;