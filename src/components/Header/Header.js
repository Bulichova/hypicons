import { render } from "@testing-library/react";

export function Header (){
    return (
        <header>
            <a>Hypicons</a>
            <ul>
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Contacts</a>
                </li>
            </ul>
        </header>
    )
}