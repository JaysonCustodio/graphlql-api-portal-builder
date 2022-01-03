interface BarsProps {
    titles : string[]
}
 
const Bars: React.FC<BarsProps> = ({ titles }) => {
    return (
        <div className="bars">
            {
                titles.map((title: string, index: number) => {
                    console.log(index);
                    return <a href={ `#${index}`} key={ index }>{ title }</a>
                })
            }
        </div>
    );
}
 
export default Bars;