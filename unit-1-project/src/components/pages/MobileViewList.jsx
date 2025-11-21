import './stylesheets/ExplorePage.css'

export default function MobileViewList({ list, show, onClose }) {
    if (!show) return null;

    return (
        <div className="mobile-list-container">
            {list.map((item, index) => (
                <div className="mobile-list-item" key={item.id || index}>
                    <span className="mobile-list-number">{index + 1}.</span>
                    <span className="mobile-list-name">{item.name}</span>
                </div>
            ))}
        </div>
        
    )};