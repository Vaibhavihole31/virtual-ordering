import Order from './../models/Order.js';

export const orderFoodItemsPost = async (req, res) => {
    const { userId, tableNumber, items } = req.body;

    const totalOrders = await Order.countDocuments();
    const orderId = totalOrders + 1;

    const order = new Order({
        orderId,
        userId,
        tableNumber,
        items
    })

    const savedOrder = await order.save();

    res.json({
        success: true,
        message: "Order Placed Successfully",
        data: savedOrder
    })
}

export const orderGet = async (req, res) => {
    const { orderId } = req.query;

    const order = await Order.findOne({ orderId: orderId });

    res.json({
        success: true,
        message: "Order Feached Successfully",
        data: order
    })
}

export const orderByUserIdGet = async (req, res) => {
    const { userId } = req.query;

    const orders = await Order.find({ userId: userId });

    res.json({
        success: true,
        message: "Orders fetched Successfully",
        data: orders
    })
}