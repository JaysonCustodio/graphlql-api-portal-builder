import React, { ChangeEvent, useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import { Controlled } from "react-codemirror2"
import { useDispatch } from 'react-redux'
import { updateFunction } from '../../redux/actions/api_actions'
import { EFunctionField, EFunctionFieldName } from '../../redux/types'

interface EditorProps {
    handleClose: (id: string, field:string) => void
    methodId: string,
    apiId: string
}
 
const OverrideEditor: React.FC<EditorProps> = ({ handleClose, methodId, apiId }) => {
    const dispatch = useDispatch()
    const [code, setCode] = useState('')
    const [imports, setImport] = useState('')
    const handleChangeCode = (editor: any, data: any, value: any) => {
        setCode(value);
        dispatch(updateFunction(
            {
                apiId,
                fieldName: EFunctionField.OVERRIDE,
                functionFieldName: EFunctionFieldName.CODE,
                value,
                functId: methodId
            }
        ))
    }
    const handleChangeCodeImport = (editor: any, data: any, value: any) => {
        setImport(value);
        dispatch(updateFunction(
            {
                apiId,
                fieldName: EFunctionField.OVERRIDE,
                functionFieldName: EFunctionFieldName.IMPORTS,
                value,
                functId: methodId
            }
        ))
    }
    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event
        dispatch(updateFunction({
            apiId,
            fieldName: EFunctionField.OVERRIDE,
            functionFieldName: EFunctionFieldName.NAME,
            value,
            functId: methodId
        }))
    }
    return (
        <div className="editor-container">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: "center",
            }}>
                <div className="form-control">
                    <label htmlFor="">fuction name</label>
                    <input type="text" onChange={ handleChangeName } />
                </div>
                <div>
                    <label htmlFor=""
                        className="my-hover"
                        onClick={() => handleClose(methodId, EFunctionField.OVERRIDE)}>close</label>
                </div>
            </div>
            <div className="form-control">
                 <label htmlFor="">imports</label>
                <Controlled
                    onBeforeChange={handleChangeCodeImport}
                    value={imports}
                    options={{
                        lineWrapping: true,
                        mode: "javascript",
                        lineNumbers: true,
                        theme: 'material'
                    }}
                />
            </div>
            <div className="form-control">
                 <label htmlFor="">code</label>
                <Controlled
                    onBeforeChange={handleChangeCode}
                    value={code}
                    options={{
                        lineWrapping: true,
                        mode: "javascript",
                        lineNumbers: true,
                        theme: 'material'
                    }}
                />
            </div>
        </div>
     );
}
 
export default OverrideEditor;