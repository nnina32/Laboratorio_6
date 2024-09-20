interface Props{
    buyList: string[];
}
export function ShoppingWeek({buyList}:Props){
    return(
        <ul style={{color:"white"}}>
            {buyList.map((list, index) => (
                <li key={index}>{list}</li>
            ))}
        </ul>
    )
}