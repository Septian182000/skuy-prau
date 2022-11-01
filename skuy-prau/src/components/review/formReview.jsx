import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPendaki } from "../../store/features/pendakiSlice";

export default function FormPendaki() {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");

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
        const jalur = formData.get("jalur");
        let newToDoList = !input
          ? alert("Title can't be empty")
          : dispatch(createPendaki({ nama, review, jalur }));
    
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
                    <label className="nama-jalur">Pernah melewati jalur :
                    <select 
                        className="form-select nama-jalur" 
                        aria-label="Default select example"
                        name="jalur"
                        onChange={handlerOnChange}
                        required>
                            <option value="Patak Banteng">Patak Banteng</option>
                            <option value="Dwarawati">Dwarawati</option>
                            <option value="Kalilembu">Kalilembu</option>
                            <option value="Wates">Wates</option>
                            <option value="Dieng">Dieng</option>
                    </select>
                    </label>
                    <textarea 
                        className="textarea" 
                        placeholder="Sharing Your Experience..."
                        onChange={handlerOnChange} 
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