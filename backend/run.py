import os
import uvicorn

if __name__ == "__main__":
    port = int(os.getenv("PORT", "7860"))
    host = os.getenv("HOST", "127.0.0.1")
    print(f"Starting UDYAMA FastAPI Backend on http://{host}:{port}...")
    uvicorn.run("backend.main:app", host=host, port=port, reload=True)
