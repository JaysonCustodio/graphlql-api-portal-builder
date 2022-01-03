import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/all';
import { RiSettingsFill } from 'react-icons/all';
import { SiGraphql } from "react-icons/all"

interface IconProps {
    show: boolean,
    handleShow: ()=> void
}
 
const Icon: React.FC<IconProps> = ({show, handleShow }) => {
    const [iconStyle, setIconStyle] = useState<React.CSSProperties>({})

    const handleClick = () => {
        setIconStyle({
            ...iconStyle,
            WebkitTransform: show ? "rotate(180deg) translateZ(0)" : "rotate(-180deg) translateZ(0)"
        })
        handleShow()
    }

    return (
        <div className='icon' style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",            
        }}>
            <div style={{padding:10}}>
                <SiGraphql className="g-icon" style={iconStyle}
                    onClick={ ()=> handleClick()}
                />
            </div>
            <div>
                <div style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                padding: 10,
            }}>
                <FaUserCircle style={{ color: '#c70e71', fontSize: 30 }} />
                <span style={{ fontSize:11 }}>bert</span>
            </div>
            <div style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                padding: 10
            }}>
                <RiSettingsFill style={{ color: '#c70e71', fontSize: 30 }} />
                <span style={{ fontSize:10 }}>settings</span>
            </div>
            </div>
        </div>
    );
}
 
export default Icon;