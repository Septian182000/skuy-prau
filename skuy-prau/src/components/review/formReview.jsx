import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPendaki } from "../../store/features/pendakiSlice";

export default function FormPendaki() {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    const [setErrMsg] = useState("")
    const [errMsgName, setErrorMessageName] = useState("")
    const [errMsgReview, setErrorMessageReview] = useState("")
    const [disabledButton, setDisable] = useState(false)
    const nameRegex = new RegExp(/^[A-Za-z ]*$/);

    const handlerName = e => {
        const name = e.target.name
        const value = e.target.value

        if(name === "nama"){
            if(nameRegex.test(value)){
                setErrorMessageName("")
                setDisable(false)
            } else if(name !== nameRegex){
                setErrorMessageName({nama: "Nama Harus Berupa Huruf"})
                setDisable(true)
            }
        }
        
        setInput({
            ...input,
            [name]: value,
        })
    }

    const handlerReview = e => {
        const name = e.target.name
        const value = e.target.value

        if(name === "review"){
            if(value.length < 10){
                setErrorMessageReview({review: "Minimal 10 Huruf"})
                setDisable(true)
            }else if(value.length > 10){
                setErrorMessageReview("");
                setDisable(false);
            }
        }
        
        setInput({
            ...input,
            [name]: value,
        })
    }

    const handlerOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput(name, value)
    }

    const refreshPage = () => {
        window.location.reload(false);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const nama = formData.get("nama");
        const review = formData.get("review");
        const jalur = formData.get("jalur");
        if(input){
            const succes = dispatch(createPendaki({ nama, review, jalur }));
            e.target.reset();
            setErrMsg(alert(`Review berhasil ditambahkan!`))
            return succes;
        }else {
            setErrMsg(alert(`Review tidak sesuai!`))
        }

        // if(errMsgName !== "" || errMsgReview !== ""){
        //     setErrMsg(alert('Review tidak sesuai'))
        // }else {
        //     setInput(nama, review, jalur)
        //     e.target.reset();
        //     setErrMsg(alert(`Data Berhasil Diterima!`))
        //     setErrMsg("")
        // }
      };

    return (
            <div className="content">
                <h1 className="title-review mb-4">drop your story</h1>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-input">
                    <input 
                        type="text" 
                        placeholder="Put Your Name" 
                        onChange={handlerName} 
                        className="me-4 input-text"
                        name="nama"
                    />
                    <span className="text-danger fs-5">{errMsgName.nama}</span>
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
                        onChange={handlerReview} 
                        name="review"
                        />
                    <span className="text-danger fs-5">{errMsgReview.review}</span>    
                    </div>
                    <div className="button-design">
                        <input type="submit" className="btn" disabled={disabledButton} onClick={refreshPage}/>
                    </div>
                </form>
            </div>
    )
}