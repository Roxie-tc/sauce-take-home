import Database from 'better-sqlite3';

/**
 * Schema for the database
 */
const sqlSchema = `
    CREATE TABLE IF NOT EXISTS Feedback
    (
        id   INTEGER PRIMARY KEY,
        text TEXT
    );

    CREATE TABLE IF NOT EXISTS Highlight
    (
        id   TEXT PRIMARY KEY,
        text TEXT
    );
`;

/**
 * Database instance
 */
const db = new Database(":memory:");
db.exec(sqlSchema);

export default db;