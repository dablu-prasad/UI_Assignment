
const ContentPage=()=>{

    return(
        <>
        <table>
            <th>Heading</th>
            <th>Description</th>
            <tr>
<td>  {localStorage.getItem("heading")}</td>
<tb>  {localStorage.getItem("description")}</tb>
            </tr>
        </table>
        </>
    )
}

export default ContentPage;