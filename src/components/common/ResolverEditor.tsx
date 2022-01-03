import React, { ChangeEvent, useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import { Controlled } from "react-codemirror2"
import { updateFunction } from '../../redux/actions/api_actions'
import { EFunctionField, EFunctionFieldName } from '../../redux/types'
import { useDispatch } from 'react-redux'

interface ResolverEditorProps {
    handleClose: (id: string, field:string) => void
    methodId: string,
    apiId: string
}
 
const ResolverEditor: React.FC<ResolverEditorProps> = ({methodId, handleClose, apiId }) => {
    const [mutation, setMutation] = useState('')
    const [query, setQuery] = useState('')
    const [imports, setImport] = useState('')
    const dispatch = useDispatch()
    const handleChangeQuery = (editor: any, data: any, value: any) => {
        setQuery(value);
        dispatch(updateFunction(
            {
                apiId,
                fieldName: EFunctionField.RESOLVER,
                functionFieldName: EFunctionFieldName.QUERY,
                value,
                functId: methodId
            }
        ))
    }
    const handleChangeImports = (editor: any, data: any, value: any) => {
        setImport(value);
        dispatch(updateFunction(
            {
                apiId,
                fieldName: EFunctionField.RESOLVER,
                functionFieldName: EFunctionFieldName.IMPORTS,
                value,
                functId: methodId
            }
        ))
    }
    const handleChangeMutation = (editor: any, data: any, value: any) => {
        setMutation(value);
        dispatch(updateFunction(
            {
                apiId,
                fieldName: EFunctionField.RESOLVER,
                functionFieldName: EFunctionFieldName.MUTATION,
                value,
                functId: methodId
            }
        ))
    }
    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event
        dispatch(updateFunction({
            apiId,
            fieldName: EFunctionField.RESOLVER,
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
                alignItems:"center"
            }}>
                <div className="form-control">
                    <label htmlFor="">fuction name</label>
                    <input type="text" onChange={ handleChangeName }/>
                </div>
                <div>
                    <label htmlFor=""
                        className="my-hover"
                        onClick={() => handleClose(methodId, EFunctionField.RESOLVER)}>close</label>
                </div>
            </div>
            <div className="form-control">
                 <label htmlFor="">imports</label>
                <Controlled
                    onBeforeChange={handleChangeImports}
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
                 <label htmlFor="">Query</label>
                <Controlled
                    onBeforeChange={handleChangeQuery}
                    value={query}
                    options={{
                        lineWrapping: true,
                        mode: "javascript",
                        lineNumbers: true,
                        theme: 'material'
                    }}
                />
            </div>
            <div className="form-control">
                 <label htmlFor="">Mutation</label>
                <Controlled
                    onBeforeChange={handleChangeMutation}
                    value={mutation}
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
 
export default ResolverEditor;