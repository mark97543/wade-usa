import express from "express"
import cors from "cors";//npm install cors
const app = express();
const port = process.env.PORT || 5000;
import pg from "pg";//npm i pg
import dbChecker from "./dbsetup.js";
import {getAllTodos} from './queries.js'

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Enable parsing JSON request bodies


/* ----------------------------------- API ---------------------------------- */


app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/api/todos', async(req,res)=>{
    try{
        const todos = await getAllTodos(db)
        
        res.json(todos)
    }catch(error){
        console.error("Error fetching todos:", error)
        res.status(500).json({error: "Failed to fetch todos"})
    }
});

// PUT /api/todos/:id - Update a todo
app.put('/api/todos/:id', async (req, res) => {
   
    try {
        const { id } = req.params;
        const { completed } = req.body;

        //console.log("Updating todo with ID:", id, "and completed status:", completed);

        const result = await db.query( // Declare and assign the result here
            "UPDATE todo SET completed = $1::boolean WHERE id = $2 RETURNING *",
            [completed, id]
        );

        //console.log("Database update result:", result); // Now result is defined

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }
        console.log("Sending from PUT:", result.rows[0]); // Add this
        res.json(result.rows[0]); // Send back the updated todo object
    } catch (err) {
        console.error("Error updating todo:", err);
        res.status(500).json({ error: err.message });
    }
});

/* --------------------------- Setting Up Database -------------------------- */

const db = new pg.Client({
    user:"postgres",
    host:"137.184.227.133", //Location of database droplet
    database: "maw",
    password:"7998",
    port: 5432,
});

async function connectToDb() {
    try {
        await db.connect();
        console.log("Connected To Database: " + db.database);
        await dbChecker(db); // Ensure dbChecker runs after connection
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1); // Exit process on db connection failure
    }
}

connectToDb();
