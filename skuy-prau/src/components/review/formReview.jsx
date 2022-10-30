import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPendaki } from "../../store/features/pendakiSlice";

export default function FormPendaki() {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handlerOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput(name, value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nama = formData.get("nama");
        const review = formData.get("review");
        let newToDoList = !input
          ? alert("Title can't be empty")
          : dispatch(createPendaki({ nama, review }));
    
        return newToDoList;
      };

    return (
            <div className="content">
                <h1 className="title-review mb-4">drop your story</h1>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-input">
                    <input 
                        type="text" 
                        placeholder="Put Your Name" 
                        onChange={handlerOnChange} 
                        className="me-4 input-text"
                        name="nama"
                    />
                    <input 
                        type="text" 
                        placeholder="Sharing Your Experience" 
                        onChange={handlerOnChange} 
                        className="me-4 input-text"
                        name="review"
                    />
                    </div>
                    <div className="button-design">
                        <input type="submit" className="btn"/>
                    </div>
                </form>
            </div>
    )
}