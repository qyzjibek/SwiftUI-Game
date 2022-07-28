import {ReactComponent as ArrowRightBlueSVG} from '../../assets/arrow-right-blue.svg';

export const Section = ({description, cards, title}) => {
  return (
    <div className='section-container'>
        <div className="flex-column">
            <h1 className="header-text">{title}</h1>
            <h2 className="subhead-text" style={{width: "50%", margin: "16px"}}>{description}</h2>
        </div>
        <div className="cards-stack">
            {cards.map((card) => (
                <a className='flex-column card' style={{borderRadius: "18px", textDecoration: "none", color: "black"}} href={card.link}>
                    <div className="card-cover"></div>
                    <div className="details">
                        <div className="details-title">{card.title}</div>
                        <div className="details-desc">{card.description}</div>
                        <div className="flex-row bottom-pre">
                            <div className="link-text">Follow the link</div>
                            <ArrowRightBlueSVG/>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
  );
};
