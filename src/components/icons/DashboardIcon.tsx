export const DashboardIcon = ({
    height = "24",
    width = "24",
    className = "icons-svg",
    strokeWidth = "2",
    stroke = "currentColor",
    fill = "none",
    onClick
}: any) => {
    return (
        <svg
            onClick={onClick}
            className={className}
            x="0px"
            y="0px"
            height={height}
            strokeWidth={strokeWidth}
            width={width}
            fill={fill}
            stroke={stroke}
            enableBackground={`new 0 0 ${width} ${height}`}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg">
            <g>
                <path stroke={stroke} fill={fill} fillRule="evenodd" clipRule="evenodd" d="M14.2929 4.29289C14 4.58579 14 5.05719 14 6C14 6.94281 14 7.41421 14.2929 7.70711C14.5858 8 15.0572 8 16 8H18C18.9428 8 19.4142 8 19.7071 7.70711C20 7.41421 20 6.94281 20 6C20 5.05719 20 4.58579 19.7071 4.29289C19.4142 4 18.9428 4 18 4H16C15.0572 4 14.5858 4 14.2929 4.29289ZM4.29289 16.2929C4 16.5858 4 17.0572 4 18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H8C8.94281 20 9.41421 20 9.70711 19.7071C10 19.4142 10 18.9428 10 18C10 17.0572 10 16.5858 9.70711 16.2929C9.41421 16 8.94281 16 8 16H6C5.05719 16 4.58579 16 4.29289 16.2929ZM14 14C14 13.0572 14 12.5858 14.2929 12.2929C14.5858 12 15.0572 12 16 12H18C18.9428 12 19.4142 12 19.7071 12.2929C20 12.5858 20 13.0572 20 14V18C20 18.9428 20 19.4142 19.7071 19.7071C19.4142 20 18.9428 20 18 20H16C15.0572 20 14.5858 20 14.2929 19.7071C14 19.4142 14 18.9428 14 18V14ZM4.29289 4.29289C4 4.58579 4 5.05719 4 6V10C4 10.9428 4 11.4142 4.29289 11.7071C4.58579 12 5.05719 12 6 12H8C8.94281 12 9.41421 12 9.70711 11.7071C10 11.4142 10 10.9428 10 10V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4H6C5.05719 4 4.58579 4 4.29289 4.29289Z" />
                <path stroke={stroke} fill={fill} fillRule="evenodd" clipRule="evenodd" d="M4.82324 4.82324L4.82567 4.82187C4.8276 4.82086 4.83092 4.81924 4.83596 4.81717C4.85774 4.80821 4.90611 4.79291 5.00266 4.77993C5.21339 4.7516 5.50739 4.75001 6 4.75001H8C8.49261 4.75001 8.78661 4.7516 8.99734 4.77993C9.09389 4.79291 9.14225 4.80821 9.16403 4.81717C9.16908 4.81924 9.17239 4.82086 9.17433 4.82187L9.17676 4.82324L9.17814 4.82568C9.17915 4.82761 9.18077 4.83093 9.18284 4.83597C9.1918 4.85775 9.20709 4.90611 9.22008 5.00267C9.24841 5.21339 9.25 5.5074 9.25 6.00001V10C9.25 10.4926 9.24841 10.7866 9.22008 10.9973C9.20709 11.0939 9.1918 11.1423 9.18284 11.164C9.18077 11.1691 9.17915 11.1724 9.17814 11.1743L9.17676 11.1768L9.17433 11.1781C9.17239 11.1792 9.16908 11.1808 9.16403 11.1828C9.14225 11.1918 9.09389 11.2071 8.99734 11.2201C8.78661 11.2484 8.49261 11.25 8 11.25H6C5.50739 11.25 5.21339 11.2484 5.00266 11.2201C4.90611 11.2071 4.85774 11.1918 4.83596 11.1828C4.83092 11.1808 4.8276 11.1792 4.82567 11.1781L4.82324 11.1768L4.82186 11.1743C4.82085 11.1724 4.81923 11.1691 4.81716 11.164C4.8082 11.1423 4.79291 11.0939 4.77992 10.9973C4.75159 10.7866 4.75 10.4926 4.75 10V6.00001C4.75 5.5074 4.75159 5.21339 4.77992 5.00267C4.79291 4.90611 4.8082 4.85775 4.81716 4.83597C4.81923 4.83093 4.82085 4.82761 4.82186 4.82568L4.82324 4.82324ZM5.95525 3.25C5.97013 3.25001 5.98504 3.25001 6 3.25001H8C8.01496 3.25001 8.02987 3.25001 8.04475 3.25C8.47756 3.24995 8.8744 3.24991 9.19721 3.29331C9.55269 3.3411 9.92841 3.45355 10.2374 3.76257C10.5465 4.07159 10.6589 4.44732 10.7067 4.8028C10.7501 5.12561 10.7501 5.52245 10.75 5.95526C10.75 5.97014 10.75 5.98505 10.75 6.00001V10C10.75 10.015 10.75 10.0299 10.75 10.0448C10.7501 10.4776 10.7501 10.8744 10.7067 11.1972C10.6589 11.5527 10.5465 11.9284 10.2374 12.2374C9.92841 12.5465 9.55269 12.6589 9.19721 12.7067C8.87439 12.7501 8.47756 12.7501 8.04474 12.75C8.02987 12.75 8.01496 12.75 8 12.75H6C5.98504 12.75 5.97013 12.75 5.95526 12.75C5.52244 12.7501 5.1256 12.7501 4.80279 12.7067C4.44731 12.6589 4.07159 12.5465 3.76256 12.2374C3.45354 11.9284 3.34109 11.5527 3.2933 11.1972C3.2499 10.8744 3.24994 10.4776 3.25 10.0448C3.25 10.0299 3.25 10.015 3.25 10V6.00001C3.25 5.98505 3.25 5.97013 3.25 5.95526C3.24994 5.52244 3.2499 5.12561 3.2933 4.8028C3.34109 4.44732 3.45354 4.07159 3.76256 3.76257C4.07159 3.45355 4.44731 3.3411 4.80279 3.29331C5.1256 3.24991 5.52243 3.24995 5.95525 3.25ZM14.8257 4.82187L14.8232 4.82324L14.8219 4.82568C14.8209 4.82761 14.8192 4.83093 14.8172 4.83597C14.8082 4.85775 14.7929 4.90611 14.7799 5.00267C14.7516 5.21339 14.75 5.5074 14.75 6.00001C14.75 6.49261 14.7516 6.78662 14.7799 6.99734C14.7929 7.0939 14.8082 7.14226 14.8172 7.16404C14.818 7.16606 14.8194 7.1693 14.8194 7.1693C14.8204 7.17152 14.8219 7.17434 14.8219 7.17434L14.8232 7.17677L14.8257 7.17815C14.8276 7.17916 14.8309 7.18077 14.836 7.18285C14.8577 7.19181 14.9061 7.2071 15.0027 7.22008C15.2134 7.24841 15.5074 7.25001 16 7.25001H18C18.4926 7.25001 18.7866 7.24841 18.9973 7.22008C19.0939 7.2071 19.1423 7.19181 19.164 7.18285C19.1691 7.18077 19.1724 7.17916 19.1743 7.17815L19.1768 7.17677L19.1781 7.17434C19.1791 7.1724 19.1808 7.16909 19.1828 7.16404C19.1918 7.14226 19.2071 7.0939 19.2201 6.99734C19.2484 6.78662 19.25 6.49261 19.25 6.00001C19.25 5.5074 19.2484 5.21339 19.2201 5.00267C19.2071 4.90611 19.1918 4.85775 19.1828 4.83597C19.1808 4.83093 19.1791 4.82761 19.1781 4.82568L19.1768 4.82324L19.1743 4.82187C19.1724 4.82086 19.1691 4.81924 19.164 4.81717C19.1423 4.80821 19.0939 4.79291 18.9973 4.77993C18.7866 4.7516 18.4926 4.75001 18 4.75001H16C15.5074 4.75001 15.2134 4.7516 15.0027 4.77993C14.9061 4.79291 14.8577 4.80821 14.836 4.81717C14.8309 4.81924 14.8276 4.82086 14.8257 4.82187ZM15.9553 3.25H18.0447C18.4776 3.24995 18.8744 3.24991 19.1972 3.29331C19.5527 3.3411 19.9284 3.45355 20.2374 3.76257C20.5465 4.07159 20.6589 4.44732 20.7067 4.8028C20.7501 5.12561 20.7501 5.52244 20.75 5.95526V6.04475C20.7501 6.47757 20.7501 6.8744 20.7067 7.19721C20.6589 7.5527 20.5465 7.92842 20.2374 8.23744C19.9284 8.54647 19.5527 8.65891 19.1972 8.70671C18.8744 8.75011 18.4776 8.75006 18.0447 8.75001H15.9553C15.5224 8.75006 15.1256 8.75011 14.8028 8.70671C14.4473 8.65891 14.0716 8.54647 13.7626 8.23744C13.4535 7.92842 13.3411 7.5527 13.2933 7.19721C13.2499 6.8744 13.2499 6.47757 13.25 6.04475C13.25 6.02988 13.25 6.01496 13.25 6.00001C13.25 5.98505 13.25 5.97014 13.25 5.95526C13.2499 5.52245 13.2499 5.12561 13.2933 4.8028C13.3411 4.44732 13.4535 4.07159 13.7626 3.76257C14.0716 3.45355 14.4473 3.3411 14.8028 3.29331C15.1256 3.24991 15.5224 3.24995 15.9553 3.25ZM15.9553 11.25H18.0447C18.4776 11.25 18.8744 11.2499 19.1972 11.2933C19.5527 11.3411 19.9284 11.4535 20.2374 11.7626C20.5465 12.0716 20.6589 12.4473 20.7067 12.8028C20.7501 13.1256 20.7501 13.5224 20.75 13.9553V18.0448C20.7501 18.4776 20.7501 18.8744 20.7067 19.1972C20.6589 19.5527 20.5465 19.9284 20.2374 20.2374C19.9284 20.5465 19.5527 20.6589 19.1972 20.7067C18.8744 20.7501 18.4776 20.7501 18.0447 20.75H15.9553C15.5224 20.7501 15.1256 20.7501 14.8028 20.7067C14.4473 20.6589 14.0716 20.5465 13.7626 20.2374C13.4535 19.9284 13.3411 19.5527 13.2933 19.1972C13.2499 18.8744 13.2499 18.4776 13.25 18.0448L13.25 14C13.25 13.9851 13.25 13.9701 13.25 13.9553C13.2499 13.5224 13.2499 13.1256 13.2933 12.8028C13.3411 12.4473 13.4535 12.0716 13.7626 11.7626C14.0716 11.4535 14.4473 11.3411 14.8028 11.2933C15.1256 11.2499 15.5224 11.25 15.9553 11.25ZM14.8257 12.8219L14.8232 12.8232L14.8219 12.8257C14.8209 12.8276 14.8192 12.8309 14.8172 12.836C14.8082 12.8578 14.7929 12.9061 14.7799 13.0027C14.7516 13.2134 14.75 13.5074 14.75 14V18C14.75 18.4926 14.7516 18.7866 14.7799 18.9973C14.7929 19.0939 14.8082 19.1423 14.8172 19.164C14.8192 19.1691 14.8209 19.1724 14.8219 19.1743L14.8232 19.1768L14.8257 19.1781C14.8276 19.1792 14.8309 19.1808 14.836 19.1828C14.8577 19.1918 14.9061 19.2071 15.0027 19.2201C15.2134 19.2484 15.5074 19.25 16 19.25H18C18.4926 19.25 18.7866 19.2484 18.9973 19.2201C19.0939 19.2071 19.1423 19.1918 19.164 19.1828C19.1691 19.1808 19.1724 19.1792 19.1743 19.1781L19.1768 19.1768L19.1781 19.1743C19.1791 19.1724 19.1808 19.1691 19.1828 19.164C19.1918 19.1423 19.2071 19.0939 19.2201 18.9973C19.2484 18.7866 19.25 18.4926 19.25 18V14C19.25 13.5074 19.2484 13.2134 19.2201 13.0027C19.2071 12.9061 19.1918 12.8578 19.1828 12.836C19.1816 12.833 19.1805 12.8306 19.1797 12.8287L19.1781 12.8257L19.1768 12.8232L19.1743 12.8219C19.1724 12.8209 19.1691 12.8192 19.164 12.8172C19.1423 12.8082 19.0939 12.7929 18.9973 12.7799C18.7866 12.7516 18.4926 12.75 18 12.75H16C15.5074 12.75 15.2134 12.7516 15.0027 12.7799C14.9061 12.7929 14.8577 12.8082 14.836 12.8172C14.8309 12.8192 14.8276 12.8209 14.8257 12.8219ZM4.82567 16.8219L4.82324 16.8232L4.82186 16.8257C4.82085 16.8276 4.81923 16.8309 4.81716 16.836C4.8082 16.8578 4.7929 16.9061 4.77992 17.0027C4.75159 17.2134 4.75 17.5074 4.75 18C4.75 18.4926 4.75159 18.7866 4.77992 18.9973C4.7929 19.0939 4.8082 19.1423 4.81716 19.164C4.81923 19.1691 4.82085 19.1724 4.82186 19.1743L4.82324 19.1768L4.82567 19.1781C4.8276 19.1792 4.83092 19.1808 4.83596 19.1828C4.85774 19.1918 4.90611 19.2071 5.00266 19.2201C5.21339 19.2484 5.50739 19.25 6 19.25H8C8.49261 19.25 8.78661 19.2484 8.99734 19.2201C9.09389 19.2071 9.14225 19.1918 9.16403 19.1828C9.16658 19.1818 9.1704 19.1801 9.1704 19.1801L9.17433 19.1781L9.17676 19.1768L9.17814 19.1743L9.1796 19.1714C9.18049 19.1695 9.18158 19.1671 9.18284 19.164C9.1918 19.1423 9.20709 19.0939 9.22008 18.9973C9.24841 18.7866 9.25 18.4926 9.25 18C9.25 17.5074 9.24841 17.2134 9.22008 17.0027C9.20709 16.9061 9.1918 16.8578 9.18284 16.836C9.18077 16.8309 9.17915 16.8276 9.17814 16.8257L9.17676 16.8232L9.17433 16.8219C9.17239 16.8209 9.16908 16.8192 9.16403 16.8172C9.14225 16.8082 9.09389 16.7929 8.99734 16.7799C8.78661 16.7516 8.49261 16.75 8 16.75H6C5.50739 16.75 5.21339 16.7516 5.00266 16.7799C4.90611 16.7929 4.85774 16.8082 4.83596 16.8172C4.83092 16.8192 4.8276 16.8209 4.82567 16.8219ZM5.95526 15.25H8.04474C8.47756 15.25 8.87439 15.2499 9.19721 15.2933C9.55269 15.3411 9.92841 15.4535 10.2374 15.7626C10.5465 16.0716 10.6589 16.4473 10.7067 16.8028C10.7501 17.1256 10.7501 17.5224 10.75 17.9553V18.0448C10.7501 18.4776 10.7501 18.8744 10.7067 19.1972C10.6589 19.5527 10.5465 19.9284 10.2374 20.2374C9.92841 20.5465 9.55269 20.6589 9.19721 20.7067C8.87439 20.7501 8.47756 20.7501 8.04474 20.75H5.95525C5.52244 20.7501 5.1256 20.7501 4.80279 20.7067C4.44731 20.6589 4.07159 20.5465 3.76256 20.2374C3.45354 19.9284 3.34109 19.5527 3.2933 19.1972C3.2499 18.8744 3.24994 18.4776 3.25 18.0448V17.9553C3.24994 17.5224 3.2499 17.1256 3.2933 16.8028C3.34109 16.4473 3.45354 16.0716 3.76256 15.7626C4.07159 15.4535 4.44731 15.3411 4.80279 15.2933C5.1256 15.2499 5.52244 15.25 5.95526 15.25Z" />
            </g>
        </svg>
    )
}