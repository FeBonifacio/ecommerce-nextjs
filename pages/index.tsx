import Header from "@/src/components/Header";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button, Container } from "reactstrap";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create </title>
                <meta name="description" content="Gnerated by ..."/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header/>

            <main>
                <Container className="py-5 text-center">
                    <h1 className="mt-5 display-1">
                        VEM COMPRAR, VEM?
                    </h1>
                    <p className="my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet laboriosam hic architecto, totam dolorum sed iste, debitis quos, sit reprehenderit minima. Dolorum nihil dolores pariatur quibusdam, debitis praesentium officia!
                    </p>
                    <Link href="/products">
                        <Button color="dark" className="px-4 pb-2">
                            Vem Danado(a)!!!!
                        </Button>
                    </Link>
                </Container>
            </main>
        </>
    )
}

export default Home;