import PropTypes from "prop-types";



export const HelloWorld=({users, id,title = 'hola mundo'})=> {

    console.log(title);
    

    return (
    <>
    <h1>{title}</h1>
    <div>que tal! {users} con el id{ id }</div>
    </>
    );

} 

HelloWorld.PropTypes ={
    title:PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}