import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateStep1, updateStep2, updateStep3 } from '../redux/actions/step_actions';
import { ETabs } from '../redux/types';
import Stepper from './common/Stepper';
import ApiForm from "./forms/apiform";
import EntityForm from './forms/entityForm';
import Initialform from './forms/inititalForm';
import Icon from "./navs/icon";
import Side from "./navs/side";
import './style.scss';

interface MainProps {
    
}


const Main: React.FC<MainProps> = () => {
    const { STEP1, STEP2, STEP3 } = ETabs
    const dispatch = useDispatch()
    const core_api = useSelector((state: any) => state.apiCoreReducer)    
    const [show, setShow] = useState<boolean>(true)
    const [displayForm, setDisplayForm] = useState("api")
    const [showTabs, setShowtab] = useState<boolean>(false)
    
    const handleShowTab = () => {
        setShowtab(true)
    }
    const handleShow = () => {
        setShow(!show)
    }
    const handleSetDisplayForm = (tab: string) => {
        setDisplayForm(tab)
        switch (tab) {
            case STEP1: dispatch(updateStep1({ field: "status", value: "#b4186b" }))
                break;
            case STEP2: dispatch(updateStep2({ field: "status", value: "#b4186b" }))
                break;
            case STEP3: dispatch(updateStep3({ field: "status", value: "#b4186b" }))
                break;
                default: break
        }
    }
    return (
        <div className="main" style={{
            gridTemplateColumns: show ? "60px 250px 2fr 1fr": "60px 2fr 1fr"
        }}>
            <Icon show={show} handleShow={ handleShow }/>
            <Side show={show} setShowTab={handleShowTab} apiId={core_api[0]?.id} handleSetDisplayForm={ handleSetDisplayForm }/>
            <div className="main-con">
                <div className="tabs" style={{display : showTabs ? "flex" : "none"}}>
                    <div
                        onClick={() => handleSetDisplayForm("api")}
                        className="block" style={{
                            backgroundColor: displayForm === "api" ? "rgb(21, 23, 24)" : "transparent"
                        }}>api config</div>
                    <div
                        onClick={ ()=> handleSetDisplayForm("entity") }
                        className="block" style={{
                            backgroundColor: displayForm === "entity" ? "rgb(21, 23, 24)" : "transparent"
                        }}>entity realationship</div>
                    <div
                        onClick={ ()=> handleSetDisplayForm("initial") }
                        className="block" style={{
                            backgroundColor: displayForm === "initial" ? "rgb(21, 23, 24)" : "transparent"
                        }}>intital data</div>
                </div>
                <div className=""
                    style={{
                            display: displayForm === "api" ? "block" : "none"
                        }}>
                    {
                    core_api.map((e: any) => {
                        return <ApiForm key={e.id} api={ e }/>
                    })
                }
                </div>
                <div className=""
                    style={{
                        display: displayForm === "entity" ? "block" : "none"
                    }}>
                    <EntityForm />
                </div>
                <div className=""
                    style={{
                        display: displayForm === "initial" ? "block" : "none"
                    }}>
                    <Initialform />
                </div>
            </div>
            <div className="third-div">
                <Stepper />
            </div>
        </div>
    );
}
 
export default Main;