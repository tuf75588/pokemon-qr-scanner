const monk = require('monk');

const { MONG_URI } = process.env;

const db = monk(MONG_URI);
const codes = db.get('codes');
