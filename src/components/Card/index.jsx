function Card({title, text, link = "#", linkText = "Ver post"}) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h3 className="card-title">
                    {title}
                </h3>
                <p className="card-text">
                    {text}
                </p>
                <a href={link} className="btn btn-primary">
                    {linkText}
                </a>
            </div>
        </div>
    )
}

export default Card;