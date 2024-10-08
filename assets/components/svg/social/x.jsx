import React from 'react';

const X = ({ className = 'w-6 h-6', strokeColor = 'currentColor' }) => (

<svg xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" className={className}>
    <path fill={strokeColor} d="M13.795 10.533L20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22zm-2.38 2.95L9.97 11.464L4.36 3.627h2.31l4.528 6.317l1.443 2.02l6.018 8.409h-2.31z"/>
</svg>

);

export default X;
