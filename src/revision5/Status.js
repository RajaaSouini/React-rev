function Status(props){
    let message = "";
    let color = "";
    if(props.isOnline === true){
        message = "connecté";
        color = "green";
    }else{
        message = "déconnecté";
        color = "red";
    }
    return(<>
    <span style={{backgroundColor : color}}>{message}</span>
    </>)
}
export default Status;