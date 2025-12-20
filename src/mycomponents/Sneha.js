function Manoj()
{
    return(
        <>
        <h1>This is Manoj components</h1>
        </>
    )
}
//export default Manoj : Not Working
function Sneha()
{
    return(
        <>
        <Manoj/>
        <h1>This is Sneha components</h1>
        <input type="text" placeholder="Enter your name" value="Sneha"></input>
        <input type="button" value="click me"></input>
        </>
    )
}
export default Sneha