const Link=(props)=>{

    console.log(props);
    
  return(
     
      <>

      <a  href={`http://${props.url}`} >{props.name}</a>
      <p>{props.x}</p>
      </>
  )


}

export default Link;