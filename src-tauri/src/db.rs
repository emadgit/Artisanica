use sqlx::postgres::PgPoolOptions;
use sqlx::PgPool;

pub async fn get_pool() -> PgPool {
    dotenv::dotenv().ok(); // Loads .env
    let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");

    PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await
        .expect("Failed to connect to Postgres")
}
