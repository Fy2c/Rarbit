const _env = process.env;

const Firebase = {
    apiKey: _env.VUE_APP_FIREBASE_API_KEY,
    authDomain: _env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: _env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: _env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: _env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: _env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: _env.VUE_APP_FIREBASE_APP_ID
};

const Cloudinary = {
    cloudName: _env.VUE_APP_CLOUDINARY_CLOUD_NAME,
    uploadPresetImage: _env.VUE_APP_CLOUDINARY_UPLOAD_PRESETS_IMAGE,
    uploadPresetVideo: _env.VUE_APP_CLOUDINARY_UPLOAD_PRESETS_VIDEO
};

const Rarbit = {
    showPerPage: 15
};

export default { Firebase, Cloudinary, Rarbit };