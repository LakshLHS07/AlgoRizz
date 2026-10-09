/**
 * Bridge to connect the React Frontend to a Python backend (Gradio or FastAPI/Flask)
 */

export const DEFAULT_BACKEND_URL = "http://127.0.0.1:7860";

export async function pingBackend(baseUrl = DEFAULT_BACKEND_URL) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    
    // Test Gradio /api endpoint or FastAPI health endpoint
    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/info`, {
      method: "GET",
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return res.ok;
  } catch (e) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(`${baseUrl.replace(/\/$/, "")}/`, {
        method: "GET",
        mode: "no-cors",
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      return true;
    } catch (err) {
      return false;
    }
  }
}

export async function queryPythonBackend(baseUrl, userProfile, rawPrompt) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/api/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: [
          rawPrompt,
          userProfile.income || 200000,
          userProfile.state || "All",
          userProfile.occupation || "all"
        ]
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    if (!res.ok) {
      throw new Error(`Backend returned status ${res.status}`);
    }
    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
