import express from "express";
import cors from "cors";
import pg from "pg";
import dbChecker from "./dbsetup.js";
import { getAllTodos , getAllTravelNames, replaceTripName, newTripName, DeleteTrip , getTravelData} from './queries.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const db = new pg.Client({
    user: "postgres",
    host: "137.184.227.133",
    database: "maw",
    password: "7998",
    port: 5432,
});

async function connectToDb() {
    try {
        await db.connect();
        console.log("Connected To Database: " + db.database);
        await dbChecker(db);
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1);
    }
}

connectToDb();

/* ---------------------------------- TODO ---------------------------------- */

app.get('/api/todos', async (req, res) => {
    try {
        const todos = await getAllTodos(db);
        //console.log("Sending from GET:", todos); // Important logging
        res.json(todos);
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ error: error.message }); // Send error message
    }
});

app.put('/api/todos/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id); // Parse ID to integer
        const { completed } = req.body;

        const result = await db.query(
            "UPDATE todo SET completed = $1::boolean WHERE id = $2 RETURNING *",
            [completed, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Todo not found" });
        }
        //console.log("Sending from PUT:", result.rows[0]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Error updating todo:", err);
        res.status(500).json({ error: err.message }); // Send error message
    }
});

app.post('/api/todos', async(req, res)=>{
    try{
        const {item} = req.body
        const newTodo = await db.query("INSERT INTO todo (item, completed) VALUES ($1, $2) RETURNING *", [item, false])
        res.json(newTodo.rows[0])
    }catch(error){
        console.error("Error adding todo:", error)
        res.status(500).json({ error: error.message });
    }
})

app.delete('/api/todos/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleteTodo = await db.query("DELETE FROM todo WHERE id = $1 RETURNING *", [id]);

      if (deleteTodo.rowCount === 0) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json(deleteTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Server error" });
    }
});

/* --------------------------------- Travel --------------------------------- */

app.get('/api/travelnames', async(req, res)=>{
    try {
        const travelNames = await getAllTravelNames(db);
        //console.log("Sending from GET:", travelNames); // Important logging
        res.json(travelNames);
    } catch (error) {
        console.error("Error fetching Travel Names:", error);
        res.status(500).json({ error: error.message }); // Send error message
    }
})

app.put('/api/updatetripname', async (req,res)=>{
    
    const {oldname, newname} = req.body;

    try {
        const travelNames = await replaceTripName(db, oldname, newname)
        console.log("Sending from GET:", travelNames); // Important logging
        res.json("Data Submitted");
    } catch (error) {
        console.error("Error fetching Travel Names:", error);
        res.status(500).json({ error: error.message }); // Send error message
    }
})

app.put('/api/newtrip', async (req,res)=>{
    const {newname} = req.body;
    try {
        const travelNames = await newTripName(db, newname)
        console.log("Sending from GET:", travelNames); // Important logging
        res.json("Data Submitted");
    } catch (error) {
        console.error("Error Adding New Travel Item:", error);
        res.status(500).json({ error: error.message }); // Send error message
    }
})

app.put('/api/deletetrip', async (req,res)=>{
    const {itemName} = req.body;

    try {
        const travelNames = await DeleteTrip(db, itemName)
        console.log("Sending from GET:", travelNames); // Important logging
        res.json("Data Submitted");
    } catch (error) {
        console.error("Error Adding New Travel Item:", error);
        res.status(500).json({ error: error.message }); // Send error message
    }
})

app.get('/api/gettripdata', async(req, res)=>{
    try {
        const travelNames = await getTravelData(db);
        res.json(travelNames);
    } catch (error) {
        console.error("Error fetching Travel Names:", error);
        res.status(500).json({ error: error.message }); // Send error message
    }
})


/* --------------------------------- Listenr -------------------------------- */
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default dbChecker;