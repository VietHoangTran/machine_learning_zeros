/* ============================================================
   DỮ LIỆU KHÓA HỌC — sửa nội dung ở file này
   COURSE · WEEKS · CHEATSHEETS · GLOSSARY · PROJECTS
   ============================================================ */

const COURSE = {
  name: "Nhập môn Học máy",
  tagline: "Từ những dòng Python đầu tiên đến việc tự tay huấn luyện mô hình học máy của riêng bạn.",
  duration: "11 tuần — 10 tuần học + 1 tuần làm đồ án",
  schedule: "2 buổi / tuần — mỗi buổi 2 giờ",
  selfstudy: "4–5 giờ / tuần — mỗi tuần 1 bài tập + 1 quiz ngắn",
  audience: "Sinh viên năm 1–2, mọi ngành — người mới hoàn toàn đều được chào đón",
  prereq: "Toán phổ thông + một chiếc laptop và sự tò mò",
  tools: "Google Colab + Python, NumPy, pandas, scikit-learn — hoàn toàn miễn phí",
  grading: [
    { part:"Quiz hằng tuần (10 bài)", pct:"25%", desc:"Bài trắc nghiệm ngắn làm online, hoàn thành trước Buổi 1 của tuần kế tiếp." },
    { part:"Mini-project (3 bài)", pct:"35%", desc:"Dự án nhỏ trọn vẹn sau các tuần 4, 7 và 9 — nộp notebook kèm bản thuyết minh ngắn." },
    { part:"Đồ án cuối khóa", pct:"40%", desc:"Đồ án nhóm trên bộ dữ liệu tự chọn, thực hiện ở tuần 11 và thuyết trình vào buổi cuối." },
  ]
};

/* Mỗi tuần: buổi 1 (lý thuyết), buổi 2 (lab), bài tập, quiz.
   checklist: bước thực hành.  theory: tóm tắt.  links: tài nguyên.  selfcheck: câu hỏi tự kiểm tra. */
const WEEKS = [
{
  id:1, title:"Khởi động với Python", sub:"Colab · biến, list, dict · hàm, vòng lặp · NumPy",
  lesson1:{
    title:"Buổi 1 — Chào mừng & Python căn bản",
    meta:"Lý thuyết · Google Colab · biến, kiểu dữ liệu, list, dictionary",
    theory:[
      "<b>Google Colab</b> là một môi trường chạy Python trên trình duyệt, miễn phí, không cần cài đặt. Mỗi trang làm việc gọi là một <i>notebook</i> — gồm nhiều <i>ô (cell)</i> chứa code mà bạn chạy từng ô một bằng cách bấm Shift+Enter.",
      "Biến là nơi lưu trữ giá trị. Trong Python bạn không cần khai báo kiểu: <span class='code-inline'>x = 5</span> tự hiểu là số nguyên. Đây gọi là <i>kiểu dữ liệu động (dynamic typing)</i> — khác với C/Java nơi bạn phải khai báo trước.",
      "<b>Kiểu dữ liệu</b> cơ bản: <code>int</code> (số nguyên), <code>float</code> (số thực), <code>str</code> (chuỗi ký tự), <code>bool</code> (đúng/sai), <code>list</code> (danh sách), <code>dict</code> (từ điển). Kiểm tra kiểu bằng <code>type()</code>.",
      "List dùng khi bạn cần một danh sách có thứ tự, truy cập nhanh theo vị trí. Dict dùng khi cần tra cứu theo tên (khóa) — như một quyển từ điển 'từ khóa → định nghĩa', rất nhanh để tìm kiếm. Tra cứu trong dict là O(1) (gần như tức thì), kể cả khi dict rất lớn.",
      "Chỉ số (index) của list bắt đầu từ <b>0</b>: <code>lst[0]</code> là phần tử đầu tiên, <code>lst[-1]</code> là phần tử cuối cùng (chỉ số âm đếm từ cuối).",
      "Cắt list (slicing) <code>lst[start:end]</code> lấy từ <code>start</code> đến hết <code>end-1</code>. Bỏ qua một bên là lấy 'tới hết' hoặc 'từ đầu'. Đây là kỹ năng bạn dùng hàng ngày trong học máy để chọn tập con dữ liệu.",
      "<b>f-string</b> giúp chèn giá trị vào chuỗi dễ đọc: <code>f'Giá là {x} triệu'</code>. Luôn ưu tiên f-string thay vì nối chuỗi bằng <code>+</code>.",
      "Colab lưu trạng thái giữa các ô: biến bạn gán ở ô trên vẫn còn ở ô dưới. Chạy theo thứ tự từ trên xuống — nếu lỡ chạy ô dưới trước khi gán biến ở ô trên sẽ báo lỗi 'chưa định nghĩa'."
    ],
    concept:"Nguyên tắc vàng của Python: code đọc được như tiếng người. Chỉ số của list bắt đầu từ 0.",
    code:"x = 5\nname = 'An'\nprint(type(x))            # <class 'int'> — kiểu tự suy ra\n\nlst = [10, 20, 30, 40]\nprint(lst[0], lst[-1])    # 10 40\nprint(lst[1:3])           # [20, 30]  (từ vị trí 1 đến hết vị trí 2)\n\nd = {'ten': 'An', 'tuoi': 20}\nprint(d['ten'])           # An\n\nprint(f'{name} năm nay {d[\"tuoi\"]} tuổi')  # An năm nay 20 tuổi",
    checklist:[
      "Mở Google Colab (colab.research.google.com) và tạo notebook mới.",
      "Viết và chạy cell đầu tiên: <span class='code-inline'>print('Xin chào!')</span>",
      "Tạo và gán vài biến số, chuỗi, kiểm tra kiểu bằng <span class='code-inline'>type()</span>.",
      "Thực hành list: tạo list, thêm (<span class='code-inline'>append</span>), truy cập theo chỉ số, cắt (slice).",
      "Thực hành dict: tạo dict, truy cập theo key, thêm/sửa cặp key:value.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Hàm, vòng lặp & NumPy",
    meta:"Lý thuyết + thực hành · hàm, for/while · mảng, vector, ma trận",
    theory:[
      "<b>Hàm (function)</b> đóng gói một đoạn code dùng lại được. Định nghĩa bằng <span class='code-inline'>def</span>, có thể nhận <i>tham số</i> và <i>trả về</i> kết quả.",
      "<b>Vòng lặp</b>: <code>for</code> lặp qua một chuỗi (list, phạm vi số), <code>while</code> lặp khi điều kiện còn đúng. <code>range(n)</code> tạo dãy số 0..n-1 — cách thường dùng nhất để lặp.",
      "<b>List comprehension</b> là cách viết ngắn để tạo list từ vòng lặp: <code>[x*x for x in range(5)]</code> cho <code>[0,1,4,9,16]</code>. Rất phổ biến trong NumPy/pandas.",
      "<b>NumPy</b> là thư viện cho mảng số. Một <i>vector</i> là mảng 1 chiều, một <i>ma trận</i> là mảng 2 chiều. Toàn bộ đại số tuyến tính bạn cần cho khóa học nằm ở đây.",
      "<b>Broadcasting</b> của NumPy: bạn có thể cộng một con số với cả mảng, hay cộng hai mảng kích thước khác nhau miễn là 'tương thích' — NumPy tự kéo dãn. Vd: <code>arr + 1</code> cộng 1 vào mọi phần tử.",
      "Tạo dữ liệu ngẫu nhiên bằng <code>np.random</code> rất quan trọng: bạn sẽ dùng nó để sinh dữ liệu giả, khởi tạo trọng số, hay lấy mẫu. Gán <code>seed</code> để tái lập kết quả.",
      "Hiểu phép nhân ma trận là nền móng: trong học máy, <code>X @ w</code> (ma trận dữ liệu nhân vector trọng số) chính là cách mô hình tuyến tính tính dự đoán cho hàng loạt mẫu cùng lúc."
    ],
    concept:"Đại số tuyến tính của khóa học chỉ gói gọn: mảng, phép nhân ma trận và chuyển vị.",
    code:"import numpy as np\n\n# List comprehension\nsquares = [x*x for x in range(5)]\nprint(squares)            # [0, 1, 4, 9, 16]\n\n# Mảng NumPy & broadcasting\nA = np.array([[1,2],[3,4]])   # ma trận 2x2\nB = np.array([[5,6],[7,8]])\nprint(A @ B)          # phép nhân ma trận (@) → [[19 22],[43 50]]\nprint(A.T)            # chuyển vị\nprint(A + 1)          # broadcasting: cộng 1 vào mọi phần tử\n\nnp.random.seed(42)          # tái lập kết quả ngẫu nhiên\nprint(np.random.rand(3))    # 3 số ngẫu nhiên trong [0,1)",
    checklist:[
      "Viết một hàm tự chọn (vd: hàm tính diện tích, hàm tính tổng 1 list).",
      "Dùng vòng lặp for in ra bảng cửu chương hoặc tổng các số chẵn.",
      "Cài/import NumPy, tạo mảng 1D và 2D.",
      "Thực hành phép nhân ma trận bằng toán tử <span class='code-inline'>@</span>.",
      "Thực hành chuyển vị với <span class='code-inline'>.T</span> và kiểm tra kích thước bằng <span class='code-inline'>.shape</span>.",
      "Viết một list comprehension tạo list bình phương các số từ 0 đến 9.",
      "Thử broadcasting: cộng một con số vào một mảng NumPy và quan sát kết quả.",
      "Sinh 5 số ngẫu nhiên bằng <span class='code-inline'>np.random.rand(5)</span> với seed cố định.",
    ]
  },
  assignment:{
    title:"Bài tập — Notebook luyện tập Python",
    desc:"Một notebook có hướng dẫn từng bước, chạy trên dữ liệu thực, giúp bạn củng cố toàn bộ kiến thức tuần 1.",
    checklist:[
      "Mở notebook luyện tập (tạo mới hoặc mở bản đã cho).",
      "Đọc từng ô hướng dẫn, điền code vào chỗ trống theo chỉ dẫn.",
      "Chạy thử và sửa lỗi cho đến khi mọi cell chạy không báo lỗi.",
      "Lưu lại notebook và chạy lại toàn bộ (Runtime → Run all).",
    ]
  },
  selfcheck:[
    {q:"Chỉ số của list trong Python bắt đầu từ đâu?", opts:["1","0","-1","Bất kỳ"], a:1, why:"Python (và hầu hết ngôn ngữ lập trình) đánh chỉ số từ 0: phần tử đầu tiên là list[0]."},
    {q:"Đâu là cách đúng để tạo một từ điển (dict) rỗng?", opts:["dict()","[]","{}","empty = None"], a:2, why:"Dấu ngoặc nhọn {} tạo dict rỗng, còn [] tạo list rỗng."},
    {q:"Toán tử nào dùng cho phép nhân ma trận trong NumPy?", opts:["*","x","@","mul()"], a:2, why:"Phép nhân ma trận dùng @. Dấu * là phép nhân từng phần tử (element-wise)."},
    {q:"Khi nào nên dùng dict thay vì list?", opts:["Khi cần danh sách có thứ tự","Khi cần tra cứu nhanh theo khóa (tên)","Khi lưu số liệu","Khi cần lặp nhiều lần"], a:1, why:"Dict tra cứu theo khóa rất nhanh (như từ điển); list tra cứu theo vị trí."},
    {q:"Trong Colab, nếu bạn chạy một ô dùng biến chưa gán ở ô trên sẽ thế nào?", opts:["Tự động gán 0","Báo lỗi 'chưa định nghĩa'","Chạy bình thường","Lưu tạm"], a:1, why:"Colab chạy ô theo thứ tự; biến phải được gán trước khi dùng."},
    {q:"Với lst = [10, 20, 30, 40], lst[-1] cho kết quả gì?", opts:["10","40","Lỗi","20"], a:1, why:"Chỉ số âm đếm từ cuối: -1 là phần tử cuối cùng, tức 40."},
    {q:"Lệnh nào đúng để chèn biến x vào chuỗi?", opts:["print('Giá' + x)","print(f'Giá {x}')","print('Giá {x}')","print(giá x)"], a:1, why:"f-string với dấu {} chèn giá trị biến x vào chuỗi một cách gọn gàng."},
  ],
  quiz:[
    {q:"Biến trong Python có cần khai báo kiểu dữ liệu trước không?", opts:["Có, bắt buộc","Không, tự suy ra","Chỉ khi là số","Chỉ khi là chuỗi"], a:1, why:"Python là ngôn ngữ động — bạn chỉ cần gán giá trị, kiểu được suy ra tự động."},
    {q:"Lệnh nào in ra màn hình?", opts:["input()","print()","echo()","show()"], a:1, why:"print() in kết quả ra màn hình trong Python."},
    {q:"Vòng lặp nào chạy khi điều kiện còn đúng?", opts:["for","while","def","import"], a:1, why:"while lặp lại chừng nào điều kiện còn True; for lặp qua một chuỗi cố định."},
    {q:"Thuộc tính nào của mảng NumPy cho biết số chiều?", opts:[".size",".dtype",".shape",".length"], a:2, why:".shape trả về kích thước mỗi chiều, ví dụ (2, 3) cho mảng 2x3."},
    {q:"Với lst = [1,2,3,4,5], lst[1:3] trả về gì?", opts:["[1,2]","[2,3]","[2,3,4]","[1,2,3]"], a:1, why:"Slicing lst[start:end] lấy từ start đến end-1, nên [1:3] lấy vị trí 1 và 2 → [2,3]."},
    {q:"Kiểu dữ liệu 'động' trong Python nghĩa là gì?", opts:["Biến luôn là số","Kiểu được suy ra khi gán, không cần khai báo trước","Phải khai báo kiểu","Chỉ dùng cho chuỗi"], a:1, why:"Python suy ra kiểu từ giá trị gán, không cần khai báo trước như C/Java."},
    {q:"Kết quả của [x*2 for x in range(4)] là gì?", opts:["[0,1,2,3]","[0,2,4,6]","[2,4,6,8]","[0,0,0,0]"], a:1, why:"List comprehension nhân mỗi số 0..3 với 2: 0*2=0, 1*2=2, 2*2=4, 3*2=6 → [0,2,4,6]."},
    {q:"NumPy 'broadcasting' cho phép làm gì?", opts:["Gửi dữ liệu qua mạng","Cộng một giá trị với cả mảng tự động kéo dãn","Vẽ biểu đồ","Chỉ hoạt động với chuỗi"], a:1, why:"Broadcasting tự kéo dãn kích thước để mảng nhỏ khớp với mảng lớn, như arr + 1."},
  ]
},
{
  id:2, title:"Làm việc với dữ liệu", sub:"pandas DataFrame · làm sạch dữ liệu · matplotlib",
  lesson1:{
    title:"Buổi 1 — pandas & thống kê mô tả",
    meta:"Lý thuyết · DataFrame · đọc CSV · chọn lọc, nhóm · thống kê mô tả",
    theory:[
      "<b>pandas</b> là thư viện làm việc với dữ liệu dạng bảng. Trung tâm là <b>DataFrame</b> — một bảng có hàng và cột, giống bảng tính Excel.",
      "Bạn đọc file CSV bằng <span class='code-inline'>pd.read_csv()</span>, xem vài dòng đầu bằng <span class='code-inline'>.head()</span>.",
      "<b>Thống kê mô tả</b> sẽ theo bạn suốt khóa: trung bình (<i>mean</i>), trung vị (<i>median</i>), phương sai (<i>variance</i>), tương quan (<i>correlation</i>).",
      "Mỗi cột là một <i>Series</i> — một mảng 1 chiều với tên và kiểu dữ liệu. DataFrame là tập hợp nhiều Series xếp cạnh nhau, chia sẻ cùng chỉ số hàng.",
      "<b>Phương sai</b> đo dữ liệu phân tán quanh trung bình thế nào: lớn = số liệu trải rộng, nhỏ = co cụm. <b>Tương quan</b> (từ -1 đến 1) đo hai cột biến thiên cùng chiều hay ngược chiều — gần 0 là không liên quan.",
      "Chọn dữ liệu bằng <code>loc</code> (theo nhãn) và <code>iloc</code> (theo vị trí số). Đây là hai cách 'lấy ô' cốt lõi nhất trong pandas — phân biệt rõ để không nhầm.",
      "<code>value_counts()</code> đếm số lần xuất hiện từng giá trị của một cột phân loại — cách nhanh nhất để hiểu một cột như 'giới tính', 'thành phố'.",
      "<code>groupby</code> mạnh hơn việc chỉ tính trung bình: bạn có thể nhóm theo nhiều cột và tính nhiều thống kê cùng lúc (mean, sum, count...)."
    ],
    concept:"Trung bình là 'tổng chia cho số lượng'; trung vị là 'giá trị ở giữa'. Trung vị ít bị ảnh hưởng bởi giá trị ngoại lệ hơn.",
    code:"import pandas as pd\n\ndf = pd.DataFrame({\n    'ten': ['An','Binh','Chi','An'],\n    'diem': [8, 9, 7, 10],\n    'gioitinh': ['nam','nu','nu','nam']\n})\n\nprint(df['diem'].mean())       # 8.5 — trung bình\nprint(df['diem'].median())     # 8.5 — trung vị\nprint(df.loc[1, 'diem'])       # 9 — ô hàng 1, cột diem (theo nhãn)\nprint(df.iloc[0, 1])           # 8 — ô hàng 0, cột 1 (theo vị trí)\nprint(df['gioitinh'].value_counts())  # đếm từng giá trị\nprint(df.groupby('ten')['diem'].mean())  # điểm tb theo tên",
    checklist:[
      "Import pandas và đọc một file CSV mẫu bằng <span class='code-inline'>read_csv</span>.",
      "Dùng <span class='code-inline'>.head()</span>, <span class='code-inline'>.shape</span>, <span class='code-inline'>.info()</span> để khảo sát bảng.",
      "Chọn một cột, chọn nhiều cột, lọc hàng theo điều kiện.",
      "Phân biệt <span class='code-inline'>loc</span> (theo nhãn) và <span class='code-inline'>iloc</span> (theo vị trí).",
      "Dùng <span class='code-inline'>describe()</span> và đọc các thống kê: mean, median, std.",
      "Thực hành nhóm dữ liệu bằng <span class='code-inline'>groupby</span>.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab làm sạch dữ liệu & biểu đồ",
    meta:"Thực hành · giá trị thiếu · trùng lặp · outlier · matplotlib",
    theory:[
      "<b>Làm sạch dữ liệu</b> là bước quan trọng nhất và tốn thời gian nhất. Dữ liệu thực thường có: giá trị thiếu, bản ghi trùng lặp, điểm ngoại lệ (outlier).",
      "<b>matplotlib</b> vẽ biểu đồ. Thói quen tốt: luôn 'soi' dữ liệu bằng biểu đồ trước khi tin nó.",
      "Dữ liệu xấu vào → mô hình xấu ra (garbage in, garbage out).",
      "Xử lý giá trị thiếu theo kiểu dữ liệu: cột số thường điền bằng <i>trung bình</i> hoặc <i>trung vị</i> (ít bị outlier kéo lệch), cột phân loại thường điền bằng <i>mode</i> (giá trị xuất hiện nhiều nhất) hoặc gán một hạng mục riêng 'unknown'.",
      "Đừng tự động drop hết dòng thiếu — mất dữ liệu cũng là mất thông tin. Hãy kiểm tra dòng thiếu có phải là một nhóm đặc biệt (vd: khách chưa khai tuổi) trước khi quyết định xử lý.",
      "pandas cung cấp nhiều cách điền hơn chỉ <code>fillna</code>: <code>df.ffill()</code> điền theo giá trị phía trên (forward fill), <code>df.bfill()</code> điền từ phía dưới, và <code>df.interpolate()</code> <i>nội suy</i> giá trị dựa trên các điểm lân cận — rất hợp với dữ liệu chuỗi thời gian.",
      "Dùng <code>replace()</code> khi giá trị 'thiếu' bị ghi nhầm thành chuỗi lạ như <code>'.'</code> hoặc <code>'N/A'</code> thay vì <code>NaN</code> — cần đổi chúng về <code>np.nan</code> trước rồi mới xử lý, nếu không pandas không nhận diện là thiếu.",
      "Kiểm tra bản ghi trùng bằng <code>duplicated()</code>, bỏ bằng <code>drop_duplicates()</code>. Có thể bỏ trùng theo một tập cột con bằng <code>subset=['ten','ngay']</code> nếu chỉ muốn loại trùng trên vài cột."
    ],
    concept:"Phát hiện giá trị thiếu: df.isna().sum(). Xử lý: bỏ dòng (dropna) hoặc điền giá trị (fillna).",
    code:"import pandas as pd\nimport numpy as np\n\n# Dữ liệu có NaN và giá trị giả 'N/A'\ndf = pd.DataFrame({'gia': [1.2, np.nan, 3.0, np.nan, 2.5],\n                   'so_phong': [2, 3, 'N/A', 4, 3]})\n\nprint(df.isna().sum())          # đếm NaN mỗi cột\n\n# Đổi 'N/A' thành NaN trước khi xử lý\ndf['so_phong'] = df['so_phong'].replace('N/A', np.nan)\n\n# Điền cột số bằng trung vị (ít bị outlier kéo lệch)\ndf['gia'] = df['gia'].fillna(df['gia'].median())\n\ndf['so_phong'] = df['so_phong'].fillna(df['so_phong'].mode()[0])\n\nprint(df.duplicated().sum())    # số dòng trùng\nprint(df.drop_duplicates())     # bỏ dòng trùng",
    checklist:[
      "Tìm giá trị thiếu bằng <span class='code-inline'>isna().sum()</span> và quyết định bỏ hay điền.",
      "Tìm và xử lý các bản ghi trùng lặp bằng <span class='code-inline'>duplicated()/drop_duplicates()</span>.",
      "Phát hiện outlier bằng boxplot hoặc histogram.",
      "Thực hành điền giá trị thiếu: <span class='code-inline'>fillna</span>, <span class='code-inline'>ffill</span>, <span class='code-inline'>interpolate</span>.",
      "Dùng <span class='code-inline'>replace()</span> để đổi chuỗi giả NaN ('N/A', '.') thành NaN thật.",
      "Vẽ histogram và scatter plot bằng matplotlib.",
      "Tóm tắt 3 điều bạn học được về bộ dữ liệu sau khi vẽ.",
    ]
  },
  assignment:{
    title:"Bài tập — Phân tích khám phá (EDA)",
    desc:"Phân tích khám phá một bộ dữ liệu thực tế do bạn tự chọn.",
    checklist:[
      "Chọn một bộ dữ liệu thú vị (vd: từ Kaggle, data.gov, hoặc bộ có sẵn trong seaborn).",
      "Đọc dữ liệu, khảo sát cấu trúc, các cột, kiểu dữ liệu.",
      "Làm sạch: xử lý thiếu, trùng lặp, outlier.",
      "Vẽ ít nhất 3 biểu đồ minh họa và viết 2–3 câu nhận xét cho mỗi biểu.",
    ]
  },
  selfcheck:[
    {q:"Đâu là cách phát hiện số giá trị thiếu trong mỗi cột?", opts:["df.missing()","df.isna().sum()","df.cleandata()","df.null_count()"], a:1, why:"df.isna() trả về bảng True/False, .sum() đếm số True theo từng cột."},
    {q:"Hàm nào trả về 5 dòng dữ liệu đầu tiên?", opts:[".tail()",".describe()",".head()",".shape"], a:2, why:".head() hiển thị 5 dòng đầu (mặc định); .tail() lấy cuối."},
    {q:"Trung vị (median) so với trung bình (mean) ưu điểm gì?", opts:["Luôn lớn hơn","Chính xác hơn cho dữ liệu số","Ít bị ảnh hưởng bởi outlier","Dễ tính hơn"], a:2, why:"Trung vị là giá trị giữa nên không bị một giá trị cực đại kéo lệch."},
    {q:"Để điền giá trị thiếu cho một cột số, cách hợp lý nhất là gì?", opts:["Điền bằng chuỗi rỗng","Điền bằng trung vị hoặc trung bình","Xóa cả bảng","Không cần xử lý"], a:1, why:"Cột số thường điền bằng trung bình hoặc trung vị (ít bị outlier kéo lệch)."},
    {q:"Phương sai đo lường điều gì?", opts:["Độ phân tán dữ liệu quanh trung bình","Giá trị lớn nhất","Số lượng hàng","Kiểu dữ liệu"], a:0, why:"Phương sai lớn = dữ liệu trải rộng, nhỏ = co cụm quanh trung bình."},
    {q:"Sự khác nhau giữa loc và iloc trong pandas?", opts:["Không khác nhau","loc theo nhãn, iloc theo vị trí số","loc theo vị trí, iloc theo nhãn","loc dùng cho số, iloc cho chuỗi"], a:1, why:"loc chọn theo nhãn (tên cột/chỉ số), iloc chọn theo vị trí số nguyên."},
    {q:"Cách đếm số lần xuất hiện từng giá trị của một cột?", opts:["df['col'].mean()","df['col'].value_counts()","df['col'].head()","df['col'].shape"], a:1, why:"value_counts() đếm số lần xuất hiện mỗi giá trị trong cột."},
  ],
  quiz:[
    {q:"DataFrame trong pandas tương tự cái gì?", opts:["Một list đơn giản","Một bảng có hàng và cột","Một từ điển","Một hàm"], a:1, why:"DataFrame là cấu trúc bảng 2 chiều (hàng, cột) — giống bảng tính."},
    {q:"Lệnh nào đọc file CSV?", opts:["pd.open()","pd.read_csv()","pd.load()","df.csv()"], a:1, why:"pd.read_csv('file.csv') đọc file CSV vào DataFrame."},
    {q:"Dữ liệu 'outlier' là gì?", opts:["Giá trị thiếu","Bản ghi trùng lặp","Điểm ngoại lệ, khác thường so với còn lại","Cột không cần thiết"], a:2, why:"Outlier là điểm dữ liệu lệch hẳn khỏi phân phối chung."},
    {q:"Thư viện nào chuyên vẽ biểu đồ?", opts:["NumPy","pandas","matplotlib","scikit-learn"], a:2, why:"matplotlib là thư viện vẽ đồ thị chuẩn của Python."},
    {q:"Khi giá trị thiếu bị ghi nhầm thành chuỗi 'N/A', bước xử lý đầu tiên nên là gì?", opts:["Xóa cả bảng","Dùng replace() đổi 'N/A' thành NaN","Vẽ biểu đồ","Không xử lý"], a:1, why:"pandas chỉ nhận diện NaN thật; cần đổi chuỗi giả NaN về np.nan trước khi điền/bỏ."},
    {q:"df['gia'].ffill() có tác dụng gì?", opts:["Điền giá trị thiếu bằng giá trị phía trên","Điền bằng trung bình","Xóa cột","Sắp xếp"], a:0, why:"ffill (forward fill) điền ô trống bằng giá trị hợp lệ gần nhất phía trên — hợp với chuỗi thời gian."},
    {q:"Cột số nên được điền giá trị thiếu bằng gì để ít bị outlier kéo lệch?", opts:["Trung bình","Trung vị","Giá trị 0","Mode"], a:1, why:"Trung vị là giá trị giữa, không bị vài giá trị cực đại (outlier) làm lệch như trung bình."},
  ]
},
{
  id:3, title:"Học máy là gì?", sub:"Feature/label · train/test split · k-NN",
  lesson1:{
    title:"Buổi 1 — Khái niệm nền tảng",
    meta:"Lý thuyết · học máy là gì · feature/label · có giám sát/không giám sát · train/test",
    theory:[
      "<b>Học máy (machine learning)</b> là cách để máy tính tự rút ra quy luật từ dữ liệu, thay vì được lập trình bằng quy tắc cứng.",
      "<b>Feature (đặc trưng)</b> là các thuộc tính mô tả một mẫu (vd: số phòng, diện tích nhà). <b>Label (nhãn)</b> là đáp án bạn muốn dự đoán (vd: giá nhà).",
      "<b>Có giám sát (supervised)</b>: dữ liệu có label. <b>Không giám sát (unsupervised)</b>: dữ liệu không có label, máy tự tìm cấu trúc.",
      "Nguyên tắc vàng: chia dữ liệu thành <b>train set</b> (để học) và <b>test set</b> (để kiểm tra) — không bao giờ kiểm tra trên dữ liệu đã học.",
      "Ba kiểu bài toán điển hình: <i>phân loại</i> (label rời rạc, vd: thư rác hay không), <i>hồi quy</i> (label số liên tục, vd: giá nhà), <i>phân cụm</i> (không giám sát, không có label, máy tự gom nhóm).",
      "<b>stratify=y</b> giữ nguyên tỉ lệ các lớp khi chia. Trong bài toán phân loại, nếu lớp 'spam' chiếm 10% thì cả train và test đều giữ ~10% spam. Không dùng stratify, một lần chia may rủi có thể khiến test không có đủ mẫu của lớp hiếm — dẫn đến đánh giá sai lệch.",
      "<b>random_state</b> (vd 42) làm cho việc chia dữ liệu <i>tái lập được</i>: chạy lại code nhiều lần vẫn ra cùng một bộ train/test. Bạn sẽ cần điều này để so sánh công bằng giữa các mô hình.",
      "Với <b>chuỗi thời gian</b> (dữ liệu theo ngày/tháng), dùng <code>shuffle=False</code> để giữ thứ tự thời gian — không được 'trộn' dữ liệu quá khứ và tương lai lẫn nhau, vì sẽ làm rò rỉ thông tin."
    ],
    concept:"Train/test split: huấn luyện mô hình trên train, đo chất lượng trên test. Nếu chỉ đánh giá trên train, mô hình có vẻ 'giỏi' nhưng thật ra chỉ đang ghi nhớ (overfit).",
    code:"from sklearn.model_selection import train_test_split\n\n# Chia cho bài toán PHÂN LOẠI: giữ tỉ lệ lớp bằng stratify\ny = df['loai']  # nhãn\nX = df.drop('loai', axis=1)\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y)\n\n# Chia cho CHUỖI THỜI GIAN: giữ thứ tự, không trộn\nX_train, X_test = train_test_split(\n    X, test_size=0.2, shuffle=False)",
    checklist:[
      "Phân biệt được feature và label trong một bài toán cụ thể.",
      "Phân biệt bài toán có giám sát / không giám sát.",
      "Chia dữ liệu thành train và test bằng train_test_split.",
      "Giải thích vì sao phải có test set riêng.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Mô hình đầu tiên: k-NN",
    meta:"Lý thuyết + lab · k-Nearest Neighbors · khoảng cách Euclid · scikit-learn",
    theory:[
      "<b>k-Nearest Neighbors (k-NN)</b> là bộ phân loại đơn giản: một điểm mới được gán nhãn theo <i>k</i> điểm lân cận gần nhất. Nếu k=3 và 2/3 hàng xóm là 'mèo', điểm đó là 'mèo'.",
      "<b>Khoảng cách Euclid</b> là độ dài đường thẳng nối hai điểm — kiến thức vector ở tuần 1 phát huy tác dụng.",
      "k-NN là 'học bằng trí nhớ': không xây mô hình, chỉ lưu toàn bộ dữ liệu và so sánh khi cần.",
      "Vì k-NN so sánh khoảng cách nên <b>chuẩn hóa dữ liệu rất quan trọng</b>: nếu một cột có giá trị lớn (vd: diện tích hàng nghìn) nó sẽ 'áp đảo' cột nhỏ (vd: số phòng 1–5), khiến khoảng cách bị lệch. Đưa mọi cột về cùng thang đo trước khi đo.",
      "Chuẩn hóa bằng <code>StandardScaler</code>: đưa mỗi cột về trung bình 0, độ lệch chuẩn 1. <b>Chỉ fit trên train</b> rồi transform cả train và test — dùng tham số học từ train để áp cho test, không fit lại trên test.",
      "Chọn k: k quá nhỏ (k=1) nhạy cảm với nhiễu; k quá lớn làm trơn mất ranh giới giữa các lớp. Chọn k <i>lẻ</i> để tránh hòa phiếu trong phân loại 2 lớp. Thử vài giá trị k và cross-validation để chọn.",
      "k-NN nhìn bề ngoài đơn giản nhưng là 'bộ dò đường' tuyệt vời để nắm trọn quy trình học máy: chuẩn hóa → train/test → fit → predict → đánh giá."
    ],
    concept:"k-NN không học ra tham số — nó lưu dữ liệu và dự đoán bằng cách đo khoảng cách. K chọn bằng số lẻ để tránh hòa phiếu.",
    code:"from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import accuracy_score\n\n# BƯỚC BẮT BUỘC: chuẩn hóa trước khi đo khoảng cách\nsc = StandardScaler()\nX_train = sc.fit_transform(X_train)  # học tham số từ train\nX_test = sc.transform(X_test)        # áp cùng tham số lên test\n\nmodel = KNeighborsClassifier(n_neighbors=3)\nmodel.fit(X_train, y_train)\npred = model.predict(X_test)\nprint(accuracy_score(y_test, pred))",
    checklist:[
      "Khởi tạo KNeighborsClassifier với k=3.",
      "Chuẩn hóa dữ liệu bằng <span class='code-inline'>StandardScaler</span> (fit trên train, transform cả train/test).",
      "Fit mô hình lên dữ liệu train.",
      "Dự đoán trên test và tính accuracy.",
      "Thử thay đổi k và nhận xét accuracy thay đổi thế nào.",
      "Vẽ 2 feature lên mặt phẳng và trực quan hóa ranh giới phân loại.",
    ]
  },
  assignment:{
    title:"Bài tập — Tự xây bộ phân loại k-NN",
    desc:"Tự xây một bộ phân loại k-NN hoàn chỉnh trên bộ dữ liệu mới.",
    checklist:[
      "Chọn một bộ dữ liệu phân loại mới (vd: iris, hoặc tự chọn).",
      "Chia train/test đúng cách.",
      "Huấn luyện k-NN và đánh giá accuracy.",
      "Thử vài giá trị k, chọn k tốt nhất, giải thích lý do.",
    ]
  },
  selfcheck:[
    {q:"Bài toán nào là 'có giám sát'?", opts:["Nhóm khách hàng thành cụm","Dự đoán giá nhà từ diện tích","Tìm cấu trúc dữ liệu","Giảm số chiều"], a:1, why:"Dự đoán giá nhà (một label) là có giám sát; các bài còn lại không có label."},
    {q:"k-NN dự đoán một điểm mới bằng cách nào?", opts:["Xây đường thẳng","Nhìn k điểm lân cận gần nhất","Tính đạo hàm","Dùng mạng nơ-ron"], a:1, why:"k-NN gán nhãn theo đa số các hàng xóm gần nhất."},
    {q:"Vì sao phải có test set riêng?", opts:["Để chạy nhanh hơn","Để đo chất lượng trên dữ liệu chưa từng học","Để làm đẹp code","Bắt buộc của thư viện"], a:1, why:"Test set phản ánh khả năng của mô hình trên dữ liệu mới, không phải khả năng ghi nhớ."},
    {q:"Với k-NN, vì sao cần chuẩn hóa dữ liệu trước?", opts:["Để code ngắn hơn","Tránh cột giá trị lớn áp đảo khi đo khoảng cách","Để tăng tốc","Không cần chuẩn hóa"], a:1, why:"k-NN dùng khoảng cách; cột giá trị lớn sẽ 'áp đảo' cột nhỏ nếu không đưa về cùng thang đo."},
    {q:"Nếu chọn k quá nhỏ (k=1), mô hình có đặc điểm gì?", opts:["Quá mượt","Rất nhạy cảm với nhiễu","Luôn đúng","Chạy chậm"], a:1, why:"k=1 chỉ nhìn đúng 1 hàng xóm gần nhất, dễ bị một điểm nhiễu đánh lừa."},
    {q:"Tham số stratify=y trong train_test_split dùng để làm gì?", opts:["Tăng tốc","Giữ nguyên tỉ lệ các lớp khi chia","Xóa dữ liệu","Sắp xếp theo thứ tự"], a:1, why:"stratify=y giữ tỉ lệ các lớp trong train và test giống nhau — quan trọng với bài toán mất cân bằng."},
    {q:"Khi chia dữ liệu chuỗi thời gian, nên đặt tham số nào?", opts:["stratify=y","shuffle=False","shuffle=True","test_size=0"], a:1, why:"Với chuỗi thời gian phải giữ thứ tự thời gian (shuffle=False) để không trộn quá khứ và tương lai."},
    {q:"StandardScaler biến đổi dữ liệu như thế nào?", opts:["Về [0,1]","Về trung bình 0, độ lệch chuẩn 1","Về toàn số nguyên","Sắp xếp"], a:1, why:"StandardScaler chuẩn hóa mỗi cột về trung bình 0, độ lệch chuẩn 1."},
  ],
  quiz:[
    {q:"Label (nhãn) trong học có giám sát là gì?", opts:["Đặc trưng của dữ liệu","Đáp án muốn dự đoán","Loại model","Số lượng dữ liệu"], a:1, why:"Label là giá trị đích bạn muốn máy dự đoán (nhãn phân loại hoặc giá trị số)."},
    {q:"k-NN thuộc loại học nào?", opts:["Không giám sát","Có giám sát","Tăng cường","Học sâu"], a:1, why:"k-NN dùng label để gán nhãn nên thuộc loại có giám sát."},
    {q:"Đâu KHÔNG phải bước của quy trình học máy?", opts:["Chuẩn bị dữ liệu","Huấn luyện mô hình","Đánh giá mô hình","Viết báo cáo giấy cho mọi dự án"], a:3, why:"Viết báo cáo giấy không phải bước bắt buộc trong quy trình kỹ thuật học máy."},
    {q:"Nếu k=5 và có 4 hàng xóm là 'mèo', 1 là 'chó', điểm mới là gì?", opts:["Chó","Mèo","Không xác định","Chọn ngẫu nhiên"], a:1, why:"k-NN lấy đa số phiếu bầu: 4/5 mèo nên điểm mới được gán là mèo."},
    {q:"Khi k là số chẵn trong phân loại 2 lớp, có thể gặp vấn đề gì?", opts:["Chạy chậm","Hòa phiếu 1-1","Mất dữ liệu","Không có vấn đề"], a:1, why:"Với k chẵn (vd k=2), hai lớp có thể mỗi lớp 1 phiếu → hòa. Chọn k lẻ tránh điều này."},
    {q:"Trong k-NN, StandardScaler được fit trên tập nào?", opts:["Toàn bộ dữ liệu","Chỉ trên train","Chỉ trên test","Không cần fit"], a:1, why:"Fit chỉ trên train để tránh để thông tin test ảnh hưởng — nếu fit trên cả X sẽ là data leakage."},
    {q:"Mục đích của chuẩn hóa dữ liệu trước k-NN là gì?", opts:["Tăng tốc","Tránh cột có giá trị lớn áp đảo khi đo khoảng cách","Giảm số dòng","Làm code ngắn"], a:1, why:"k-NN dùng khoảng cách Euclid; cột giá trị lớn sẽ chiếm ưu thế trong khoảng cách nếu không chuẩn hóa."},
  ]
},
{
  id:4, title:"Hồi quy — Dự đoán con số", sub:"Linear regression · loss function · gradient descent",
  lesson1:{
    title:"Buổi 1 — Hồi quy tuyến tính & gradient descent",
    meta:"Lý thuyết · đường khớp dữ liệu · loss function · lăn xuống dốc",
    theory:[
      "<b>Hồi quy tuyến tính</b> tìm một đường thẳng (trong nhiều chiều là một mặt phẳng/hyperplane) 'khớp' nhất với dữ liệu: y = a·x + b.",
      "<b>Loss function (hàm mất mát)</b> đo độ sai lệch giữa dự đoán và giá trị thật. Hồi quy thường dùng <i>MSE</i> (bình phương sai số trung bình).",
      "<b>Gradient descent</b>: tưởng tượng bạn đứng trên đồi và 'lăn xuống dốc' — mỗi bước đi theo hướng dốc nhất để tìm đáy (chỗ loss nhỏ nhất). Đạo hàm cho bạn biết hướng dốc đó.",
      "<b>MSE</b> bình phương sai số để: (1) mọi sai số đều dương (không bị triệt tiêu), (2) phạt sai số lớn nặng hơn sai số nhỏ — vì bình phương làm sai số lớn tăng mạnh.",
      "<b>Learning rate</b> (tốc độ học) quyết định bước nhảy mỗi lần: quá lớn thì 'nhảy vọt' qua đáy (loss không hội tụ, thậm chí loạn), quá nhỏ thì hội tụ chậm. Đây là siêu tham số quan trọng bạn sẽ thấy ở mọi thuật toán tối ưu.",
      "Với dữ liệu nhiều chiều, 'đường thẳng' trở thành một mặt phẳng: y = a₁x₁ + a₂x₂ + … + b. Ý tưởng tìm hệ số vẫn y hệt, chỉ nhiều tham số hơn. scikit-learn tự giải quyết việc tối ưu này, bạn chỉ cần đọc kết quả."
    ],
    concept:"Gradient descent tinh chỉnh tham số a, b theo từng bước nhỏ, mỗi bước giảm loss một chút, cho đến khi tìm được bộ tham số tối ưu.",
    code:"from sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Dữ liệu giả: x (diện tích) → y (giá)\nX = np.array([[50],[80],[100],[130],[160]])\ny = np.array([1.2, 2.0, 2.6, 3.4, 4.1])\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\nprint('Hệ số a (độ dốc):', model.coef_[0])\nprint('Chặn b:', model.intercept_)\n\n# Dự đoán cho căn nhà 120m2\ngia = model.predict([[120]])\nprint('Giá dự đoán 120m2:', gia[0])",
    checklist:[
      "Huấn luyện LinearRegression trên dữ liệu train.",
      "Đọc và hiểu ý nghĩa hệ số model.coef_ và intercept_.",
      "Dự đoán trên test, vẽ dự đoán so với giá trị thật.",
      "Tính MSE và RMSE bằng tay hoặc sklearn.",
      "Giải thích learning rate ảnh hưởng đến hội tụ thế nào.",
      "Dự đoán cho một mẫu mới (chưa thấy) bằng predict.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab dự đoán giá nhà",
    meta:"Thực hành · MAE, RMSE · đọc hiểu hệ số",
    theory:[
      "<b>MAE</b> (Mean Absolute Error): trung bình của |dự đoán − thật|. <b>RMSE</b>: căn bậc hai của MSE. Cả hai càng nhỏ càng tốt.",
      "Đọc hệ số: với y = a·x + b, hệ số a cho biết 'khi x tăng 1 đơn vị, y thay đổi a đơn vị'. Điều này giúp hiểu yếu tố nào ảnh hưởng mạnh đến giá nhà.",
      "Hệ số âm/dương cũng có ý nghĩa: hệ số dương nghĩa là feature tăng thì dự đoán tăng; hệ số âm nghĩa là feature tăng thì dự đoán giảm (vd: nhà càng cũ giá càng thấp).",
      "<b>R² (R-squared)</b> cho biết mô hình giải thích được bao nhiêu % biến thiên của giá: R² = 1 là hoàn hảo, R² = 0 nghĩa là mô hình chẳng hơn gì việc đoán bằng trung bình. Đọc R² cùng với RMSE để có bức tranh đầy đủ.",
      "Đọc RMSE trong đơn vị của mục tiêu: nếu RMSE = 2.1 tỷ trên dự đoán giá nhà, nghĩa là sai số trung bình ~2.1 tỷ — dễ diễn giải hơn so với MSE bị bình phương. So sánh RMSE của mô hình với độ lệch chuẩn của giá để biết mô hình 'khá' tới đâu.",
      "Luôn so sánh RMSE của mô hình với độ lệch chuẩn của biến mục tiêu: nếu RMSE nhỏ hơn hẳn std, mô hình bắt được nhiều quy luật; nếu RMSE ~ std, mô hình gần như chỉ đoán trung bình."
    ],
    concept:"RMSE phạt các sai số lớn nặng hơn MAE (do bình phương). Nếu có vài sai số rất lớn, RMSE sẽ cao hơn hẳn MAE.",
    code:"from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score\nmae = mean_absolute_error(y_test, y_pred)\nrmse = mean_squared_error(y_test, y_pred, squared=False)\nr2 = r2_score(y_test, y_pred)\nprint(f'MAE={mae:.2f}, RMSE={rmse:.2f}, R2={r2:.2f}')",
    checklist:[
      "Chọn bộ dữ liệu giá nhà (hoặc tự tạo).",
      "Chia train/test, huấn luyện LinearRegression.",
      "Tính MAE, RMSE và R², so sánh các chỉ số.",
      "Đọc hệ số và giải thích yếu tố nào ảnh hưởng mạnh nhất đến giá.",
      "So sánh RMSE với độ lệch chuẩn của giá để đánh giá mô hình.",
    ]
  },
  assignment:{
    title:"Mini-project 1 — Mô hình hồi quy trên dữ liệu nhà đất",
    desc:"Dự án nhỏ trọn vẹn (thay cho bài tập thường lệ). Nộp notebook kèm bản thuyết minh ngắn.",
    checklist:[
      "Chọn bộ dữ liệu nhà đất có cột mục tiêu là giá.",
      "Làm sạch dữ liệu (thiếu, trùng, outlier).",
      "Chia train/test, huấn luyện hồi quy tuyến tính.",
      "Đánh giá bằng MAE và RMSE.",
      "Viết thuyết minh ngắn: yếu tố nào ảnh hưởng giá, mô hình tốt ra sao.",
    ]
  },
  selfcheck:[
    {q:"Loss function dùng để làm gì?", opts:["Làm đẹp biểu đồ","Đo độ sai lệch giữa dự đoán và thật","Chọn dữ liệu","In kết quả"], a:1, why:"Hàm mất mát định lượng độ sai; mục tiêu là làm cho nó càng nhỏ càng tốt."},
    {q:"RMSE so với MAE khác biệt chính là gì?", opts:["RMSE luôn bằng MAE","RMSE phạt sai số lớn nặng hơn","MAE luôn lớn hơn","Không khác nhau"], a:1, why:"RMSE bình phương sai số nên các sai số lớn bị phạt nặng hơn."},
    {q:"Vì sao MSE bình phương sai số (thay vì chỉ lấy giá trị tuyệt đối)?", opts:["Để mọi sai số dương và phạt sai số lớn nặng hơn","Để số nhỏ hơn","Vì bắt buộc","Để đẹp"], a:0, why:"Bình phương biến mọi sai số thành dương (không triệt tiêu) và phạt sai số lớn mạnh hơn."},
    {q:"Trong y = a·x + b, hệ số a âm có nghĩa gì?", opts:["x tăng thì y tăng","x tăng thì y giảm","Mô hình sai","Chặn âm"], a:1, why:"Hệ số âm: feature tăng thì dự đoán giảm (vd: nhà càng cũ giá càng thấp)."},
    {q:"R² (R-squared) cho biết điều gì?", opts:["Tốc độ chạy","Mô hình giải thích được bao nhiêu % biến thiên của mục tiêu","Số feature","Độ phức tạp"], a:1, why:"R² = 1 là hoàn hảo, R² = 0 nghĩa là mô hình chẳng hơn gì việc đoán bằng trung bình."},
    {q:"Nếu RMSE gần bằng độ lệch chuẩn của biến mục tiêu, điều đó nghĩa là gì?", opts:["Mô hình rất tốt","Mô hình gần như chỉ đoán trung bình","Mô hình overfit","Lỗi code"], a:1, why:"RMSE ~ std nghĩa là sai số của mô hình ngang mức biến thiên tự nhiên — mô hình chưa bắt được quy luật."},
  ],
  quiz:[
    {q:"Hồi quy tuyến tính dự đoán loại biến nào?", opts:["Nhãn rời rạc","Giá trị số liên tục","Danh mục","Chuỗi văn bản"], a:1, why:"Hồi quy dự đoán con số (giá liên tục), ví dụ giá nhà."},
    {q:"Gradient descent là kỹ thuật để làm gì?", opts:["Chia dữ liệu","Tìm tham số làm loss nhỏ nhất","Vẽ biểu đồ","Làm sạch dữ liệu"], a:1, why:"Gradient descent từng bước điều chỉnh tham số theo hướng giảm loss."},
    {q:"MSE viết tắt của gì?", opts:["Mean Squared Error","Maximum Set Error","Minimum Standard Error","Median Sample Estimate"], a:0, why:"MSE = Mean Squared Error, trung bình bình phương sai số."},
    {q:"Trong y = a·x + b, hệ số a có ý nghĩa gì?", opts:["Giá trị bắt đầu","Độ dốc — x tăng 1 thì y đổi bao nhiêu","Sai số","Số lượng mẫu"], a:1, why:"a là độ dốc (hệ số góc): thể hiện mức thay đổi của y khi x tăng 1 đơn vị."},
    {q:"Learning rate quá lớn có hậu quả gì?", opts:["Hội tụ chậm","Nhảy vọt qua đáy, loss không hội tụ","Luôn tốt","Không ảnh hưởng"], a:1, why:"Bước nhảy lớn khiến gradient descent 'nhảy vượt' qua điểm tối ưu, loss dao động hoặc loạn."},
    {q:"Trong gradient descent, đạo hàm cho biết điều gì?", opts:["Giá trị loss","Hướng dốc nhất để đi","Số bước","Kết quả dự đoán"], a:1, why:"Đạo hàm (gradient) chỉ hướng tăng; ta đi ngược lại theo hướng dốc nhất để giảm loss."},
  ]
},
{
  id:5, title:"Phân loại — Dự đoán nhãn", sub:"Logistic regression · confusion matrix · F1",
  lesson1:{
    title:"Buổi 1 — Hồi quy logistic & xác suất",
    meta:"Lý thuyết · sigmoid · decision boundary · xác suất căn bản",
    theory:[
      "<b>Hồi quy logistic</b> dùng để phân loại (dự đoán nhãn), dù tên có 'hồi quy'. Nó đưa ra một xác suất từ 0 đến 1 qua hàm <b>sigmoid</b>.",
      "<b>Sigmoid</b> biến một con số bất kỳ thành xác suất trong khoảng [0,1]. Nếu xác suất ≥ 0.5, dự đoán thuộc nhãn dương.",
      "<b>Decision boundary</b> là ranh giới phân chia các vùng dự đoán khác nhau trên mặt phẳng dữ liệu.",
      "Đọc xác suất: con số '0.7' có nghĩa mô hình tin 70% mẫu thuộc nhãn dương — không phải độ chắc chắn tuyệt đối.",
      "Vì sao dùng <b>xác suất</b> thay vì nhãn cứng? Vì cho phép đặt <i>ngưỡng</i> linh hoạt: trong phát hiện gian lận, bạn có thể đổi ngưỡng xuống 0.3 để 'bắt' nhiều ca hơn (chấp nhận nhiều báo động giả) — xác suất giữ lại độ mịn đó, nhãn cứng thì mất.",
      "Trong phân loại nhiều lớp (vd 10 chữ số), logistic regression dùng hàm <b>softmax</b> thay cho sigmoid: nó cho ra một vector xác suất cho mỗi lớp, tổng bằng 1, và lớp có xác suất cao nhất là đáp án.",
      "Công thức sigmoid: <code>σ(z) = 1 / (1 + e⁻ᶻ)</code>. Khi <code>z = 0</code>, σ = 0.5 (điểm chính giữa, trên decision boundary); z dương lớn tiến về 1, z âm lớn tiến về 0."
    ],
    concept:"Sigmoid đưa ra xác suất. Ngưỡng mặc định 0.5 để quyết định nhãn — nhưng bạn có thể đổi ngưỡng để cân bằng lỗi.",
    code:"from sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n\n# predict_proba: xác suất cho từng lớp\nprob = model.predict_proba(X_test)   # cột 0 = P(không gian lận), cột 1 = P(gian lận)\n# predict: nhãn theo ngưỡng mặc định 0.5\npred = model.predict(X_test)\n\nprint('Xác suất 5 mẫu đầu:', prob[:5])\nprint('Accuracy:', accuracy_score(y_test, pred))\n\n# Đổi ngưỡng để 'bắt' nhiều ca hơn: coi là gian lận khi P >= 0.3\npred_low = (prob[:, 1] >= 0.3).astype(int)\nprint('Số ca bắt được khi hạ ngưỡng:', pred_low.sum())",
    checklist:[
      "Huấn luyện LogisticRegression trên dữ liệu phân loại.",
      "Dùng predict_proba để xem xác suất, không chỉ nhãn.",
      "Hiểu hàm sigmoid biến số thành xác suất 0-1.",
      "Thử đổi ngưỡng (0.3 / 0.7) và quan sát số ca phân loại thay đổi.",
      "Vẽ decision boundary cho 2 feature.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab bộ lọc thư rác & chỉ số đánh giá",
    meta:"Thực hành · confusion matrix · precision, recall, F1",
    theory:[
      "<b>Confusion matrix</b>: bảng so sánh dự đoán với thực tế — True Positive, False Positive, True Negative, False Negative.",
      "<b>Precision</b>: trong các điểm mô hình gọi là 'spam', bao nhiêu phần đúng là spam. <b>Recall</b>: trong các điểm thực sự là spam, mô hình bắt được bao nhiêu phần.",
      "<b>Accuracy</b> có thể đánh lừa khi dữ liệu mất cân bằng (vd 99% không spam). Nếu model luôn đoán 'không spam' thì accuracy 99% nhưng vô dụng.",
      "Chọn chỉ số theo hậu quả của lỗi: phát hiện ung thư thì <i>recall</i> quan trọng (không bỏ sót ca bệnh), còn quảng cáo spam thì <i>precision</i> quan trọng (không làm phiền người dùng bằng thư hợp lệ).",
      "<b>F1 score</b> là trung bình điều hòa của precision và recall — dùng khi bạn muốn một con số duy nhất cân bằng cả hai, đặc biệt hữu ích trên dữ liệu mất cân bằng.",
      "Công thức F1: <code>F1 = 2·(precision·recall) / (precision + recall)</code>. Trung bình điều hòa nghiêng về giá trị nhỏ hơn: nếu precision 1.0 mà recall 0.2 thì F1 = 0.33 (không cao), phản ánh trung thực rằng một chiều kém.",
      "Khi chọn chỉ số, hãy hỏi 'hậu quả của mỗi loại lỗi là gì': bỏ sót ca bệnh (FN) nghiêm trọng hơn báo động giả (FP) → ưu tiên recall; gửi nhầm thư hợp lệ vào thùng rác (FP) khó chịu hơn để sót thư rác (FN) → ưu tiên precision."
    ],
    concept:"Dữ liệu mất cân bằng: nhìn precision & recall, không chỉ accuracy. F1 = trung bình điều hòa của precision và recall — cân bằng cả hai.",
    code:"from sklearn.metrics import confusion_matrix, precision_score, recall_score, f1_score, accuracy_score\n\nprint('Confusion matrix:')\nprint(confusion_matrix(y_test, pred))  # [[TN, FP], [FN, TP]]\nprint('Accuracy :', accuracy_score(y_test, pred))\nprint('Precision:', precision_score(y_test, pred))\nprint('Recall   :', recall_score(y_test, pred))\nprint('F1       :', f1_score(y_test, pred))",
    checklist:[
      "Huấn luyện bộ phân loại thư rác (spam) — hoặc dữ liệu 2 lớp bất kỳ.",
      "In confusion matrix và đọc 4 ô.",
      "Tính precision, recall, F1.",
      "Thử với dữ liệu mất cân bằng và giải thích vì sao accuracy sai lầm.",
    ]
  },
  assignment:{
    title:"Bài tập — Phân loại dữ liệu mất cân bằng",
    desc:"Bộ phân loại trên dữ liệu mất cân bằng, kèm phân tích ngắn về việc chọn chỉ số đánh giá cho đúng.",
    checklist:[
      "Chọn bộ dữ liệu mất cân bằng (vd: phát hiện gian lận, thư rác).",
      "Huấn luyện mô hình phân loại.",
      "Tính accuracy, precision, recall, F1.",
      "Viết phân tích: chỉ số nào quan trọng với bài toán này và vì sao.",
    ]
  },
  selfcheck:[
    {q:"Precision trả lời câu hỏi nào?", opts:["Bao nhiêu spam thật bị bắt","Trong các dự đoán 'spam', bao nhiêu đúng","Số thư tổng cộng","Tốc độ chạy"], a:1, why:"Precision = TP/(TP+FP): trong những gì model gọi là dương, mấy cái đúng."},
    {q:"Khi nào accuracy gây hiểu lầm?", opts:["Dữ liệu cân bằng","Dữ liệu mất cân bằng","Dữ liệu nhỏ","Luôn đáng tin"], a:1, why:"Khi một lớp chiếm áp đảo, model chỉ đoán lớp đó là đã đạt accuracy cao mà vô dụng."},
    {q:"Trong phát hiện bệnh ung thư, chỉ số nào thường được ưu tiên?", opts:["Precision","Recall (không bỏ sót ca bệnh)","Accuracy","Tốc độ"], a:1, why:"Bỏ sót ca bệnh nguy hiểm hơn báo động giả, nên ưu tiên recall cao."},
    {q:"F1 score dùng để làm gì?", opts:["Chọn k","Cân bằng giữa precision và recall","Vẽ biểu đồ","Chia dữ liệu"], a:1, why:"F1 là trung bình điều hòa của precision và recall, cho một con số cân bằng cả hai."},
    {q:"Nếu precision = 1.0 nhưng recall = 0.2, F1 score gần giá trị nào nhất?", opts:["0.9","0.33","1.0","0.5"], a:1, why:"F1 dùng trung bình điều hòa, nghiêng về giá trị nhỏ: F1 ≈ 2·(1·0.2)/(1+0.2) ≈ 0.33."},
    {q:"Hàm nào thay thế sigmoid khi phân loại nhiều lớp?", opts:["Tanh","Softmax","ReLU","Giữ sigmoid"], a:1, why:"Softmax cho ra vector xác suất cho mỗi lớp (tổng = 1), dùng trong phân loại nhiều lớp."},
  ],
  quiz:[
    {q:"Hồi quy logistic thường dùng để làm gì?", opts:["Dự đoán giá số liên tục","Phân loại thành nhãn","Vẽ biểu đồ","Chọn feature"], a:1, why:"Logistic regression đưa ra xác suất rồi quy về nhãn — dùng cho phân loại."},
    {q:"Hàm sigmoid biến một số thành khoảng nào?", opts:["(-∞, ∞)","[0, 1]","[0, 100]","[-1, 1]"], a:1, why:"Sigmoid nén mọi giá trị thực về trong khoảng (0,1), diễn giải như xác suất."},
    {q:"Confusion matrix dùng để làm gì?", opts:["Lưu dữ liệu","So sánh dự đoán với thực tế","Chọn k","Tính tốc độ"], a:1, why:"Confusion matrix cho biết model đoán đúng/sai ở từng lớp (TP/FP/TN/FN)."},
    {q:"F1 score là gì?", opts:["Trung bình cộng precision và recall","Trung bình điều hòa của precision và recall","Accuracy","RMSE"], a:1, why:"F1 cân bằng precision và recall, hữu ích khi dữ liệu mất cân bằng."},
    {q:"Trong phân loại thư rác, nếu bạn ghét việc gửi nhầm thư hợp lệ vào thùng rác (FP), bạn ưu tiên chỉ số nào?", opts:["Recall","Precision","Accuracy","F1 luôn"], a:1, why:"FP = đánh dấu nhầm thư tốt là rác. Muốn giảm FP → cần precision cao (chỉ gọi là spam khi chắc chắn)."},
    {q:"Hạ ngưỡng dự đoán từ 0.5 xuống 0.3 trong phát hiện gian lận sẽ gây ra điều gì?", opts:["Bắt được ít ca hơn","Bắt được nhiều ca hơn nhưng nhiều báo động giả","Không đổi","Mô hình lỗi"], a:1, why:"Ngưỡng thấp nghĩa là dễ 'kết tội' là gian lận hơn: bắt được nhiều ca thật (recall tăng) nhưng cũng nhiều FP hơn."},
  ]
},
{
  id:6, title:"Đánh giá và cải thiện mô hình", sub:"Overfitting · cross-validation · regularization",
  lesson1:{
    title:"Buổi 1 — Overfitting, bias–variance & cross-validation",
    meta:"Lý thuyết · tuần 'đáng tiền' nhất · regularization",
    theory:[
      "<b>Overfitting</b>: mô hình quá khớp dữ liệu train (thuộc lòng) nên dở trên dữ liệu mới. <b>Underfitting</b>: quá đơn giản, chưa nắm được quy luật.",
      "<b>Bias–variance tradeoff</b>: bias cao = mô hình đơn giản quá (thiếu sót); variance cao = quá nhạy với dữ liệu train (overfit). Cân bằng hai thứ này là nghệ thuật.",
      "<b>Cross-validation</b>: chia dữ liệu thành nhiều phần, lần lượt dùng mỗi phần làm test, phần còn lại làm train — đánh giá ổn định hơn một lần chia duy nhất.",
      "<b>Regularization</b>: thêm hình phạt vào loss để giữ tham số nhỏ, chống overfit.",
      "Trực giác bias–variance: như bắn cung vào hồng tâm — <i>bias cao</i> là bắn trượt đều một phía (hệ thống lệch), <i>variance cao</i> là các phát bắn phân tán lộn xộn quanh chục vòng. Ta muốn cả hai đều thấp, nhưng thường phải đánh đổi.",
      "<b>L1 (Lasso)</b> và <b>L2 (Ridge)</b> là hai cách regularization phổ biến. L2 cộng thêm <code>α·‖w‖²</code> vào loss, kéo mọi hệ số về gần 0 (nhưng không bằng 0). L1 cộng thêm <code>α·‖w‖₁</code>, có thể đưa hệ số <b>về đúng 0</b> — tức là tự chọn bớt feature. Chọn L1 khi muốn rút gọn feature, L2 khi muốn giữ tất cả nhưng nhỏ lại.",
      "Dấu hiệu cần regularization hoặc cross-validation: sai số trên train thấp hơn nhiều so với test. Thêm hình phạt giữ hệ số nhỏ, làm mô hình 'dè dặt' hơn và khái quát tốt hơn.",
      "Tham số <code>alpha</code> (hoặc <code>C</code> trong logistic) điều khiển mức phạt: alpha lớn → phạt nặng, hệ số bị ép nhỏ (đơn giản hơn); alpha quá lớn sẽ underfit. Dùng cross-validation để chọn alpha hợp lý."
    ],
    concept:"Dấu hiệu overfit: loss train rất thấp nhưng loss test cao. Cross-validation giúp bạn phát hiện điều này đáng tin cậy hơn.",
    code:"from sklearn.model_selection import cross_val_score\nfrom sklearn.linear_model import Ridge, Lasso\n\n# Cross-validation cho một mô hình\nscores = cross_val_score(model, X, y, cv=5)\nprint(scores)              # 5 điểm, mỗi phần (fold)\nprint('TB:', scores.mean())\n\n# Regularization: L2 (Ridge) vs L1 (Lasso)\nridge = Ridge(alpha=1.0)     # giữ mọi feature, kéo hệ số nhỏ\nlasso = Lasso(alpha=0.1)     # có thể đưa hệ số về 0 (chọn feature)\nridge.fit(X_train, y_train)\nlasso.fit(X_train, y_train)\nprint('Ridge coef:', ridge.coef_)\nprint('Lasso coef:', lasso.coef_)  # nhiều số 0 nếu alpha đủ lớn",
    checklist:[
      "Nhận biết overfitting và underfitting qua biểu đồ loss train/test.",
      "Giải thích bias–variance tradeoff bằng lời.",
      "Dùng cross_val_score với cv=5 để đánh giá mô hình.",
      "So sánh Ridge (L2) và Lasso (L1): sự khác biệt ở hệ số.",
      "Áp dụng regularization và so sánh độ chính xác trên test.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab chuẩn hóa & feature engineering",
    meta:"Thực hành · chuẩn hóa dữ liệu · tạo đặc trưng · tinh chỉnh siêu tham số",
    theory:[
      "<b>Chuẩn hóa (scaling)</b>: đưa các cột số về cùng thang đo (vd 0-1 hoặc trung bình 0) để model không bị cột có giá trị lớn áp đảo.",
      "<b>Feature engineering</b>: tạo đặc trưng mới từ đặc trưng cũ (vd: diện tích = dài × rộng) để giúp model học tốt hơn.",
      "<b>Siêu tham số (hyperparameter)</b>: các nút vặn của model (k, alpha, depth...). Tinh chỉnh bằng thử nhiều giá trị và cross-validation.",
      "Khác biệt then chốt: <i>tham số (parameter)</i> là thứ mô hình tự học từ dữ liệu (hệ số hồi quy, trọng số mạng), còn <i>siêu tham số (hyperparameter)</i> là nút vặn bạn tự đặt trước khi huấn luyện (k, depth, alpha).",
      "Feature engineering thường tạo bước nhảy lớn hơn cả đổi thuật toán: một đặc trưng mới đúng bản chất (vd: diện tích thay vì dài và rộng riêng lẻ) giúp mô hình 'nhìn' vấn đề đúng hơn.",
      "Vì sao feature đúng bản chất lại mạnh: với 'dài' và 'rộng', mô hình phải tự 'nghĩ ra' phép nhân; với 'diện tích = dài × rộng', bạn đã cung cấp sẵn mối quan hệ phi tuyến quan trọng, giúp mô hình tuyến tính đơn giản cũng dùng được."
    ],
    concept:"Grid search: thử nhiều tổ hợp siêu tham số + cross-validation, chọn tổ hợp cho điểm tốt nhất trên validation.",
    code:"from sklearn.preprocessing import StandardScaler\nfrom sklearn.model_selection import GridSearchCV\nfrom sklearn.neighbors import KNeighborsClassifier\n\n# BƯỚC 1: chuẩn hóa — fit TRÊN TRAIN, transform cả train & test\nsc = StandardScaler()\nX_train = sc.fit_transform(X_train)\nX_test = sc.transform(X_test)  # dùng tham số từ train!\n\n# BƯỚC 2: tinh chỉnh siêu tham số bằng GridSearchCV\ngrid = {'n_neighbors': [3, 5, 7, 9]}\ngs = GridSearchCV(KNeighborsClassifier(), grid, cv=5)\ngs.fit(X_train, y_train)\nprint('k tốt nhất:', gs.best_params_)\nprint('Điểm CV tốt nhất:', gs.best_score_)",
    checklist:[
      "Chuẩn hóa dữ liệu bằng StandardScaler (fit trên train, transform cả train và test).",
      "Tạo ít nhất 1 feature mới (vd diện tích = dài × rộng) và xem có cải thiện không.",
      "Thử vài siêu tham số bằng GridSearchCV.",
      "Ghi lại điều gì hiệu quả, điều gì không (cho bài tập).",
    ]
  },
  assignment:{
    title:"Bài tập — Cải thiện một mô hình cơ sở",
    desc:"Nhận một mô hình cơ sở và cải thiện nó; ghi lại điều gì hiệu quả, điều gì không.",
    checklist:[
      "Bắt đầu từ một mô hình cơ sở (baseline).",
      "Thử cải thiện: chuẩn hóa, feature engineering, tinh chỉnh siêu tham số.",
      "Đo lường sự thay đổi bằng cross-validation.",
      "Viết nhật ký: thay đổi nào giúp, thay đổi nào không và vì sao.",
    ]
  },
  selfcheck:[
    {q:"Dấu hiệu điển hình của overfitting?", opts:["Loss train thấp, loss test cao","Cả hai đều thấp","Loss train cao, loss test thấp","Mô hình chạy chậm"], a:0, why:"Overfit: model thuộc lòng train (loss thấp) nhưng khái quát kém (loss test cao)."},
    {q:"Cross-validation giúp gì?", opts:["Làm dữ liệu to hơn","Đánh giá mô hình ổn định hơn","Vẽ biểu đồ đẹp hơn","Không có tác dụng"], a:1, why:"Chia thành nhiều fold, mỗi fold làm test một lần, lấy trung bình để giảm ngẫu nhiên."},
    {q:"Bias cao tương ứng với tình trạng nào?", opts:["Mô hình quá phức tạp","Mô hình quá đơn giản (thiếu sót hệ thống)","Mô hình hoàn hảo","Dữ liệu sạch"], a:1, why:"Bias cao = model đơn giản quá, bắn trượt đều một phía (underfit)."},
    {q:"Tham số (parameter) và siêu tham số (hyperparameter) khác nhau thế nào?", opts:["Giống nhau","Tham số do model tự học, siêu tham số do ta đặt","Ngược lại","Không liên quan"], a:1, why:"Tham số (hệ số, trọng số) model tự học; siêu tham số (k, depth) ta chỉnh trước khi huấn luyện."},
    {q:"L1 (Lasso) khác L2 (Ridge) ở điểm cốt lõi nào?", opts:["Không khác","L1 có thể đưa hệ số về 0 (chọn feature), L2 chỉ kéo nhỏ","L1 nhanh hơn","L2 luôn tốt hơn"], a:1, why:"L1 có thể làm hệ số về đúng 0 → tự chọn bớt feature; L2 kéo hệ số về gần 0 nhưng không bằng 0."},
    {q:"GridSearchCV kết hợp những gì?", opts:["Thử nhiều tổ hợp siêu tham số + cross-validation","Chỉ thử 1 tham số","Vẽ biểu đồ","Làm sạch dữ liệu"], a:1, why:"GridSearchCV lướt qua các tổ hợp siêu tham số, mỗi tổ hợp đánh giá bằng cross-validation, chọn tốt nhất."},
  ],
  quiz:[
    {q:"Underfitting xảy ra khi nào?", opts:["Mô hình quá phức tạp","Mô hình quá đơn giản, không bắt được quy luật","Dữ liệu quá lớn","Không dùng library"], a:1, why:"Underfit: model quá đơn giản, sai số cao cả trên train lẫn test."},
    {q:"Regularization giúp làm gì?", opts:["Tăng tốc độ","Chống overfitting bằng cách phạt tham số lớn","Thêm dữ liệu","Vẽ đồ thị"], a:1, why:"Regularization thêm hình phạt vào loss để giữ tham số nhỏ, giảm overfit."},
    {q:"Chuẩn hóa dữ liệu là để làm gì?", opts:["Xóa dữ liệu","Đưa các cột về cùng thang đo","Tăng số mẫu","In kết quả"], a:1, why:"Scaling giúp các feature có cùng độ lớn, tránh cột giá trị lớn áp đảo."},
    {q:"Siêu tham số là gì?", opts:["Giá trị model tự học","Nút vặn ta chỉnh trước khi huấn luyện","Kết quả dự đoán","Label của dữ liệu"], a:1, why:"Siêu tham số (như k, alpha) do ta đặt, không phải do model học."},
    {q:"Nếu alpha (mức phạt) quá lớn trong Ridge, điều gì xảy ra?", opts:["Overfit","Underfit (hệ số bị ép quá nhỏ)","Không đổi","Chạy nhanh hơn"], a:1, why:"Phạt quá mạnh khiến mọi hệ số gần 0, mô hình quá đơn giản → underfit."},
    {q:"Tạo feature 'diện tích = dài × rộng' là một ví dụ về?", opts:["Regularization","Feature engineering","Data leakage","Chuẩn hóa"], a:1, why:"Tạo đặc trưng mới từ đặc trưng cũ để giúp mô hình học tốt hơn gọi là feature engineering."},
  ]
},
{
  id:7, title:"Cây quyết định và Ensemble", sub:"Decision tree · random forest · boosting",
  lesson1:{
    title:"Buổi 1 — Cây quyết định & random forest",
    meta:"Lý thuyết · tự đặt câu hỏi · trí tuệ đám đông · boosting",
    theory:[
      "<b>Cây quyết định (decision tree)</b> học cách đặt các câu hỏi 'nếu... thì' để chia dữ liệu thành nhánh, cho tới khi mỗi nhánh thuần nhất về nhãn.",
      "<b>Random forest</b> = nhiều cây quyết định, mỗi cây nhìn một phần ngẫu nhiên của dữ liệu và feature, rồi 'bỏ phiếu' lấy đa số. Sức mạnh nằm ở 'trí tuệ đám đông'.",
      "<b>Gradient boosting</b> (mức ý tưởng): xây cây nối tiếp nhau, mỗi cây sau sửa lỗi của cây trước. Thường cho kết quả rất tốt trên dữ liệu bảng.",
      "Cây quyết định dễ đọc hiểu ('nếu diện tích > 100 và phòng ≥ 4 thì giá cao'), gọi là <i>interpretable</i>. Đây là lý do cây vẫn được dùng trong những lĩnh vực cần giải thích rõ như y tế, tài chính.",
      "Random forest giảm overfit so với một cây đơn: vì mỗi cây nhìn một 'lát' ngẫu nhiên khác nhau, sai của chúng khác nhau, và lấy đa số sẽ 'hòa tan' bớt sai. Đây là ý tưởng <i>bagging</i> (bootstrap aggregating).",
      "Khi cây quyết định câu hỏi chia nhánh, nó chọn feature làm 'giảm tạp chất' (impurity) nhiều nhất — như Gini impurity hay entropy. Càng chia xong mà mỗi nhánh càng thuần một nhãn thì càng tốt.",
      "<b>Max depth</b> giới hạn độ sâu cây: depth lớn → cây càng phức tạp, dễ overfit; depth nhỏ → cây đơn giản, dễ underfit. Đây là siêu tham số quan trọng nhất của cây."
    ],
    concept:"Forest > 1 cây: nhiều cây độc lập, mỗi cây sai ở chỗ khác nhau, lấy đa số thì sai bị 'hòa tan' — robust hơn một cây đơn lẻ.",
    code:"from sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score\n\n# Một cây quyết định\ntree = DecisionTreeClassifier(max_depth=5, random_state=42)\ntree.fit(X_train, y_train)\nprint('Cây đơn:', accuracy_score(y_test, tree.predict(X_test)))\n\n# Random forest — nhiều cây, bỏ phiếu đa số\nforest = RandomForestClassifier(n_estimators=100, random_state=42)\nforest.fit(X_train, y_train)\nprint('Forest :', accuracy_score(y_test, forest.predict(X_test)))\nprint('Feature importance:', forest.feature_importances_)",
    checklist:[
      "Huấn luyện DecisionTreeClassifier đơn lẻ.",
      "Huấn luyện RandomForestClassifier (n_estimators=100).",
      "So sánh độ chính xác giữa 1 cây và forest.",
      "Thử thay đổi max_depth của cây và nhận xét overfit.",
      "Đọc feature_importances_ và nêu feature quan trọng nhất.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab 'giải đấu mô hình'",
    meta:"Thực hành · feature importance · so sánh mô hình công bằng",
    theory:[
      "<b>So sánh công bằng</b>: mọi mô hình phải dùng cùng train/test, cùng cách chuẩn hóa, cùng chỉ số đánh giá — nếu không không thể so sánh được.",
      "<b>Feature importance</b> cho biết đặc trưng nào đóng góp nhiều nhất vào quyết định — giúp hiểu và giải thích mô hình.",
      "Đừng chỉ nhìn một lần chia train/test — kết quả có thể may rủi. Kết hợp cross-validation cho mỗi mô hình rồi so sánh điểm trung bình (và độ phân tán) giữa các mô hình để chọn đáng tin cậy.",
      "Không có mô hình 'thắng tuyệt đối' mọi bài toán. Trên dữ liệu bảng, cây & ensemble (forest, boosting) thường rất mạnh; nhưng cũng có lúc mô hình đơn giản đủ tốt và dễ giải thích hơn — hãy dựa vào số liệu và nhu cầu thực tế.",
      "<b>Gradient boosting</b> (mức ý tưởng): thay vì xây cây độc lập (bagging), boosting xây <i>tuần tự</i> — cây sau học để sửa lỗi của cây trước. Thường cho kết quả rất tốt trên dữ liệu bảng (các mô hình như XGBoost, LightGBM rất phổ biến)."
    ],
    concept:"Chuẩn so sánh: dùng cùng dữ liệu chia (train/test), cùng pipeline, cùng metric — rồi mới rút kết luận mô hình nào hơn.",
    code:"# Chuẩn bị đánh giá so sánh nhiều mô hình — cùng pipeline, cùng metric\nfrom sklearn.model_selection import cross_val_score\nfrom sklearn.metrics import accuracy_score\n\nmodels = {\n    'kNN'    : knn,\n    'LogReg' : logreg,\n    'Tree'   : tree,\n    'Forest' : forest\n}\nfor name, m in models.items():\n    # 1) test set\n    m.fit(X_train, y_train)\n    acc = accuracy_score(y_test, m.predict(X_test))\n    # 2) cross-validation để ổn định hơn\n    cv = cross_val_score(m, X, y, cv=5).mean()\n    print(f'{name:7s} test={acc:.3f}  cv={cv:.3f}')",
    checklist:[
      "Chọn một bộ dữ liệu bảng (tabular).",
      "Chuẩn bị train/test chung cho mọi mô hình.",
      "So sánh ≥3 mô hình (k-NN, logistic, cây, forest) trên cùng metric.",
      "Kết hợp cross-validation khi so sánh, không chỉ một lần chia.",
      "Đọc feature importance và diễn giải.",
    ]
  },
  assignment:{
    title:"Mini-project 2 — So sánh ≥3 mô hình",
    desc:"So sánh ít nhất ba mô hình trên cùng một bài toán và bảo vệ lựa chọn của bạn (thay cho bài tập thường lệ).",
    checklist:[
      "Chọn bài toán và bộ dữ liệu.",
      "Chuẩn bị pipeline chung (chia, chuẩn hóa) cho mọi mô hình.",
      "So sánh ≥3 mô hình bằng cùng metric.",
      "Chọn mô hình tốt nhất và bảo vệ lựa chọn bằng số liệu.",
      "Viết thuyết minh ngắn kèm notebook.",
    ]
  },
  selfcheck:[
    {q:"Random forest mạnh nhờ điều gì?", opts:["Một cây cực sâu","Kết hợp nhiều cây, lấy đa số","Chỉ một thuật toán","Dữ liệu lớn"], a:1, why:"Nhiều cây độc lập giảm overfit và tăng độ ổn định nhờ đa số phiếu."},
    {q:"Để so sánh mô hình công bằng, cần gì?", opts:["Dùng dữ liệu khác nhau","Cùng train/test, cùng metric","Đoán ngẫu nhiên","Chọn model tùy hứng"], a:1, why:"Mọi mô hình phải được đánh giá trên cùng điều kiện mới so sánh được."},
    {q:"Vì sao cây quyết định được ưa dùng trong y tế, tài chính?", opts:["Vì chạy nhanh","Vì dễ đọc hiểu và giải thích quyết định","Vì luôn chính xác nhất","Vì miễn phí"], a:1, why:"Cây đưa ra quy tắc if-then dễ hiểu (interpretable), quan trọng khi cần giải thích quyết định."},
    {q:"Điều gì giúp random forest giảm overfit so với một cây đơn?", opts:["Một cây to hơn","Nhiều cây nhìn phần dữ liệu khác nhau, sai được hòa tan","Ít feature hơn","Chạy nhanh hơn"], a:1, why:"Mỗi cây sai ở chỗ khác nhau, lấy đa số làm sai bị triệt tiêu — ý tưởng bagging."},
    {q:"max_depth quá lớn trong cây quyết định gây ra điều gì?", opts:["Underfit","Overfit","Không ảnh hưởng","Chạy nhanh"], a:1, why:"Cây càng sâu càng thuộc lòng chi tiết dữ liệu train → overfit."},
    {q:"Gradient boosting xây cây khác random forest thế nào?", opts:["Không khác","Cây độc lập như forest","Cây xây tuần tự, cây sau sửa lỗi cây trước","Chỉ 1 cây"], a:1, why:"Boosting xây cây nối tiếp, mỗi cây học để sửa lỗi của cây trước; forest xây cây độc lập."},
  ],
  quiz:[
    {q:"Cây quyết định hoạt động bằng cách nào?", opts:["Nhớ toàn bộ dữ liệu","Đặt câu hỏi 'nếu... thì' để chia dữ liệu","Tính khoảng cách","Dùng sigmoid"], a:1, why:"Cây chia dữ liệu thành nhánh bằng các quy tắc if-then cho tới khi thuần nhãn."},
    {q:"'Trí tuệ đám đông' trong random forest nghĩa là gì?", opts:["Dùng nhiều mạng","Kết hợp nhiều cây và lấy đa số","Một cây lớn","Tăng tốc CPU"], a:1, why:"Forest kết hợp nhiều cây độc lập, mỗi cây bỏ một phiếu, đa số thắng."},
    {q:"feature_importances_ trong forest cho biết gì?", opts:["Số lượng dữ liệu","Đặc trưng nào quan trọng với mô hình","Tốc độ chạy","Thời gian huấn luyện"], a:1, why:"Nó đo mức đóng góp của từng feature vào quyết định của model."},
    {q:"Gradient boosting khác random forest thế nào (mức ý tưởng)?", opts:["Không khác","Cây nối tiếp, cây sau sửa lỗi cây trước","Chỉ dùng 1 cây","Không dùng cây"], a:1, why:"Boosting xây cây tuần tự, mỗi cây học để sửa lỗi của cây trước."},
    {q:"feature_importances_ trong forest giúp làm gì?", opts:["Vẽ biểu đồ","Biết feature nào đóng góp nhiều nhất vào quyết định","Chia dữ liệu","Tính tốc độ"], a:1, why:"Nó đo mức đóng góp của từng feature, giúp hiểu và giải thích mô hình."},
    {q:"Để so sánh hai mô hình công bằng, cần gì?", opts:["Dùng dữ liệu khác nhau","Cùng train/test, cùng pipeline, cùng metric","Chọn mô hình khó hơn","Đoán ngẫu nhiên"], a:1, why:"Mọi mô hình phải được đánh giá trong cùng điều kiện thì kết quả mới so sánh được."},
  ]
},
{
  id:8, title:"Học không giám sát", sub:"k-means · PCA · trực quan hóa 2D",
  lesson1:{
    title:"Buổi 1 — Phân cụm k-means",
    meta:"Lý thuyết · học không nhãn · chọn số cụm k · phân cụm phân cấp",
    theory:[
      "<b>Học không giám sát</b>: dữ liệu không có label, máy tự tìm cấu trúc ẩn. Phân cụm (clustering) nhóm các điểm tương tự nhau.",
      "<b>k-means</b>: chọn k tâm cụm, gán mỗi điểm vào cụm gần nhất, cập nhật lại tâm cụm, lặp lại cho tới khi ổn định.",
      "<b>Chọn số cụm k</b>: dùng phương pháp 'khuỷu tay' (elbow) — vẽ tổng khoảng cách trong cụm theo k, chọn điểm gấp khúc.",
      "<b>Phân cụm phân cấp</b> (trực giác): gộp dần các cụm gần nhau thành cây (dendrogram), không cần chọn k trước.",
      "Thuật toán k-means từng bước: (1) chọn k tâm cụm ngẫu nhiên, (2) gán mỗi điểm vào tâm gần nhất, (3) đặt lại mỗi tâm cụm ở vị trí trung bình của các điểm đã gán, (4) lặp bước 2–3 cho tới khi các cụm không đổi.",
      "k-means nhạy với điểm khởi đầu và giá trị ngoại lệ — một outlier lệch xa có thể kéo tâm cụm đi. scikit-learn mặc định dùng <code>init='k-means++'</code> (chọn tâm khởi đầu cách xa nhau) và <code>n_init=10</code> (chạy 10 lần, giữ tốt nhất) để giảm bớt sự nhạy cảm này.",
      "<b>Inertia</b> đo tổng khoảng cách bình phương từ mỗi điểm đến tâm cụm của nó — càng nhỏ nghĩa là các điểm càng co cụm chặt. Elbow method vẽ inertia theo k và chọn k ở điểm 'gập'.",
      "<b>Silhouette score</b> (từ -1 đến 1) đo mức tách biệt giữa các cụm: gần 1 là cụm rõ ràng tách biệt, gần 0 là cụm chồng lấn. Bổ sung cho elbow khi khuỷu tay không rõ ràng.",
      "Giới hạn của k-means: giả định cụm hình cầu, kích thước tương đương, và <b>cần tự chọn k trước</b>. Với cụm dài/không đều, các thuật toán như DBSCAN làm tốt hơn. Vì dựa trên khoảng cách, k-means <b>cần chuẩn hóa dữ liệu</b> trước."
    ],
    concept:"k-means cần tự chọn k. Elbow method: chọn k ở chỗ đường cong 'gập' — thêm cụm nữa không còn giảm nhiều.",
    code:"from sklearn.cluster import KMeans\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import silhouette_score\nimport matplotlib.pyplot as plt\n\n# Chuẩn hóa trước khi phân cụm\nX = StandardScaler().fit_transform(X)\n\nkmeans = KMeans(n_clusters=3, n_init=10, random_state=42)\nlabels = kmeans.fit_predict(X)\ncenters = kmeans.cluster_centers_  # tọa độ tâm cụm\nprint('Inertia:', kmeans.inertia_)\nprint('Silhouette:', silhouette_score(X, labels))\n\n# Elbow method: vẽ inertia theo k\ninertias = []\nfor k in range(1, 10):\n    km = KMeans(n_clusters=k, n_init=10, random_state=42).fit(X)\n    inertias.append(km.inertia_)\nplt.plot(range(1,10), inertias, 'bo-')\nplt.xlabel('k'); plt.ylabel('Inertia'); plt.title('Elbow method')\nplt.show()",
    checklist:[
      "Huấn luyện KMeans với k=3 và gán nhãn cụm.",
      "Vẽ các điểm, tô màu theo cụm, đánh dấu tâm cụm.",
      "Thử nhiều giá trị k và vẽ elbow curve (inertia theo k).",
      "Tính silhouette score cho vài giá trị k.",
      "Chuẩn hóa dữ liệu trước khi phân cụm và giải thích vì sao.",
      "Giải thích ý nghĩa các cụm tìm được.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — PCA & trực quan hóa 2D",
    meta:"Lý thuyết + lab · hướng trải rộng nhất · giảm chiều",
    theory:[
      "<b>PCA (Principal Component Analysis)</b> tìm những 'hướng trải rộng nhất' của dữ liệu (hướng có phương sai lớn nhất).",
      "Giảm chiều: chiếu dữ liệu nhiều chiều xuống ít chiều (thường 2D) giữ lại phần lớn phương sai — để trực quan hóa và nén dữ liệu.",
      "Tích vô hướng như một phép chiếu: dùng để chiếu mỗi điểm xuống một trục (principal component).",
      "PC1 là hướng dữ liệu 'loang' ra nhiều nhất (phương sai lớn nhất), PC2 là hướng vuông góc với PC1 có phương sai lớn thứ hai, cứ thế. Giữ lại 2–3 PC đầu là nắm được phần lớn thông tin.",
      "explained_variance_ratio_ cho biết mỗi PC giữ được bao nhiêu % thông tin. Nếu 2 PC đầu đã giữ 95%, bạn tự tin nén dữ liệu 100 chiều xuống 2D mà mất rất ít.",
      "PCA nhạy cảm với thang đo: một feature có phương sai lớn (vd thu nhập hàng chục triệu) sẽ 'lấn át' các feature khác trong việc tìm hướng chính. Vì vậy <b>nên chuẩn hóa (StandardScaler) trước khi chạy PCA</b>.",
      "PCA không chỉ để trực quan hóa: nó còn dùng để <i>giảm nhiễu</i> (bỏ các chiều phương sai nhỏ ít thông tin), <i>nén dữ liệu</i>, và <i>tiền xử lý</i> trước khi đưa vào mô hình tốn kém."
    ],
    concept:"PCA giúp 'nhìn thấy' dữ liệu nhiều chiều bằng cách nén về 2D, giữ được thông tin quan trọng nhất (phương sai).",
    code:"from sklearn.decomposition import PCA\nfrom sklearn.preprocessing import StandardScaler\n\n# Chuẩn hóa trước khi PCA (quan trọng)\nX = StandardScaler().fit_transform(X)\n\npca = PCA(n_components=2)\nX_2d = pca.fit_transform(X)\nprint('Phương sai giải thích:', pca.explained_variance_ratio_)\nprint('Tổng giữ lại:', pca.explained_variance_ratio_.sum())\n\n# Dữ liệu nhiều chiều giờ chỉ còn 2 chiều để vẽ/tô màu theo cụm\nimport matplotlib.pyplot as plt\nplt.scatter(X_2d[:, 0], X_2d[:, 1], c=labels, cmap='viridis')\nplt.xlabel('PC1'); plt.ylabel('PC2'); plt.show()",
    checklist:[
      "Chuẩn hóa dữ liệu bằng StandardScaler trước khi PCA.",
      "Dùng PCA nén dữ liệu xuống 2 chiều.",
      "Vẽ dữ liệu trong không gian 2D, tô màu theo cụm hoặc label.",
      "Đọc explained_variance_ratio_ — bao nhiêu thông tin giữ lại.",
      "Kết hợp phân cụm rồi trực quan hóa bằng PCA.",
    ]
  },
  assignment:{
    title:"Bài tập — Phân cụm & trực quan hóa",
    desc:"Phân cụm một bộ dữ liệu, trực quan hóa và viết diễn giải ngắn: các cụm ấy nói lên điều gì?",
    checklist:[
      "Chọn bộ dữ liệu không có nhãn (hoặc bỏ label đi).",
      "Chọn k hợp lý bằng elbow method.",
      "Phân cụm bằng k-means.",
      "Giảm chiều bằng PCA và vẽ 2D tô màu theo cụm.",
      "Viết diễn giải: các cụm đại diện cho nhóm gì?",
    ]
  },
  selfcheck:[
    {q:"k-means thuộc loại học nào?", opts:["Có giám sát","Không giám sát","Tăng cường","Học sâu"], a:1, why:"k-means nhóm dữ liệu không cần label — không giám sát."},
    {q:"Elbow method giúp làm gì?", opts:["Chọn số cụm k","Chọn model","Tăng tốc","Làm sạch dữ liệu"], a:0, why:"Vẽ tổng khoảng cách trong cụm theo k, chọn điểm gấp khúc (khuỷu tay)."},
    {q:"Bước đầu tiên của thuật toán k-means là gì?", opts:["Tính đạo hàm","Chọn k tâm cụm","Vẽ biểu đồ","In kết quả"], a:1, why:"k-means bắt đầu bằng việc chọn k tâm cụm, rồi gán điểm, cập nhật tâm, lặp lại."},
    {q:"explained_variance_ratio_ trong PCA cho biết gì?", opts:["Số lượng dữ liệu","Mỗi trục giữ được bao nhiêu % thông tin","Tốc độ chạy","Số cụm"], a:1, why:"Chỉ số này cho biết mỗi principal component giữ lại bao nhiêu phương sai (thông tin)."},
    {q:"Inertia trong k-means đo điều gì?", opts:["Số cụm","Tổng khoảng cách từ điểm đến tâm cụm của nó","Số chiều","Tốc độ"], a:1, why:"Inertia nhỏ = các điểm co cụm chặt; vẽ theo k để dùng elbow method."},
    {q:"Silhouette score gần 1 nghĩa là gì?", opts:["Các cụm chồng lấn","Các cụm tách biệt rõ ràng","Mô hình lỗi","Dữ liệu lớn"], a:1, why:"Silhouette gần 1 = cụm tách biệt tốt; gần 0 = cụm chồng lấn."},
  ],
  quiz:[
    {q:"Mục tiêu của phân cụm là gì?", opts:["Dự đoán nhãn","Nhóm các điểm tương tự lại với nhau","Hồi quy giá","Chuẩn hóa"], a:1, why:"Clustering gom những điểm giống nhau thành cụm, không cần nhãn."},
    {q:"k-means 'k' là gì?", opts:["Số lượng dữ liệu","Số cụm muốn tạo","Số chiều","Số feature"], a:1, why:"k là số cụm (nhóm) mà bạn yêu cầu thuật toán tạo ra."},
    {q:"PCA dùng để làm gì?", opts:["Giảm số chiều dữ liệu","Phân loại","Dự đoán giá","Lọc thư rác"], a:0, why:"PCA giảm chiều, giữ lại hướng trải rộng nhất của dữ liệu."},
    {q:"Trực quan hóa dữ liệu nhiều chiều thường làm gì?", opts:["Xóa bớt dữ liệu","Dùng PCA đưa về 2D rồi vẽ","In bảng","Không làm được"], a:1, why:"Giảm về 2 chiều bằng PCA giúp vẽ được trên mặt phẳng."},
    {q:"Vì sao nên chuẩn hóa dữ liệu trước khi chạy PCA?", opts:["Để nhanh hơn","Tránh feature có phương sai lớn lấn át khi tìm hướng chính","Bắt buộc của thư viện","Để giảm số cụm"], a:1, why:"Feature có phương sai lớn sẽ chiếm ưu thế trong việc xác định PC; chuẩn hóa giúp công bằng."},
    {q:"Một giới hạn của k-means là gì?", opts:["Chạy quá nhanh","Giả định cụm hình cầu và cần chọn k trước","Không cần dữ liệu","Chỉ dùng cho hồi quy"], a:1, why:"k-means giả định cụm hình cầu, kích thước tương đương và phải biết trước số cụm k."},
  ]
},
{
  id:9, title:"Mạng nơ-ron — không đáng sợ", sub:"Perceptron · layer · nhận dạng chữ số viết tay",
  lesson1:{
    title:"Buổi 1 — Từ logistic regression đến perceptron",
    meta:"Lý thuyết · perceptron · layer, hàm kích hoạt · chain rule",
    theory:[
      "<b>Perceptron</b>: một nơ-ron đơn giản nhận nhiều đầu vào, nhân mỗi cái với trọng số, cộng lại, qua hàm kích hoạt để ra kết quả.",
      "<b>Layer (tầng)</b>: nhiều nơ-ron xếp thành một lớp. Mạng nơ-ron = xếp nhiều layer nối tiếp nhau.",
      "<b>Hàm kích hoạt</b> (ReLU, sigmoid...) thêm tính phi tuyến — giúp mạng học những mối quan hệ không phải đường thẳng.",
      "<b>Chain rule (quy tắc chuỗi)</b>: huấn luyện mạng = gradient descent áp dụng lần lượt qua từng tầng (backpropagation), gói gọn trong một ý tưởng.",
      "<b>hidden_layer_sizes</b> quyết định kiến trúc mạng: <code>hidden_layer_sizes=(64, 32)</code> nghĩa là hai tầng ẩn — tầng đầu 64 nơ-ron, tầng sau 32 nơ-ron. Tăng số nơ-ron/tầng cho mạng 'sức chứa' lớn hơn (nhưng dễ overfit).",
      "<b>Learning rate</b> kiểm soát bước nhảy cập nhật trọng số: quá lớn mạng không hội tụ, quá nhỏ hội tụ chậm. scikit-learn dùng bộ tối ưu có sẵn (lbfgs, adam, sgd) nên bạn không cần chỉnh tay, nhưng cần hiểu ý tưởng.",
      "Ý tưởng lớn: mạng 'đa tầng' (deep) chỉ là nhiều layer phi tuyến nối tiếp nhau. Nhờ tính phi tuyến, mạng có thể học những biên giới quyết định cong queo phức tạp — điều mà một đường thẳng hay mặt phẳng đơn giản không làm được.",
      "Tại sao 'sâu' hơn lại mạnh? Mỗi layer học những đặc trưng từ thô đến tinh: layer đầu học cạnh/đường, layer giữa học hình khối, layer cuối tổng hợp thành đối tượng. Đây là nền móng của deep learning."
    ],
    concept:"Mạng nơ-ron = 'hồi quy logistic nối nhiều tầng'. Huấn luyện vẫn là gradient descent (tuần 4), chỉ là lan truyền ngược qua từng layer.",
    code:"# Minh họa perceptron đơn giản bằng numpy\nimport numpy as np\n\ndef sigmoid(x):\n    return 1/(1 + np.exp(-x))\n\n# Perceptron: nhận 2 đầu vào, nhân trọng số, cộng, qua kích hoạt\nw = np.array([0.5, -0.3])   # trọng số\nb = 0.1                     # bias\nx = np.array([2, 1])        # đầu vào\n\nz = np.dot(w, x) + b        # tổng có trọng số\nout = sigmoid(z)            # hàm kích hoạt\nprint('z =', z, '→ out =', round(out, 3))",
    checklist:[
      "Hiểu perceptron: đầu vào → nhân trọng số → tổng → kích hoạt.",
      "Nhận biết các hàm kích hoạt phổ biến (sigmoid, ReLU).",
      "Hiểu mạng = nhiều layer xếp chồng.",
      "Hiểu huấn luyện mạng vẫn dùng gradient descent.",
      "Giải thích hidden_layer_sizes quyết định kiến trúc mạng thế nào.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab nhận dạng chữ số viết tay",
    meta:"Thực hành · quan sát loss giảm · con đường deep learning",
    theory:[
      "Dữ liệu <b>chữ số viết tay</b> (MNIST): ảnh 28×28 chữ số 0-9. Mỗi ảnh là 784 pixel = 784 feature.",
      "Xây một mạng nơ-ron nhỏ nhiều layer, huấn luyện để nhận diện chữ số.",
      "Quan sát <b>loss giảm dần</b> theo từng epoch — bằng chứng mạng đang học. Đây là hình dung con đường deep learning phía trước.",
      "Mỗi <i>epoch</i> là một lượt mạng quét toàn bộ dữ liệu huấn luyện. Nhiều epoch = mạng 'ngắm' dữ liệu nhiều lần để chỉnh trọng số — nhưng quá nhiều epoch có thể gây overfit (thuộc lòng train).",
      "Chuẩn hóa pixel về khoảng 0–1 (chia cho 255) giúp mạng hội tụ nhanh và ổn định hơn — cùng một ý tưởng chuẩn hóa dữ liệu bạn đã học ở tuần 6.",
      "<b>max_iter</b> giới hạn số epoch tối đa. Nếu loss chưa hội tụ khi đạt max_iter (cảnh báo 'did not converge'), tăng max_iter lên. Quan sát <code>model.loss_curve_</code> để xem loss giảm qua từng epoch."
    ],
    concept:"Khi loss giảm theo epoch là mạng đang học. Đừng sợ 'deep' — nó chỉ là nhiều layer nối tiếp nhau, huấn luyện vẫn bằng gradient descent.",
    code:"from sklearn.datasets import load_digits\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neural_network import MLPClassifier\nimport matplotlib.pyplot as plt\n\ndigits = load_digits()\nX, y = digits.data / 16.0, digits.target   # chuẩn hóa pixel về [0,1]\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)\n\nmodel = MLPClassifier(hidden_layer_sizes=(64, 32),\n                      max_iter=50, random_state=42)\nmodel.fit(X_train, y_train)\nprint('Accuracy:', model.score(X_test, y_test))\n\n# Quan sát loss giảm qua các epoch — bằng chứng mạng đang học\nplt.plot(model.loss_curve_)\nplt.xlabel('Epoch'); plt.ylabel('Loss'); plt.title('Loss giảm theo epoch')\nplt.show()",
    checklist:[
      "Tải dữ liệu chữ số (vd: sklearn.datasets.load_digits hoặc MNIST).",
      "Chia train/test, chuẩn hóa pixel (0-1).",
      "Huấn luyện MLPClassifier với vài hidden layer.",
      "Quan sát loss giảm theo các epoch (model.loss_curve_).",
      "Đánh giá accuracy trên test.",
      "Thử tăng max_iter khi gặp cảnh báo không hội tụ.",
    ]
  },
  assignment:{
    title:"Mini-project 3 — Tự chọn",
    desc:"Bạn tự chọn: mở rộng mạng nhận dạng chữ số, hoặc một nghiên cứu phân cụm (thay cho bài tập thường lệ).",
    checklist:[
      "Chọn 1 trong 2 hướng (mạng nơ-ron HOẶC phân cụm nâng cao).",
      "Thực hiện đầy đủ: dữ liệu, mô hình, đánh giá.",
      "Thử thay đổi kiến trúc/siêu tham số để cải thiện.",
      "Viết thuyết minh ngắn kèm notebook.",
    ]
  },
  selfcheck:[
    {q:"Perceptron làm gì với đầu vào?", opts:["Chỉ lưu trữ","Nhân trọng số, cộng lại, qua kích hoạt","Sắp xếp","Vẽ biểu đồ"], a:1, why:"Perceptron tính tổng có trọng số rồi đưa qua hàm kích hoạt để ra kết quả."},
    {q:"Hàm kích hoạt thêm gì cho mạng?", opts:["Tính phi tuyến","Nhiều dữ liệu","Tốc độ","Không gì cả"], a:0, why:"Tính phi tuyến giúp mạng học quan hệ phức tạp, không chỉ đường thẳng."},
    {q:"Vì sao mạng 'sâu' (nhiều layer) có thể học quan hệ phức tạp?", opts:["Vì nhanh hơn","Mỗi layer học đặc trưng từ thô đến tinh, có tính phi tuyến","Vì dùng nhiều RAM","Vì ngẫu nhiên"], a:1, why:"Mỗi layer xây dựng đặc trưng từ thô (cạnh) đến tinh (đối tượng) nhờ tính phi tuyến."},
    {q:"Mỗi 'epoch' trong huấn luyện mạng là gì?", opts:["Một hàm","Một lượt mạng quét toàn bộ dữ liệu huấn luyện","Một tham số","Một layer"], a:1, why:"Epoch = một lượt mạng xem hết dữ liệu train để chỉnh trọng số."},
    {q:"hidden_layer_sizes=(64, 32) nghĩa là gì?", opts:["64 nơ-ron đầu vào, 32 đầu ra","Hai tầng ẩn: tầng 1 có 64 nơ-ron, tầng 2 có 32","64 epoch, 32 feature","Không có ý nghĩa"], a:1, why:"Tuple mô tả số nơ-ron của từng tầng ẩn: (64, 32) là hai tầng ẩn, lần lượt 64 và 32 nơ-ron."},
    {q:"Quan sát điều gì chứng tỏ mạng đang học?", opts:["Loss tăng","Loss giảm dần qua các epoch","Accuracy luôn 0","Không đổi"], a:1, why:"Loss giảm dần qua epoch cho thấy trọng số đang được chỉnh đúng hướng."},
  ],
  quiz:[
    {q:"Mạng nơ-ron nhiều layer là gì?", opts:["Một thuật toán khác hẳn","Nhiều layer nối tiếp nhau","Chỉ một perceptron","Một cây quyết định"], a:1, why:"Deep learning = nhiều layer xếp chồng, huấn luyện vẫn bằng gradient descent."},
    {q:"Quan sát điều gì chứng tỏ mạng đang học?", opts:["Loss tăng","Loss giảm dần qua epoch","Accuracy luôn 0","Không đổi"], a:1, why:"Loss giảm dần qua từng epoch cho thấy mạng đang cải thiện."},
    {q:"Ảnh 28×28 pixel tương đương bao nhiêu feature?", opts:["28","56","784","7840"], a:2, why:"28×28 = 784 pixel, mỗi pixel là một feature cho mạng."},
    {q:"Backpropagation dùng quy tắc gì?", opts:["Chain rule (quy tắc chuỗi)","Quy tắc cộng","Quy tắc nhân","Không dùng gì"], a:0, why:"Backprop truyền gradient ngược qua các tầng nhờ quy tắc chuỗi."},
    {q:"Nếu MLP cảnh báo 'did not converge' khi đạt max_iter, nên làm gì?", opts:["Bỏ cuộc","Tăng max_iter để mạng hội tụ thêm","Giảm số feature","Dùng ít epoch hơn"], a:1, why:"Cảnh báo không hội tụ nghĩa là mạng cần thêm epoch để loss giảm về ngưỡng chấp nhận."},
  ]
},
{
  id:10, title:"Học máy trong thực tế & khởi động đồ án", sub:"Data leakage · đạo đức · lập nhóm đồ án",
  lesson1:{
    title:"Buổi 1 — Quy trình, data leakage, đạo đức",
    meta:"Lý thuyết · nhìn lại toàn trình · tai nạn kinh điển · bias",
    theory:[
      "<b>Nhìn lại toàn bộ quy trình</b>: thu thập dữ liệu → làm sạch → khám phá → huấn luyện → đánh giá → triển khai. Từng bước đều có bẫy.",
      "<b>Data leakage</b>: thông tin từ tương lai/test lọt vào quá trình huấn luyện — mô hình 'gian lận', điểm test cao giả tạo. Ví dụ kinh điển: chuẩn hóa trên toàn bộ dữ liệu (gồm test) trước khi chia.",
      "<b>Đạo đức & thiên lệch (bias)</b>: mô hình học từ dữ liệu có thành kiến sẵn sẽ tái tạo thành kiến. Cần hiểu những chỗ mô hình thất bại ngoài đời thực.",
      "Ví dụ data leakage kinh điển: dùng <b>toàn bộ dữ liệu</b> (gồm cả test) để tính trung bình/phương sai khi chuẩn hóa, hoặc dùng cột 'tương lai' (vd: tổng doanh thu tháng sau) làm feature khi dự đoán doanh thu tháng này — mô hình nhìn thấy đáp án trước.",
      "Vì sao mô hình thiên lệch nguy hiểm: nếu dữ liệu tuyển dụng cũ chỉ có ứng viên nam được ưu tiên, mô hình sẽ 'học' được sự thiên lệch đó và tái tạo nó ở quy mô lớn hơn. Hiểu bối cảnh dữ liệu quan trọng không kém việc tối ưu accuracy.",
      "<b>Mẫu chuẩn hoá với Pipeline</b>: thay vì nhớ nhớ quên quên việc 'fit scaler chỉ trên train', hãy gói chuẩn hóa + mô hình vào một <code>Pipeline</code>. Khi cross-validation, pipeline tự đảm bảo mỗi fold chỉ fit trên phần train của fold đó — chống leakage tự động.",
      "<b>Thực tế triển khai</b>: điểm test tốt chưa chắc mô hình hoạt động tốt ngoài đời. Sự khác biệt giữa dữ liệu lúc huấn luyện và dữ liệu thực tế (data drift) là nguyên nhân phổ biến khiến mô hình xuống cấp theo thời gian — cần theo dõi và huấn luyện lại định kỳ."
    ],
    concept:"Data leakage làm điểm số ảo. Dấu hiệu: accuracy test 'quá tốt' đến mức đáng ngờ. Luôn chuẩn hóa/khớp mọi thứ chỉ trên train.",
    code:"from sklearn.preprocessing import StandardScaler\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.model_selection import cross_val_score\n\n# ĐÚNG: fit scaler chỉ trên train\nsc = StandardScaler().fit(X_train)\nX_train = sc.transform(X_train)\nX_test = sc.transform(X_test)\n\n# SAI (leakage): fit trên toàn bộ rồi mới chia\n# sc = StandardScaler().fit(X); X = sc.transform(X); ...\n\n# CÁCH AN TOÀN: Pipeline gói chuẩn hóa + model → chống leakage tự động\npipe = Pipeline([\n    ('sc', StandardScaler()),\n    ('knn', KNeighborsClassifier(n_neighbors=3))\n])\nscores = cross_val_score(pipe, X, y, cv=5)  # mỗi fold tự fit scaler trên train\nprint('CV (an toàn):', scores.mean())",
    checklist:[
      "Ôn lại toàn bộ quy trình học máy qua một sơ đồ.",
      "Nhận biết các trường hợp data leakage kinh điển.",
      "Giải thích vì sao phải fit chỉ trên train.",
      "Dùng Pipeline gói chuẩn hóa + mô hình để chống leakage.",
      "Thảo luận một ví dụ bias trong mô hình ngoài đời thực.",
      "Liệt kê một rủi ro data drift khi triển khai mô hình.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Workshop đồ án",
    meta:"Thực hành · lập nhóm · chọn dữ liệu & câu hỏi · chốt đề cương",
    theory:[
      "Đồ án cuối là phần chấm 40% — nhóm bạn chọn bộ dữ liệu, đặt câu hỏi nghiên cứu, và chạy một vòng học máy hoàn chỉnh.",
      "<b>Chọn bộ dữ liệu</b>: đủ lớn, có ý nghĩa, bạn hiểu được bối cảnh. <b>Câu hỏi nghiên cứu</b> rõ ràng: 'Dự đoán X từ Y'.",
      "Lời khuyên chọn đề tài: chọn thứ bạn <i>thực sự tò mò</i> và có chút bối cảnh sẵn — dễ kiên trì và dễ giải thích kết quả hơn là một bộ dữ liệu 'ngầu' mà bạn không hiểu. Một câu hỏi nhỏ làm trọn vẹn đáng giá hơn câu hỏi to mà làm dở.",
      "Cột mốc quan trọng: đặt trước <i>chỉ số đánh giá</i> và một <i>đường cơ sở (baseline)</i> ngay từ đầu — để biết mô hình cuối của bạn tốt hơn 'mô hình đơn giản nhất có thể' tới mức nào.",
      "<b>Baseline</b> là mô hình 'ngây thơ' đơn giản nhất, vd: đoán nhãn chiếm đa số (classification) hoặc đoán bằng giá trị trung bình (regression). Nếu mô hình phức tạp của bạn không thắng được baseline thì có vấn đề.",
      "Khi chọn dataset, hãy tự hỏi: dữ liệu có đủ lớn không, có cột mục tiêu rõ ràng không, tôi có hiểu ý nghĩa từng cột không, và có nguy cơ data leakage không (vd cột 'tương lai')?"
    ],
    concept:"Điểm đồ án dành cho cách làm đúng đắn (đánh giá trung thực, lập luận, quyết định có căn cứ), không phải con số accuracy đẹp.",
    code:"# Baseline cho bài toán phân loại: đoán nhãn chiếm đa số\nfrom sklearn.dummy import DummyClassifier\nfrom sklearn.metrics import accuracy_score\n\nbase = DummyClassifier(strategy='most_frequent')\nbase.fit(X_train, y_train)\nprint('Baseline accuracy:', accuracy_score(y_test, base.predict(X_test)))\n# Mô hình của bạn phải vượt con số này thì mới có ý nghĩa",
    checklist:[
      "Lập nhóm và phân công vai trò.",
      "Chọn bộ dữ liệu và câu hỏi nghiên cứu.",
      "Xác định baseline và chỉ số đánh giá ngay từ đầu.",
      "Chốt đề cương đồ án (1 trang).",
      "Nhận góp ý từ giảng viên và điều chỉnh.",
    ]
  },
  assignment:{
    title:"Bài tập — Đề cương đồ án cuối khóa (1 trang)",
    desc:"Viết đề cương đồ án gọn trong 1 trang để chuẩn bị cho tuần 11.",
    checklist:[
      "Nêu câu hỏi nghiên cứu rõ ràng.",
      "Mô tả bộ dữ liệu sẽ dùng và vì sao chọn.",
      "Dự kiến quy trình, mô hình, chỉ số đánh giá.",
      "Liệt kê rủi ro/bẫy có thể gặp (kể cả data leakage).",
    ]
  },
  selfcheck:[
    {q:"Data leakage là gì?", opts:["Mất dữ liệu","Thông tin từ test lọt vào huấn luyện","Dữ liệu quá lớn","Lỗi mạng"], a:1, why:"Leakage làm mô hình nhìn thấy 'tương lai', nên điểm test cao giả tạo."},
    {q:"Vì sao chỉ fit scaler trên train?", opts:["Nhanh hơn","Tránh để thông tin test ảnh hưởng train","Bắt buộc của thư viện","Không cần"], a:1, why:"Fit trên toàn bộ khiến tham số chuẩn hóa biết trước test — một dạng leakage."},
    {q:"Điểm test 'quá cao đến mức đáng ngờ' thường gợi ý điều gì?", opts:["Mô hình xuất sắc","Có thể đang data leakage","Dữ liệu quá sạch","Chạy nhanh"], a:1, why:"Điểm test bất thường cao thường là mô hình đã 'nhìn trộm' thông tin test."},
    {q:"Vì sao một mô hình có thể tái tạo sự thiên lệch (bias)?", opts:["Vì nó tự suy nghĩ","Vì nó học từ dữ liệu vốn đã thiên lệch","Vì tốc độ","Vì ngẫu nhiên"], a:1, why:"Mô hình học từ dữ liệu; dữ liệu có thành kiến sẵn sẽ được mô hình học lại và phóng đại."},
    {q:"Pipeline giúp chống data leakage như thế nào?", opts:["Tự fit scaler chỉ trên train của từng fold khi cross-validation","Làm dữ liệu sạch hơn","Tăng tốc","Không liên quan"], a:1, why:"Pipeline gói các bước tiền xử lý + mô hình; trong CV mỗi fold tự fit bước đó chỉ trên phần train của fold."},
    {q:"Baseline (đường cơ sở) dùng để làm gì?", opts:["Làm đẹp code","Cho biết mô hình của bạn có tốt hơn cách đoán đơn giản hay không","Tăng accuracy","Chia dữ liệu"], a:1, why:"Baseline là mô hình ngây thơ nhất (vd đoán đa số); mô hình thật phải vượt nó mới có giá trị."},
  ],
  quiz:[
    {q:"Dấu hiệu nghi ngờ data leakage?", opts:["Accuracy test thấp","Accuracy test quá cao đáng ngờ","Model chạy chậm","Ít feature"], a:1, why:"Điểm cao bất thường thường là mô hình đã 'nhìn trộm' test."},
    {q:"Điểm đồ án chủ yếu dựa vào gì?", opts:["Accuracy đẹp nhất","Cách làm đúng, đánh giá trung thực, lập luận","Chạy nhanh","Model phức tạp"], a:1, why:"Triết lý khóa: quá trình đúng đắn quan trọng hơn con số may mắn."},
    {q:"Bias trong mô hình học máy bắt nguồn từ đâu?", opts:["Dữ liệu huấn luyện có thành kiến sẵn","Máy tính quá nhanh","Thiếu GPU","Code dài"], a:0, why:"Mô hình học từ dữ liệu; dữ liệu thiên lệch → mô hình thiên lệch."},
    {q:"Một câu hỏi nghiên cứu tốt trong đồ án nên thế nào?", opts:["Mơ hồ","Rõ ràng: dự đoán X từ Y","Quá rộng","Không cần"], a:1, why:"Câu hỏi rõ ràng giúp định hướng dữ liệu, mô hình và đánh giá."},
    {q:"Điều gì nên được xác định NGAY TỪ ĐẦU trong một đồ án học máy?", opts:["Chỉ số đánh giá và baseline","Màu sắc biểu đồ","Tên file","Ngôn ngữ code"], a:1, why:"Chốt chỉ số đánh giá và baseline sớm giúp biết mô hình cuối có tốt hơn cách đơn giản nhất không."},
    {q:"Data drift (lệch dữ liệu) là gì?", opts:["Mô hình quá lớn","Dữ liệu thực tế khác dần với dữ liệu lúc huấn luyện","Dữ liệu bị xóa","Tốc độ chạy"], a:1, why:"Khi phân phối dữ liệu thực tế đổi theo thời gian, mô hình xuống cấp — cần theo dõi và huấn luyện lại."},
  ]
},
{
  id:11, title:"Tuần đồ án", sub:"Làm việc nhóm · thuyết trình · tổng kết",
  isProjectWeek:true,
  lesson1:{
    title:"Buổi 1 — Buổi làm việc nhóm có hướng dẫn",
    meta:"Thực hành · office hours · giảng viên gỡ rối từng nhóm",
    theory:[
      "Toàn bộ tuần này dành cho đồ án cuối khóa. Buổi 1 là thời gian làm việc nhóm có giảng viên đi từng nhóm để gỡ rối.",
      "Tập trung hoàn thiện: dữ liệu sạch, mô hình chạy được, thuyết trình rõ ràng.",
      "Mẹo phân bổ thời gian buổi làm việc: dành phần lớn cho việc <i>chốt kết quả trung thực</i> (chạy pipeline đúng, đánh giá bằng cross-validation, kiểm tra data leakage) thay vì mãi tối ưu accuracy. Một con số trung thực đáng giá hơn một con số đẹp nhưng 'gian lận'.",
      "Trước khi giảng viên tới: chạy lại toàn bộ notebook từ đầu (Runtime → Run all) để chắc chắn mọi thứ còn chạy được, và chuẩn bị sẵn câu hỏi cụ thể cho điểm đang bí."
    ],
    concept:"Tuần này không có bài tập và quiz — toàn bộ thời gian dành cho đồ án.",
    checklist:[
      "Hoàn thiện bộ dữ liệu và pipeline.",
      "Chạy các mô hình chính, chốt kết quả.",
      "Chuẩn bị biểu đồ và số liệu cho bài thuyết trình.",
      "Hỏi giảng viên bất kỳ điểm nào đang bí.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Buổi tổng kết & thuyết trình",
    meta:"Thực hành · demo sản phẩm · phản hồi · lộ trình tiếp theo",
    theory:[
      "Các nhóm thuyết trình ngắn và demo sản phẩm, nhận phản hồi. Đây là dịp tổng kết toàn khóa và gợi ý lộ trình học tiếp theo.",
      "Trình bày rõ: vấn đề → dữ liệu → cách làm → kết quả → điều rút ra.",
      "Lộ trình tiếp theo (sau khóa này): nếu thích mô hình bảng → học boosting nâng cao (XGBoost/LightGBM) và feature engineering; nếu thích mạng nơ-ron → học PyTorch/TensorFlow và deep learning; nếu muốn vững nền tảng → học thêm đại số tuyến tính, xác suất, thống kê.",
      "Khi trình bày, đừng chỉ liệt kê số liệu — hãy kể câu chuyện: vấn đề bạn giải quyết, khó khăn gặp phải khi làm sạch dữ liệu, một quyết định mô hình quan trọng và vì sao, và điều bạn sẽ làm khác đi nếu làm lại."
    ],
    concept:"Một bài trình bày tốt kể câu chuyện: vấn đề gì, làm thế nào, học được gì — không chỉ liệt kê số liệu.",
    checklist:[
      "Chuẩn bị slide/notebook demo.",
      "Thuyết trình ngắn trước lớp.",
      "Nhận và ghi lại phản hồi.",
      "Tổng kết: điều học được và bước tiếp theo (deep learning? ML nâng cao?).",
    ]
  },
  assignment:null,
  selfcheck:[
    {q:"Buổi 1 tuần đồ án chủ yếu làm gì?", opts:["Làm việc nhóm, giảng viên gỡ rối từng nhóm","Học lý thuyết mới","Làm quiz","Thi giữa kỳ"], a:0, why:"Tuần 11 dành toàn bộ thời gian cho đồ án; buổi 1 là làm việc nhóm có giảng viên hỗ trợ."},
    {q:"Điểm đồ án cuối khóa chủ yếu dựa vào gì?", opts:["Con số accuracy đẹp nhất","Cách làm đúng, đánh giá trung thực, lập luận","Model phức tạp nhất","Chạy nhanh nhất"], a:1, why:"Triết lý khóa học: quá trình đúng đắn và lập luận quan trọng hơn điểm số may mắn."},
    {q:"Trước khi kết thúc đồ án, nên chuẩn bị gì?", opts:["Chỉ cần code chạy","Biểu đồ, số liệu và bài thuyết trình rõ ràng","Xóa hết code cũ","Không cần chuẩn bị"], a:1, why:"Buổi tổng kết gồm thuyết trình ngắn + demo, nên cần chuẩn bị biểu đồ, số liệu và câu chuyện."},
  ],
  quiz:[]
}
];

/* ===================================================================
   QUIZ TỔNG HỢP + DỮ LIỆU KHÁC
   =================================================================== */
/* Quiz chung dùng cho phần 'Quiz toàn khóa' (nếu cần) — hiện mỗi tuần có quiz riêng. */

const CHEATSHEETS = [
  { title:"Python cơ bản", items:[
    ["Gán biến", "<code>x = 5</code>, <code>name = 'An'</code> — không cần khai báo kiểu"],
    ["In ra màn hình", "<code>print('Xin chào')</code>"],
    ["List", "<code>lst = [1,2,3]</code> · thêm: <code>lst.append(4)</code> · lấy: <code>lst[0]</code> · cắt: <code>lst[1:3]</code>"],
    ["Dict", "<code>d = {'a':1}</code> · lấy: <code>d['a']</code> · thêm: <code>d['b']=2</code>"],
    ["Hàm", "<code>def ten(x): return x+1</code>"],
    ["Vòng lặp", "<code>for i in range(5):</code> · <code>while cond:</code>"],
    ["Điều kiện", "<code>if x > 0: ... elif: ... else: ...</code>"],
  ]},
  { title:"NumPy", items:[
    ["Tạo mảng", "<code>np.array([1,2,3])</code> · <code>np.zeros((2,2))</code> · <code>np.random.rand(3)</code>"],
    ["Kích thước", "<code>arr.shape</code> (số chiều), <code>arr.size</code> (số phần tử)"],
    ["Nhân ma trận", "<code>A @ B</code> (phép nhân ma trận), <code>A * B</code> (nhân từng phần tử)"],
    ["Chuyển vị", "<code>A.T</code>"],
    ["Thống kê", "<code>arr.mean()</code>, <code>arr.std()</code>, <code>arr.sum()</code>, <code>arr.max()</code>"],
  ]},
  { title:"pandas", items:[
    ["Đọc CSV", "<code>df = pd.read_csv('file.csv')</code>"],
    ["Xem nhanh", "<code>df.head()</code>, <code>df.info()</code>, <code>df.shape</code>, <code>df.describe()</code>"],
    ["Chọn cột", "<code>df['col']</code> · nhiều cột: <code>df[['a','b']]</code>"],
    ["Lọc hàng", "<code>df[df['gia'] > 100]</code>"],
    ["Nhóm", "<code>df.groupby('nhom').mean()</code>"],
    ["Giá trị thiếu", "<code>df.isna().sum()</code> · bỏ: <code>df.dropna()</code> · điền: <code>df.fillna(0)</code>"],
    ["Trùng lặp", "<code>df.duplicated()</code> · bỏ: <code>df.drop_duplicates()</code>"],
  ]},
  { title:"matplotlib", items:[
    ["Histogram", "<code>df['col'].hist()</code> · <code>plt.show()</code>"],
    ["Scatter", "<code>plt.scatter(x, y)</code>"],
    ["Tạo figure", "<code>fig, ax = plt.subplots()</code> — kiểm soát tối đa"],
    ["Tùy chỉnh", "<code>plt.xlabel()</code>, <code>plt.ylabel()</code>, <code>plt.title()</code>"],
  ]},
  { title:"scikit-learn", items:[
    ["Chia train/test", "<code>train_test_split(X, y, test_size=0.2)</code>"],
    ["k-NN", "<code>KNeighborsClassifier(n_neighbors=3)</code>"],
    ["Hồi quy tuyến tính", "<code>LinearRegression()</code> — hệ số: <code>.coef_</code>, <code>.intercept_</code>"],
    ["Hồi quy logistic", "<code>LogisticRegression()</code> — xác suất: <code>.predict_proba()</code>"],
    ["Cây & Forest", "<code>DecisionTreeClassifier()</code> · <code>RandomForestClassifier(n_estimators=100)</code>"],
    ["k-means", "<code>KMeans(n_clusters=3)</code> — tâm cụm: <code>.cluster_centers_</code>"],
    ["PCA", "<code>PCA(n_components=2)</code> — phương sai: <code>.explained_variance_ratio_</code>"],
    ["Mạng nơ-ron", "<code>MLPClassifier(hidden_layer_sizes=(64,32))</code>"],
    ["Cross-validation", "<code>cross_val_score(model, X, y, cv=5)</code>"],
    ["Chuẩn hóa", "<code>StandardScaler().fit_transform(X_train)</code>"],
    ["Chỉ số", "<code>accuracy_score</code>, <code>precision_score</code>, <code>recall_score</code>, <code>f1_score</code>, <code>mean_absolute_error</code>, <code>mean_squared_error</code>"],
  ]},
  { title:"Tiền xử lý (Preprocessing)", items:[
    ["Chia train/test", "<code>train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)</code> — stratify giữ tỉ lệ lớp"],
    ["Chuẩn hóa Z-score", "<code>StandardScaler().fit_transform(X_train)</code> — trung bình 0, std 1"],
    ["Chuẩn hóa min-max", "<code>MinMaxScaler().fit_transform(X_train)</code> — về [0,1]"],
    ["Lưu ý scaler", "Chỉ <code>fit</code> trên train, rồi <code>transform</code> cả train &amp; test (tránh data leakage)"],
    ["Gói pipeline", "<code>Pipeline([('sc', StandardScaler()), ('clf', KNeighborsClassifier())])</code> — chống leakage tự động"],
    ["Mã hóa biến phân loại", "<code>pd.get_dummies(df, columns=['gioitinh'])</code> — one-hot encoding"],
  ]},
  { title:"Chọn mô hình (Model selection)", items:[
    ["Cross-validation", "<code>cross_val_score(model, X, y, cv=5)</code> — 5 điểm, lấy <code>.mean()</code>"],
    ["Grid search", "<code>GridSearchCV(model, {'k':[3,5,7]}, cv=5)</code> — <code>.best_params_</code>, <code>.best_score_</code>"],
    ["Baseline phân loại", "<code>DummyClassifier(strategy='most_frequent')</code> — mốc so sánh"],
    ["Feature importance", "<code>model.feature_importances_</code> (cây/forest)"],
    ["Tái lập kết quả", "Đặt <code>random_state=42</code> ở mọi nơi để kết quả ổn định"],
  ]},
];

const GLOSSARY = [
  { term:"Feature (đặc trưng)", def:"Thuộc tính mô tả một mẫu dữ liệu, dùng làm đầu vào cho mô hình (vd: số phòng, diện tích)." },
  { term:"Label (nhãn)", def:"Đáp án/giá trị mục tiêu bạn muốn mô hình dự đoán." },
  { term:"Supervised learning", def:"Học có giám sát: dữ liệu có label, máy học quan hệ input→output." },
  { term:"Unsupervised learning", def:"Học không giám sát: dữ liệu không có label, máy tự tìm cấu trúc (phân cụm, giảm chiều)." },
  { term:"Train set / Test set", def:"Tập dữ liệu để học và tập để kiểm tra. Không bao giờ dùng test khi huấn luyện." },
  { term:"Stratify", def:"Chia dữ liệu giữ nguyên tỉ lệ các lớp — quan trọng với bài toán phân loại mất cân bằng." },
  { term:"k-NN", def:"Thuật toán phân loại: gán nhãn theo k điểm lân cận gần nhất (dựa trên khoảng cách Euclid)." },
  { term:"Loss function", def:"Hàm đo độ sai giữa dự đoán và giá trị thật. Mục tiêu là tối thiểu hóa nó." },
  { term:"Gradient descent", def:"Thuật toán tối ưu: lặp điều chỉnh tham số theo hướng giảm loss, như 'lăn xuống dốc'." },
  { term:"Learning rate", def:"Bước nhảy mỗi lần cập nhật tham số trong gradient descent — quá lớn không hội tụ, quá nhỏ chậm." },
  { term:"Sigmoid", def:"Hàm nén một số bất kỳ vào khoảng (0,1), diễn giải như xác suất trong phân loại nhị phân." },
  { term:"Softmax", def:"Hàm cho ra vector xác suất cho nhiều lớp (tổng = 1), dùng trong phân loại nhiều lớp." },
  { term:"Overfitting", def:"Mô hình khớp quá kỹ dữ liệu train (thuộc lòng) nên dở trên dữ liệu mới." },
  { term:"Underfitting", def:"Mô hình quá đơn giản, không nắm được quy luật của dữ liệu." },
  { term:"Bias–Variance", def:"Cân bằng giữa mô hình quá đơn giản (bias cao) và quá nhạy cảm (variance cao)." },
  { term:"Regularization", def:"Thêm hình phạt vào loss để giữ tham số nhỏ, chống overfitting (L1/L2)." },
  { term:"Cross-validation", def:"Chia dữ liệu nhiều phần, mỗi phần làm test một lần, lấy trung bình để đánh giá ổn định." },
  { term:"Confusion matrix", def:"Bảng so sánh dự đoán với thực tế: TP, FP, TN, FN." },
  { term:"Precision", def:"Trong các dự đoán dương, bao nhiêu phần đúng. = TP/(TP+FP)." },
  { term:"Recall", def:"Trong các điểm thật dương, bắt được bao nhiêu. = TP/(TP+FN)." },
  { term:"F1 score", def:"Trung bình điều hòa của precision và recall, cân bằng cả hai." },
  { term:"Decision tree", def:"Mô hình chia dữ liệu bằng các câu hỏi 'nếu... thì' (if-then rules)." },
  { term:"Random forest", def:"Kết hợp nhiều cây quyết định, lấy đa số phiếu — 'trí tuệ đám đông' (bagging)." },
  { term:"Boosting", def:"Xây cây tuần tự, mỗi cây sau sửa lỗi của cây trước (vd XGBoost, LightGBM)." },
  { term:"Feature importance", def:"Đo mức đóng góp của từng đặc trưng vào quyết định của mô hình (như cây/forest)." },
  { term:"k-means", def:"Thuật toán phân cụm: gom điểm vào k cụm dựa trên khoảng cách tới tâm cụm." },
  { term:"Inertia", def:"Tổng khoảng cách bình phương từ điểm đến tâm cụm — nhỏ nghĩa là cụm co chặt; dùng cho elbow method." },
  { term:"Silhouette score", def:"Đo mức tách biệt giữa các cụm (từ -1 đến 1), gần 1 là cụm rõ ràng." },
  { term:"PCA", def:"Giảm số chiều dữ liệu bằng cách tìm các hướng trải rộng nhất (phương sai lớn nhất)." },
  { term:"Perceptron", def:"Nơ-ron đơn giản: tổng có trọng số đầu vào qua hàm kích hoạt để ra kết quả." },
  { term:"Epoch", def:"Một lượt mạng nơ-ron quét toàn bộ dữ liệu huấn luyện để chỉnh trọng số." },
  { term:"Hyperparameter (siêu tham số)", def:"Nút vặn do ta chỉnh trước khi huấn luyện (k, alpha, n_estimators...), model không tự học." },
  { term:"Feature engineering", def:"Tạo đặc trưng mới từ đặc trưng cũ (vd diện tích = dài × rộng) để giúp mô hình học tốt hơn." },
  { term:"Data leakage", def:"Thông tin từ tương lai/test lọt vào huấn luyện, khiến điểm đánh giá sai lệch." },
  { term:"Baseline", def:"Mô hình ngây thơ đơn giản nhất (vd đoán đa số) để làm mốc so sánh cho mô hình thật." },
  { term:"Data drift", def:"Dữ liệu thực tế đổi dần so với lúc huấn luyện, khiến mô hình xuống cấp theo thời gian." },
];

const PROJECTS = [
  { title:"Mini-project 1 — Hồi quy nhà đất", week:4, weight:"35% (mini-project chung)", focus:"Hồi quy",
    desc:"Tự xây mô hình hồi quy trên dữ liệu nhà đất. Đánh giá bằng MAE/RMSE, giải thích yếu tố ảnh hưởng giá.",
    datasets:[
      { name:"California Housing (scikit-learn)", url:"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.fetch_california_housing.html" },
      { name:"Boston Housing (Kaggle)", url:"https://www.kaggle.com/datasets/fedesoriano/california-housing-prices" },
      { name:"House Prices — Advanced Regression (Kaggle)", url:"https://www.kaggle.com/competitions/house-prices-advanced-regression-techniques" },
    ],
    checklist:[
      "Chọn bộ dữ liệu giá nhà.", "Làm sạch dữ liệu (thiếu, trùng, outlier).",
      "Chia train/test, huấn luyện hồi quy tuyến tính.",
      "Đánh giá MAE, RMSE.", "Viết thuyết minh ngắn."
    ]},
  { title:"Mini-project 2 — So sánh mô hình", week:7, weight:"35% (mini-project chung)", focus:"Ensemble & so sánh",
    desc:"So sánh ít nhất 3 mô hình trên cùng bài toán, bảo vệ lựa chọn bằng số liệu.",
    datasets:[
      { name:"Iris (scikit-learn)", url:"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_iris.html" },
      { name:"Titanic (Kaggle)", url:"https://www.kaggle.com/competitions/titanic" },
      { name:"Wine Quality (UCI)", url:"https://archive.ics.uci.edu/dataset/186/wine+quality" },
      { name:"Heart Disease (UCI)", url:"https://archive.ics.uci.edu/dataset/45/heart+disease" },
    ],
    checklist:[
      "Chọn bài toán và dữ liệu.", "Pipeline chung (chia, chuẩn hóa).",
      "So sánh ≥3 mô hình cùng metric.", "Chọn và bảo vệ model tốt nhất.",
      "Viết thuyết minh kèm notebook."
    ]},
  { title:"Mini-project 3 — Tự chọn", week:9, weight:"35% (mini-project chung)", focus:"Mạng nơ-ron / phân cụm",
    desc:"Mở rộng mạng nhận dạng chữ số HOẶC nghiên cứu phân cụm.",
    datasets:[
      { name:"MNIST (scikit-learn)", url:"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.load_digits.html" },
      { name:"MNIST gốc (Kaggle)", url:"https://www.kaggle.com/competitions/digit-recognizer" },
      { name:"Mall Customers (Kaggle)", url:"https://www.kaggle.com/datasets/vjchoudhary7/customer-segmentation-tutorial-in-python" },
      { name:"Wholesale Customers (UCI)", url:"https://archive.ics.uci.edu/dataset/292/wholesale+customers" },
    ],
    checklist:[
      "Chọn hướng (mạng nơ-ron hoặc phân cụm).",
      "Thực hiện: dữ liệu, mô hình, đánh giá.",
      "Thử đổi kiến trúc/siêu tham số.", "Viết thuyết minh."
    ]},
  { title:"Đồ án cuối khóa (nhóm)", week:11, weight:"40%", focus:"Đồ án trọn vẹn",
    desc:"Dự án nhóm trên bộ dữ liệu tự chọn, thực hiện tuần 11, thuyết trình buổi cuối.",
    datasets:[
      { name:"Kaggle Datasets (tìm kiếm theo chủ đề)", url:"https://www.kaggle.com/datasets" },
      { name:"UCI Machine Learning Repository", url:"https://archive.ics.uci.edu/" },
      { name:"scikit-learn built-in datasets", url:"https://scikit-learn.org/stable/datasets.html" },
    ],
    checklist:[
      "Lập nhóm, chọn dữ liệu & câu hỏi nghiên cứu.",
      "Chốt đề cương (1 trang).",
      "Hoàn thiện dữ liệu & pipeline.",
      "Chạy mô hình, chốt kết quả.",
      "Thuyết trình & demo sản phẩm."
    ]},
];

export { COURSE, WEEKS, CHEATSHEETS, GLOSSARY, PROJECTS };
