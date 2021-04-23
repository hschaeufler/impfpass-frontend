import SvgIcon from "@material-ui/core/SvgIcon";

/**
 * SVG Icon from https://fonts.google.com/icons?icon.query=login
 * */
function LoginIcon(props) {
    return (
        <SvgIcon {...props}>
            <g>
                <rect fill="none"/>
            </g>
            <g>
                <path
                    d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/>
            </g>
        </SvgIcon>
    );
}

export default LoginIcon;