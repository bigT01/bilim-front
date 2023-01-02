type HeaderProps = {
    color?: string
}


const Avatar = () => {
    return(
        <svg width="40" height="40" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="71.789" cy="71.789" r="71.789" fill="#8CD5FF"/>
            <mask id="mask0_1_274" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="144" height="144">
                <circle cx="71.789" cy="71.789" r="71.789" fill="#C4C4C4"/>
            </mask>
            <g mask="url(#mask0_1_274)">
                <ellipse cx="71.7889" cy="126.349" rx="54.5596" ry="31.5872" fill="#002E99"/>
            </g>
            <circle cx="71.7889" cy="61.0207" r="25.844" fill="#002E99"/>
        </svg>
    )
}

const Bell = ({color}: HeaderProps) =>{
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 20.6302C9.79613 21.2332 10.8475 21.5999 12 21.5999C13.1525 21.5999 14.2039 21.2332 15 20.6302M3.57109 17.5271C3.09677 17.5271 2.83186 16.8206 3.11877 16.4281C3.78453 15.5173 4.42712 14.1814 4.42712 12.5727L4.45458 10.2417C4.45458 5.91078 7.83278 2.3999 12 2.3999C16.2286 2.3999 19.6566 5.9625 19.6566 10.3572L19.6291 12.5727C19.6291 14.1924 20.2495 15.5356 20.8882 16.4468C21.164 16.8403 20.8984 17.5271 20.43 17.5271H3.57109Z" stroke={color? color : 'black'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

const More = ({color}: HeaderProps) => {
    return(
        <svg width="12" height="10" viewBox="0 0 20 18" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2499 1.6001L20.8499 18.4001H1.6499L11.2499 1.6001Z" stroke={color? color : 'black'} stroke-width="2" stroke-linejoin="round"/>
        </svg>
    )
}



export {
    Avatar,
    Bell,
    More,
}