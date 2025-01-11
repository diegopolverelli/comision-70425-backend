let spanIdAlumno=document.getElementById("idAlumno")
let idAlumno=spanIdAlumno.textContent

const inscribir=async(idCurso)=>{
    console.log(idCurso, idAlumno)

    let respuesta=await fetch(`/api/alumnos/${idAlumno}/curso/${idCurso}`,{
        method:"post"
    })
    if(respuesta.status>=400){
        alert(`Error...!!! consulte con el administrador`)
        return 
    }
    let data=await respuesta.json()
    console.log(data)
    window.location.reload()

}