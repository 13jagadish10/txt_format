import { useRef, useState } from "react"

function Container() {
    const val = useRef("") 
    
    const clear =()=>{
            val.current.value = ""
    }
    const copy =()=>{
        const tmp = document.getElementById('box')
        tmp.select()
        navigator.clipboard.writeText(tmp.value)
        tmp.setSelectionRange(0, 0) 

    }
    const capitalize_sent =()=>{
        let arr = val.current.value.split(/[.]+/)
        let tmp = ""
        arr.map((sent)=>{
        if(sent !== " " && sent !== "" ){ 
            let upper = ""
            let count = 0
            if(sent[0]===" " && sent[1]){
                upper = " "+sent[1].toUpperCase()
                count = 2
             } else {
                upper = sent[0].toUpperCase() 
                count = 1
            }
        tmp += upper + sent.substr(count)+"."
    }
            })
        val.current.value = tmp
    }
    const capitalize_word =()=>{
        let tmp = val.current.value
        let sent = ""
        tmp.split(/[ ]+/).map((word) => {if(word!== ""){sent += word[0].toUpperCase()+word.substr(1)+" "}})
        val.current.value = sent
    }
    const upper =()=>{
        let tmp = val.current.value
        tmp = tmp.toUpperCase()
        val.current.value = tmp
    }
    const lower =()=>{
        let tmp = val.current.value
        tmp = tmp.toLowerCase()
        val.current.value = tmp
    }
    const remove_spaces =()=>{
        let tmp = val.current.value
        let sent = ""
        tmp.split(/[ ]+/).map(elem => {if(elem!==""){sent += elem+" "}})
        val.current.value = sent
    }
    const [tmp, settmp] = useState("")
    const change = ()=>{
        settmp(val.current.value)
    }
    return (
        <div className="container">
            <h2>Best text manipulating platform to format your text.</h2><br />
            <div className="nav">
            <button className="item" onClick={clear}>Clear</button>
            <button className="item" onClick={copy}>Copy</button>
            <button className="item" onClick={capitalize_sent}>Capitalize sent.</button>
            <button className="item" onClick={capitalize_word}>Capitalize word</button>
            <button className="item" onClick={upper}>Upper case</button>
            <button className="item" onClick={lower}>Lower case</button>
            <button className="item" onClick={remove_spaces}>Remove extra spaces</button>
                        </div><textarea ref={val} onChange={change} id="box" className="box" placeholder="Enter the text to format"></textarea>
            <h3>Summary of text :</h3>
            <div>
                <p><b>{(val.current.value && val.current.value.split(/[ ]+/).length) || 0}</b>&nbsp; Words and <b>{(val.current.value && val.current.value.length) || 0}</b> Characters.</p>
                <p><b>{String((tmp.split(" ").length-1) * 0.008).substr(0,5)}</b> Minutes to read.</p>
            </div>
        </div>
    )
}

export default Container

