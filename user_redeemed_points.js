[
    {
        userId: {
            type:Object,
            required:true,
        },
        corporateId: {
            type:Object,
            required:true,
        },
        pointsRedeemed:{
          type:Number,
          required:true,
        },
        protocolId: {
            type:Object,
            required:true,
        },
        type:{
            type:String,
            required:true,
            enum: ["Gift card","Charity"],
            default: "Charity",
          },
    },
    { timestamps: true },

    {
        comments:{
            type:"Gift card , Charity"
        }
    }
 
]





