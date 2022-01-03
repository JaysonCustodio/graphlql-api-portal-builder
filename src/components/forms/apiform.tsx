import axios from "axios";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Core } from "../../class/Core";
import { CustomResolver } from "../../class/CustomResolver";
import { CustomService } from "../../class/CustomService";
import { OverrideResolver } from "../../class/OverrideResolver";
import { addFunction, deleteApi, removeFunction, updateApi } from "../../redux/actions/api_actions";
import OverrideEditor from "../common/OverrideEditor";
import ResolverEditor from "../common/ResolverEditor";
import ServiceEditor from "../common/ServiceEditor";


interface ApiFormProps {
    api: Core;
}
 
const ApiForm: React.FC<ApiFormProps> = ({api}) => {
    const { REACT_APP_SERVER_API } = process.env
    const dispatch = useDispatch()
    const myApi = useSelector((state: any) => state.apiCoreReducer)
    const handleClose = (id : string, field: string) => {
        dispatch(removeFunction({
            apiId: api.id,
            fieldId: id,
            field
        }))
    }
    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = e
        dispatch(updateApi({
            apiId : api.id,
            name,
            value
        }))
    }
    const handleAddFunction = (field: string, custom: any) => {
        dispatch(addFunction({
            field,
            custom,
            apiId : api.id
        }))
    }
    const handleGenerate = async () => {
        const { data } = await axios.post(`${REACT_APP_SERVER_API}`, {
            api: myApi
        })
        console.log(data);
    }
    return (
        <div style={{
            padding: "5px 5px 5px 0px"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "flex-end"
            }}>
                <div style={{
                    display: "flex",
                    alignItems:"center"
                }}>
                    <button
                        className="btn-primary"
                        style={{
                            width: 100,
                            fontSize: 10
                        }}
                        onClick={()=>handleGenerate()}
                    >
                        generate
                    </button>
                    <label
                        style={{ fontSize:10, fontWeight:"bold" }}
                        htmlFor=""
                        className="formlabel my-hover"
                        onClick={() => dispatch(deleteApi({apiId: api.id}))}>
                        close
                    </label>
               </div>
            </div>
            <div className="form">
                <div className="form-control">
                    <label htmlFor="">project name</label>
                    <input type="text" name="project_name" onChange={ handleChangeValue }/>
                </div>
                <div className="form-control">
                    <label htmlFor="">file name</label>
                    <input type="text" name="file_name" onChange={ handleChangeValue }/>
                </div>
                <div className="form-control">
                    <label htmlFor="">schema</label>
                    <input type="text" name="schema" onChange={ handleChangeValue }/>
                </div>
                <div className="form-control">
                    <label htmlFor="">system company id</label>
                    <input type="text" name="system_company_id" id="" onChange={ handleChangeValue }/>
                </div>
            </div>
            <div className="editor-div">
                <div className="form-control" id="override">
                    <div className="label-button">
                        <label htmlFor="">default resolver override</label>
                        <button
                            className="my-hover"
                            onClick={() => handleAddFunction("default_resolver_override", new OverrideResolver())}>add function</button>
                    </div>
                    {
                        api.default_resolver_override.map((e: any) => {
                            return <OverrideEditor
                                key={e.id}
                                handleClose={handleClose}
                                methodId={e.id}
                                apiId={api.id}
                            />
                        })
                    }
                    <hr />
                </div>
                <div className="form-control" id="resolver">
                    <div className="label-button">
                        <label htmlFor="">custom resolver method</label>
                        <button
                            className="my-hover"
                            onClick={() => handleAddFunction("custom_resolver_method", new CustomResolver())}>add function</button>
                    </div>
                    {
                        api.custom_resolver_method.map((e: any) => {
                            return <ResolverEditor
                                key={e.id}
                                handleClose={handleClose}
                                methodId={e.id}
                                apiId={api.id}
                            />
                        })
                    }
                    <hr />
                </div>
                <div className="form-control" id="service">
                    <div className="label-button">
                        <label htmlFor="">custom service method</label>
                        <button
                            className="my-hover"
                            onClick={() => handleAddFunction("custom_service_method", new CustomService())}>add function</button>
                    </div>
                    {
                         api.custom_service_method.map((e: any) => {
                             return <ServiceEditor
                                 key={e.id}
                                 handleClose={handleClose}
                                 methodId={e.id}
                                 apiId={api.id}
                             />
                        })
                        /* <ServiceEditor /> */
                    }
                    <hr />
                </div>
            </div>
        </div>
     );
}
 
export default ApiForm;