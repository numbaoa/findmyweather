import express from 'express'
import mongoose from 'mongoose'
const app = express();

mongoose.connect("mongodb+srv://root:04022005@cluster0.xiyg01t.mongodb.net/?retryWrites=true&w=majority");

const citySchema = new mongoose.Schema({
    name: String,
    pop: Number,
},
{ strict: false }
);

const CityModel = mongoose.model("cities", citySchema);

app.get("/location", async (req, res) => {
    try {
        const cities = await CityModel.find({});
        res.json(cities);
    } catch (err) {
        console.error(err)
        res.status(500).send(err)
    }
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});