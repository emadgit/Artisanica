mod db;

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn newMethod(name: &str) -> String {
    format!("Hello, {}! You've been greeted from newMethod!", name)
}

#[tauri::command]
async fn get_user_count() -> Result<i64, String> {
    let pool = db::get_pool().await;
    let row: (i64,) = sqlx::query_as("SELECT COUNT(*) FROM users")
        .fetch_one(&pool)
        .await
        .map_err(|e| e.to_string())?;
    Ok(row.0)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .invoke_handler(tauri::generate_handler![newMethod])
        .invoke_handler(tauri::generate_handler![get_user_count])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
