import SvgIcon from "@material-ui/core/SvgIcon";

/**
 * SVG Icon from https://fonts.google.com/icons?selected=Material%20Icons%20Outlined%3Ahow_to_reg
 * */
function RegisterIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-2-2H5zm15.6-5.5l-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z"/>
        </SvgIcon>
    );
}

export default RegisterIcon;