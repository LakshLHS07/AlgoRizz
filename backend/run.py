import os
import sys
from pathlib import Path

# Ensure project root is in sys.path
ROOT_DIR = Path(__file__).resolve().parent.parent
if str(ROOT_DIR) not in sys.path:
    sys.path.insert(0, str(ROOT_DIR))

import uvicorn

if __name__ == "__main__":
    port = int(os.getenv("PORT", "7860"))
    host = os.getenv("HOST", "127.0.0.1")
    print(f"Starting UDYAMA FastAPI Backend on http://{host}:{port}...")
    uvicorn.run("backend.main:app", host=host, port=port, reload=True, app_dir=str(ROOT_DIR))
