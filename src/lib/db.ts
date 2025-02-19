
import { Pool } from 'pg';

// Création du pool de connexion
const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  database: process.env.POSTGRES_DB || 'sm_connect_db',
  user: process.env.POSTGRES_USER || 'votre_utilisateur',
  password: process.env.POSTGRES_PASSWORD || 'votre_mot_de_passe',
});

// Test de la connexion
pool.connect((err, client, release) => {
  if (err) {
    console.error('Erreur de connexion:', err);
  } else {
    console.log('Connecté à PostgreSQL avec succès!');
  }
  if (client) {
    release();
  }
});

export const query = async (text: string, params?: any[]) => {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error('Erreur lors de la requête:', error);
    throw error;
  }
};

export default pool;
