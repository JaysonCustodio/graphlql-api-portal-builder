interface TabProps {
    context: string,
    index: any
}
 
const Tab: React.FC<TabProps> = ({ context, index }) => {
    return (
        <div className='tab' id={`${index}`}>
            <p>
                { context }
            </p>
        </div>
    );
}
 
export default Tab;