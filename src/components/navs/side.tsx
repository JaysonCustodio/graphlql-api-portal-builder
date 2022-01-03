import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { Core } from "../../class/Core";
import { createApi, deleteApi } from "../../redux/actions/api_actions";
import { reset } from '../../redux/actions/step_actions';
import AppName from "../common/AppName";

interface SideProps {
    show: boolean
    setShowTab: () => void,
    apiId: string,
    handleSetDisplayForm: (tab:string) => void
}
 
const Side: React.FC<SideProps> = ({ show , setShowTab, apiId, handleSetDisplayForm}) => {
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState<boolean>(false)
    const createCore = () => {
        setDisabled(true)
        const new_api = new Core()
        handleSetDisplayForm("api")
        dispatch(createApi(new_api))
        setShowTab()
    }
    const cancel = () => {
        setDisabled(false)
        dispatch(deleteApi({ apiId }))
        dispatch(reset())
    }
    return (
        <nav className='side' style={{
            display: show ? "block" : "none"
        }} >
            <AppName />
            <div className='side-div'>
                <button
                    onClick={() => createCore()}
                    className="btn-primary"
                    disabled={disabled}
                    style={{
                        color: disabled ? "gray" : "#b4186b",
                        borderColor : disabled ? "gray" : "#b4186b"
                    }}
                >CREATE API</button>
                <button
                    onClick={() => cancel()}
                    className="btn-primary"
                    disabled={!disabled}
                    style={{
                        color: disabled ?  "#b4186b" : "gray",
                        borderColor : disabled ? "#b4186b" : "gray"
                    }}
                >cancel</button>
            </div>
        </nav>
    );
}
 
export default Side; 