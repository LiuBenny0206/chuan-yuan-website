// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* 導覽列 */} 
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* 左側品牌區 */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-[#1E3A5F] bg-[#1E3A5F] px-3 py-1">
              <span className="text-s font-semibold tracking-[0.18em] text-white">
                川原企業有限公司
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-[#1E3A5F]">
              </span>
              <span className="text-[11px] text-gray-500">
                Chuan Yuan Co., Ltd.
              </span>
            </div>
          </a>
          {/* 右側導覽 + CTA */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <a href="#about" className="hover:text-[#1E3A5F]">
                關於川原
              </a>
              <a href="#services" className="hover:text-[#1E3A5F]">
                專業項目
              </a>
              <a href="#products" className="hover:text-[#1E3A5F]">
                三種油品
              </a>
              <a href="#fleet" className="hover:text-[#1E3A5F]">
                油罐車與安全
              </a>
              <a href="#customers" className="hover:text-[#1E3A5F]">
                服務對象
              </a>
              <a href="#contact" className="hover:text-[#1E3A5F]">
                聯絡我們
              </a>
            </nav>

            {/* 電話 CTA（桌機顯示） */}
            <a
              href="tel:0422712134"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#1E3A5F] px-4 py-2 text-xs font-semibold text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition"
            >
              <span>📞 立即來電</span>
            </a>
          </div>
        </div>
      </header>
      {/* Hero：左文案 + 右大圖 */}
      <section className="bg-[#1E3A5F] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 space-y-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* 左側文案 */}
            <div className="space-y-6">
              <p className="text-xs tracking-[0.3em] text-blue-200">
                品質・安全・服務第一的油品運輸
              </p>
              <h1 className="text-3xl md:text-4xl font-bold leading-snug">
                專業油品運輸
                <br />
                為您守護每一趟能源配送
              </h1>
              <p className="text-sm leading-relaxed text-blue-100">
                川原企業有限公司專精於鍋爐燃料油、低硫燃料油及柴油配送，
                成立三十餘年，以穩定車隊管理與確實作業流程，
                為中部地區工業客戶提供值得信賴的油品運輸服務。
              </p>
              <a
                href="#contact"
                className="inline-block rounded-lg bg-[#FACC15] px-6 py-3 text-sm font-semibold text-[#1E3A5F] hover:bg-yellow-300"
              >
                立即聯絡川原企業
              </a>

              {/* 小公司資訊列 */}
              <div className="mt-4 text-xs text-blue-100/80 space-y-1">
                <p>聯絡人：許小姐｜電話：04-22712134／04-22712133</p>
                <p>地址：台中市太平區大里工業區工業15路50號</p>
              </div>
            </div>

            {/* 右側主視覺圖片：油罐車 */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl border border-blue-900/40">
                <Image
                  src="/chuan-yuan-front-door.jpg"
                  alt="川原企業油罐車"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* 角落小標籤 */}
              <div className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[11px]">
                川原企業
              </div>
            </div>
          </div>

          {/* 數字亮點條：補版面、順便加說服力 */}
          <div className="grid gap-4 md:grid-cols-3 text-xs md:text-sm">
            <div className="flex items-center gap-3 rounded-xl bg-blue-900/40 px-4 py-3">
              <div className="text-lg font-bold text-[#FACC15]">30+</div>
              <div className="text-blue-100">
                <div className="font-semibold">年油品運輸經驗</div>
                <div className="opacity-80">深耕中部工業用油市場</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-900/40 px-4 py-3">
              <div className="text-lg font-bold text-[#FACC15]">24H</div>
              <div className="text-blue-100">
                <div className="font-semibold">GPS 即時監控車隊</div>
                <div className="opacity-80">掌握車輛位置與行駛紀錄</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-900/40 px-4 py-3">
              <div className="text-lg font-bold text-[#FACC15]">自有</div>
              <div className="text-blue-100">
                <div className="font-semibold">專業油罐車車隊</div>
                <div className="opacity-80">統一管理、統一標準作業流程</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  {/* 關於川原 ＋ 三大堅持＋關鍵資訊卡 */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-[1.4fr_minmax(0,1fr)] items-start"
      >
        {/* 左側：公司介紹 + 三大堅持 */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#1E3A5F]/70">
              公司簡介
            </p>
            <h2 className="text-2xl font-bold text-[#1E3A5F]">關於川原企業</h2>
          </div>

          <p className="text-sm leading-relaxed">
            川原企業秉持「品質、安全、服務第一」的精神，深耕中部地區油品配送市場三十餘年，
            服務範圍涵蓋鍋爐用油、工業燃料油與柴油等。多數客戶為長期合作的工業用戶，
            以穩定供油與確實服務累積信任。
          </p>
          <p className="text-sm leading-relaxed">
            我們了解能源供應的穩定性對工廠營運至關重要，因此堅持自有油罐車車隊，
            並導入 GPS 衛星定位與嚴謹行車管理制度，確保每一趟配送都安全無虞。
          </p>
          <p className="text-sm leading-relaxed">
            透過事前溝通、排程協調與現場經驗，我們協助客戶在「成本、穩定、環保」之間取得平衡，
            成為值得信賴的長期供油夥伴。
          </p>

          {/* 三大堅持 */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-semibold text-[#1E3A5F]/80">品質</p>
              <p className="mt-1 text-xs text-gray-600">
                油品來源穩定，配合合格供應商與完善儲槽管理。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-semibold text-[#1E3A5F]/80">安全</p>
              <p className="mt-1 text-xs text-gray-600">
                自有油罐車＋GPS 衛星管理，落實行車紀錄與教育訓練。
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-semibold text-[#1E3A5F]/80">服務</p>
              <p className="mt-1 text-xs text-gray-600">
                彈性配送時段與排程協調，配合客戶產線與庫存需求。
              </p>
            </div>
          </div>
        </div>
          {/* 右側：企業數據亮點 Fact Sheet */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md space-y-6">

            <h3 className="text-base font-bold text-[#1E3A5F]">
              川原企業關鍵數據
            </h3>

            {/* 四大數字亮點區 */}
            <div className="grid grid-cols-2 gap-4 text-center">
              {/* 1 - 經驗 */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xl font-bold text-[#1E3A5F]">30+</p>
                <p className="text-xs text-gray-600 mt-1">年油品運輸經驗</p>
              </div>

              {/* 2 - 車隊 */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xl font-bold text-[#1E3A5F]">2 台</p>
                <p className="text-xs text-gray-600 mt-1">自有油罐車</p>
              </div>

              {/* 3 - 配送量 */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xl font-bold text-[#1E3A5F]">50 趟/月</p>
                <p className="text-xs text-gray-600 mt-1">平均配送趟次</p>
              </div>

              {/* 4 - 客戶數 */}
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <p className="text-xl font-bold text-[#1E3A5F]">20 家</p>
                <p className="text-xs text-gray-600 mt-1">長期合作工廠</p>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* 補充資訊（更像企業） */}
            <div className="space-y-2 text-xs text-gray-700 leading-relaxed">
              <p>・以中部地區工業用戶為主要服務對象</p>
              <p>・配合客戶排程提供穩定與彈性供油</p>
              <p>・重視溝通、安全與現場需求配合度</p>
            </div>
          </div>
      </section>

    {/* 專業項目 */}
    <section id="services" className="bg-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-10">
        {/* 標題區 */}
        <div className="space-y-3">
          <div className="text-xs font-semibold tracking-[0.25em] text-[#1E3A5F]/70">
            SERVICE ITEMS
          </div>
          <h2 className="text-2xl font-bold text-[#1E3A5F]">專業油品配送項目</h2>
          <p className="mt-1 text-sm text-gray-600">
            依照鍋爐型式、設備條件與現場使用習慣，提供最適合的油品與配送方式。
          </p>

          {/* 服務範圍 Tag 列 */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs">
            <span className="rounded-full border border-[#1E3A5F]/20 bg-white/80 px-3 py-1 text-[#1E3A5F]">
              工業鍋爐與熱能設備
            </span>
            <span className="rounded-full border border-[#1E3A5F]/20 bg-white/80 px-3 py-1 text-[#1E3A5F]">
              製程加熱與燃燒系統
            </span>
            <span className="rounded-full border border-[#1E3A5F]/20 bg-white/80 px-3 py-1 text-[#1E3A5F]">
              工程車輛與工地發電機
            </span>
          </div>
        </div>

        {/* 三個服務卡片 */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* 卡片一 */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1E3A5F] via-[#1E3A5F] to-[#FACC15]" />
            <p className="text-[11px] font-semibold text-[#1E3A5F]/70">
              SERVICE 01
            </p>
            <h3 className="mt-1 font-semibold text-[#1E3A5F]">
              低硫燃料油運輸
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              適用於鍋爐、工業設備及需符合環保規範之燃燒系統，兼顧燃燒效率與排放要求。
            </p>
            <ul className="mt-3 space-y-1 text-xs text-gray-500">
              <li>・配合環保法規之低硫規格</li>
              <li>・適用多數工業加熱設備</li>
              <li>・可搭配現場用油建議</li>
            </ul>
          </div>

          {/* 卡片二 */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1E3A5F] via-[#2563EB] to-[#FACC15]" />
            <p className="text-[11px] font-semibold text-[#1E3A5F]/70">
              SERVICE 02
            </p>
            <h3 className="mt-1 font-semibold text-[#1E3A5F]">
              鍋爐燃料油配送
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              專業供應鍋爐用燃料油，搭配排程規劃與庫存提醒，協助產線穩定運轉。
            </p>
            <ul className="mt-3 space-y-1 text-xs text-gray-500">
              <li>・可安排定期固定配送</li>
              <li>・協助估算安全庫存量</li>
              <li>・支援緊急補貨需求</li>
            </ul>
          </div>

          {/* 卡片三 */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1E3A5F] via-[#0EA5E9] to-[#FACC15]" />
            <p className="text-[11px] font-semibold text-[#1E3A5F]/70">
              SERVICE 03
            </p>
            <h3 className="mt-1 font-semibold text-[#1E3A5F]">
              超級柴油與車隊用油
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              適用於工地、工程車輛及發電設備，可依現場狀況安排彈性供油。
            </p>
            <ul className="mt-3 space-y-1 text-xs text-gray-500">
              <li>・支援工地臨時與短期工程</li>
              <li>・可依車隊用量調整配送頻率</li>
              <li>・適合作為備援用油方案</li>
            </ul>
          </div>
        </div>
      </div>
    </section>


    {/* 三種油品（能源公司級橫列資訊風格） */}
    <section id="products" className="mx-auto max-w-6xl px-4 py-16 space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.25em] text-[#1E3A5F]/70">
          OUR PRODUCTS
        </p>
        <h2 className="text-2xl font-bold text-[#1E3A5F]">三大油品種類</h2>
        <p className="text-sm text-gray-600">
          依據不同設備、溫度、燃燒需求與排放規範，選擇最適合的油品種類。
        </p>
      </div>

      <div className="space-y-6">
        {/* 鍋爐油 */}
        <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="h-full w-2 rounded-lg bg-[#1E3A5F]" />
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-[#1E3A5F]">鍋爐油（甲種低硫燃料油）</h3>
            <p className="text-sm text-gray-600">
              適用各式工業鍋爐及熱能設備，燃燒穩定、適合作為長期主力燃料。
            </p>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li>・燃燒效率佳、設備相容性高</li>
              <li>・適用於長時間運轉之產線設備</li>
              <li>・是多數工廠主力使用油品</li>
            </ul>
          </div>
        </div>

        {/* 燃料油 */}
        <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="h-full w-2 rounded-lg bg-[#2563EB]" />
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-[#1E3A5F]">燃料油（低硫燃料油）</h3>
            <p className="text-sm text-gray-600">
              兼顧燃燒效率與排放標準，適用多種工業加熱與製程設備。
            </p>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li>・符合環保要求之低硫規格</li>
              <li>・適合高溫加工、焚化、製程設備</li>
              <li>・兼具穩定性及經濟性</li>
            </ul>
          </div>
        </div>

        {/* 柴油 */}
        <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="h-full w-2 rounded-lg bg-[#0EA5E9]" />
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-[#1E3A5F]">柴油（超級柴油）</h3>
            <p className="text-sm text-gray-600">
              用於車隊、工程機具與發電機組，適合需機動調度之用油需求。
            </p>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li>・適用工地、車隊、臨時性工程</li>
              <li>・燃燒乾淨、維持機具效率</li>
              <li>・支援短期與長期配送需求</li>
            </ul>
          </div>
        </div>
      </div>
    </section>


      {/* 車隊與安全：兩台車照片 */}
      <section id="fleet" className="bg-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-16 space-y-8">
          <h2 className="text-2xl font-bold text-[#1E3A5F]">
            油罐車車隊與安全管理
          </h2>
          <p className="text-sm leading-relaxed">
            川原企業油罐車全面導入 GPS 衛星管理系統，即時掌握車輛動向與行車狀態，
            確保油品安全準時送達；並透過完整的車隊管理制度與教育訓練，
            讓每位司機都能在安全與效率之間取得最佳平衡。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/chuan-yuan-car1.jpg"
                alt="川原企業油罐車一"
                width={700}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/chuan-yuan-car2.jpg"
                alt="川原企業油罐車二"
                width={700}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

 {/* 服務對象 ＋ 合作廠商 Logo */}
      <section id="customers" className="bg-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-16 space-y-10">
    {/* 服務對象（產業別） — 美化升級版 */}
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold tracking-[0.25em] text-[#1E3A5F]/70">
          INDUSTRIES WE SERVE
        </p>
        <h2 className="text-2xl font-bold text-[#1E3A5F] mt-1">我們的服務對象</h2>
      </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {/* 產業標籤 */}
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-lg">🏭</span>
              <span className="text-sm text-gray-700">食品工廠</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-lg">⚙️</span>
              <span className="text-sm text-gray-700">橡膠與塑膠產業</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-lg">🧵</span>
              <span className="text-sm text-gray-700">紡織與染整業</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-lg">📄</span>
              <span className="text-sm text-gray-700">造紙與紙品工廠</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-lg">🔥</span>
              <span className="text-sm text-gray-700">工業鍋爐用戶</span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-lg">🏢</span>
              <span className="text-sm text-gray-700">長期供油企業／其他工業用戶</span>
            </div>
          </div>
        </div>
          {/* 主要合作廠商（Logo 區） */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#1E3A5F]">
              主要合作廠商與企業
            </h3>
            <p className="text-sm text-gray-600">
              以下為部分長期合作之客戶：
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {/* 每一個客戶 Logo 卡片：之後把檔名跟公司名稱改掉即可 */}

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white border border-gray-300 shadow-sm overflow-hidden">
                  <Image
                    src="/client5.png" // ← 之後換成真實 Logo 檔案路徑
                    alt="合作廠商一 Logo"
                    width={80}
                    height={80}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <p className="text-xs text-gray-700">台中慈濟醫院</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white border border-gray-300 shadow-sm overflow-hidden">
                  <Image
                    src="/client2.jpg"
                    alt="合作廠商二 Logo"
                    width={80}
                    height={80}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <p className="text-xs text-gray-700">海洋委員會海巡署</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white border border-gray-300 shadow-sm overflow-hidden">
                  <Image
                    src="/client3.png"
                    alt="合作廠商三 Logo"
                    width={80}
                    height={80}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <p className="text-xs text-gray-700">臺中榮民總醫院</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white border border-gray-300 shadow-sm overflow-hidden">
                  <Image
                    src="/client7.jpg"
                    alt="合作廠商四 Logo"
                    width={80}
                    height={80}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <p className="text-xs text-gray-700">中國醫藥學院</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* 聯絡我們 */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        {/* 標題 */}
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#1E3A5F]/70">
            CONTACT US
          </p>
          <h2 className="text-2xl font-bold text-[#1E3A5F]">聯絡我們</h2>
        </div>

        {/* 主要內容：左資訊卡 + 右地圖 */}
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">

          {/* 左側聯絡資訊卡 */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
            <div className="space-y-4 text-sm text-gray-700">

              <p className="flex items-center gap-2">
                <span className="text-lg">👤</span>
                <span>聯絡人：許小姐</span>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <span>電話：04-22712133</span>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-lg">📠</span>
                <span>傳真：04-22712132</span>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <span>地址：台中市太平區大里工業區工業15路50號</span>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-lg">✉️</span>
                <span>Email：asusliu0412@yahoo.com.tw</span>
              </p>
            </div>

            {/* Google Map 按鈕（備用，可留可刪） */}
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=台中市太平區大里工業區工業15路50號"
                target="_blank"
                className="inline-block rounded-lg bg-[#1E3A5F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#254772]"
              >
                查看地圖（Google Maps）
              </a>
            </div>
          </div>

          {/* 右側 Google Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[360px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.910449726024!2d120.70980433181869!3d24.104644466427168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469239e92e2490b%3A0xd78d87ffb1696be2!2z5bed5Y6f5LyB5qWt5pyJ6ZmQ5YWs5Y-4IC0g5rK55ZOB6YGL6Ly4LemFjemAgS3ku6PpgYso6Y2L54iQ5rK544CB54eD5paZ5rK544CB5p-05rK5KQ!5e0!3m2!1szh-TW!2stw!4v1765433888472!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} 川原企業有限公司 Chuan Yuan Co., Ltd. All
        rights reserved.
      </footer>
    </main>
  );
}
