import './Post.css'
const Post = () => {
    return (
        <div id="post">
            <div className="sheet">
                <div className="header">
                    <div className="user-info">
                        <img src="./profile_image.svg" alt="" />
                        <div className="info">
                            <h3>Client Name</h3>
                            <p>Posted 2 hours ago  </p>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="status active">
                            Available
                        </div>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h4>Looking for Full-Sack Developer
                    with experience +2 years</h4>
                    <p>to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development...<span>See more</span></p>
                    <img src="https://s3-alpha-sig.figma.com/img/eac2/8634/7e8d24b51d9dcc38151feac0ce921e5a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l2nsfYeRWvlrD5hBiNT3ecYdMR5k7SzTnhljaGn4XEb42h-CiH5R7ghCkAwGA1ON4RkvD9DyqL-4fnPsYIvIl6BWCNk2dnkzsl8EZyXC3nfPfVa1zYF6OCg5Rd5T5pDgNyjdETYfZlkCUx0p5Xo78Po6wLkl3l8R936gCwQSNCgwYXGK7pTHx3PmllvlbjAcf8NEzTG6Oop3-iJG7skxGQsHsEXX3t8E2ZsWk~2I0bWXnRm5WKa80niJ3I1LQqAn5pGxZQoGonWEP4xUZz2ZNiOCBLWazPhNGuzCLSHD51yXkgI-xESsGsWs5jwue8V7ynupAwsguxJwNbtZZT3nqg__" alt="" />
                </div>
                <div className="footer">
                    <button>
                        <img src="./like.svg" alt="" />
                        like
                    </button>
                    <button>
                        <img src="./message.svg" alt="" />
                        comment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post;