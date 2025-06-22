// import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema({
//     user: {type: String, required: true, ref: 'User'},
//     show : {type: String, required: true, ref: 'Show'},
//     amount : {type: Number, required: true},
//     bookedSeats: {type: Array, required: true},
//     isPaid: {type: Boolean, default: false},
//     paymentLink: {type: String},
// }, {timestamps: true})

// const Booking = mongoose.model("Booking", bookingSchema);

// export default Booking;

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // ✅ Use ObjectId
    ref: "User",                          // ✅ Reference the User model
    required: true
  },
  show: {
    type: mongoose.Schema.Types.ObjectId, // ✅ Also fix show field
    ref: "Show",
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  bookedSeats: {
    type: [String], // ✅ Better type definition
    required: true
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  paymentLink: {
    type: String
  }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
