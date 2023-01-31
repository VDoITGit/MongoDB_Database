[
  {
    pointsBought: {
      type: Number,
      required: true,
      default: 0,
    },
    pointsUsed: {
      type: Number,
      required: true,
      default: 0,
    },

    protocolId: {
      type: Object,
      required: true,
    },

    personalDetails: {
      logo: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: Object,
        required: true,
      },
      state: {
        type: Object,
        required: true,
      },
      country: {
        type: Object,
        required: true,
      },
      zipCode: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true },
  {
    comments: {
      country: USA,
      logo: "S3 bucket path / link",
      city: "US  table",
      state: "US  table",
    },
  },
];
