import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Post() {
    return (
        <Layout>
            <main className="container my-4">
                <div className="row">
                    <div className="col">
                        <h1>Título do post</h1>
                        
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquam dolore, officia sequi magnam, sit tempore nemo animi impedit sint quaerat laboriosam facere rem et hic libero, laudantium error qui!
                        </div>
                        
                        <Link to="/" className="btn btn-primary mt-4">
                            Voltar para Home
                        </Link>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Post;