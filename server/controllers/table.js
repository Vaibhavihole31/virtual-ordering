import Table from './../models/Table.js';

export const createTablePost = async (req, res) => {
    const { tableNumber } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });
    if (existingTable) {
        return res.json({
            success: false,
            message: "Table already exists"
        })
    }

    const table = new Table({
        tableNumber,
        booked: false
    })

    const savedTable = await table.save();

    res.json({
        success: true,
        message: "Table Created Successfully",
        data: savedTable
    })
}

export const bookTablePost = async (req, res) => {
    const { tableNumber, userId } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });
    if (existingTable && existingTable.booked) {
        return res.json({
            success: false,
            message: "Table already occupied"
        })
    }

    if (existingTable) {
        existingTable.booked = true;
        existingTable.bookedBy = userId;
        await existingTable.save();
    }

    res.json({
        success: true,
        
        message: "Table Booked Successfully",
        data: existingTable
    })
}

export const unBookTablePost = async (req, res) => {
    const { tableNumber } = req.body;

    const existingTable = await Table.findOne({ tableNumber: tableNumber });

    if (existingTable) {
        existingTable.booked = false;
        existingTable.bookedBy = null;
        await existingTable.save();
    }

    res.json({
        success: true,
        message: "Table unbooked successfully",
        data: existingTable
    })
}

export const avilableTablesGet = async (req, res) => {
    const avilableTables = await Table.find({ booked: false });

    res.json({
        success: true,
        message: "Avilable tables fetched successfully",
        data: avilableTables
    })
}