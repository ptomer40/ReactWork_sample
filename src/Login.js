function Login(){
    const num=[1,3,6,10,12];
    let data=num.map((x)=>{
        return(
            <li key={x}>{x}</li>
        )
    })
    return(
    <>

   
    <h2 style={{marginLeft:'100px'}}>Login Page</h2>
    {data}

       </>
)


}
export default Login;