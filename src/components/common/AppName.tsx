import React from 'react'
interface AppNameProps {
    
}
 
const AppName: React.FC<AppNameProps> = () => {
    return (
        <div className='appname' style={{
            display: "flex",
            flexBasis: "row",
            gap: 5,
            alignItems:"center"
        }}>
            <p>GRAPHQL API BUILDER </p>
            <span style={{
                color: "#c70e71",
                fontWeight: "bolder",
                fontSize:17
            }}>1.0</span>
        </div>
    );
}
 
export default AppName;