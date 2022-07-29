import { linksData as items } from "../../model/linksData";
import { Section } from "../Section";
import {ReactComponent as ArrowLeftSVG} from '../../assets/arrow-left.svg';
import { Link } from "react-router-dom";

export const LinksPage = () => {
    return (
        <div className="links-page">
            <Link to="/play"><ArrowLeftSVG className="back-btn "/></Link>
            {items.map((item) => (
                <div className="header-section">
                    <Section description={item.description} title={item.title} cards={item.cards}/>
                </div>
            ))}
            <footer className="flex-column pad-2">
                <div className="footer-text">
                    <p style={{color: "rgb(156,163,175)", marginBottom: "0"}}>Found a bug or want to say hi?</p>
                    <a href="mailto:zhibekrahym05@gmail.com" style={{color: "rgb(156, 163, 175)"}}>Email me </a>
                </div>
                <div className="flex-row" style={{fontSize: "15px"}}>
                    <p className="text-gray-600">
                        <a href="https://github.com/qyzjibek/SwiftUI-Game">Github</a>
                    </p>
                    <p className="text-gray-600">
                        <a href="https://www.linkedin.com/in/qyzjibek/">LinkedIn</a>
                    </p>
                    <p className="text-gray-600">
                        <a href="https://www.instagram.com/nfactorial.school/">n! Incubator</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}