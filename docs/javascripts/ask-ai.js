(function () {
  "use strict";

  // ========== 配置 ==========
  var API_BASE = document.querySelector('meta[name="ask-ai-api"]')?.content || "";

  // ========== 身份标识 ==========
  function getFingerprint() {
    var fp = localStorage.getItem("ask_ai_fingerprint");
    if (!fp) {
      fp = crypto.randomUUID();
      localStorage.setItem("ask_ai_fingerprint", fp);
    }
    return fp;
  }

  function getSessionId() {
    var sid = sessionStorage.getItem("ask_ai_session_id");
    if (!sid) {
      sid = crypto.randomUUID();
      sessionStorage.setItem("ask_ai_session_id", sid);
    }
    return sid;
  }

  // ========== SSE 通信 ==========
  function sendChat(question, onToken, onDone, onError) {
    var body = JSON.stringify({
      question: question,
      fingerprint: getFingerprint(),
      session_id: getSessionId(),
    });

    fetch(API_BASE + "/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    })
      .then(function (response) {
        if (response.status === 429) {
          return response.json().then(function (data) {
            onError(data.error || "请求过于频繁，请稍后再试");
          });
        }
        if (!response.ok) {
          onError("服务暂时不可用，请稍后再试");
          return;
        }

        var reader = response.body.getReader();
        var decoder = new TextDecoder();
        var buffer = "";

        function read() {
          reader.read().then(function (result) {
            if (result.done) {
              onDone();
              return;
            }

            buffer += decoder.decode(result.value, { stream: true });
            var lines = buffer.split("\n");
            buffer = lines.pop();

            for (var i = 0; i < lines.length; i++) {
              var line = lines[i].trim();
              if (line.startsWith("data:")) {
                var jsonStr = line.substring(5).trim();
                if (!jsonStr) continue;
                try {
                  var data = JSON.parse(jsonStr);
                  if (data.token) {
                    onToken(data.token);
                  } else if (data.done) {
                    onDone();
                    return;
                  } else if (data.error) {
                    onError(data.error);
                    return;
                  }
                } catch (e) {
                  // ignore malformed JSON
                }
              }
            }

            read();
          });
        }

        read();
      })
      .catch(function () {
        onError("网络连接失败，请检查网络后重试");
      });
  }

  // ========== UI 组件 ==========
  var isOpen = false;
  var isStreaming = false;
  var container, messagesEl, inputEl, sendBtn, fab;

  function createWidget() {
    // 浮动按钮
    fab = document.createElement("button");
    fab.className = "ask-ai-fab";
    fab.setAttribute("aria-label", "Ask AI");
    fab.innerHTML =
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>' +
      "</svg>";
    fab.addEventListener("click", toggleChat);

    // 对话框容器
    container = document.createElement("div");
    container.className = "ask-ai-container ask-ai-hidden";

    // 头部
    var header = document.createElement("div");
    header.className = "ask-ai-header";
    header.innerHTML =
      '<span class="ask-ai-header-title">Ask AI</span>';
    var closeBtn = document.createElement("button");
    closeBtn.className = "ask-ai-close";
    closeBtn.setAttribute("aria-label", "关闭");
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", toggleChat);
    header.appendChild(closeBtn);

    // 消息区域
    messagesEl = document.createElement("div");
    messagesEl.className = "ask-ai-messages";

    // 输入区域
    var inputArea = document.createElement("div");
    inputArea.className = "ask-ai-input-area";

    inputEl = document.createElement("textarea");
    inputEl.className = "ask-ai-input";
    inputEl.placeholder = "输入你的问题...";
    inputEl.rows = 1;
    inputEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });
    inputEl.addEventListener("input", function () {
      this.style.height = "auto";
      this.style.height = Math.min(this.scrollHeight, 100) + "px";
    });

    sendBtn = document.createElement("button");
    sendBtn.className = "ask-ai-send";
    sendBtn.setAttribute("aria-label", "发送");
    sendBtn.innerHTML =
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">' +
      '<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>' +
      "</svg>";
    sendBtn.addEventListener("click", handleSend);

    inputArea.appendChild(inputEl);
    inputArea.appendChild(sendBtn);

    container.appendChild(header);
    container.appendChild(messagesEl);
    container.appendChild(inputArea);

    document.body.appendChild(fab);
    document.body.appendChild(container);
  }

  function toggleChat() {
    isOpen = !isOpen;
    container.classList.toggle("ask-ai-hidden", !isOpen);
    fab.classList.toggle("ask-ai-fab-active", isOpen);
    if (isOpen) {
      inputEl.focus();
    }
  }

  function addMessage(text, role) {
    var msg = document.createElement("div");
    msg.className = "ask-ai-msg ask-ai-msg-" + role;
    if (role === "user") {
      msg.textContent = text;
    } else {
      msg.innerHTML = renderMarkdown(text);
    }
    messagesEl.appendChild(msg);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return msg;
  }

  function renderMarkdown(text) {
    if (typeof marked !== "undefined" && marked.parse) {
      return marked.parse(text);
    }
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>");
  }

  function handleSend() {
    var question = inputEl.value.trim();
    if (!question || isStreaming) return;

    addMessage(question, "user");
    inputEl.value = "";
    inputEl.style.height = "auto";

    isStreaming = true;
    sendBtn.disabled = true;
    inputEl.disabled = true;

    var aiMsg = document.createElement("div");
    aiMsg.className = "ask-ai-msg ask-ai-msg-ai";
    messagesEl.appendChild(aiMsg);

    var fullText = "";

    sendChat(
      question,
      function onToken(token) {
        fullText += token;
        aiMsg.innerHTML = renderMarkdown(fullText);
        messagesEl.scrollTop = messagesEl.scrollHeight;
      },
      function onDone() {
        if (fullText) {
          aiMsg.innerHTML = renderMarkdown(fullText);
        }
        isStreaming = false;
        sendBtn.disabled = false;
        inputEl.disabled = false;
        inputEl.focus();
      },
      function onError(errMsg) {
        if (!fullText) {
          aiMsg.className = "ask-ai-msg ask-ai-msg-error";
          aiMsg.textContent = errMsg;
        } else {
          var errEl = document.createElement("div");
          errEl.className = "ask-ai-msg ask-ai-msg-error";
          errEl.textContent = errMsg;
          messagesEl.appendChild(errEl);
        }
        isStreaming = false;
        sendBtn.disabled = false;
        inputEl.disabled = false;
        inputEl.focus();
      }
    );
  }

  // ========== 初始化 ==========
  function init() {
    if (document.querySelector(".ask-ai-fab")) return;
    createWidget();
  }

  // 支持 navigation.instant：MkDocs Material 使用 document$ observable
  // 首次加载时初始化即可，instant 导航不会重新加载 JS
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
