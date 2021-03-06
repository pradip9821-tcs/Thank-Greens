const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Order = sequelize.define('order', {
    delivery_date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    delivery_time: {
        type: Sequelize.STRING,
        allowNull: false
    },
    payment_method: {
        type: Sequelize.ENUM('COD', 'ONLINE'),
        defaultValue: 'COD'
    },
    sub_total: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false
    },
    delivery_charge: {
        type: Sequelize.DECIMAL(5, 2)
    },
    total_amount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('Ordered', 'Packed', 'Shipped', 'Delivered', 'Cancelled'),
        defaultValue: 'Ordered'
    },
    rate : {
        type: Sequelize.TINYINT(1),
        defaultValue: null
    },
    rate_description : {
        type: Sequelize.TEXT,
        defaultValue: null
    },
    cancellation_reason :{
        type: Sequelize.TEXT,
        defaultValue: null
    },
    is_test: {
        type: Sequelize.TINYINT(1),
        defaultValue: 1
    },
    createdAt: {
        type: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
    },
    updatedAt: {
        type: 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
    }
});

module.exports = Order;