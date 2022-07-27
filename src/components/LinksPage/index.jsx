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
            <footer>
                <div className="mb-4">
                    <p style={{color: "rgb(156,163,175)"}}>Found a bug or want to say hi?</p>
                    <a href="mailto:zhibekrahym05@gmail.com" style={{color: "rgb(156, 163, 175)"}}>Email me </a>
                </div>
            </footer>
        </div>
    )
}