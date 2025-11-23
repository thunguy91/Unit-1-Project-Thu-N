import React from "react";
import './PlaceModal.css'; 
import Button from '/src/components/Button/Button.jsx'

export default function PlaceModal({ selectedPlace, onClose, onAdd }) {
    if (!selectedPlace) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>

                <h2>{selectedPlace.name}</h2>
                <img src={selectedPlace.thumbnail} alt={selectedPlace.name} className="modal-img" />
                <strong>{selectedPlace.rating}</strong>
                <em>{Array.isArray(selectedPlace.type) ? selectedPlace.type.join(", ") : selectedPlace.type}</em>

                <div className="modal-content">
                    <p><strong>Address:</strong> {selectedPlace.address}</p>
                    <p><strong>Website:</strong> <a href={selectedPlace.website} target="_blank">{selectedPlace.website}</a></p>

                    {selectedPlace.hours && (
                        <div className="hours">
                            <table className="hours-table">
                                <tbody>
                                    {Object.entries(selectedPlace.hours).map(([day, time]) => (
                                        <tr key={day}>
                                            <td>{day.toUpperCase()}</td>
                                            <td>{time || "TBD"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <Button onClick={() => onAdd(selectedPlace)}>Add to List</Button>
                <Button onClick={onClose}>Close</Button>
            </div>
        </div>
    );
}
