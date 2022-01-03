import React from "react"
import { useSelector } from "react-redux";
import { IStepState } from "../../redux/types";
interface StepperProps {

}
 
const Stepper: React.FC<StepperProps> = () => {
    const current_step: IStepState = useSelector((state: any) => state.stepReducer)
    const { step1, step2, step3 } = current_step
    return (
        <div className="stepper-div">
            <div className="stepper">
                <div className="cirline_div">
                    <div className="circle" style={{ backgroundColor : step1.status }}>
                        <label htmlFor="">1</label>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="inside">
                    <label htmlFor=""> api config</label>
                    <div className="form-inside">
                        <div className="step-control">
                            <label htmlFor="">project name</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">file name</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">json schema</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">system company id</label>
                            <p>test</p>
                        </div>
                         <div className="step-control">
                            <label htmlFor="">default resolver override</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">custom resolver method</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">custom service method</label>
                            <p>test</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stepper">
                <div className="cirline_div">
                    <div className="circle" style={{ backgroundColor : step2.status }}>
                        <label htmlFor="">2</label>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="inside">
                    <label htmlFor=""> entity realationship</label>
                    <div className="form-inside">
                        <div className="step-control">
                            <label htmlFor="">project name</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">file name</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">json schema</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">system company id</label>
                            <p>test</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stepper">
                <div className="cirline_div">
                    <div className="circle" style={{ backgroundColor : step3.status }}>
                        <label htmlFor="">3</label>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="inside">
                    <label htmlFor=""> intital data</label>
                    <div className="form-inside">
                        <div className="step-control">
                            <label htmlFor="">project name</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">file name</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">json schema</label>
                            <p>test</p>
                        </div>
                        <div className="step-control">
                            <label htmlFor="">system company id</label>
                            <p>test</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stepper">
                <div className="cirline_div">
                    <div className="circle">
                        <label htmlFor="">4</label>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="inside">
                    <label htmlFor="">FINISH</label>
                    <div className="form-inside">
                        
                    </div>
                </div>
           </div>
        </div>
     );
}
 
export default Stepper;