/**
 * Created by Jordy Frijters on 12-12-2017.
 */
const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("", ""));
const session = driver.session();

module.exports = driver;