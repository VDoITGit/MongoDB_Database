[
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is Invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
    },
    personalDetails: {
      profile: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
      },
      phone: {
        type: Number,
        required: true,
        min: 10,
        max: 15,
      },
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      zipCode: {
        type: Number,
        required: true,
      },
    },
    roleDetails: {
      role: {
        type: String,
        required: true,
        enum: ["End User", "Dectec Admin", "PERK Admin", "Corporate Admin"],
        default: "End User",
      },
      roleId: {
        type: Object,
        required: true,
      },
    },
    status: {
      type: Object,
      required: true,
    },
    walletDetails: {
      walletId: {
        type: Object,
        required: true,
      },
      redeemedPoints: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  },
  { timestamps: true },
  {
    comments: {
      country: USA,
      profile: "S3 bucket path",
      rollId:
        "End user, Dectec Admin, Protocol Admin (PERK Admin), Corporate Admin",
        password:"hashed (Bcrypt js-10 rounds)",
        email:unique
    },
  },
];
