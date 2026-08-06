/* ============================================================
   SƠ ĐỒ MINH HỌA (SVG sinh động) — sửa hình ảnh ở file này
   ============================================================ */

function diagramWrap(label, svg, cap){
  return `
    <div class="diagram">
      <div class="d-label">${label}</div>
      ${svg}
      <div class="cap">${cap}</div>
    </div>`;
}

function getDiagram(weekId, prefix, les){
  const cap = les.diagCap || "";
  try{
    /* TUẦN 1 — NumPy: vector & ma trận */
    if(weekId===1 && prefix==='l1'){
      return diagramWrap("Vector · biến · list",
        `<svg width="560" height="170" viewBox="0 0 560 170" role="img" aria-label="Ví dụ biến và list trong Python">
          <!-- code -->
          <rect x="12" y="14" width="250" height="120" rx="6" fill="#23253F"/>
          <text x="24" y="40" font-family="monospace" font-size="12" fill="#E9E9F5">x = 42</text>
          <text x="24" y="62" font-family="monospace" font-size="12" fill="#E9E9F5">name = <tspan fill="#8FBF8F">'An'</tspan></text>
          <text x="24" y="84" font-family="monospace" font-size="12" fill="#E9E9F5">lst = [<tspan fill="#E8A33D">1</tspan>,<tspan fill="#E8A33D">2</tspan>,<tspan fill="#E8A33D">3</tspan>]</text>
          <text x="24" y="106" font-family="monospace" font-size="12" fill="#E9E9F5">lst[0] <tspan fill="#8FA3C9">→</tspan> 1</text>
          <text x="24" y="126" font-family="monospace" font-size="12" fill="#8FA3C9" font-style="italic"># chỉ số bắt đầu từ 0</text>
          <!-- boxes -->
          <g class="floaty">
            <rect x="300" y="30" width="90" height="44" rx="6" fill="#F6DDAE" stroke="#E8A33D"/>
            <text x="345" y="50" font-family="monospace" font-size="11" fill="#242645" text-anchor="middle">biến</text>
            <text x="345" y="66" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="middle">x = 42</text>
          </g>
          <g class="floaty" style="animation-delay:.3s">
            <rect x="404" y="30" width="90" height="44" rx="6" fill="#DCEBDF" stroke="#3E7D5C"/>
            <text x="449" y="50" font-family="monospace" font-size="11" fill="#242645" text-anchor="middle">list</text>
            <text x="449" y="66" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="middle">[1,2,3]</text>
          </g>
          <g class="floaty" style="animation-delay:.6s">
            <rect x="508" y="30" width="46" height="44" rx="6" fill="#F3DCDA" stroke="#B0493F"/>
            <text x="531" y="50" font-family="monospace" font-size="11" fill="#242645" text-anchor="middle">dict</text>
            <text x="531" y="66" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="middle">{"a":1}</text>
          </g>
        </svg>`,
        "Python tự suy ra kiểu của biến. List lưu nhiều giá trị truy cập theo chỉ số (từ 0), dict lưu theo cặp khóa:giá trị.");
    }
    if(weekId===1 && prefix==='l2'){
      return diagramWrap("Phép nhân ma trận",
        `<svg width="560" height="190" viewBox="0 0 560 190" role="img" aria-label="Phép nhân ma trận 2x2">
          <!-- A -->
          <text x="80" y="40" font-family="monospace" font-size="12" fill="#5C5C7A">A (2×2)</text>
          <rect x="40" y="50" width="90" height="70" fill="#F6DDAE" stroke="#E8A33D"/>
          <text x="85" y="78" font-family="monospace" font-size="14" fill="#242645" text-anchor="middle">1 2</text>
          <text x="85" y="98" font-family="monospace" font-size="14" fill="#242645" text-anchor="middle">3 4</text>
          <!-- @ -->
          <text x="150" y="92" font-family="monospace" font-size="20" fill="#E8A33D" text-anchor="middle">@</text>
          <!-- B -->
          <text x="225" y="40" font-family="monospace" font-size="12" fill="#5C5C7A">B (2×2)</text>
          <rect x="175" y="50" width="90" height="70" fill="#DCEBDF" stroke="#3E7D5C"/>
          <text x="220" y="78" font-family="monospace" font-size="14" fill="#242645" text-anchor="middle">5 6</text>
          <text x="220" y="98" font-family="monospace" font-size="14" fill="#242645" text-anchor="middle">7 8</text>
          <!-- = -->
          <text x="285" y="92" font-family="monospace" font-size="20" fill="#E8A33D" text-anchor="middle">=</text>
          <!-- result -->
          <text x="375" y="40" font-family="monospace" font-size="12" fill="#5C5C7A">A@B (2×2)</text>
          <rect x="315" y="50" width="120" height="70" fill="#F3DCDA" stroke="#B0493F" class="glow"/>
          <text x="375" y="78" font-family="monospace" font-size="14" fill="#242645" text-anchor="middle">19 22</text>
          <text x="375" y="98" font-family="monospace" font-size="14" fill="#242645" text-anchor="middle">43 50</text>
          <text x="375" y="128" font-family="monospace" font-size="10" fill="#8FA3C9" font-style="italic" text-anchor="middle">1*5+2*7=19</text>
        </svg>`,
        "Nhân ma trận: mỗi ô kết quả = tổng của tích từng cặp (hàng của A × cột của B). Ví dụ 1·5+2·7=19.");
    }

    /* TUẦN 2 — pandas & làm sạch */
    if(weekId===2 && prefix==='l1'){
      return diagramWrap("DataFrame — bảng hàng và cột",
        `<svg width="560" height="180" viewBox="0 0 560 180" role="img" aria-label="Cấu trúc DataFrame">
          <rect x="30" y="30" width="320" height="120" fill="#FFFDF8" stroke="#2E3159" stroke-width="1.5"/>
          <!-- header -->
          <rect x="30" y="30" width="80" height="26" fill="#2E3159"/>
          <text x="70" y="48" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">index</text>
          <rect x="110" y="30" width="80" height="26" fill="#2E3159"/>
          <text x="150" y="48" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">diện_tích</text>
          <rect x="190" y="30" width="80" height="26" fill="#2E3159"/>
          <text x="230" y="48" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">số_phòng</text>
          <rect x="270" y="30" width="80" height="26" fill="#2E3159"/>
          <text x="310" y="48" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">giá</text>
          <!-- rows -->
          <g font-family="monospace" font-size="12" fill="#242645">
            <rect x="110" y="56" width="240" height="23" fill="#F6DDAE"/><rect x="30" y="56" width="80" height="23" fill="#E8A33D"/><text x="70" y="71" fill="#fff" text-anchor="middle">0</text>
            <text x="150" y="71" text-anchor="middle">75</text><text x="230" y="71" text-anchor="middle">3</text><text x="310" y="71" text-anchor="middle">2.1</text>
            <rect x="30" y="79" width="320" height="23" fill="#FFFDF8"/><text x="70" y="94" text-anchor="middle">1</text>
            <text x="150" y="94" text-anchor="middle">120</text><text x="230" y="94" text-anchor="middle">5</text><text x="310" y="94" text-anchor="middle">3.8</text>
            <rect x="30" y="102" width="320" height="23" fill="#DCEBDF"/><text x="70" y="117" text-anchor="middle">2</text>
            <text x="150" y="117" text-anchor="middle">60</text><text x="230" y="117" text-anchor="middle">2</text><text x="310" y="117" text-anchor="middle">1.5</text>
            <rect x="30" y="125" width="320" height="23" fill="#FFFDF8"/><text x="70" y="140" text-anchor="middle">3</text>
            <text x="150" y="140" text-anchor="middle">95</text><text x="230" y="140" text-anchor="middle">4</text><text x="310" y="140" text-anchor="middle">3.1</text>
          </g>
          <!-- describe popup -->
          <g class="floaty">
            <rect x="380" y="50" width="165" height="100" rx="8" fill="#23253F"/>
            <text x="392" y="70" font-family="monospace" font-size="11" fill="#E8A33D">describe()</text>
            <text x="392" y="88" font-family="monospace" font-size="10" fill="#E9E9F5">mean  ·  median</text>
            <text x="392" y="104" font-family="monospace" font-size="10" fill="#E9E9F5">std   ·  min/max</text>
            <text x="392" y="120" font-family="monospace" font-size="10" fill="#8FA3C9">tương quan</text>
            <text x="392" y="136" font-family="monospace" font-size="10" fill="#8FA3C9">(correlation)</text>
          </g>
        </svg>`,
        "DataFrame = bảng có hàng (mỗi mẫu) và cột (mỗi feature). df.describe() tóm tắt thống kê từng cột.");
    }
    if(weekId===2 && prefix==='l2'){
      return diagramWrap("Làm sạch dữ liệu",
        `<svg width="560" height="200" viewBox="0 0 560 200" role="img" aria-label="Các bước làm sạch dữ liệu">
          <!-- pipeline -->
          <g font-family="monospace" font-size="11" fill="#242645">
            <g><rect x="20" y="80" width="110" height="44" rx="8" fill="#F6DDAE" stroke="#E8A33D"/><text x="75" y="100" text-anchor="middle">Dữ liệu thô</text><text x="75" y="116" text-anchor="middle">có lỗi</text></g>
            <line x1="130" y1="102" x2="160" y2="102" class="flow" stroke="#E8A33D" stroke-width="2.5"/>
            <g><rect x="160" y="70" width="130" height="64" rx="8" fill="#DCEBDF" stroke="#3E7D5C"/><text x="225" y="90" text-anchor="middle">Giá trị thiếu</text><text x="225" y="106" text-anchor="middle">dropna/fillna</text><text x="225" y="122" text-anchor="middle">bỏ / điền</text></g>
            <line x1="290" y1="102" x2="320" y2="102" class="flow" stroke="#3E7D5C" stroke-width="2.5"/>
            <g><rect x="320" y="70" width="130" height="64" rx="8" fill="#E7E1F2" stroke="#2E3159"/><text x="385" y="90" text-anchor="middle">Trùng lặp</text><text x="385" y="106" text-anchor="middle">drop_duplicates()</text><text x="385" y="122" text-anchor="middle">bỏ trùng</text></g>
            <line x1="450" y1="102" x2="480" y2="102" class="flow" stroke="#2E3159" stroke-width="2.5"/>
            <g class="glow"><rect x="480" y="80" width="64" height="44" rx="8" fill="#3E7D5C"/><text x="512" y="102" fill="#fff" text-anchor="middle">Sạch</text><text x="512" y="116" fill="#fff" text-anchor="middle">✓</text></g>
          </g>
          <!-- outlier note -->
          <g class="floaty">
            <rect x="30" y="150" width="240" height="34" rx="6" fill="#F3DCDA" stroke="#B0493F"/>
            <text x="40" y="171" font-family="monospace" font-size="11" fill="#B0493F">⚠ outlier: điểm lệch hẳn phần còn lại</text>
          </g>
        </svg>`,
        "Quy trình làm sạch: xử lý giá trị thiếu → bỏ trùng lặp → phát hiện outlier. Dữ liệu xấu vào = mô hình xấu ra.");
    }

    /* TUẦN 3 — k-NN & train/test */
    if(weekId===3 && prefix==='l1'){
      return diagramWrap("Train / Test split",
        `<svg width="560" height="170" viewBox="0 0 560 170" role="img" aria-label="Chia dữ liệu train test">
          <rect x="30" y="40" width="320" height="34" rx="6" fill="#DCEBDF" stroke="#3E7D5C"/>
          <text x="190" y="62" font-family="monospace" font-size="12" fill="#242645" text-anchor="middle">Toàn bộ dữ liệu</text>
          <!-- cut lines -->
          <line x1="250" y1="74" x2="250" y2="98" stroke="#B0493F" stroke-width="3"/>
          <path d="M250 90 l-6 -8 M250 90 l6 -8" stroke="#B0493F" stroke-width="3" fill="none" class="flow"/>
          <!-- split -->
          <rect x="30" y="98" width="220" height="40" rx="6" fill="#2E3159"/>
          <text x="140" y="123" font-family="monospace" font-size="12" fill="#fff" text-anchor="middle">TRAIN (80%) — để học</text>
          <rect x="270" y="98" width="80" height="40" rx="6" fill="#E8A33D"/>
          <text x="310" y="123" font-family="monospace" font-size="11" fill="#242645" text-anchor="middle">TEST<br/>(20%)</text>
          <g class="floaty">
            <rect x="380" y="70" width="160" height="56" rx="8" fill="#23253F"/>
            <text x="392" y="92" font-family="monospace" font-size="11" fill="#E8A33D">train_test_split</text>
            <text x="392" y="110" font-family="monospace" font-size="10" fill="#E9E9F5">test_size=0.2</text>
          </g>
        </svg>`,
        "Chia dữ liệu: train để huấn luyện, test để kiểm tra. Không bao giờ dùng test khi học — nếu không mô hình sẽ 'gian lận'.");
    }
    if(weekId===3 && prefix==='l2'){
      return diagramWrap("k-NN — k láng giềng gần nhất",
        `<svg width="560" height="240" viewBox="0 0 560 240" role="img" aria-label="Phân loại k-NN">
          <!-- background clusters -->
          <g>
            <circle cx="150" cy="80" r="46" fill="#F6DDAE" opacity=".6"/>
            <circle cx="360" cy="70" r="40" fill="#DCEBDF" opacity=".7"/>
          </g>
          <!-- data points -->
          <g fill="#E8A33D">
            <circle cx="120" cy="60" r="9" class="floaty"/><circle cx="180" cy="55" r="8"/><circle cx="140" cy="110" r="8" style="animation-delay:.2s"/><circle cx="165" cy="100" r="7"/>
          </g>
          <g fill="#3E7D5C">
            <circle cx="340" cy="55" r="8"/><circle cx="385" cy="85" r="9" class="floaty" style="animation-delay:.3s"/><circle cx="350" cy="100" r="7"/>
          </g>
          <!-- target with ripple rings -->
          <circle cx="250" cy="95" r="24" fill="none" stroke="#2E3159" stroke-width="1.2" opacity=".4" class="pulse" style="transform-box:fill-box"/>
          <circle cx="250" cy="95" r="38" fill="none" stroke="#2E3159" stroke-width="1" opacity=".2" class="pulse" style="animation-delay:.4s;transform-box:fill-box"/>
          <circle cx="250" cy="95" r="14" fill="#2E3159" class="pulse"/>
          <text x="250" y="99" font-family="monospace" font-size="12" fill="#fff" text-anchor="middle">?</text>
          <!-- nearest circle k=3 -->
          <circle cx="250" cy="95" r="88" fill="none" stroke="#2E3159" stroke-width="1.5" stroke-dasharray="5 5" class="flow"/>
          <!-- lines to 3 nearest -->
          <g stroke="#2E3159" stroke-width="1.2" opacity=".6">
            <line x1="250" y1="95" x2="140" y2="110"/>
            <line x1="250" y1="95" x2="165" y2="100"/>
            <line x1="250" y1="95" x2="340" y2="55"/>
          </g>
          <text x="250" y="205" font-family="monospace" font-size="11" fill="#5C5C7A" text-anchor="middle">2 / 3 láng giềng là màu cam → kết luận: cam</text>
        </svg>`,
        "Điểm '?' được gán nhãn theo đa số k điểm gần nhất. Với k=3, có 2 láng giềng màu cam và 1 màu xanh → '?' là cam.");
    }

    /* TUẦN 4 — Linear regression & gradient descent */
    if(weekId===4 && prefix==='l1'){
      return diagramWrap("Gradient descent — lăn xuống dốc",
        `<svg width="560" height="230" viewBox="0 0 560 230" role="img" aria-label="Đồ thị hàm loss và gradient descent">
          <!-- axes -->
          <line x1="50" y1="200" x2="540" y2="200" stroke="#5C5C7A"/>
          <line x1="50" y1="200" x2="50" y2="20" stroke="#5C5C7A"/>
          <text x="30" y="110" font-family="monospace" font-size="11" fill="#5C5C7A" transform="rotate(-90 30 110)" text-anchor="middle">loss</text>
          <text x="520" y="216" font-family="monospace" font-size="11" fill="#5C5C7A" text-anchor="middle">tham số</text>
          <!-- loss curve (path) -->
          <path id="gdc" d="M50 30 C 150 30, 250 120, 300 160 S 480 200, 540 198" fill="none" stroke="#E8A33D" stroke-width="3"/>
          <!-- rolling ball on the curve -->
          <g>
            <circle r="10" fill="#B0493F">
              <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#gdc"/>
              </animateMotion>
            </circle>
          </g>
          <text x="340" y="160" font-family="monospace" font-size="10" fill="#B0493F">● quả bóng lăn xuống dốc</text>
          <!-- start label -->
          <g class="wiggle">
            <text x="52" y="24" font-family="monospace" font-size="10" fill="#5C5C7A">bắt đầu ở trên đỉnh</text>
          </g>
          <g class="glow">
            <circle cx="70" cy="40" r="11" fill="#3E7D5C"/>
            <text x="70" y="28" font-family="monospace" font-size="10" fill="#3E7D5C" text-anchor="middle">đáy (tối ưu)</text>
          </g>
        </svg>`,
        "Gradient descent lăn xuống nơi loss thấp nhất. Mỗi bước đi theo hướng dốc nhất (đạo hàm) — giống quả bóng lăn xuống đồi.");
    }
    if(weekId===4 && prefix==='l2'){
      return diagramWrap("Hồi quy tuyến tính — đường khớp dữ liệu",
        `<svg width="560" height="220" viewBox="0 0 560 220" role="img" aria-label="Đường hồi quy khớp dữ liệu">
          <!-- points -->
          <g>
            <circle cx="90" cy="180" r="6" fill="#E8A33D"/><circle cx="150" cy="165" r="6" fill="#E8A33D"/>
            <circle cx="210" cy="150" r="6" fill="#E8A33D"/><circle cx="260" cy="140" r="6" fill="#E8A33D"/>
            <circle cx="320" cy="120" r="6" fill="#E8A33D"/><circle cx="380" cy="105" r="6" fill="#E8A33D"/>
            <circle cx="430" cy="95" r="6" fill="#E8A33D"/><circle cx="480" cy="80" r="6" fill="#E8A33D"/>
          </g>
          <!-- best fit line -->
          <line x1="60" y1="192" x2="520" y2="66" stroke="#2E3159" stroke-width="3"/>
          <!-- residual example -->
          <g stroke="#B0493F" stroke-width="1.5" opacity=".7">
            <line x1="260" y1="140" x2="260" y2="151"/>
            <line x1="430" y1="95" x2="430" y2="103"/>
          </g>
          <text x="266" y="158" font-family="monospace" font-size="10" fill="#B0493F">sai số</text>
          <!-- formula -->
          <g class="floaty"><rect x="320" y="15" width="180" height="38" rx="8" fill="#23253F"/>
            <text x="410" y="33" font-family="monospace" font-size="13" fill="#E8A33D" text-anchor="middle">y = a·x + b</text>
            <text x="410" y="48" font-family="monospace" font-size="10" fill="#8FA3C9" text-anchor="middle">hệ số a, chặn b</text>
          </g>
        </svg>`,
        "Hồi quy tuyến tính tìm đường thẳng y = a·x + b khớp nhất. 'Khớp nhất' = làm sai số (khoảng cách tới từng điểm) nhỏ nhất.");
    }

    /* TUẦN 5 — Logistic regression */
    if(weekId===5 && prefix==='l1'){
      return diagramWrap("Sigmoid — biến số thành xác suất",
        `<svg width="560" height="220" viewBox="0 0 560 220" role="img" aria-label="Đường cong sigmoid">
          <line x1="50" y1="180" x2="530" y2="180" stroke="#5C5C7A"/>
          <line x1="50" y1="180" x2="50" y2="20" stroke="#5C5C7A"/>
          <!-- asymptotes -->
          <line x1="50" y1="40" x2="530" y2="40" stroke="#5C5C7A" stroke-dasharray="3 5" opacity=".5"/>
          <line x1="50" y1="180" x2="530" y2="180" stroke="#5C5C7A" stroke-dasharray="3 5" opacity=".5"/>
          <text x="44" y="36" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="end">1</text>
          <text x="44" y="184" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="end">0</text>
          <!-- sigmoid curve -->
          <path id="sgc" d="M60 178 C 160 178, 300 30, 500 42" fill="none" stroke="#3E7D5C" stroke-width="3.5"/>
          <!-- moving point along sigmoid -->
          <g>
            <circle r="7" fill="#E8A33D">
              <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#sgc"/>
              </animateMotion>
            </circle>
          </g>
          <!-- decision boundary at 0.5 -->
          <line x1="250" y1="178" x2="250" y2="40" stroke="#B0493F" stroke-width="2" stroke-dasharray="4 4"/>
          <circle cx="250" cy="112" r="6" fill="#2E3159" class="pulse"/>
          <text x="250" y="105" font-family="monospace" font-size="10" fill="#2E3159" text-anchor="middle">0.5</text>
          <text x="120" y="170" font-family="monospace" font-size="10" fill="#5C5C7A">xác suất thấp → nhãn 0</text>
          <text x="360" y="60" font-family="monospace" font-size="10" fill="#5C5C7A">xác suất cao → nhãn 1</text>
          <text x="250" y="202" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="middle">tín hiệu đầu vào →</text>
        </svg>`,
        "Sigmoid nén mọi giá trị vào khoảng 0–1 = xác suất. Ngưỡng 0.5 quyết định nhãn: ≥0.5 là 1, <0.5 là 0.");
    }
    if(weekId===5 && prefix==='l2'){
      return diagramWrap("Confusion matrix",
        `<svg width="560" height="230" viewBox="0 0 560 230" role="img" aria-label="Confusion matrix">
          <!-- labels -->
          <text x="300" y="40" font-family="monospace" font-size="12" fill="#5C5C7A" text-anchor="middle">Dự đoán</text>
          <text x="120" y="60" font-family="monospace" font-size="12" fill="#5C5C7A">Thực tế</text>
          <!-- 2x2 grid -->
          <g font-family="monospace" font-size="12" fill="#242645">
            <rect x="60" y="75" width="110" height="55" fill="#DCEBDF" stroke="#3E7D5C"/>
            <rect x="170" y="75" width="110" height="55" fill="#F3DCDA" stroke="#B0493F"/>
            <rect x="60" y="130" width="110" height="55" fill="#F3DCDA" stroke="#B0493F"/>
            <rect x="170" y="130" width="110" height="55" fill="#DCEBDF" stroke="#3E7D5C"/>
            <text x="115" y="95" text-anchor="middle">TP</text><text x="115" y="112" text-anchor="middle" font-size="10" fill="#5C5C7A">đúng dương</text>
            <text x="225" y="95" text-anchor="middle">FP</text><text x="225" y="112" text-anchor="middle" font-size="10" fill="#5C5C7A">sai dương</text>
            <text x="115" y="150" text-anchor="middle">FN</text><text x="115" y="167" text-anchor="middle" font-size="10" fill="#5C5C7A">sai âm</text>
            <text x="225" y="150" text-anchor="middle">TN</text><text x="225" y="167" text-anchor="middle" font-size="10" fill="#5C5C7A">đúng âm</text>
          </g>
          <!-- formulas -->
          <g class="floaty"><rect x="330" y="75" width="200" height="50" rx="8" fill="#23253F"/>
            <text x="430" y="94" font-family="monospace" font-size="11" fill="#E8A33D" text-anchor="middle">Precision = TP/(TP+FP)</text>
            <text x="430" y="112" font-family="monospace" font-size="11" fill="#8FBF8F" text-anchor="middle">Recall = TP/(TP+FN)</text>
          </g>
        </svg>`,
        "Confusion matrix: TP/FP/FN/TN. Precision = 'dự đoán dương có đúng không', Recall = 'bắt đủ dương thật chưa'.");
    }

    /* TUẦN 6 — Overfitting / bias-variance */
    if(weekId===6 && prefix==='l1'){
      return diagramWrap("Underfit · Vừa đủ · Overfit",
        `<svg width="560" height="210" viewBox="0 0 560 210" role="img" aria-label="So sánh underfit overfit">
          <!-- panel 1 underfit -->
          <g>
            <circle cx="90" cy="130" r="5" fill="#E8A33D"/><circle cx="150" cy="120" r="5" fill="#E8A33D"/><circle cx="210" cy="125" r="5" fill="#E8A33D"/><circle cx="130" cy="150" r="5" fill="#E8A33D"/><circle cx="185" cy="150" r="5" fill="#E8A33D"/>
            <line x1="55" y1="140" x2="250" y2="128" stroke="#2E3159" stroke-width="2.5"/>
            <text x="150" y="60" font-family="monospace" font-size="11" fill="#B0493F" text-anchor="middle">UNDERFIT</text>
            <text x="150" y="190" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="middle">đường thẳng quá đơn giản</text>
          </g>
          <!-- panel 2 good -->
          <g>
            <circle cx="310" cy="130" r="5" fill="#E8A33D"/><circle cx="340" cy="90" r="5" fill="#E8A33D"/><circle cx="370" cy="120" r="5" fill="#E8A33D"/><circle cx="400" cy="95" r="5" fill="#E8A33D"/><circle cx="430" cy="130" r="5" fill="#E8A33D"/>
            <path d="M285 135 Q 320 75, 345 105 T 415 95 T 450 128" fill="none" stroke="#3E7D5C" stroke-width="2.5"/>
            <text x="370" y="60" font-family="monospace" font-size="11" fill="#3E7D5C" text-anchor="middle">VỪA ĐỦ</text>
            <text x="370" y="190" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="middle">bám quy luật thật</text>
          </g>
          <!-- panel 3 overfit -->
          <g>
            <circle cx="480" cy="130" r="5" fill="#E8A33D"/><circle cx="510" cy="120" r="5" fill="#E8A33D"/><circle cx="540" cy="135" r="5" fill="#E8A33D"/><circle cx="530" cy="110" r="5" fill="#E8A33D"/>
            <path d="M470 135 Q 480 95, 495 128 T 525 100 T 548 135" fill="none" stroke="#B0493F" stroke-width="2.5" class="glow"/>
            <text x="510" y="60" font-family="monospace" font-size="11" fill="#B0493F" text-anchor="middle">OVERFIT</text>
            <text x="510" y="190" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="middle">thuộc lòng từng điểm, uốn éo quá mức</text>
          </g>
        </svg>`,
        "Overfit: mô hình khớp quá kỹ train (thuộc lòng) nên dở trên dữ liệu mới. Mục tiêu là 'vừa đủ' — bám quy luật, không bám nhiễu.");
    }
    if(weekId===6 && prefix==='l2'){
      return diagramWrap("Cross-validation (k-fold)",
        `<svg width="560" height="200" viewBox="0 0 560 200" role="img" aria-label="Cross validation 5 fold">
          <!-- grid of folds -->
          <g font-family="monospace" font-size="11" fill="#242645">
            <!-- each row: one test fold highlighted -->
            ${[0,1,2,3,4].map(f=>`
              <g>
                ${[0,1,2,3,4].map(c=>`
                  <rect x="${50+c*70}" y="${20+f*34}" width="60" height="24" rx="4" fill="${c===f?'#E8A33D':'#DCEBDF'}" stroke="#2E3159"/>
                `).join("")}
                <text x="410" y="${36+f*34}" fill="#5C5C7A">lần ${f+1}: test = fold ${f+1}</text>
              </g>`).join("")}
          </g>
          <g class="floaty"><rect x="300" y="190" width="200" height="0" fill="none"/></g>
          <text x="180" y="195" font-family="monospace" font-size="11" fill="#3E7D5C" text-anchor="middle">mỗi fold làm test đúng 1 lần → điểm ổn định hơn</text>
        </svg>`,
        "Cross-validation chia dữ liệu thành k phần, mỗi lần dùng 1 phần làm test, phần còn lại làm train. Lặp k lần, lấy trung bình.");
    }

    /* TUẦN 7 — Decision tree / random forest */
    if(weekId===7 && prefix==='l1'){
      return diagramWrap("Cây quyết định",
        `<svg width="560" height="230" viewBox="0 0 560 230" role="img" aria-label="Cây quyết định">
          <!-- root -->
          <rect x="230" y="20" width="120" height="34" rx="8" fill="#2E3159"/>
          <text x="290" y="41" font-family="monospace" font-size="10.5" fill="#fff" text-anchor="middle">diện tích &gt; 100?</text>
          <!-- branches -->
          <g class="flow" stroke="#5C5C7A" stroke-width="1.5"><line x1="290" y1="54" x2="170" y2="90"/><line x1="290" y1="54" x2="410" y2="90"/></g>
          <text x="180" y="86" font-family="monospace" font-size="10" fill="#5C5C7A">có</text>
          <text x="415" y="86" font-family="monospace" font-size="10" fill="#5C5C7A">không</text>
          <!-- left node -->
          <rect x="110" y="90" width="120" height="34" rx="8" fill="#F6DDAE" stroke="#E8A33D"/>
          <text x="170" y="111" font-family="monospace" font-size="10.5" fill="#242645" text-anchor="middle">phòng ≥ 4?</text>
          <g class="flow" stroke="#5C5C7A" stroke-width="1.5"><line x1="170" y1="124" x2="120" y2="160"/><line x1="170" y1="124" x2="220" y2="160"/></g>
          <g class="floaty"><rect x="80" y="160" width="80" height="34" rx="8" fill="#3E7D5C"/><text x="120" y="181" font-family="monospace" font-size="10.5" fill="#fff" text-anchor="middle">Giá cao</text></g>
          <g class="floaty" style="animation-delay:.3s"><rect x="180" y="160" width="80" height="34" rx="8" fill="#B0493F"/><text x="220" y="181" font-family="monospace" font-size="10.5" fill="#fff" text-anchor="middle">Giá thấp</text></g>
          <!-- right node leaf -->
          <g class="floaty" style="animation-delay:.2s"><rect x="360" y="90" width="120" height="34" rx="8" fill="#B0493F"/><text x="420" y="111" font-family="monospace" font-size="10.5" fill="#fff" text-anchor="middle">Giá thấp</text></g>
        </svg>`,
        "Cây quyết định tự đặt câu hỏi 'nếu... thì' để chia dữ liệu, cho tới khi mỗi nhánh (lá) thuần về nhãn.");
    }
    if(weekId===7 && prefix==='l2'){
      return diagramWrap("Random forest — trí tuệ đám đông",
        `<svg width="560" height="210" viewBox="0 0 560 210" role="img" aria-label="Random forest">
          <!-- many small trees -->
          ${[0,1,2,3,4,5].map(i=>`
            <g class="floaty" style="animation-delay:${i*0.15}s" transform="translate(${60+i*76},0)">
              <line x1="30" y1="90" x2="30" y2="60" stroke="#5C5C7A" stroke-width="2"/>
              <line x1="30" y1="60" x2="18" y2="40" stroke="#5C5C7A" stroke-width="2"/>
              <line x1="30" y1="60" x2="42" y2="40" stroke="#5C5C7A" stroke-width="2"/>
              <line x1="30" y1="60" x2="30" y2="38" stroke="#5C5C7A" stroke-width="2"/>
              <circle cx="18" cy="38" r="6" fill="#E8A33D"/><circle cx="42" cy="38" r="6" fill="#3E7D5C"/><circle cx="30" cy="36" r="6" fill="#E8A33D"/>
            </g>`).join("")}
          <!-- votes -->
          <g font-family="monospace" font-size="11" fill="#242645">
            <text x="280" y="120" text-anchor="middle">Mỗi cây bỏ 1 phiếu dự đoán:</text>
            <text x="240" y="150" text-anchor="middle" fill="#E8A33D">●●●●</text><text x="340" y="150" text-anchor="middle" fill="#3E7D5C">●●</text>
          </g>
          <g class="glow"><rect x="180" y="168" width="200" height="30" rx="8" fill="#2E3159"/>
            <text x="280" y="187" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">Đa số: cam → kết quả cam</text>
          </g>
        </svg>`,
        "Random forest = nhiều cây, mỗi cây nhìn một phần ngẫu nhiên của dữ liệu & feature, rồi bỏ phiếu lấy đa số. Sai của từng cây bị 'hòa tan'.");
    }

    /* TUẦN 8 — k-means & PCA */
    if(weekId===8 && prefix==='l1'){
      return diagramWrap("k-means — gom cụm",
        `<svg width="560" height="220" viewBox="0 0 560 220" role="img" aria-label="k means clustering">
          <!-- 3 clusters -->
          <g>
            <circle cx="120" cy="85" r="42" fill="#F6DDAE" opacity=".6"/>
            <circle cx="280" cy="80" r="40" fill="#DCEBDF" opacity=".7"/>
            <circle cx="180" cy="160" r="40" fill="#E7E1F2" opacity=".6"/>
          </g>
          <g fill="#E8A33D">
            <circle cx="90" cy="60" r="7"/><circle cx="140" cy="70" r="7"/><circle cx="110" cy="105" r="7"/><circle cx="145" cy="100" r="7"/>
          </g>
          <g fill="#3E7D5C">
            <circle cx="255" cy="60" r="7"/><circle cx="300" cy="75" r="7"/><circle cx="270" cy="105" r="7"/><circle cx="305" cy="100" r="7"/>
          </g>
          <g fill="#6C5B7B">
            <circle cx="155" cy="145" r="7"/><circle cx="200" cy="150" r="7"/><circle cx="180" cy="180" r="7"/><circle cx="210" cy="175" r="7"/>
          </g>
          <!-- centers -->
          <g>
            <circle cx="125" cy="82" r="11" fill="none" stroke="#B0493F" stroke-width="2.5" class="pulse"/>
            <text x="125" y="86" font-family="monospace" font-size="10" fill="#B0493F" text-anchor="middle">c1</text>
            <circle cx="283" cy="80" r="11" fill="none" stroke="#B0493F" stroke-width="2.5" class="pulse" style="animation-delay:.3s"/>
            <text x="283" y="84" font-family="monospace" font-size="10" fill="#B0493F" text-anchor="middle">c2</text>
            <circle cx="185" cy="162" r="11" fill="none" stroke="#B0493F" stroke-width="2.5" class="pulse" style="animation-delay:.6s"/>
            <text x="185" y="166" font-family="monospace" font-size="10" fill="#B0493F" text-anchor="middle">c3</text>
          </g>
          <g font-family="monospace" font-size="11" fill="#5C5C7A">
            <text x="280" y="200" text-anchor="middle">k=3 cụm · mỗi điểm gán vào tâm gần nhất</text>
          </g>
        </svg>`,
        "k-means chọn k tâm cụm, gán mỗi điểm vào tâm gần nhất, rồi cập nhật lại tâm cụm — lặp đến khi ổn định.");
    }
    if(weekId===8 && prefix==='l2'){
      return diagramWrap("PCA — giảm chiều xuống 2D",
        `<svg width="560" height="220" viewBox="0 0 560 220" role="img" aria-label="PCA projection">
          <!-- original 3d-ish cloud -->
          <g opacity=".5">
            <circle cx="100" cy="80" r="5" fill="#5C5C7A"/><circle cx="140" cy="70" r="5" fill="#5C5C7A"/><circle cx="120" cy="110" r="5" fill="#5C5C7A"/><circle cx="170" cy="90" r="5" fill="#5C5C7A"/><circle cx="90" cy="120" r="5" fill="#5C5C7A"/><circle cx="160" cy="125" r="5" fill="#5C5C7A"/>
            <text x="135" y="165" font-family="monospace" font-size="11" fill="#5C5C7A" text-anchor="middle">nhiều chiều</text>
          </g>
          <!-- arrow -->
          <g class="flow" stroke="#E8A33D" stroke-width="3"><line x1="210" y1="100" x2="260" y2="100"/><path d="M250 94 l10 6 l-10 6"/></g>
          <text x="235" y="92" font-family="monospace" font-size="10" fill="#E8A33D" text-anchor="middle">PCA</text>
          <!-- projected 2d -->
          <g>
            <ellipse cx="410" cy="100" rx="16" ry="60" fill="#DCEBDF" opacity=".5" transform="rotate(-20 410 100)"/>
            <circle cx="385" cy="60" r="5" fill="#3E7D5C"/><circle cx="420" cy="70" r="5" fill="#3E7D5C"/><circle cx="405" cy="120" r="5" fill="#3E7D5C"/><circle cx="440" cy="90" r="5" fill="#3E7D5C"/><circle cx="430" cy="140" r="5" fill="#3E7D5C"/><circle cx="390" cy="140" r="5" fill="#3E7D5C"/>
            <line x1="380" y1="150" x2="470" y2="45" stroke="#B0493F" stroke-width="2" stroke-dasharray="4 4"/>
            <text x="460" y="50" font-family="monospace" font-size="10" fill="#B0493F">PC1 (phương sai lớn nhất)</text>
            <text x="410" y="175" font-family="monospace" font-size="11" fill="#5C5C7A" text-anchor="middle">2 chiều</text>
          </g>
        </svg>`,
        "PCA tìm hướng trải rộng nhất (phương sai lớn nhất) rồi chiếu dữ liệu xuống ít chiều — giúp 'nhìn thấy' dữ liệu nhiều chiều trên mặt phẳng.");
    }

    /* TUẦN 9 — Neural network */
    if(weekId===9 && prefix==='l1'){
      return diagramWrap("Mạng nơ-ron — nhiều layer",
        `<svg width="560" height="240" viewBox="0 0 560 240" role="img" aria-label="Neural network architecture">
          <!-- connections -->
          <g stroke="#C9C3AF" stroke-width="1">
            ${[0,1,2].map(ci=>{ let out="";
              for(let r1=0;r1<5;r1++)for(let r2=0;r2<5;r2++){
                out+=`<line x1="${70+ci*150+11}" y1="${45+r1*38}" x2="${70+(ci+1)*150-11}" y2="${45+r2*38}"/>`;
              } return out; }).join("")}
          </g>
          <!-- layers -->
          <g>
            ${[0,1,2,3].map((_,ci)=>`
              <g>
                ${[0,1,2,3,4].map((_,ri)=>{
                  const cx=70+ci*150, cy=45+ri*38;
                  const fill = ci===0?'#E8A33D':ci===3?'#3E7D5C':'#2E3159';
                  const cls = ci===3 ? 'pulse' : 'floaty';
                  return `<circle cx="${cx}" cy="${cy}" r="11" fill="${fill}" class="${cls}" style="animation-delay:${ci*0.12}s;transform-box:fill-box"/>`;
                }).join("")}
                <text x="${70+ci*150}" y="${225}" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="middle">${ci===0?'input':ci===3?'output':'hidden'}</text>
              </g>`).join("")}
          </g>
          <!-- backprop label -->
          <g class="glow"><rect x="150" y="12" width="260" height="24" rx="12" fill="#23253F"/>
            <text x="280" y="28" font-family="monospace" font-size="11" fill="#E8A33D" text-anchor="middle">gradient descent qua từng tầng (backprop)</text>
          </g>
        </svg>`,
        "Mạng = input → nhiều hidden layer → output. Huấn luyện vẫn là gradient descent, chỉ là lan truyền ngược qua từng tầng (backprop).");
    }
    if(weekId===9 && prefix==='l2'){
      return diagramWrap("Nhận dạng chữ số viết tay",
        `<svg width="560" height="220" viewBox="0 0 560 220" role="img" aria-label="Digit recognition">
          <!-- digit 28x28 grid stylized -->
          <g transform="translate(60,40)">
            <rect x="0" y="0" width="120" height="120" rx="8" fill="#fff" stroke="#2E3159"/>
            <path d="M 25 100 Q 40 25, 70 30 T 95 45 Q 75 60, 85 95 Q 88 115, 60 108 Q 35 100, 45 82" fill="none" stroke="#242645" stroke-width="7"/>
            <text x="60" y="138" font-family="monospace" font-size="10" fill="#5C5C7A" text-anchor="middle">28×28 = 784 pixel</text>
          </g>
          <!-- arrow -->
          <g class="flow" stroke="#E8A33D" stroke-width="3"><line x1="230" y1="100" x2="280" y2="100"/><path d="M270 94 l10 6 l-10 6"/></g>
          <!-- network -->
          <g>
            <circle cx="330" cy="85" r="9" fill="#2E3159"/><circle cx="330" cy="110" r="9" fill="#2E3159"/><circle cx="330" cy="135" r="9" fill="#2E3159"/>
            <text x="330" y="160" font-family="monospace" font-size="9" fill="#5C5C7A" text-anchor="middle">hidden</text>
          </g>
          <!-- output probabilities -->
          <g font-family="monospace" font-size="11" fill="#242645">
            ${[0,1,2,3,4,5,6,7,8,9].map((d,di)=>{
              const w=d===5?160:60; const hot=d===5;
              return `<rect x="410" y="${25+di*18}" width="${w}" height="13" rx="3" fill="${hot?'#3E7D5C':'#E8A33D'}" class="${hot?'glow':''}"/>
                      <text x="406" y="${35+di*18}" fill="#5C5C7A" text-anchor="end">${d}</text>
                      <text x="${415+w}" y="${35+di*18}" fill="#5C5C7A">${hot?'0.98':'0.0'+di}</text>`;
            }).join("")}
            <text x="470" y="200" font-family="monospace" font-size="11" fill="#3E7D5C" text-anchor="middle">mạng dự đoán: 5</text>
          </g>
        </svg>`,
        "Ảnh chữ số 28×28 = 784 pixel đưa vào mạng, mạng xuất xác suất cho 10 lớp (0–9). Lớp có xác suất cao nhất là đáp án.");
    }

    /* TUẦN 10 — Data leakage */
    if(weekId===10 && prefix==='l1'){
      return diagramWrap("Data leakage — rò rỉ từ tương lai",
        `<svg width="560" height="210" viewBox="0 0 560 210" role="img" aria-label="Data leakage">
          <g font-family="monospace" font-size="11" fill="#242645">
            <rect x="40" y="40" width="150" height="40" rx="8" fill="#2E3159"/>
            <text x="115" y="65" fill="#fff" text-anchor="middle">Huấn luyện (train)</text>
            <rect x="330" y="40" width="150" height="40" rx="8" fill="#3E7D5C"/>
            <text x="405" y="65" fill="#fff" text-anchor="middle">Kiểm tra (test)</text>
            <!-- wall -->
            <rect x="255" y="30" width="10" height="62" fill="#5C5C7A"/>
          </g>
          <!-- leak arrow over the wall -->
          <g class="glow"><path d="M 115 45 C 200 8, 340 8, 405 40" fill="none" stroke="#B0493F" stroke-width="3"/>
            <text x="255" y="20" font-family="monospace" font-size="11" fill="#B0493F" text-anchor="middle">⚠ thông tin test lọt vào train</text>
          </g>
          <g class="floaty"><rect x="60" y="140" width="440" height="50" rx="8" fill="#F3DCDA" stroke="#B0493F"/>
            <text x="280" y="160" font-family="monospace" font-size="11" fill="#B0493F" text-anchor="middle">hậu quả: điểm test cao ảo, thực tế kém</text>
            <text x="280" y="178" font-family="monospace" font-size="10" fill="#B0493F" text-anchor="middle">vd: chuẩn hóa (fit) trên toàn bộ dữ liệu trước khi chia</text>
          </g>
        </svg>`,
        "Data leakage: thông tin từ test 'rò' vào quá trình huấn luyện, khiến mô hình gian lận và điểm cao giả tạo. Luôn fit mọi thứ chỉ trên train.");
    }

    /* TUẦN 11 — Tuần đồ án */
    if(weekId===11){
      if(prefix==='l1'){
        return diagramWrap("Vòng đời đồ án học máy",
          `<svg width="560" height="230" viewBox="0 0 560 230" role="img" aria-label="Vòng đời đồ án học máy">
            <!-- flow stages -->
            <g font-family="monospace" font-size="11" fill="#242645">
              <g class="stagger">
                <rect x="30" y="30" width="120" height="52" rx="9" fill="#F6DDAE" stroke="#E8A33D"/>
                <text x="90" y="52" text-anchor="middle" font-size="10.5">1. Dữ liệu</text>
                <text x="90" y="68" text-anchor="middle" font-size="9" fill="#5C5C7A">thu thập, làm sạch</text>
                <rect x="180" y="30" width="120" height="52" rx="9" fill="#DCEBDF" stroke="#3E7D5C"/>
                <text x="240" y="52" text-anchor="middle" font-size="10.5">2. Khám phá</text>
                <text x="240" y="68" text-anchor="middle" font-size="9" fill="#5C5C7A">EDA, trực quan</text>
                <rect x="330" y="30" width="120" height="52" rx="9" fill="#E7E1F2" stroke="#2E3159"/>
                <text x="390" y="52" text-anchor="middle" font-size="10.5">3. Huấn luyện</text>
                <text x="390" y="68" text-anchor="middle" font-size="9" fill="#5C5C7A">chọn model, fit</text>
              </g>
              <g class="stagger" style="animation-delay:.4s">
                <rect x="480" y="30" width="66" height="52" rx="9" fill="#3E7D5C"/>
                <text x="513" y="52" text-anchor="middle" font-size="10.5" fill="#fff">4. Đánh</text>
                <text x="513" y="68" text-anchor="middle" font-size="9" fill="#fff">giá</text>
              </g>
            </g>
            <!-- arrows -->
            <g class="flow" stroke="#B0493F" stroke-width="2.5">
              <line x1="150" y1="56" x2="178" y2="56"/>
              <line x1="300" y1="56" x2="328" y2="56"/>
              <line x1="450" y1="56" x2="478" y2="56"/>
            </g>
            <!-- feedback loop -->
            <g>
              <path d="M 513 82 Q 513 180 90 180 Q 30 180 30 82" fill="none" stroke="#B0493F" stroke-width="2" stroke-dasharray="5 5" class="flow"/>
              <text x="270" y="196" font-family="monospace" font-size="11" fill="#B0493F" text-anchor="middle">quay lại cải thiện (iterate)</text>
            </g>
            <!-- deliverable -->
            <g class="wiggle">
              <text x="270" y="216" font-family="monospace" font-size="10.5" fill="#5C5C7A" text-anchor="middle">kết thúc: thuyết trình + demo sản phẩm</text>
            </g>
          </svg>`,
          "Vòng đời đồ án: dữ liệu → khám phá → huấn luyện → đánh giá, rồi lặp lại để cải thiện. Kết thúc bằng thuyết trình + demo.");
      }
      if(prefix==='l2'){
        return diagramWrap("Nhóm làm việc & thuyết trình",
          `<svg width="560" height="220" viewBox="0 0 560 220" role="img" aria-label="Cộng tác nhóm đồ án">
            <!-- people -->
            <g>
              <circle cx="120" cy="90" r="22" fill="#E8A33D" class="floaty"/>
              <text x="120" y="95" font-family="monospace" font-size="13" fill="#fff" text-anchor="middle">A</text>
              <circle cx="230" cy="90" r="22" fill="#3E7D5C" class="floaty" style="animation-delay:.2s"/>
              <text x="230" y="95" font-family="monospace" font-size="13" fill="#fff" text-anchor="middle">B</text>
              <circle cx="340" cy="90" r="22" fill="#2E3159" class="floaty" style="animation-delay:.4s"/>
              <text x="340" y="95" font-family="monospace" font-size="13" fill="#fff" text-anchor="middle">C</text>
              <circle cx="450" cy="90" r="22" fill="#B0493F" class="floaty" style="animation-delay:.6s"/>
              <text x="450" y="95" font-family="monospace" font-size="13" fill="#fff" text-anchor="middle">D</text>
            </g>
            <!-- connections -->
            <g stroke="#C9C3AF" stroke-width="2">
              <line x1="142" y1="90" x2="208" y2="90"/>
              <line x1="252" y1="90" x2="318" y2="90"/>
              <line x1="362" y1="90" x2="428" y2="90"/>
            </g>
            <!-- shared work product -->
            <g class="pulse" style="transform-box:fill-box">
              <rect x="180" y="150" width="210" height="44" rx="9" fill="#DCEBDF" stroke="#3E7D5C"/>
              <text x="285" y="168" font-family="monospace" font-size="11" fill="#242645" text-anchor="middle">Sản phẩm chung</text>
              <text x="285" y="184" font-family="monospace" font-size="9.5" fill="#5C5C7A" text-anchor="middle">1 notebook + slide + demo</text>
            </g>
            <!-- arrows down -->
            <g class="flow" stroke="#3E7D5C" stroke-width="2">
              <line x1="120" y1="112" x2="150" y2="150"/>
              <line x1="230" y1="112" x2="240" y2="150"/>
              <line x1="340" y1="112" x2="330" y2="150"/>
              <line x1="450" y1="112" x2="420" y2="150"/>
            </g>
          </svg>`,
          "Mỗi thành viên đóng góp vào sản phẩm chung. Công việc được phân công, rồi gộp lại thành một notebook + bài thuyết trình hoàn chỉnh.");
      }
    }

  }catch(e){ /* ẩn diagram nếu lỗi */ return ""; }
  return "";
}
