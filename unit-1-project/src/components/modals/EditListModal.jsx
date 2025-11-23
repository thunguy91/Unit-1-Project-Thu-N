import "./EditListModal.css";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import Button from '/src/components/Button.jsx';

export default function EditListModal({ list, setList, onClose }) {

    const handleRemove = (index) => {
        setList(prev => prev.filter((_, i) => i !== index));
    };

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const newList = Array.from(list);
        const [moved] = newList.splice(result.source.index, 1);
        newList.splice(result.destination.index, 0, moved);

        setList(newList);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Edit List</h2>

                <DragDropContext onDragEnd={handleDragEnd}> 
                    <Droppable droppableId="list">
                        {(provided) => (
                            <ol 
                                className="edit-list"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {list.map((item, index) => (
                                    <Draggable 
                                        key={item.id || index}
                                        draggableId={(item.id || index).toString()}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <li
                                                className={`edit-list-item ${
                                                    snapshot.isDragging ? "dragging" : ""
                                                }`}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <span className="item-number">{index + 1}</span>

                                                <span className="item-name">{item.name}</span>

                                                <Button 
                                                    className="rmv-btn"
                                                    onClick={() => handleRemove(index)}
                                                >Remove</Button>
                                                
                                            
                                            </li>
                                        )}
                                    </Draggable>
                                ))}
                            </ol>
                        )}
                    </Droppable>
                </DragDropContext>

                <div className="done-edit-btn">
                    <Button onClick={onClose}>Done</Button>
                </div>
            </div>
        </div>
    );
}
