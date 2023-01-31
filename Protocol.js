[
    {
        name: {
          type:String,
          required:true,
          enum: ["PERK","SophiaDAO"],
          default: "PERK",
        },
        description: {
          type:String,
          required:true,
        },
        type:{
          type:String,
          required:true,
          enum: ["HR","Real Estate"],
          default: "Real Estate",
        },
    },
    { timestamps: true },
    {
      comments: {
        type: "may be added more in feature",
        name: "may be added more in feature",
      },
    },
  ];
  