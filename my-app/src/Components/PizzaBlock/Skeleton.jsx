import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={493}
        viewBox="0 0 280 493"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="139" cy="128" r="123" />
        <rect x="1" y="267" rx="10" ry="10" width="280" height="30" />
        <rect x="1" y="317" rx="10" ry="10" width="280" height="88" />
        <rect x="5" y="428" rx="10" ry="10" width="91" height="30" />
        <rect x="142" y="426" rx="25" ry="25" width="136" height="45" />
    </ContentLoader>
)

export default Skeleton
