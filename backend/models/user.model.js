const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        mobile: { type: String, required: false },
        gender: { type: String, required: true },
        date: { type: String, required: true },

        bio: { type: String, required: false },

        currentCity: { type: String, required: false },
        workplace: { type: String, required: false },
        university: { type: String, required: false },
        school: { type: String, required: false },
        homeTown: { type: String, required: false },
        relationship: { type: String, required: false },

        hobbies: { type: String, required: false },
        interest: { type: String, required: false },
        language: { type: String, required: false },

        website: { type: String, required: false },
        socialLink: { type: String, required: false },

        friend_ids: [{ type: String, required: false }],
        
        friend_request_in_ids: [{ type: String, required: false }],

        friend_request_out_ids: [{ type: String, required: false }],  

    }, {
    versionKey: false,
    timestamps: true
});


module.exports = model('user', userSchema)