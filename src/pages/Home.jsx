import Card from "../components/Card";
import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>
            <div className="container my-4">
                <div className="row">
                    <main className="col-md-8">
                        <h2 className="mb-3">
                            Últimos posts
                        </h2>

                        <Card
                            title={"Post 1"}
                            text={"Texto do post 1"}
                        />
                        <Card
                            title={"Post 1"}
                            text={"Texto do post 1"}
                        />
                        <Card
                            title={"Post 1"}
                            text={"Texto do post 1"}
                        />
                        <Card
                            title={"Post 1"}
                            text={"Texto do post 1"}
                        />

                        <a href="#" className="btn btn-dark mt-4">
                            Ver todos os posts
                        </a>
                    </main>

                    <aside className="col-md-4">
                        <h2>Categorias</h2>

                        <ul>
                            <li>Geral</li>
                            <li>Frameworks</li>
                        </ul>
                    </aside>
                </div>                
            </div>
        </Layout>
    );
}

export default Home;