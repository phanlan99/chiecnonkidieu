// ================== DATA ==================
let gameData = {
    mainTitle: "CHIẾC NÓN KỲ DIỆU - OTC JUN'26",
    secretWord: "laithikimngan",
    scrambledWord: "kimnganlaithi", // Từ xáo trộn mặc định
    rules: [
        { step: "Bước 1", content: "Nhấn nút QUAY để chọn ngẫu nhiên một nhân viên. Nhân viên đã quay trúng sẽ không bị lặp lại." },
        { step: "Bước 2", content: "Nhân viên được gọi tên sẽ chọn 1 con số tương ứng với gói câu hỏi trên bảng." },
        { step: "Bước 3", content: "Chọn đáp án. Nếu trả lời ĐÚNG, bạn được quyền đọc một con số để lật Ô CHỮ BÍ MẬT." },
        { step: "Bước 4", content: "Nếu trả lời SAI, MC có thể cho bạn làm lại hoặc nhường quyền chơi cho người khác tuỳ ý." },
        { step: "Đặc biệt", content: "Người chơi có quyền xin đoán toàn bộ ô chữ bí mật vào bất kỳ lúc nào để giành chiến thắng!" }
    ],
    employees: [
        "Nguyễn Minh Triết", "Trần Hoàng Bách", "Lê Hải Đăng", "Phạm Minh Quân", "Vũ Gia Bảo",
        "Hoàng Khánh Phong", "Đặng Quốc Anh", "Bùi Tiến Dũng", "Đỗ Đức Mạnh", "Ngô Thanh Vân",
        "Nguyễn Thục Quyên", "Phan An Nhiên", "Trịnh Tú Uyên", "Huỳnh Thảo Nguyên", "Cao Mỹ Duyên"
    ],
    questions: [
        { title: "I. Benzac - Câu 1", q: "Chọn một đáp án ĐÚNG về kết quả nghiên cứu lâm sàng của Miếng dán mụn đa năng - Benzac® Power Patch.", options: ["A. Giảm đáng kể kích thước mụn sau 6h, hiệu quả ngay sau khi gỡ miếng dán", "B. Tăng độ ẩm da 37% sau 1h & duy trì suốt 24h", "C. Cân bằng hệ vi sinh trên da", "D. Giảm 74% bã nhờn & dưỡng ẩm đến 4h"], ans: [0], multi: false },
        { title: "I. Benzac - Câu 2", q: "Chọn các đáp án ĐÚNG về cơ chế tác động của AC Technology trong sản phẩm Benzac.", options: ["A. Hấp thụ bã nhờn quá mức trên bề mặt da", "B. Giải phóng glycerin vào da → Giảm khô da", "C. Thay đổi trực tiếp hệ vi sinh vật trên da", "D. Bổ sung yếu tố dưỡng ẩm tự nhiên cho da"], ans: [0, 1], multi: true },
        { title: "I. Benzac - Câu 3", q: "Chọn các đáp án ĐÚNG về kết quả nghiên cứu lâm sàng của Sữa dưỡng ẩm cân bằng vi sinh - Benzac® Microbiome Equaliser.", options: ["A. Tăng độ ẩm da 37% sau 1h & duy trì suốt 24h", "B. Cân bằng hệ vi sinh trên da", "C. Giảm đáng kể kích thước mụn sau 6h", "D. Giảm 74% bã nhờn & dưỡng ẩm đến 4h"], ans: [0, 1], multi: true },
        { title: "I. Benzac - Câu 4", q: "Chọn một đáp án SAI về cách sử dụng các sản phẩm Benzac skincare.", options: ["A. Sữa rửa mặt Benzac: 2 lần/ngày", "B. Sữa dưỡng ẩm Benzac: 1-2 lần/ngày", "C. Tẩy tế bào chết Benzac: 2 lần/ngày", "D. Miếng dán mụn Benzac: lúc mụn mới xuất hiện"], ans: [2], multi: false },
        { title: "I. Benzac - Câu 5", q: "Chọn một đáp án ĐÚNG. Hướng điều trị mới trong điều trị mụn trứng cá là?", options: ["A. Probiotics", "B. Kháng sinh đường uống", "C. Kháng sinh đường tiêm", "D. Tất cả đều đúng"], ans: [0], multi: false },
        { title: "II. SUN - Câu 6", q: "Màng lọc vật lý vi phân tử NANO TITANIUM DIOXIDE trong Gel Cetaphil® Sun đem lại lợi ích gì?", options: ["A. Bao phủ toàn diện - Chống nắng sau 20 phút", "B. Bao phủ khỏi tia UVA - Chống nắng tức thì", "C. Bao phủ toàn diện - Chống nắng tức thì – Hạn chế kích ứng", "D. Bao phủ khỏi tia UVB - Chống nắng tức thì"], ans: [2], multi: false },
        { title: "II. SUN - Câu 7", q: "Gel Cetaphil® Sun cấp ẩm, làm dịu và chống oxy hóa nhờ vào thành phần nào?", options: ["A. Lô hội", "B. Dầu quả bơ", "C. Dầu hạnh nhân", "D. Vitamin E tinh khiết"], ans: [3], multi: false },
        { title: "II. SUN - Câu 8", q: "Sữa chống nắng Cetaphil Sun Kids Liposomal Lotion giúp bảo vệ toàn diện cho bé khỏi:", options: ["A. Tia UVA", "B. Tia UVB", "C. Tia hồng ngoại IR", "D. Tất cả các loại tia trên"], ans: [0], multi: false },
        { title: "II. SUN - Câu 9", q: "Sữa chống nắng Cetaphil Sun Kids kháng nước đến 4 giờ nhờ vào:", options: ["A. Aloe Vera", "B. Glycerin", "C. Vitamin E", "D. Công nghệ Liposome"], ans: [3], multi: false },
        { title: "II. SUN - Câu 10", q: "Sữa chống nắng Cetaphil Sun Kids dùng được cho bé từ mấy tháng tuổi?", options: ["A. 6 tháng", "B. 12 tháng", "C. 18 tháng", "D. 24 tháng"], ans: [0], multi: false }
    ]
};

// ================== AUDIO ==================
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
    audioEl.play().catch(e => console.log("Trình duyệt yêu cầu tương tác trước khi phát nhạc."));
}

// ================== STATE ==================
let revealedIndices = []; // Lưu các ô index đã lật
let isRevealedAll = false; // Trạng thái mở toàn bộ
let usedEmployees = [];
let usedQuestions = [];
let currentRotation = 0;
let currentQuestionIndex = -1;

const baseColors = ["#e74c3c", "#f39c12", "#2ecc71", "#3498db", "#9b59b6", "#1abc9c", "#d35400", "#c0392b", "#27ae60", "#2980b9"];
const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");

let toastTimeout;
function showToast(message, type) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = `toast ${type}`;
    if(toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { toast.classList.add("hidden"); }, 3500);
}

// MC Audio Controls
document.getElementById("btnHostCorrect").onclick = () => { playSound(audioCongrats); showToast("🎉 CHÚC MỪNG BẠN ĐÃ TRẢ LỜI ĐÚNG! 🎉", "success"); };
document.getElementById("btnHostWrong").onclick = () => { playSound(audioIncorrect); showToast("❌ RẤT TIẾC, CHƯA CHÍNH XÁC! ❌", "error"); };

// ================== INITIALIZATION ==================
function initGame() {
    stopAllAudio();
    revealedIndices = [];
    isRevealedAll = false;
    usedEmployees = [];
    usedQuestions = [];
    currentRotation = 0;
    
    canvas.style.transition = "none";
    canvas.style.transform = `rotate(0deg) translateZ(0)`;
    
    document.getElementById("mainTitle").innerText = gameData.mainTitle;
    document.getElementById("numberLog").innerHTML = "";
    document.getElementById("gameStatus").innerText = "Nhấn QUAY để chọn người chơi!";
    document.getElementById("gameStatus").style.color = "#00ffcc";
    spinBtn.disabled = false;

    // Đếm số chữ cái dựa vào đáp án đúng
    document.getElementById("secretTitle").innerText = `Ô CHỮ BÍ MẬT (${gameData.secretWord.replace(/\s/g, '').length} Chữ Cái)`;
    
    drawWheel();
    drawSecretBoard();
    renderQuestionBoard();
}

function getColor(index) { return baseColors[index % baseColors.length]; }

function drawWheel() {
    const numSectors = gameData.employees.length;
    if(numSectors === 0) return;

    const sectorAngle = 360 / numSectors;
    ctx.clearRect(0, 0, 550, 550);
    ctx.translate(275, 275); 
    
    gameData.employees.forEach((emp, i) => {
        const startAngle = (i * sectorAngle - sectorAngle/2) * Math.PI / 180 - Math.PI / 2;
        const endAngle = (i * sectorAngle + sectorAngle/2) * Math.PI / 180 - Math.PI / 2;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 260, startAngle, endAngle);
        ctx.fillStyle = usedEmployees.includes(emp) ? "#7f8c8d" : getColor(i);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#fff";
        ctx.stroke();

        ctx.save();
        ctx.rotate(i * sectorAngle * Math.PI / 180 - Math.PI / 2);
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        
        let fontSize = numSectors > 20 ? 12 : (numSectors > 12 ? 14 : 18);
        ctx.font = `bold ${fontSize}px Arial`;
        let displayName = emp;
        if(displayName.length > 20) displayName = displayName.substring(0, 18) + '...';
        ctx.fillText(displayName, 240, 0);
        ctx.restore();
    });
    ctx.translate(-275, -275); 
}

function renderQuestionBoard() {
    const grid = document.getElementById("questionGrid");
    grid.innerHTML = "";
    gameData.questions.forEach((_, i) => {
        const btn = document.createElement("button");
        btn.className = "btn-q-grid";
        btn.innerText = i + 1;
        if(usedQuestions.includes(i)) btn.classList.add("used");
        
        btn.onclick = () => openQuestionModal(i, btn);
        grid.appendChild(btn);
    });
}

// LOGIC Ô CHỮ MỚI (Xáo trộn -> Đáp án đúng)
function drawSecretBoard() {
    const board = document.getElementById("secretBoard");
    board.innerHTML = "";
    let displayIndex = 1; 

    // Nếu đã mở tất cả -> lấy từ đúng. Nếu chưa -> lấy từ xáo trộn
    const targetWord = isRevealedAll ? gameData.secretWord : gameData.scrambledWord;

    [...targetWord].forEach((letter, i) => {
        const tile = document.createElement("div");
        tile.className = "letter-tile";
        
        if(letter === " ") {
            tile.style.visibility = "hidden"; 
        } else {
            // Nếu chữ chưa được lật và chưa mở toàn bộ
            if (!revealedIndices.includes(i) && !isRevealedAll) {
                tile.classList.add("hidden");
                tile.innerText = displayIndex; 
                tile.onclick = () => {
                    revealedIndices.push(i);
                    playSound(audioCongrats);
                    drawSecretBoard(); // Vẽ lại để lật ô này
                };
            } else {
                tile.classList.add("revealed");
                tile.innerText = letter.toUpperCase();
                // Hiệu ứng đặc biệt khi bấm nút Mở toàn bộ
                if(isRevealedAll) tile.classList.add("reshuffle"); 
            }
            displayIndex++;
        }
        board.appendChild(tile);
    });
}

document.getElementById("revealAllBtn").onclick = () => {
    isRevealedAll = true;
    drawSecretBoard(); // Chạy lại hàm vẽ, tự động sắp xếp thành từ chuẩn + Hiệu ứng CSS
    playSound(audioCongrats);
    showToast("🎉 ĐÁP ÁN CHÍNH XÁC ĐÃ ĐƯỢC MỞ! 🎉", "success");
    document.getElementById("gameStatus").innerText = `Trò chơi kết thúc!`;
};

// ================== SPIN LOGIC ==================
spinBtn.onclick = () => {
    const availableEmps = gameData.employees.filter(e => !usedEmployees.includes(e));
    if (availableEmps.length === 0) { alert("Đã gọi tên tất cả nhân viên!"); return; }

    playSound(audioSpin);
    spinBtn.disabled = true;
    document.getElementById("gameStatus").innerText = "Đang tìm người may mắn...";
    document.getElementById("gameStatus").style.color = "#ffcc00";

    const winningEmp = availableEmps[Math.floor(Math.random() * availableEmps.length)];
    const winningIndex = gameData.employees.indexOf(winningEmp); 

    const numSectors = gameData.employees.length;
    const sectorAngle = 360 / numSectors;
    const targetDeg = 360 - (winningIndex * sectorAngle);
    const spins = 12 * 360; 
    
    let rotationToAdd = (targetDeg - (currentRotation % 360));
    if (rotationToAdd < 0) rotationToAdd += 360; 
    currentRotation += rotationToAdd + spins;
    
    canvas.style.transition = "transform 8s cubic-bezier(0.15, 0.85, 0.15, 1)";
    canvas.style.transform = `rotate(${currentRotation}deg) translateZ(0)`;

    setTimeout(() => {
        usedEmployees.push(winningEmp);
        const tag = document.createElement("span");
        tag.className = "player-tag";
        tag.innerText = winningEmp;
        document.getElementById("numberLog").appendChild(tag);
        
        drawWheel(); 
        showToast(`🎉 ${winningEmp} 🎉`, "name-reveal");
        playSound(audioCongrats);

        document.getElementById("gameStatus").innerText = `Mời [${winningEmp}] chọn số câu hỏi!`;
        document.getElementById("gameStatus").style.color = "#00ffcc";
        spinBtn.disabled = false;
    }, 8200); 
};

// ================== QUESTION MODAL LOGIC ==================
const qModal = document.getElementById("questionModal");
const btnSubmitAns = document.getElementById("btnSubmitAns");
const btnRefreshAns = document.getElementById("btnRefreshAns");
const btnCloseQuestion = document.getElementById("btnCloseQuestion");
let currentGridBtn = null;

function openQuestionModal(index, gridBtnBtn) {
    stopAllAudio();
    currentQuestionIndex = index;
    currentGridBtn = gridBtnBtn;
    
    const qData = gameData.questions[index];
    document.getElementById("modalTitle").innerText = `CÂU HỎI SỐ ${index + 1}: ` + qData.title;
    document.getElementById("questionText").innerText = qData.q;
    
    setupOptions(qData);
    
    document.getElementById("feedback").innerText = "";
    btnSubmitAns.disabled = false;
    qModal.style.display = "block";
}

function setupOptions(qData) {
    const optionsArea = document.getElementById("optionsArea");
    optionsArea.innerHTML = "";
    qData.options.forEach((opt) => {
        if(opt.trim() === "") return;
        const div = document.createElement("div");
        div.className = "option-item";
        div.innerText = opt;
        div.onclick = () => {
            if (!qData.multi) Array.from(optionsArea.children).forEach(c => c.classList.remove("selected")); 
            div.classList.toggle("selected");
        };
        optionsArea.appendChild(div);
    });
}

btnSubmitAns.onclick = () => {
    const qData = gameData.questions[currentQuestionIndex];
    const optionEls = document.querySelectorAll(".option-item");
    const selected = Array.from(optionEls).filter(el => el.classList.contains("selected")).map(el => qData.options.indexOf(el.innerText));
    
    if (selected.length === 0) { alert("Vui lòng chọn ít nhất 1 đáp án!"); return; }

    const isCorrect = JSON.stringify(selected.sort()) === JSON.stringify(qData.ans.sort());
    const feedback = document.getElementById("feedback");
    btnSubmitAns.disabled = true;

    optionEls.forEach(el => el.classList.add("disabled")); // Khoá chọn lại

    if (isCorrect) {
        playSound(audioTrue);
        feedback.innerText = "🎉 CHÍNH XÁC! Hãy chọn 1 số trên bảng để MC lật chữ. 🎉";
        feedback.style.color = "#2ecc71";
    } else {
        playSound(audioFalse);
        feedback.innerText = "❌ RẤT TIẾC, ĐÁP ÁN SAI ❌";
        feedback.style.color = "#e74c3c";
    }
};

btnRefreshAns.onclick = () => {
    setupOptions(gameData.questions[currentQuestionIndex]);
    document.getElementById("feedback").innerText = "";
    btnSubmitAns.disabled = false;
};

btnCloseQuestion.onclick = () => {
    qModal.style.display = "none";
    if (!usedQuestions.includes(currentQuestionIndex)) {
        usedQuestions.push(currentQuestionIndex);
        if(currentGridBtn) currentGridBtn.classList.add("used");
    }
};

// ================== CÀI ĐẶT & LUẬT CHƠI (SETTINGS & RULES) ==================
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

let editingQIndex = -1; let editingRuleIndex = -1;
const settingsModal = document.getElementById("settingsModal");
const editQuestionModal = document.getElementById("editQuestionModal");
const editRuleModal = document.getElementById("editRuleModal");

document.getElementById("btnOpenSettings").onclick = () => {
    document.getElementById("inputMainTitle").value = gameData.mainTitle;
    document.getElementById("inputSecretWord").value = gameData.secretWord;
    document.getElementById("inputScrambledWord").value = gameData.scrambledWord;
    document.getElementById("inputEmployees").value = gameData.employees.join("\n");
    renderRuleListSettings(); renderQuestionListSettings();
    settingsModal.style.display = "block";
};

document.getElementById("btnCloseSettings").onclick = () => { settingsModal.style.display = "none"; };

function renderRuleListSettings() {
    const list = document.getElementById("ruleList");
    list.innerHTML = "";
    gameData.rules.forEach((r, index) => {
        const item = document.createElement("div");
        item.className = "q-item";
        item.innerHTML = `
            <div class="q-item-info"><strong>${r.step}:</strong> ${r.content.substring(0, 50)}...</div>
            <div class="q-item-actions"><button class="btn-edit" onclick="openEditRule(${index})">Sửa</button><button class="btn-delete" onclick="deleteRule(${index})">Xoá</button></div>
        `;
        list.appendChild(item);
    });
}
function deleteRule(index) { if(confirm("Xoá quy định này?")) { gameData.rules.splice(index, 1); renderRuleListSettings(); } }
document.getElementById("btnAddRule").onclick = () => { openEditRule(-1); };

function openEditRule(index) {
    editingRuleIndex = index;
    if (index === -1) {
        document.getElementById("editRuleTitle").innerText = "THÊM LUẬT MỚI";
        document.getElementById("erStep").value = ""; document.getElementById("erContent").value = "";
    } else {
        document.getElementById("editRuleTitle").innerText = `SỬA LUẬT CHƠI`;
        document.getElementById("erStep").value = gameData.rules[index].step;
        document.getElementById("erContent").value = gameData.rules[index].content;
    }
    settingsModal.style.display = "none"; editRuleModal.style.display = "block";
}
document.getElementById("btnCancelEditRule").onclick = () => { editRuleModal.style.display = "none"; settingsModal.style.display = "block"; };
document.getElementById("btnSaveRule").onclick = () => {
    const step = document.getElementById("erStep").value.trim(); const content = document.getElementById("erContent").value.trim();
    if(!step || !content) { alert("Nhập đủ Tiêu đề và Nội dung!"); return; }
    if(editingRuleIndex === -1) gameData.rules.push({step, content}); else gameData.rules[editingRuleIndex] = {step, content};
    editRuleModal.style.display = "none"; renderRuleListSettings(); settingsModal.style.display = "block";
};

function renderQuestionListSettings() {
    const list = document.getElementById("questionList");
    list.innerHTML = "";
    gameData.questions.forEach((q, index) => {
        const item = document.createElement("div");
        item.className = "q-item";
        item.innerHTML = `
            <div class="q-item-info"><strong>Câu ${index + 1}:</strong> ${q.title}</div>
            <div class="q-item-actions"><button class="btn-edit" onclick="openEditQuestion(${index})">Sửa</button><button class="btn-delete" onclick="deleteQuestion(${index})">Xoá</button></div>
        `;
        list.appendChild(item);
    });
}
function deleteQuestion(index) { if(confirm("Xoá câu hỏi này?")) { gameData.questions.splice(index, 1); renderQuestionListSettings(); } }
document.getElementById("btnAddQuestion").onclick = () => { openEditQuestion(-1); };

function openEditQuestion(index) {
    editingQIndex = index;
    const texts = document.querySelectorAll(".opt-text"); const checks = document.querySelectorAll(".opt-check");
    if (index === -1) {
        document.getElementById("editModalTitle").innerText = "THÊM CÂU HỎI MỚI";
        document.getElementById("eqTitle").value = ""; document.getElementById("eqContent").value = "";
        texts.forEach(t => t.value = ""); checks.forEach(c => c.checked = false);
    } else {
        document.getElementById("editModalTitle").innerText = `SỬA CÂU HỎI (Vị trí ${index + 1})`;
        const q = gameData.questions[index];
        document.getElementById("eqTitle").value = q.title; document.getElementById("eqContent").value = q.q;
        texts.forEach((t, i) => { t.value = q.options[i] || ""; checks[i].checked = q.ans.includes(i); });
    }
    settingsModal.style.display = "none"; editQuestionModal.style.display = "block";
}
document.getElementById("btnCancelEdit").onclick = () => { editQuestionModal.style.display = "none"; settingsModal.style.display = "block"; };
document.getElementById("btnSaveQuestion").onclick = () => {
    const title = document.getElementById("eqTitle").value.trim(); const content = document.getElementById("eqContent").value.trim();
    if(!title || !content) { alert("Nhập đủ Tiêu đề và Nội dung!"); return; }
    let options = [], ans = [];
    document.querySelectorAll(".opt-text").forEach((t, i) => {
        const val = t.value.trim();
        if(val !== "") { options.push(val); if(document.querySelectorAll(".opt-check")[i].checked) ans.push(options.length - 1); }
    });
    if(options.length < 2) { alert("Ít nhất 2 đáp án!"); return; }
    if(ans.length === 0) { alert("Chọn ít nhất 1 đáp án đúng!"); return; }
    const newQ = { title, q: content, options, ans, multi: ans.length > 1 };
    if(editingQIndex === -1) gameData.questions.push(newQ); else gameData.questions[editingQIndex] = newQ;
    editQuestionModal.style.display = "none"; renderQuestionListSettings(); settingsModal.style.display = "block";
};

document.getElementById("btnSaveAll").onclick = () => {
    const newTitle = document.getElementById("inputMainTitle").value.trim();
    const newWord = document.getElementById("inputSecretWord").value.trim();
    const newScrambled = document.getElementById("inputScrambledWord").value.trim();
    const newEmps = document.getElementById("inputEmployees").value.split('\n').map(n => n.trim()).filter(n => n !== "");
    
    if(!newTitle || !newWord || !newScrambled) { alert("Vui lòng điền đủ Tiêu đề và các Ô chữ bí mật!"); return; }
    if(newWord.replace(/\s/g, '').length !== newScrambled.replace(/\s/g, '').length) {
        alert("Lỗi: Độ dài của 'Chữ Đáp Án' và 'Chữ Xáo Trộn' phải bằng nhau!"); return;
    }
    if(newEmps.length === 0 || gameData.questions.length === 0) { alert("Phải có ít nhất 1 nhân viên và 1 câu hỏi!"); return; }
    
    gameData.mainTitle = newTitle;
    gameData.secretWord = newWord;
    gameData.scrambledWord = newScrambled;
    gameData.employees = newEmps;
    
    settingsModal.style.display = "none";
    initGame();
    showToast("Đã lưu mọi cấu hình thành công!", "success");
};

initGame();