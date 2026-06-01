// Dữ liệu Game
let gameData = {
    mainTitle: "CHIẾC NÓN KỲ DIỆU - OTC JUN'26",
    secretWord: "laithikimngan",
    rules: [
        { step: "Bước 1", content: "Nhấn nút QUAY để hệ thống chọn ngẫu nhiên một con số tương ứng với một câu hỏi. Các ô số đã quay trúng sẽ không lặp lại." },
        { step: "Bước 2", content: "Chọn đáp án chính xác. Cẩn thận nhé, có những câu hỏi sẽ có nhiều đáp án đúng." },
        { step: "Bước 3", content: "Nếu trả lời ĐÚNG, bạn được quyền đọc một con số để lật Ô CHỮ BÍ MẬT. Chữ cái trùng lặp sẽ được tự động mở." },
        { step: "Bước 4", content: "Nếu trả lời SAI, bạn sẽ nhường quyền chơi cho người tiếp theo và mất lượt lật chữ trong vòng đó." },
        { step: "Đặc biệt", content: "Người chơi có quyền xin đoán toàn bộ ô chữ bí mật vào bất kỳ lúc nào để giành chiến thắng chung cuộc!" }
    ],
    questions: [
        { title: "I. Benzac - Câu 1", q: "Chọn một đáp án ĐÚNG về kết quả nghiên cứu lâm sàng của Miếng dán mụn đa năng - Benzac® Power Patch.", options: ["A. Giảm đáng kể kích thước mụn sau 6h, hiệu quả ngay cả sau khi gỡ miếng dán", "B. Tăng độ ẩm da 37% sau 1h & duy trì suốt 24h chỉ sau 1 lần sử dụng", "C. Cân bằng hệ vi sinh trên da: Duy trì số lượng & sự đa dạng", "D. Giảm 74% bã nhờn & dưỡng ẩm đến 4h chỉ sau 1 lần sử dụng"], ans: [0], multi: false },
        { title: "I. Benzac - Câu 2", q: "Chọn các đáp án ĐÚNG về cơ chế tác động của AC Technology trong sản phẩm Benzac.", options: ["A. Hấp thụ bã nhờn quá mức trên bề mặt da → Giảm dầu thừa trên da", "B. Giải phóng glycerin vào da → Giảm khô da, kích ứng; tăng tuân thủ điều trị", "C. Thay đổi trực tiếp hệ vi sinh vật trên da", "D. Bổ sung yếu tố dưỡng ẩm tự nhiên cho da"], ans: [0, 1], multi: true },
        { title: "I. Benzac - Câu 3", q: "Chọn các đáp án ĐÚNG về kết quả nghiên cứu lâm sàng của Sữa dưỡng ẩm cân bằng vi sinh - Benzac® Microbiome Equaliser.", options: ["A. Tăng độ ẩm da 37% sau 1h & duy trì suốt 24h chỉ sau 1 lần sử dụng", "B. Cân bằng hệ vi sinh trên da: Duy trì số lượng & sự đa dạng", "C. Giảm đáng kể kích thước mụn sau 6h", "D. Giảm 74% bã nhờn & dưỡng ẩm đến 4h chỉ sau 1 lần sử dụng"], ans: [0, 1], multi: true },
        { title: "I. Benzac - Câu 4", q: "Chọn một đáp án SAI về cách sử dụng các sản phẩm Benzac skincare.", options: ["A. Sữa rửa mặt Benzac Purifying/pH Control: 2 lần/ngày", "B. Sữa dưỡng ẩm Benzac Microbiome: 1-2 lần/ngày", "C. Tẩy tế bào chết Benzac Blackhead Scrub: 2 lần/ngày", "D. Miếng dán mụn Benzac Power Patch: lúc mụn mới xuất hiện"], ans: [2], multi: false },
        { title: "I. Benzac - Câu 5", q: "Chọn một đáp án ĐÚNG. Hướng điều trị mới trong điều trị mụn trứng cá là?", options: ["A. Probiotics", "B. Kháng sinh đường uống", "C. Kháng sinh đường tiêm", "D. Tất cả đều đúng"], ans: [0], multi: false },
        { title: "II. SUN - Câu 6", q: "Màng lọc vật lý vi phân tử NANO TITANIUM DIOXIDE trong Gel Cetaphil® Sun Light Gel SPF 50+ đem lại lợi ích gì?", options: ["A. Bao phủ toàn diện - Chống nắng sau 20 phút – Hạn chế kích ứng", "B. Bao phủ khỏi tia UVA - Chống nắng tức thì – Hạn chế kích ứng", "C. Bao phủ toàn diện - Chống nắng tức thì – Hạn chế kích ứng", "D. Bao phủ khỏi tia UVB - Chống nắng tức thì – Hạn chế kích ứng"], ans: [2], multi: false },
        { title: "II. SUN - Câu 7", q: "Gel Cetaphil® Sun Light Gel SPF 50+ cấp ẩm, làm dịu và chống oxy hóa nhờ vào thành phần nào?", options: ["A. Lô hội", "B. Dầu quả bơ", "C. Dầu hạnh nhân", "D. Vitamin E tinh khiết"], ans: [3], multi: false },
        { title: "II. SUN - Câu 8", q: "Sữa chống nắng Cetaphil Sun Kids SPF 50+ Liposomal Lotion giúp bảo vệ toàn diện cho bé khỏi:", options: ["A. Tia UVA", "B. Tia UVB", "C. Tia hồng ngoại IR", "D. Tất cả các loại tia trên"], ans: [0], multi: false },
        { title: "II. SUN - Câu 9", q: "Sữa chống nắng Cetaphil Sun Kids SPF 50+ Liposomal Lotion kháng nước đến 4 giờ nhờ vào:", options: ["A. Aloe Vera", "B. Glycerin", "C. Vitamin E", "D. Công nghệ Liposome"], ans: [3], multi: false },
        { title: "II. SUN - Câu 10", q: "Sữa chống nắng Cetaphil Sun Kids SPF 50+ dùng được cho bé từ mấy tháng tuổi?", options: ["A. 6 tháng", "B. 12 tháng", "C. 18 tháng", "D. 24 tháng"], ans: [0], multi: false }
    ]
};

/* ================== AUDIO LOGIC ================== */
const audioSpin = new Audio('nhac/chiecnonkidieu.mp3');
const audioTrue = new Audio('nhac/true.mp3');
const audioFalse = new Audio('nhac/false.mp3');
const audioCongrats = new Audio('nhac/chucmung.mp3');
const audioIncorrect = new Audio('nhac/chuachinhxac.mp3');

function stopAllAudio() {
    audioSpin.pause(); audioSpin.currentTime = 0;
    audioTrue.pause(); audioTrue.currentTime = 0;
    audioFalse.pause(); audioFalse.currentTime = 0;
    audioCongrats.pause(); audioCongrats.currentTime = 0;
    audioIncorrect.pause(); audioIncorrect.currentTime = 0;
}

function playSound(audioEl) {
    stopAllAudio();
    audioEl.play().catch(err => console.log("Trình duyệt chặn Audio (cần tương tác người dùng):", err));
}

/* ================== GAME LOGIC ================== */
let revealedLetters = [];
let usedNumbers = [];
let canReveal = false;
let currentQuestionIndex = -1;
let currentRotation = 0;
let sectors = [];

const baseColors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33A1", "#33FFF5", "#FFD433", "#8D33FF", "#FF8333", "#33FFBD", "#1abc9c", "#e67e22"];
const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");

let toastTimeout;
function showToast(message, type) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = `toast ${type}`;
    if(toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { toast.classList.add("hidden"); }, 3000);
}

document.getElementById("btnHostCorrect").onclick = () => { 
    playSound(audioCongrats);
    showToast("🎉 CHÚC MỪNG! ĐÁP ÁN HOÀN TOÀN CHÍNH XÁC 🎉", "success"); 
};

document.getElementById("btnHostWrong").onclick = () => { 
    playSound(audioIncorrect);
    showToast("❌ RẤT TIẾC, ĐÁP ÁN CHƯA CHÍNH XÁC ❌", "error"); 
};

function initGame() {
    stopAllAudio();
    revealedLetters = [];
    usedNumbers = [];
    canReveal = false;
    currentRotation = 0;
    canvas.style.transition = "none";
    canvas.style.transform = `rotate(0deg) translateZ(0)`;
    
    document.getElementById("mainTitle").innerText = gameData.mainTitle;
    document.getElementById("numberLog").innerHTML = "";
    document.getElementById("gameStatus").innerText = "Nhấn QUAY để bắt đầu!";
    document.getElementById("gameStatus").style.color = "#00ffcc";
    spinBtn.disabled = false;

    sectors = gameData.questions.map((_, i) => i + 1);
    document.getElementById("secretTitle").innerText = `Ô CHỮ BÍ MẬT (${gameData.secretWord.replace(/\s/g, '').length} Chữ Cái)`;
    
    drawWheel();
    drawSecretBoard();
}

function getSectorColor(index) { return baseColors[index % baseColors.length]; }

function drawWheel() {
    const numSectors = sectors.length;
    if(numSectors === 0) return;

    const sectorAngle = 360 / numSectors;
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250); 
    
    sectors.forEach((num, i) => {
        const startAngle = (i * sectorAngle - sectorAngle/2) * Math.PI / 180 - Math.PI / 2;
        const endAngle = (i * sectorAngle + sectorAngle/2) * Math.PI / 180 - Math.PI / 2;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 240, startAngle, endAngle);
        ctx.fillStyle = usedNumbers.includes(num) ? "#7f8c8d" : getSectorColor(i);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#fff";
        ctx.stroke();

        ctx.save();
        ctx.rotate(i * sectorAngle * Math.PI / 180 - Math.PI / 2);
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        let fontSize = numSectors > 15 ? 20 : (numSectors > 10 ? 30 : 40);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.fillText(num, 210, 0);
        ctx.restore();
    });
    ctx.translate(-250, -250); 
}

function drawSecretBoard() {
    const board = document.getElementById("secretBoard");
    board.innerHTML = "";
    let displayIndex = 1; 

    [...gameData.secretWord].forEach((letter) => {
        const tile = document.createElement("div");
        tile.className = "letter-tile";
        
        if(letter === " ") {
            tile.style.visibility = "hidden"; 
        } else if (!revealedLetters.includes(letter.toLowerCase())) {
            tile.classList.add("hidden");
            tile.innerText = displayIndex; 
            tile.onclick = () => revealLetter(letter.toLowerCase());
            displayIndex++;
        } else {
            tile.classList.add("revealed");
            tile.innerText = letter.toUpperCase();
            displayIndex++;
        }
        board.appendChild(tile);
    });
}

function revealLetter(letter) {
    if (!canReveal) {
        alert("Phải trả lời đúng câu hỏi mới được quyền lật chữ!");
        return;
    }
    revealedLetters.push(letter);
    drawSecretBoard();
    canReveal = false;
    document.getElementById("gameStatus").innerText = "Đã lật chữ thành công. Hãy quay tiếp!";
}

document.getElementById("revealAllBtn").onclick = () => {
    revealedLetters = [...new Set([...gameData.secretWord.toLowerCase()])];
    drawSecretBoard();
    document.getElementById("gameStatus").innerText = `Trò chơi kết thúc!`;
};

spinBtn.onclick = () => {
    const availableNumbers = sectors.filter(n => !usedNumbers.includes(n));
    if (availableNumbers.length === 0) { alert("Đã quay hết danh sách câu hỏi!"); return; }

    playSound(audioSpin);

    spinBtn.disabled = true;
    document.getElementById("gameStatus").innerText = "Đang quay...";
    document.getElementById("gameStatus").style.color = "#ffcc00";

    const winningNum = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    const winningIndex = winningNum - 1; 

    const numSectors = sectors.length;
    const sectorAngle = 360 / numSectors;
    const targetDeg = 360 - (winningIndex * sectorAngle);
    
    // Tăng số vòng quay lên 12 vòng để phù hợp với thời gian dài hơn
    const spins = 12 * 360; 
    let rotationToAdd = (targetDeg - (currentRotation % 360));
    if (rotationToAdd < 0) rotationToAdd += 360; 
    
    currentRotation += rotationToAdd + spins;
    
    // Thời gian quay được nâng lên 8 giây cho mượt và có thời gian nghe nhạc
    canvas.style.transition = "transform 8s cubic-bezier(0.15, 0.85, 0.15, 1)";
    canvas.style.transform = `rotate(${currentRotation}deg) translateZ(0)`;

    // Khớp thời gian animation + 200ms
    setTimeout(() => {
        usedNumbers.push(winningNum);
        document.getElementById("numberLog").innerHTML += `<span>${winningNum}</span>`;
        drawWheel(); 
        showQuestion(winningNum);
    }, 8200); 
};

function showQuestion(num) {
    stopAllAudio();
    const qIndex = num - 1;
    const qData = gameData.questions[qIndex];
    currentQuestionIndex = qIndex;
    
    document.getElementById("modalTitle").innerText = `Câu ${num}: ` + qData.title;
    document.getElementById("questionText").innerText = qData.q;
    const optionsArea = document.getElementById("optionsArea");
    optionsArea.innerHTML = "";
    
    qData.options.forEach((opt) => {
        if(opt.trim() === "") return;
        const div = document.createElement("div");
        div.className = "option-item";
        div.innerText = opt;
        div.onclick = () => {
            if (!qData.multi) { Array.from(optionsArea.children).forEach(c => c.classList.remove("selected")); }
            div.classList.toggle("selected");
        };
        optionsArea.appendChild(div);
    });

    document.getElementById("questionModal").style.display = "block";
    document.getElementById("feedback").innerText = "";
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = false;
    submitBtn.innerText = "TRẢ LỜI";
}

document.getElementById("submitBtn").onclick = () => {
    const qData = gameData.questions[currentQuestionIndex];
    const selected = Array.from(document.querySelectorAll(".option-item.selected")).map(el => qData.options.indexOf(el.innerText));
    if (selected.length === 0) { alert("Vui lòng chọn ít nhất 1 đáp án!"); return; }

    const isCorrect = JSON.stringify(selected.sort()) === JSON.stringify(qData.ans.sort());
    const feedback = document.getElementById("feedback");
    document.getElementById("submitBtn").disabled = true;

    if (isCorrect) {
        playSound(audioTrue);
        feedback.innerText = "CHÍNH XÁC! Bạn có quyền chọn 1 số để Lật Chữ.";
        feedback.style.color = "#2ecc71";
        canReveal = true;
        setTimeout(() => {
            document.getElementById("questionModal").style.display = "none";
            document.getElementById("gameStatus").innerText = "Hãy mời người chơi ĐỌC SỐ ĐỂ LẬT CHỮ!";
            document.getElementById("gameStatus").style.color = "#00ffcc";
            spinBtn.disabled = false;
        }, 2500);
    } else {
        playSound(audioFalse);
        feedback.innerText = "SAI RỒI! Rất tiếc, bạn đã mất lượt lật chữ.";
        feedback.style.color = "#e74c3c";
        setTimeout(() => {
            document.getElementById("questionModal").style.display = "none";
            document.getElementById("gameStatus").innerText = "Nhấn QUAY để chơi tiếp.";
            document.getElementById("gameStatus").style.color = "#fff";
            spinBtn.disabled = false;
        }, 2500);
    }
};

/* ================== LUẬT CHƠI (VIEWER) ================== */
const rulesModal = document.getElementById("rulesModal");
document.getElementById("btnOpenRules").onclick = () => { 
    const list = document.getElementById("rulesContentList");
    list.innerHTML = "";
    gameData.rules.forEach(r => {
        const li = document.createElement("li");
        li.innerHTML = `<b>${r.step}:</b> ${r.content}`;
        list.appendChild(li);
    });
    rulesModal.style.display = "block"; 
};
document.getElementById("btnCloseRules").onclick = () => { rulesModal.style.display = "none"; };

/* ================== CÀI ĐẶT (SETTINGS MANAGER) ================== */
let editingQIndex = -1; 
let editingRuleIndex = -1;

const settingsModal = document.getElementById("settingsModal");
const editQuestionModal = document.getElementById("editQuestionModal");
const editRuleModal = document.getElementById("editRuleModal");

document.getElementById("btnOpenSettings").onclick = () => {
    document.getElementById("inputMainTitle").value = gameData.mainTitle;
    document.getElementById("inputSecretWord").value = gameData.secretWord;
    renderRuleListSettings();
    renderQuestionListSettings();
    settingsModal.style.display = "block";
};

document.getElementById("btnCloseSettings").onclick = () => { settingsModal.style.display = "none"; };

// --- Quản lý Luật ---
function renderRuleListSettings() {
    const list = document.getElementById("ruleList");
    list.innerHTML = "";
    gameData.rules.forEach((r, index) => {
        const item = document.createElement("div");
        item.className = "q-item";
        item.innerHTML = `
            <div class="q-item-info"><strong>${r.step}:</strong> ${r.content.substring(0, 60)}...</div>
            <div class="q-item-actions">
                <button class="btn-edit" onclick="openEditRule(${index})">Sửa</button>
                <button class="btn-delete" onclick="deleteRule(${index})">Xoá</button>
            </div>
        `;
        list.appendChild(item);
    });
}

function deleteRule(index) {
    if(confirm("Xoá quy định này?")) {
        gameData.rules.splice(index, 1);
        renderRuleListSettings();
    }
}

document.getElementById("btnAddRule").onclick = () => { openEditRule(-1); };

function openEditRule(index) {
    editingRuleIndex = index;
    if (index === -1) {
        document.getElementById("editRuleTitle").innerText = "THÊM LUẬT MỚI";
        document.getElementById("erStep").value = "";
        document.getElementById("erContent").value = "";
    } else {
        document.getElementById("editRuleTitle").innerText = `SỬA LUẬT CHƠI`;
        const r = gameData.rules[index];
        document.getElementById("erStep").value = r.step;
        document.getElementById("erContent").value = r.content;
    }
    settingsModal.style.display = "none";
    editRuleModal.style.display = "block";
}

document.getElementById("btnCancelEditRule").onclick = () => {
    editRuleModal.style.display = "none";
    settingsModal.style.display = "block";
};

document.getElementById("btnSaveRule").onclick = () => {
    const step = document.getElementById("erStep").value.trim();
    const content = document.getElementById("erContent").value.trim();
    if(!step || !content) { alert("Vui lòng nhập đủ Tiêu đề bước và Nội dung!"); return; }

    const newRule = { step: step, content: content };
    if(editingRuleIndex === -1) gameData.rules.push(newRule);
    else gameData.rules[editingRuleIndex] = newRule;

    editRuleModal.style.display = "none";
    renderRuleListSettings();
    settingsModal.style.display = "block";
};

// --- Quản lý Câu hỏi ---
function renderQuestionListSettings() {
    const list = document.getElementById("questionList");
    list.innerHTML = "";
    gameData.questions.forEach((q, index) => {
        const item = document.createElement("div");
        item.className = "q-item";
        item.innerHTML = `
            <div class="q-item-info"><strong>Câu ${index + 1}:</strong> ${q.title}</div>
            <div class="q-item-actions">
                <button class="btn-edit" onclick="openEditQuestion(${index})">Sửa</button>
                <button class="btn-delete" onclick="deleteQuestion(${index})">Xoá</button>
            </div>
        `;
        list.appendChild(item);
    });
}

function deleteQuestion(index) {
    if(confirm("Bạn có chắc muốn xoá câu hỏi này?")) {
        gameData.questions.splice(index, 1);
        renderQuestionListSettings();
    }
}

document.getElementById("btnAddQuestion").onclick = () => { openEditQuestion(-1); };

function openEditQuestion(index) {
    editingQIndex = index;
    const texts = document.querySelectorAll(".opt-text");
    const checks = document.querySelectorAll(".opt-check");
    
    if (index === -1) {
        document.getElementById("editModalTitle").innerText = "THÊM CÂU HỎI MỚI";
        document.getElementById("eqTitle").value = "";
        document.getElementById("eqContent").value = "";
        texts.forEach(t => t.value = "");
        checks.forEach(c => c.checked = false);
    } else {
        document.getElementById("editModalTitle").innerText = `SỬA CÂU HỎI (Vị trí ${index + 1})`;
        const q = gameData.questions[index];
        document.getElementById("eqTitle").value = q.title;
        document.getElementById("eqContent").value = q.q;
        texts.forEach((t, i) => {
            t.value = q.options[i] || "";
            checks[i].checked = q.ans.includes(i);
        });
    }
    settingsModal.style.display = "none";
    editQuestionModal.style.display = "block";
}

document.getElementById("btnCancelEdit").onclick = () => {
    editQuestionModal.style.display = "none";
    settingsModal.style.display = "block";
};

document.getElementById("btnSaveQuestion").onclick = () => {
    const title = document.getElementById("eqTitle").value.trim();
    const content = document.getElementById("eqContent").value.trim();
    if(!title || !content) { alert("Vui lòng nhập đủ Tiêu đề và Nội dung!"); return; }

    let options = [];
    let ans = [];
    const texts = document.querySelectorAll(".opt-text");
    const checks = document.querySelectorAll(".opt-check");
    
    texts.forEach((t, i) => {
        const val = t.value.trim();
        if(val !== "") {
            options.push(val);
            if(checks[i].checked) { ans.push(options.length - 1); }
        }
    });

    if(options.length < 2) { alert("Phải có ít nhất 2 đáp án!"); return; }
    if(ans.length === 0) { alert("Phải chọn ít nhất 1 đáp án đúng!"); return; }

    const newQ = { title: title, q: content, options: options, ans: ans, multi: ans.length > 1 };
    if(editingQIndex === -1) gameData.questions.push(newQ);
    else gameData.questions[editingQIndex] = newQ;

    editQuestionModal.style.display = "none";
    renderQuestionListSettings();
    settingsModal.style.display = "block";
};

// --- Lưu toàn bộ cấu hình ---
document.getElementById("btnSaveAll").onclick = () => {
    const newTitle = document.getElementById("inputMainTitle").value.trim();
    const newWord = document.getElementById("inputSecretWord").value.trim();
    
    if(!newTitle) { alert("Tiêu đề chương trình không được để trống!"); return; }
    if(!newWord) { alert("Ô chữ bí mật không được để trống!"); return; }
    if(gameData.questions.length === 0) { alert("Phải có ít nhất 1 câu hỏi!"); return; }
    
    gameData.mainTitle = newTitle;
    gameData.secretWord = newWord;
    
    settingsModal.style.display = "none";
    initGame();
    showToast("Đã lưu mọi cấu hình thành công!", "success");
};

initGame();