import React from "react"

interface IEntityProps {
    
}

const EntityForm: React.FC<IEntityProps> = () => {
    return (
        <div>
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
                        onClick={()=>console.log()}
                    >
                        generate
                    </button>
                    <label
                        style={{ fontSize:10, fontWeight:"bold" }}
                        htmlFor=""
                        className="formlabel my-hover"
                        onClick={() => console.log()}>
                        close
                    </label>
               </div>
            </div>
            <div className="form" >
                <div className="form-control">
                    <label htmlFor="">entity name</label>
                    <input type="text" name="entity_name" onChange={ ()=>{} }/>
                </div>
                <div className="form-control">
                    <label htmlFor="">field name</label>
                    <input type="text" name="field_name" onChange={ ()=>{} }/>
                </div>
                <div className="form-control">
                    <label htmlFor="">relation entity name</label>
                    <input type="text" name="relation_entity_name" onChange={ ()=>{} }/>
                </div>
                <div className="form-control">
                    <label htmlFor="">database</label>
                    <input type="text" name="database" id="" onChange={ ()=>{} }/>
                </div>
            </div>
        </div>
    )
}

export default EntityForm