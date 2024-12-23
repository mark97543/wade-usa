const getAllTodos = async (db) => {
    try {
        const result = await db.query("SELECT id, item, completed FROM todo")
        return result.rows
    } catch (error) {
        console.error("Error fetching todos:", error)
        throw error
    }
    //console.log("Sending from GET:", result.rows); // Add this
}

const getAllTravelNames = async(db)=>{
    try {
        const result = await db.query("SELECT DISTINCT ON (tripname) id, tripname FROM travel ORDER BY tripname, id")
        return result.rows
    } catch (error) {
        console.error("Error fetching Travel Names:", error)
        throw error
    }
}

const replaceTripName = async(db, oldname, newname)=>{
    try{
        const result = await db.query("UPDATE public.travel SET tripname = ($1) WHERE tripname = ($2)", [newname, oldname])
        console.log("Trip Name Updated")
    }catch(error){
        console.error("Error Replaceing Travel Name:", error)
    }
}


const newTripName = async(db,newname)=>{
    try{
        const result = await db.query("INSERT INTO public.travel (tripname) VALUES ($1)", [newname])
        console.log("Trip Name Updated")
    }catch(error){
        console.error("Error Replaceing Travel Name:", error)
    }
}




export {getAllTodos, getAllTravelNames, replaceTripName, newTripName}
