import { Link as ScrollLink } from "react-scroll";

export default function SmoothScroll({ to, children }) {
    return (
        <ScrollLink activeClass="active" to={to} spy smooth offset={0} duration={0}>
            {children}
        </ScrollLink>
    )
}
