export const ProductIcon = ({
    height = "100",
    width = "100",
    className = "icons-svg",
    strokeWidth = "1",
    stroke = "currentColor",
    fill = "none",
    onClick
}: any) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            height={height}
            strokeWidth={strokeWidth}
            width={width}
            fill={fill}
            stroke={stroke}
            enableBackground={`new 0 0 ${width} ${height}`}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg">
            <g>
                <path d="M22,66h5c1.1,0,2-0.9,2-2V33c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v31C20,65.1,20.9,66,22,66z" />
            </g>
            <g>
                <path d="M78,31h-5c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2h5c1.1,0,2-0.9,2-2V33C80,31.9,79.1,31,78,31z" />
            </g>
            <g>
                <path d="M53,66c1.1,0,2-0.9,2-2V33c0-1.1-0.9-2-2-2h-6c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2H53z" />
            </g>
            <g>
                <path d="M65,66c1.1,0,2-0.9,2-2V33c0-1.1-0.9-2-2-2h-2c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2H65z" />
            </g>
            <g>
                <path d="M39,66c1.1,0,2-0.9,2-2V33c0-1.1-0.9-2-2-2h-2c-1.1,0-2,0.9-2,2v31c0,1.1,0.9,2,2,2H39z" />
            </g>
            <g>
                <path d="M78,72H22c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h56c1.1,0,2-0.9,2-2v-2C80,72.9,79.1,72,78,72z" />
            </g>
            <g>
                <path d="M78,20H22c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h56c1.1,0,2-0.9,2-2v-2C80,20.9,79.1,20,78,20z" />
            </g>
        </svg>
    )
}