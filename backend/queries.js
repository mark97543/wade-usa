const getAllTodos = async (db) => {
    try {
        const result = await db.query("SELECT id, item, completed FROM todo")
        return result.rows
    } catch (error) {
        console.error("Error fetching todos:", error)
        throw error
    }
    console.log("Sending from GET:", result.rows); // Add this
}



export {getAllTodos}
